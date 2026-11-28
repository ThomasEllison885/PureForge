// apps/table/auth.ts
var API = location.hostname.endsWith("pureforge.dev") ? "https://meridian-api.pureforge.dev" : "http://localhost:8787";
var ApiError = class extends Error {
  constructor(status2, message) {
    super(message);
    this.status = status2;
  }
};
var slowNotice = null;
function onSlow(listener) {
  slowNotice = listener;
}
async function api(path, body) {
  const timer = window.setTimeout(() => slowNotice?.(true), 3e3);
  try {
    const response = await fetch(`${API}${path}`, {
      method: body === void 0 ? "GET" : "POST",
      credentials: "include",
      headers: body === void 0 ? {} : { "content-type": "application/json" },
      body: body === void 0 ? void 0 : JSON.stringify(body)
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new ApiError(response.status, data.error ?? "Something went wrong.");
    return data;
  } catch (err) {
    if (err instanceof ApiError) throw err;
    throw new ApiError(0, "Can't reach the Meridian server. Check your connection and try again.");
  } finally {
    window.clearTimeout(timer);
    slowNotice?.(false);
  }
}
async function currentUser() {
  try {
    return (await api("/auth/me")).user;
  } catch (err) {
    if (err instanceof ApiError && err.status === 401) return null;
    throw err;
  }
}
var signIn = (name, password) => api("/auth/login", { name, password }).then((r) => r.user);
var join = (code, name, password) => api("/auth/join", { code, name, password }).then((r) => r.user);
var redeemReset = (code, password) => api("/auth/reset", { code, password }).then((r) => r.user);
var esc = (value) => value.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch] ?? ch);
function signInGate(host) {
  return new Promise((resolve) => {
    let tab = new URLSearchParams(location.search).has("invite") ? "join" : "signin";
    let message = "";
    let busy = false;
    let slow = false;
    const invite = new URLSearchParams(location.search).get("invite") ?? "";
    const values = { "a-code": invite };
    const keep = () => host.querySelectorAll("input").forEach((input) => values[input.id] = input.value);
    onSlow((s) => {
      slow = s;
      draw2();
    });
    function field(id, label, type, auto) {
      return `<label class="field" for="${id}"><span>${label}</span><input id="${id}" name="${id}" type="${type}" autocomplete="${auto}" value="${esc(values[id] ?? "")}" ${type === "password" ? 'minlength="8"' : ""} ${busy ? "readonly" : ""} required /></label>`;
    }
    function draw2(fresh2 = false) {
      if (!fresh2) keep();
      const body = tab === "signin" ? `${field("a-name", "Name", "text", "username")}${field("a-pass", "Password", "password", "current-password")}<button class="brass big" type="submit" ${busy ? "disabled" : ""}>Sign in</button>` : tab === "join" ? `${field("a-code", "Invite code", "text", "off")}${field("a-name", "Pick a display name", "text", "username")}${field("a-pass", "Pick a password (8 or more characters)", "password", "new-password")}<button class="brass big" type="submit" ${busy ? "disabled" : ""}>Join Meridian</button>` : `${field("a-code", "Reset code from the admin", "text", "off")}${field("a-pass", "New password (8 or more characters)", "password", "new-password")}<button class="brass big" type="submit" ${busy ? "disabled" : ""}>Set new password</button>`;
      host.hidden = false;
      host.innerHTML = `<section class="cover-card auth-card" style="--accent:#c9a44c">
        <div class="cover-ship" aria-hidden="true">\u2693</div>
        <p class="kicker">Set 1 \xB7 First Landing</p>
        <h2>Meridian</h2>
        <div class="auth-tabs" role="tablist">
          <button type="button" role="tab" aria-selected="${tab === "signin"}" data-tab="signin">Sign in</button>
          <button type="button" role="tab" aria-selected="${tab === "join"}" data-tab="join">I have an invite</button>
          <button type="button" role="tab" aria-selected="${tab === "reset"}" data-tab="reset">Reset password</button>
        </div>
        <form class="auth-form" novalidate>${body}</form>
        ${message ? `<p class="alert" role="alert">${esc(message)}</p>` : ""}
        ${slow ? `<p class="muted small">Waking the server. The first sign-in of the day can take up to a minute.</p>` : ""}
        <p class="muted small">Meridian is invite-only. Ask the admin for a code.</p>
      </section>`;
      const first = Array.from(host.querySelectorAll("input")).find((input) => !input.value) ?? host.querySelector("input");
      if (!busy && !message) first?.focus();
    }
    host.addEventListener("click", (event) => {
      const target = event.target instanceof Element ? event.target.closest("[data-tab]") : null;
      if (!target || busy) return;
      keep();
      tab = target.dataset.tab;
      message = "";
      draw2();
    });
    host.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (busy) return;
      keep();
      const value = (id) => values[id] ?? "";
      busy = true;
      message = "";
      draw2();
      try {
        const user = tab === "signin" ? await signIn(value("a-name"), value("a-pass")) : tab === "join" ? await join(value("a-code"), value("a-name"), value("a-pass")) : await redeemReset(value("a-code"), value("a-pass"));
        host.hidden = true;
        host.innerHTML = "";
        if (invite) history.replaceState(null, "", location.pathname);
        resolve(user);
      } catch (err) {
        message = err instanceof Error ? err.message : String(err);
        busy = false;
        keep();
        delete values["a-pass"];
        draw2(true);
      }
    });
    draw2();
  });
}

// apps/table/admin.ts
var root = document.getElementById("admin");
var cover = document.getElementById("cover");
var esc2 = (v) => v.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch] ?? ch);
var day = (iso) => iso ? new Date(iso).toLocaleDateString(void 0, { month: "short", day: "numeric", year: "numeric" }) : "";
var gameUrl = new URL("./", location.href).href;
var invites = [];
var players = [];
var fresh = null;
var error = "";
function status(i) {
  if (i.usedBy) return `Used by ${esc2(i.usedBy)}`;
  if (i.revoked) return "Revoked";
  if (i.expiresAt && new Date(i.expiresAt).getTime() < Date.now()) return "Expired";
  return `<b class="open">Open</b>${i.expiresAt ? ` until ${day(i.expiresAt)}` : ""}`;
}
function draw() {
  root.innerHTML = `
    <section class="panel">
      <h2>New invite</h2>
      <form id="make" class="row-form">
        <label class="field"><span>Note (who it's for)</span><input name="note" maxlength="80" placeholder="for Kyle" /></label>
        <label class="field small"><span>Expires in days (blank = never)</span><input name="days" type="number" min="1" max="365" inputmode="numeric" /></label>
        <button class="brass" type="submit">Make code</button>
      </form>
      ${fresh ? `<div class="fresh"><p>${esc2(fresh.label)}</p><code>${esc2(fresh.code)}</code>
        ${fresh.code.startsWith("MRD") ? `<p class="small muted">Send this link: <span class="link">${esc2(`${gameUrl}?invite=${fresh.code}`)}</span></p>
        <button class="chip" data-copy="${esc2(`${gameUrl}?invite=${fresh.code}`)}">Copy link</button>` : `<button class="chip" data-copy="${esc2(fresh.code)}">Copy code</button>`}</div>` : ""}
      ${error ? `<p class="alert">${esc2(error)}</p>` : ""}
    </section>
    <section class="panel">
      <h2>Invite codes</h2>
      <table><thead><tr><th>Code</th><th>Note</th><th>Status</th><th>Made</th><th></th></tr></thead><tbody>
      ${invites.map((i) => `<tr><td><code>${esc2(i.code)}</code></td><td>${esc2(i.note)}</td><td>${status(i)}</td><td>${day(i.createdAt)}</td>
        <td>${!i.usedBy && !i.revoked ? `<button class="chip danger" data-revoke="${esc2(i.code)}">Revoke</button>` : ""}</td></tr>`).join("") || `<tr><td colspan="5" class="muted">No codes yet.</td></tr>`}
      </tbody></table>
    </section>
    <section class="panel">
      <h2>Players</h2>
      <table><thead><tr><th>Name</th><th>Joined</th><th>Status</th><th></th></tr></thead><tbody>
      ${players.map((p) => `<tr><td>${esc2(p.name)}${p.isAdmin ? ' <span class="tag">admin</span>' : ""}</td><td>${day(p.createdAt)}</td><td>${p.disabled ? "Turned off" : "Active"}</td>
        <td class="actions">${p.isAdmin ? "" : `<button class="chip" data-reset="${p.id}">Reset code</button><button class="chip ${p.disabled ? "" : "danger"}" data-disable="${p.id}" data-to="${!p.disabled}">${p.disabled ? "Turn on" : "Turn off"}</button>`}</td></tr>`).join("")}
      </tbody></table>
    </section>`;
}
async function load() {
  [invites, players] = await Promise.all([
    api("/admin/invites").then((r) => r.invites),
    api("/admin/users").then((r) => r.users)
  ]);
  draw();
}
async function guarded(work) {
  error = "";
  try {
    await work();
  } catch (err) {
    error = err instanceof Error ? err.message : String(err);
  }
  await load().catch(() => draw());
}
root.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  void guarded(async () => {
    const days = Number(data.get("days") || 0);
    const made = await api("/admin/invites", { note: String(data.get("note") ?? ""), expiresInDays: days || void 0 });
    fresh = { code: made.invite.code, label: `New invite${data.get("note") ? ` ${String(data.get("note"))}` : ""}:` };
  });
});
root.addEventListener("click", (event) => {
  const el = event.target instanceof Element ? event.target.closest("[data-revoke], [data-reset], [data-disable], [data-copy]") : null;
  if (!el) return;
  if (el.dataset.copy) {
    void navigator.clipboard.writeText(el.dataset.copy).then(() => el.textContent = "Copied");
    return;
  }
  if (el.dataset.revoke) {
    if (!confirm(`Revoke ${el.dataset.revoke}? Nobody will be able to use it.`)) return;
    void guarded(() => api("/admin/invites/revoke", { code: el.dataset.revoke }).then(() => void 0));
  }
  if (el.dataset.reset) {
    const name = players.find((p) => p.id === Number(el.dataset.reset))?.name ?? "this player";
    void guarded(async () => {
      const made = await api("/admin/users/reset", { userId: Number(el.dataset.reset) });
      fresh = { code: made.reset.code, label: `One-time reset code for ${name} (works for 48 hours). They enter it on the sign-in screen under Reset password:` };
    });
  }
  if (el.dataset.disable) {
    const off = el.dataset.to === "true";
    const name = players.find((p) => p.id === Number(el.dataset.disable))?.name ?? "this player";
    if (off && !confirm(`Turn off ${name}'s account? They are signed out and can't sign in until you turn it back on.`)) return;
    void guarded(() => api("/admin/users/disable", { userId: Number(el.dataset.disable), disabled: off }).then(() => void 0));
  }
});
async function start() {
  let user = await currentUser().catch(() => null);
  if (!user) user = await signInGate(cover);
  if (!user.isAdmin) {
    root.innerHTML = `<section class="panel"><p>Only the admin can see this page.</p><p><a href="./">Back to the game</a></p></section>`;
    return;
  }
  document.getElementById("who").textContent = user.name;
  await load();
}
void start();

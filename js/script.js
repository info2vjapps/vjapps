/* ===== EDIT THIS BLOCK ===== */
const CONFIG = {
  // Form service URL, e.g. "https://formspree.io/f/xxxxxxx". Leave "" to use the email fallback.
  formEndpoint: "",
  // Enquiry address. Taken from your Google Play support email: confirm it is the one you want public.
  email: "contact2jayu@gmail.com",
  phone: "",
  social: [
    { label: "Google Play", url: "https://play.google.com/store/apps/dev?id=7644735129592386677" },
    { label: "Developer website", url: "https://info2vjapps.github.io" }
  ],
  privacyUrl: "#work"
};

// Facts shown under the hero. Copied from the Google Play listings; update when they change.
const FACTS = [
  ["4", "apps published on Google Play"],
  ["500K+", "downloads of Heart touching Messages"],
  ["4.9", "rating for Greenboard: Draw & Learn"],
  ["Anand", "Gujarat, India"]
];

const IMG = "https://play-lh.googleusercontent.com/";
// Real apps. Add a new one by copying an entry. shots: screenshot ids from the Play listing.
const APPS = [
  { name: "EduTots: All in one kids edu", cat: "Kids education", tile: "ABCs, math, drawing, tracing",
    desc: "A playful learning app for children, with ABCs, maths, drawing and tracing together in one place.",
    icon: "uYSlRG_CWqxLoWlSH38wAX06_MlgXdxOMEzVSuQDOIcog7gPI4A1Ri0YhoC8AZlKKQRahEWKj1k3e_3g_nwU5OE",
    shots: ["UDfDwrr_5zQtggE4Yr9knwJDVgsqydaAvMav3E-Ecn1V-6zeS5ChVoildeQHUGab5l-FLGh_c8IrEDVQJXTDIA", "o3owEcs3ZiN587mEYxfhW4AQMekPGOSON-F214TLzpvpe2qUMTJt0XBlJvKpk2KhMTkLxNQfa9dk2ES0kYnvuQ", "CEpX5z4XHB4oySg_qlNwnoN926mubLS7s4g1vpDRRSqR-_gdqH6YOO19RXfjwPHPTPCL8HsqDBrqkxHsKGMkdA"],
    facts: ["Rated for 3+", "10+ downloads"], play: "https://play.google.com/store/apps/details?id=com.vjapps.edutots", privacy: "" },
  { name: "Greenboard: Draw & Learn", cat: "Kids education", tile: "4.9 rating on Google Play",
    desc: "A digital greenboard where early learners trace letters and numbers, draw, and play tic-tac-toe on one distraction-free screen.",
    icon: "G54gFMtX1LmU3b4iNIvrv6mSr_fcbL4Vz5aBT-rUZ3zurcLAn1x51Fc6MAXj-dktAVSRHlKQ0ARM8i5_37af0i4",
    shots: ["-4XbyGxIVAjeDzRy3oIEO-v40Wy3eqXuh8Dbr57ISm_Cipk2hAIqslqo0kHHJGYCPg2luONxhCxAgfcjTCGMA-k", "9Qi9T9HKi9ByyCj704HRFmI56lvUkGbKtXX_jALmW2q91p5PWvK5XvRIEOrWk_rrjUNlr9bMqxkNWuuIPhJC8Q", "ypawmABEvJflJyCWNWVRaHIo6YYUVEF3Fie_yC_V1v7uY9R_5uOACgZOsQLIrOC3zp9Swe7viV0_t4yFgeO1"],
    facts: ["4.9 from 7 reviews", "Rated for 3+", "10+ downloads"], play: "https://play.google.com/store/apps/details?id=com.vjapps.greenboard", privacy: "https://sites.google.com/view/vjapps-greenboard/" },
  { name: "Air Horn – Loud Sound Effects", cat: "Entertainment", tile: "One-tap sound effects",
    desc: "Loud air horn sounds on a single tap, with a simple interface made for quick, fun moments.",
    icon: "utHGDUbdKlBNI8f-1glxiHXKL02hpRG4s_3c4dEAPW4r-Uf4I7jfy6whXMOJopwG4BeQFZoeBs3NhmIB2odi",
    shots: ["7n7oZbpEn2H417Ht-q4JsSBf_OrtzQP1nghNCuUrQ7rLcckcYwxWeRnMOzoYyIaUnBYAhOAVjLjANTtjmFhw", "ZxcL-733anbwfO_PxtTHWeMOPagGt8iDn7tXyI0qA5mHTo9jizYHvAK2OdYXVrCAzrBA05TDMkn-Q_t9bdMw"],
    facts: ["Rated for 3+", "Contains ads"], play: "https://play.google.com/store/apps/details?id=com.vjapps.airhorn", privacy: "https://sites.google.com/view/vjapps-airhorn/" },
  { name: "Heart touching Messages", cat: "Entertainment", tile: "500K+ downloads",
    desc: "A collection of love quotes and messages to share by social media, WhatsApp, email or text.",
    icon: "4CKHaYiEEgmiamv9b8_6mdHIYSApZGPl5jxtOP9C8GV6uLgVNuTE4FLG4n9jqN-czdUE91Q3pet2vql2EnvTFvg",
    shots: ["fYtgaKkcOoHCHM47PXSXEourXiq4lLlsE8K5ixk4xEM4uvY85dECqTATh4dqnONeA31RICpqogKVyIfudlr3", "UN8aHv3pqs1sOywNrDS4_lC1nSYyOXs95vFx8eqsNdTeN8NLDKtHbVKp1vHu6oNgJJM3HY77jsYnk1_lWn-uA", "5Y_WFys_u2-j59KlQlg3Sz7zV8bA5DBjII6TN-Nl9wr60vYUQruRzAIJAXpR00TwH6UcCKFssWwTNMsNQJnp7w"],
    facts: ["4.4 from 1.66K reviews", "500K+ downloads", "Rated for 12+"], play: "https://play.google.com/store/apps/details?id=com.greensoftware.llovequotes", privacy: "https://sites.google.com/view/heart-touching-messages" }
];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
document.documentElement.classList.add("js");
$("#year").textContent = new Date().getFullYear();
$("#privacy").href = CONFIG.privacyUrl;
if (CONFIG.email) $('[data-contact="email"]').textContent = CONFIG.email;
if (CONFIG.phone) $('[data-contact="phone"]').textContent = CONFIG.phone;

/* social links */
const social = $("#social");
if (CONFIG.social.length) CONFIG.social.forEach(s => {
  const a = document.createElement("a"); a.href = s.url; a.textContent = s.label; a.target = "_blank"; a.rel = "noopener noreferrer"; social.append(a);
}); else { const p = document.createElement("p"); p.textContent = "Social links coming soon."; social.append(p); }

/* mobile menu */
const btn = $(".menu-btn"), nav = $("#nav");
const setMenu = open => { nav.classList.toggle("open", open); btn.setAttribute("aria-expanded", open); btn.setAttribute("aria-label", open ? "Close menu" : "Open menu"); };
btn.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", e => { if (e.key === "Escape") { setMenu(false); btn.focus(); } });

/* active nav link */
const links = $$(".nav a:not(.btn)");
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
["home", "services", "work", "about", "contact"].forEach(id => io.observe(document.getElementById(id)));

/* services accordion */
$$(".svc").forEach(b => b.addEventListener("click", () => b.setAttribute("aria-expanded", b.getAttribute("aria-expanded") !== "true")));

/* hero tiles and facts */
$("#tiles").innerHTML = APPS.map(a => `<li><img src="${IMG}${a.icon}=s128" width="64" height="64" alt="" referrerpolicy="no-referrer"><b>${esc(a.name.split(":")[0])}</b><span>${esc(a.tile)}</span></li>`).join("");
$("#facts").innerHTML = FACTS.map(f => `<li><strong>${esc(f[0])}</strong><span>${esc(f[1])}</span></li>`).join("");

/* apps */
$("#apps").innerHTML = APPS.map(a => `
  <article class="app">
    <div class="app-info">
      <div class="app-head"><img src="${IMG}${a.icon}=s128" width="64" height="64" alt="${esc(a.name)} icon" loading="lazy" referrerpolicy="no-referrer"><div><span class="cat">${esc(a.cat)}</span><h3>${esc(a.name)}</h3></div></div>
      <p>${esc(a.desc)}</p>
      <ul class="chips">${a.facts.map(f => `<li>${esc(f)}</li>`).join("")}</ul>
      <div class="app-links"><a class="btn btn-primary" href="${esc(a.play)}" target="_blank" rel="noopener noreferrer">Get it on Google Play</a>${a.privacy ? `<a class="plink" href="${esc(a.privacy)}" target="_blank" rel="noopener noreferrer">Privacy policy</a>` : ""}</div>
    </div>
    <div class="shots" tabindex="0" role="group" aria-label="${esc(a.name)} screenshots">${a.shots.map((s, i) => `<img src="${IMG}${s}=w526-h296" width="526" height="296" alt="${esc(a.name)} screenshot ${i + 1}" loading="lazy" referrerpolicy="no-referrer">`).join("")}</div>
  </article>`).join("");

/* form */
const form = $("#enquiry"), status = $("#status");
const rules = {
  name: v => v.trim().length > 1 || "Enter your name.",
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || "Enter a valid email address, like name@company.com.",
  service: v => !!v || "Choose the service you need.",
  message: v => v.trim().length >= 15 || "Describe your project in at least 15 characters."
};
function validate() {
  let ok = true;
  Object.keys(rules).forEach(k => {
    const el = form.elements[k], r = rules[k](el.value), err = $("#e-" + k);
    err.textContent = r === true ? "" : r; el.closest(".field").classList.toggle("bad", r !== true);
    el.setAttribute("aria-invalid", r !== true); if (r !== true) ok = false;
  });
  return ok;
}
form.addEventListener("submit", async e => {
  e.preventDefault(); status.className = ""; status.textContent = "";
  if (!validate()) { status.className = "fail"; status.textContent = "Please fix the highlighted fields."; $('[aria-invalid="true"]', form)?.focus(); return; }
  const data = Object.fromEntries(new FormData(form));
  if (data._gotcha) return;
  if (CONFIG.formEndpoint) {
    status.textContent = "Sending…";
    try {
      const res = await fetch(CONFIG.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error();
      form.reset(); status.className = "ok"; status.textContent = "Thank you. Your enquiry was sent. We will reply to your email address.";
    } catch { status.className = "fail"; status.textContent = "Your enquiry could not be sent. Check your connection and try again."; }
  } else if (CONFIG.email) {
    const body = `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || "-"}\nService: ${data.service}\nBudget: ${data.budget || "-"}\n\n${data.message}`;
    location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Project enquiry from " + data.name)}&body=${encodeURIComponent(body)}`;
    status.textContent = "Your email app should open with the enquiry filled in. Nothing is sent until you press Send there.";
  } else {
    status.className = "fail";
    status.textContent = "This form is not connected yet. Set formEndpoint or email in js/script.js (see README).";
  }
});

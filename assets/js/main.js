/* ============================================================
   ART GIVERNY — interactions
   ============================================================ */
(function () {
  "use strict";
  var doc = document.documentElement;
  doc.classList.add("js");

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function t(key, fallback) { return (window.AG_I18N && window.AG_I18N.t) ? window.AG_I18N.t(key) : fallback; }
  function lang() { return (window.AG_I18N && window.AG_I18N.lang) || "en"; }

  /* ---------- Header scroll state, progress bar, back-to-top ---------- */
  var header = document.getElementById("siteHeader");
  var toTop = document.getElementById("toTop");
  var hasHero = !!document.querySelector(".hero"); // pages without a full-bleed hero keep a solid header
  var progress = document.createElement("div");
  progress.className = "scroll-progress";
  document.body.appendChild(progress);

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle("scrolled", !hasHero || y > 60);
    if (toTop) toTop.classList.toggle("show", y > 700);
    var h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  var menuToggle = document.getElementById("menuToggle");
  var mobileMenu = document.getElementById("mobileMenu");
  var lightboxOpen = false;

  function lockScroll(lock) { document.body.style.overflow = lock ? "hidden" : ""; }

  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    if (menuToggle) menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (mobileMenu) mobileMenu.setAttribute("aria-hidden", open ? "false" : "true");
    lockScroll(open || lightboxOpen);
  }
  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      setMenu(!document.body.classList.contains("menu-open"));
    });
  }
  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setMenu(false); });
    });
  }

  /* ---------- Reveal on scroll (staggered) ---------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal, .reveal-media"));
  if (prefersReduced || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    reveals.forEach(function (el) {
      var parent = el.parentElement;
      var sibs = Array.prototype.filter.call(parent.children, function (c) {
        return c.classList.contains("reveal") || c.classList.contains("reveal-media");
      });
      el.style.transitionDelay = Math.min(sibs.indexOf(el), 6) * 0.08 + "s";
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Active nav link on scroll ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-primary a"));
  var sections = navLinks
    .map(function (a) { var h = a.getAttribute("href"); return h && h[0] === "#" ? document.querySelector(h) : null; })
    .filter(Boolean);
  if (sections.length && "IntersectionObserver" in window) {
    var navIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var id = e.target.id;
          navLinks.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + id); });
        }
      });
    }, { threshold: 0.4, rootMargin: "-20% 0px -50% 0px" });
    sections.forEach(function (s) { navIo.observe(s); });
  }

  /* ---------- Lightbox (bilingual) ---------- */
  var works = Array.prototype.slice.call(document.querySelectorAll(".work"));
  var lightbox = document.getElementById("lightbox");
  var lbImg = document.getElementById("lbImg");
  var lbArtist = document.getElementById("lbArtist");
  var lbTitle = document.getElementById("lbTitle");
  var lbMeta = document.getElementById("lbMeta");
  var lbDetail = document.getElementById("lbDetail");
  var lbStatus = document.getElementById("lbStatus");
  var lbClose = document.getElementById("lbClose");
  var lbPrev = document.getElementById("lbPrev");
  var lbNext = document.getElementById("lbNext");
  var lbInquire = document.getElementById("lbInquire");
  var current = 0;
  var lastFocused = null;

  function pick(d, name) {
    return (lang() === "fr" && d[name + "Fr"]) ? d[name + "Fr"] : d[name];
  }
  function fill(i) {
    var w = works[i]; if (!w) return; current = i;
    var d = w.dataset;
    var artist = pick(d, "artist"), title = pick(d, "title"), year = pick(d, "year"),
        medium = pick(d, "medium"), detail = pick(d, "detail"), status = pick(d, "status");
    lbImg.src = d.img;
    lbImg.alt = artist + " — " + title + ", " + year;
    lbArtist.textContent = artist;
    lbTitle.textContent = title + ", " + year;
    lbMeta.textContent = medium;
    lbDetail.textContent = detail;
    lbStatus.textContent = status;
  }
  function openLightbox(i) {
    lastFocused = document.activeElement;
    fill(i);
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    lightboxOpen = true;
    lockScroll(true);
    lbClose.focus();
  }
  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxOpen = false;
    lockScroll(document.body.classList.contains("menu-open"));
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }
  function step(dir) {
    var n = (current + dir + works.length) % works.length;
    lbImg.style.opacity = "0";
    setTimeout(function () { fill(n); lbImg.style.opacity = "1"; }, 160);
  }

  works.forEach(function (w, i) {
    w.addEventListener("click", function () { openLightbox(i); });
    w.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(i); }
    });
  });
  if (lbClose) lbClose.addEventListener("click", closeLightbox);
  if (lbPrev) lbPrev.addEventListener("click", function () { step(-1); });
  if (lbNext) lbNext.addEventListener("click", function () { step(1); });
  if (lbInquire) lbInquire.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox || e.target.classList.contains("lightbox-stage")) closeLightbox();
    });
  }
  if (lbImg) lbImg.style.transition = "opacity .3s ease";
  document.addEventListener("ag:langchange", function () { if (lightboxOpen) fill(current); });

  document.addEventListener("keydown", function (e) {
    if (!lightboxOpen) {
      if (e.key === "Escape" && document.body.classList.contains("menu-open")) setMenu(false);
      return;
    }
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
    else if (e.key === "Tab") {
      var f = lightbox.querySelectorAll("button, a[href]");
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------- Inquiry form (Web3Forms → artgiverny@gmail.com; mailto fallback) ---------- */
  var form = document.getElementById("inquiryForm");
  var note = document.getElementById("formNote");
  var RECIPIENT = "artgiverny@gmail.com";
  // Paste the free Web3Forms access key for artgiverny@gmail.com (https://web3forms.com).
  // Until a real key is set, the form gracefully opens the visitor's mail app instead.
  var WEB3FORMS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

  function mailtoFallback(name, email, interest, message) {
    var subject = t("form.subject", "Art Giverny inquiry") + " — " + interest;
    var body = "Name: " + name + "\nEmail: " + email + "\nInterest: " + interest + "\n\n" + (message || "—") + "\n";
    note.textContent = t("form.sending", "Opening your email to complete the inquiry…");
    window.location.href = "mailto:" + RECIPIENT +
      "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  }

  if (form) {
    var submitBtn = form.querySelector('button[type="submit"]');
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (form.botcheck && form.botcheck.checked) return; // honeypot: silently drop bots
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var interest = form.interest.value;
      var message = form.message.value.trim();

      if (!name || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        note.textContent = t("form.err", "Please enter your name and a valid email address.");
        note.classList.add("error");
        return;
      }
      note.classList.remove("error");

      var keyReady = WEB3FORMS_KEY && WEB3FORMS_KEY.indexOf("WEB3FORMS") === -1 && WEB3FORMS_KEY.length > 10;
      if (!keyReady || !window.fetch) { mailtoFallback(name, email, interest, message); return; }

      if (submitBtn) submitBtn.disabled = true;
      note.textContent = t("form.send", "Sending…");
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: t("form.subject", "Art Giverny inquiry") + " — " + interest,
          from_name: name,
          name: name, email: email, replyto: email,
          interest: interest, message: message || "—", botcheck: ""
        })
      }).then(function (r) { return r.json(); }).then(function (data) {
        if (submitBtn) submitBtn.disabled = false;
        if (data && data.success) {
          form.reset();
          note.textContent = t("form.success", "Thank you — your inquiry has been sent. We will be in touch shortly.");
        } else {
          note.textContent = t("form.fail", "Sorry, something went wrong. Please email us directly at artgiverny@gmail.com.");
          note.classList.add("error");
        }
      }).catch(function () {
        if (submitBtn) submitBtn.disabled = false;
        note.textContent = t("form.fail", "Sorry, something went wrong. Please email us directly at artgiverny@gmail.com.");
        note.classList.add("error");
      });
    });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

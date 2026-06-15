/* ============================================================
   ART GIVERNY — bilingual engine (EN default in DOM, FR dictionary)
   ============================================================ */
(function () {
  "use strict";

  var STORE = "ag_lang";

  var FR = {
    "meta.title": "Art Giverny — Maîtres impressionnistes de Giverny | Patrick Bertrand",
    "meta.desc": "Art Giverny est une galerie internationale et un atelier de recherche consacrés aux peintres impressionnistes de Giverny — Theodore Earl Butler, Blanche Hoschedé-Monet, Theodore Robinson et les héritiers de Claude Monet. Acquisitions, ventes privées, provenance et expertise par Patrick Bertrand.",
    "a11y.skip": "Aller à la collection",

    "nav.collection": "Collection",
    "nav.artists": "Artistes",
    "nav.lineage": "Lignée",
    "nav.expertise": "Expertise",
    "nav.press": "Presse",
    "nav.contact": "Contact",
    "nav.inquire": "Nous contacter",
    "nav.catalogue": "Catalogue raisonné",

    "hero.eyebrow": "Impressionnistes de Giverny",
    "hero.title": "Maîtres de la lumière,<br />du Giverny de <em>Monet</em>",
    "hero.lede": "Une galerie internationale et un atelier de recherche consacrés aux peintres de Giverny — plaçant des œuvres de qualité muséale auprès de collectionneurs et d'institutions depuis près de quarante ans.",
    "hero.cta1": "Voir les œuvres",
    "hero.cta2": "Notre expertise",

    "statement.eyebrow": "La maison Art Giverny",
    "statement.lead": "Dans le village où Claude Monet créa son jardin, un cercle de peintres français et américains donna à l'impressionnisme sa seconde floraison. <em>Art Giverny leur est dédiée</em> — à leurs toiles, à leur provenance, et à l'érudition qui perpétue leur histoire.",
    "statement.stat1": "dans le cercle de Giverny",
    "statement.stat2": "générations de maîtres",
    "statement.stat3": "collections & musées, États-Unis & Europe",
    "unit.yrs": "ans",

    "collection.eyebrow": "Œuvres choisies",
    "collection.title": "La Collection",
    "collection.intro": "Une sélection d'œuvres du cercle de Giverny, proposées à des collectionneurs avertis par vente privée. Chaque œuvre est accompagnée d'un dossier de provenance complet et d'une notice savante.",
    "collection.note": "D'autres œuvres, la provenance complète et les rapports de condition sont communiqués en privé aux collectionneurs qualifiés. <a href=\"#contact\" class=\"link-underline\">Demander le dossier &rsaquo;</a>",

    "work.view": "Voir",
    "work.inquire": "Se renseigner sur cette œuvre",
    "work.butler.meta": "Huile sur toile · Disponible",
    "work.blanche.meta": "Huile sur toile · Disponible",
    "work.toulgouat.meta": "Détrempe · Disponible",
    "work.robinson.meta": "Étude à l'huile · En recherche",

    "artists.eyebrow": "Les peintres",
    "artists.title": "Les artistes de Giverny",
    "artists.intro": "Quatre peintres, un village, et un même fil de lumière courant du jardin de Monet jusqu'au XXe siècle. Découvrez chaque vie et chaque œuvre.",
    "artists.explore": "Découvrir →",
    "artists.butler.role": "Impressionniste américain · gendre de Monet",
    "artists.blanche.role": "Peintre · belle-fille de Monet",
    "artists.robinson.role": "Impressionniste américain · le cercle Baudy",
    "artists.toulgouat.role": "Peintre · dernier héritier artistique de Monet",

    "lineage.divider": "Claude Monet · <em>Nymphéas</em>, 1906 · présenté à titre de référence historique",
    "lineage.eyebrow": "De Monet à ses héritiers",
    "lineage.title": "La lignée de Giverny",
    "lineage.intro": "Lorsque Monet s'installe à Giverny en 1883, le jardin qu'il plante devient le berceau d'un mouvement. Les peintres qui s'y réunirent — et la famille qui prolongea sa lumière — sont au cœur de tout ce que nous faisons.",
    "lineage.t1.h": "Monet s'installe à Giverny",
    "lineage.t1.p": "Claude Monet arrive dans le village normand et commence le jardin d'eau qui définira les dernières décennies lumineuses de l'impressionnisme.",
    "lineage.t2.h": "La colonie se forme à l'Hôtel Baudy",
    "lineage.t2.p": "Des peintres américains — Theodore Robinson, John Leslie Breck, Theodore Earl Butler — se rassemblent autour de Monet, faisant de Giverny le berceau de l'impressionnisme américain.",
    "lineage.t3.h": "Blanche peint aux côtés du maître",
    "lineage.t3.p": "Blanche Hoschedé-Monet, belle-fille de Monet, peint ses propres <em>Meules</em> à ses côtés — peintre à part entière au sein de la famille.",
    "lineage.t4.h": "Butler entre dans la famille Monet",
    "lineage.t4.p": "Theodore Earl Butler épouse la belle-fille de Monet, Suzanne Hoschedé — liant la colonie américaine à la maison Monet par le sang autant que par l'art.",
    "lineage.t5.h": "Jean-Marie Toulgouat, dernier héritier artistique de Monet",
    "lineage.t5.p": "Petit-fils de Butler et de Blanche, Toulgouat peignit à La Longère et — avec son épouse, l'écrivaine Claire Joyes — contribua à restaurer la maison et les jardins de Monet, assurant le rayonnement de Giverny.",
    "lineage.t6.h": "Une amitié devient une vocation",
    "lineage.t6.p": "Patrick Bertrand se lie d'amitié avec Toulgouat et Claire Joyes, réalise sa première acquisition, puis se voit confier par la famille le catalogue raisonné de Theodore Earl Butler.",
    "lineage.archive1": "Nancy Reagan dans le jardin de Monet à Giverny, avec Jean-Marie Toulgouat à son chevalet, le 5 juin 1982.<br /><span class=\"archive-cred\">Photographie © GivernyART Archive</span>",
    "lineage.archive2": "Jean-Marie Toulgouat avec sa mère, Lily Butler, à Giverny.<br /><span class=\"archive-cred\">Photographie © GivernyART Archive</span>",

    "expertise.caption": "Art Giverny dans les foires internationales — de Palm Beach à San Francisco.",
    "expertise.eyebrow": "Provenance · Érudition · Discrétion",
    "expertise.title": "L'œil d'un marchand,<br />la rigueur d'un chercheur",
    "expertise.p1": "Originaire de Normandie, <strong>Patrick Bertrand</strong> a consacré sa carrière aux peintres de Giverny. Son amitié avec Jean-Marie Toulgouat et l'écrivaine Claire Joyes, nouée au milieu des années 1980, le mena à sa première acquisition — un John Leslie Breck dédié à Blanche Hoschedé-Monet — puis à sa nomination, par Toulgouat lui-même, comme responsable du <em>catalogue raisonné</em> de Theodore Earl Butler.",
    "expertise.p2": "Titulaire d'un doctorat obtenu à Paris et d'un diplôme d'économie à Lille, il place des œuvres de qualité muséale auprès de collections privées et d'institutions aux États-Unis et en Europe, et expose dans les plus grandes foires internationales. Au-delà de Giverny, il a établi le catalogue de l'œuvre gravé du graveur Roger Platiel.",
    "expertise.quote": "« Mon lien avec Jean-Marie est à la fois savant et familial. »",
    "expertise.cite": "Patrick Bertrand, fondateur",
    "expertise.s1": "Acquisitions & ventes privées",
    "expertise.s2": "Provenance & authentification",
    "expertise.s3": "Catalogues raisonnés <em>— Theodore Earl Butler</em>",
    "expertise.s4": "Conseil aux collections",
    "expertise.s5": "Placement auprès des musées & institutions",

    "catalogue.eyebrow": "La référence",
    "catalogue.title": "Le catalogue raisonné Butler",
    "catalogue.intro": "Patrick Bertrand établit le <em>catalogue raisonné</em> en préparation de Theodore Earl Butler (1861–1936) — l'impressionniste américain qui s'installa à Giverny dans les années 1880 et épousa la belle-fille de Monet, Suzanne Hoschedé. Il est devenu la référence pour l'œuvre de l'artiste.",
    "catalogue.figcap": "Theodore Earl Butler &middot; <em>Village de Giverny</em>",
    "catalogue.quote": "« L'inscription au catalogue raisonné en préparation est considérée comme la confirmation définitive de l'authenticité d'une œuvre de Theodore Earl Butler. »",
    "catalogue.note": "Lorsqu'une œuvre de Butler arrive sur le marché, les grandes maisons de vente la rapportent directement au catalogue établi par Patrick Bertrand.",
    "catalogue.citedby": "Cité par",
    "catalogue.workstitle": "Œuvres cataloguées choisies",
    "catalogue.disclaimer": "Les œuvres documentées dans le catalogue raisonné sont mentionnées à des fins d'érudition et d'authentification ; leur présence n'implique pas leur disponibilité. Pour une demande d'authentification ou de recherche concernant une œuvre de Butler, <a href=\"#contact\" class=\"link-underline\">contactez la galerie &rsaquo;</a>",

    "press.eyebrow": "Reconnaissance",
    "press.title": "Foires & marché",
    "press.intro": "Art Giverny présente les peintres de Giverny dans les plus grandes foires internationales, et son érudition fait référence sur le marché de l'art international.",
    "press.fairs.h": "Foires internationales",
    "press.fairs.1": "Palm Beach, Floride",
    "press.fairs.2": "San Francisco, Californie",
    "press.fairs.3n": "Foires internationales d'art & d'antiquités",
    "press.fairs.3": "États-Unis & Europe",
    "press.cited.h": "Cité sur le marché",
    "press.cited.1": "Références du catalogue raisonné Butler",
    "press.cited.2": "Références du catalogue raisonné Butler",
    "press.cited.3": "Provenance & authentification",
    "press.quote": "« L'inscription au catalogue raisonné en préparation est considérée comme la confirmation définitive de l'authenticité d'une œuvre de Theodore Earl Butler. »",
    "press.quotecite": "D'après les maisons de vente internationales",

    "giverny.eyebrow": "Le village",
    "giverny.title": "Là où l'impressionnisme<br />trouva son jardin",
    "giverny.lede": "À une heure de Paris, à la lisière de la Normandie et de l'Île-de-France, Giverny est l'endroit où Claude Monet planta le jardin le plus célèbre de l'histoire de l'art. Collectionner ses peintres, c'est posséder un chapitre vivant de ce paysage — et Art Giverny demeure, par l'esprit et par l'érudition, du village même.",
    "giverny.cta": "Visite sur rendez-vous",

    "contact.eyebrow": "Nous contacter",
    "contact.title": "Entamer la conversation",
    "contact.intro": "Que vous souhaitiez acquérir une œuvre, vendre ou confier en dépôt, ou solliciter un avis savant sur une peinture du cercle de Giverny, chaque demande est traitée personnellement et en toute confidentialité.",
    "contact.email": "E-mail",
    "contact.appt": "Sur rendez-vous",
    "contact.location": "Giverny · Normandie · et à l'international",

    "form.name": "Nom",
    "form.email": "E-mail",
    "form.interest": "Je suis intéressé par",
    "form.opt1": "Acquérir une œuvre",
    "form.opt2": "Vendre ou confier une œuvre",
    "form.opt3": "Authentification & recherche",
    "form.opt4": "Conseil aux collections",
    "form.opt5": "Une visite privée à Giverny",
    "form.message": "Message",
    "form.submit": "Envoyer la demande",
    "form.sending": "Ouverture de votre messagerie pour finaliser la demande…",
    "form.send": "Envoi en cours…",
    "form.success": "Merci — votre demande a bien été envoyée. Nous vous répondrons sous peu.",
    "form.fail": "Une erreur est survenue. Écrivez-nous directement à artgiverny@gmail.com.",
    "form.err": "Veuillez saisir votre nom et une adresse e-mail valide.",
    "form.subject": "Demande Art Giverny",

    "footer.tag": "Maîtres impressionnistes de Giverny.<br />Acquisitions, ventes privées & érudition.",
    "footer.explore": "Explorer",
    "footer.connect": "Contact",
    "footer.location": "Giverny · Normandie",
    "footer.rights": "Tous droits réservés.",
    "footer.fine": "Photographies d'archives © GivernyART Archive. Claude Monet, <em>Nymphéas</em> (1906), présenté à titre de référence historique (domaine public)."
  };

  // English values used only by scripts (DOM elements supply their own EN)
  var EN_JS = {
    "form.sending": "Opening your email to complete the inquiry…",
    "form.send": "Sending…",
    "form.success": "Thank you — your inquiry has been sent. We will be in touch shortly.",
    "form.fail": "Sorry, something went wrong. Please email us directly at artgiverny@gmail.com.",
    "form.err": "Please enter your name and a valid email address.",
    "form.subject": "Art Giverny inquiry"
  };

  var nodes = [];
  var current = "en";

  function keyOf(el) {
    return el.getAttribute("data-i18n") || el.getAttribute("data-i18n-html");
  }
  function cacheEN(el) {
    var attr = el.getAttribute("data-i18n-attr");
    if (attr) el._en = el.getAttribute(attr);
    else if (el.hasAttribute("data-i18n-html")) el._en = el.innerHTML;
    else el._en = el.textContent;
  }
  function applyEl(el, lang) {
    var k = keyOf(el);
    var attr = el.getAttribute("data-i18n-attr");
    var val = (lang === "en") ? el._en : (FR[k] != null ? FR[k] : el._en);
    if (attr) el.setAttribute(attr, val);
    else if (el.hasAttribute("data-i18n-html")) el.innerHTML = val;
    else el.textContent = val;
  }

  function setLang(lang, persist) {
    current = (lang === "fr") ? "fr" : "en";
    document.documentElement.lang = current;
    for (var i = 0; i < nodes.length; i++) applyEl(nodes[i], current);
    var btns = document.querySelectorAll(".lang-btn");
    for (var j = 0; j < btns.length; j++) {
      var on = btns[j].getAttribute("data-lang") === current;
      btns[j].classList.toggle("is-active", on);
      btns[j].setAttribute("aria-pressed", on ? "true" : "false");
    }
    if (persist !== false) { try { localStorage.setItem(STORE, current); } catch (e) {} }
    document.dispatchEvent(new CustomEvent("ag:langchange", { detail: { lang: current } }));
  }

  function t(k) {
    if (current === "fr") return FR[k] != null ? FR[k] : (EN_JS[k] != null ? EN_JS[k] : k);
    return EN_JS[k] != null ? EN_JS[k] : k;
  }

  function init() {
    nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n],[data-i18n-html]"));
    nodes.forEach(cacheEN);
    var stored = null;
    try { stored = localStorage.getItem(STORE); } catch (e) {}
    var initial = stored || (((navigator.language || "").toLowerCase().indexOf("fr") === 0) ? "fr" : "en");

    var btns = document.querySelectorAll(".lang-btn");
    for (var i = 0; i < btns.length; i++) {
      (function (b) {
        b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
      })(btns[i]);
    }
    // Only persist once the user explicitly chooses; auto-detected default is not persisted.
    setLang(initial, !!stored);
  }

  window.AG_I18N = { setLang: setLang, t: t, get lang() { return current; } };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();

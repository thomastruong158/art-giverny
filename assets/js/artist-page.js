/* ============================================================
   ART GIVERNY — data-driven artist pages (bilingual)
   ============================================================ */
(function () {
  "use strict";

  var UI = {
    en: { back: "← Back to artists", explore: "Explore →", works: "Selected Works", cited: "As cited by", moreEye: "Continue", moreTitle: "Other Artists of Giverny" },
    fr: { back: "← Retour aux artistes", explore: "Découvrir →", works: "Œuvres choisies", cited: "Cité par", moreEye: "Poursuivre", moreTitle: "Autres artistes de Giverny" }
  };

  var DATA = {
    "butler": {
      name: "Theodore Earl Butler",
      dates: "1861–1936",
      hero: "assets/img/butler-village-giverny-1905-lg.jpg",
      thumb: "assets/img/butler-village-giverny-1905-sm.jpg",
      heroAlt: "Theodore Earl Butler, Village of Giverny, 1905",
      cited: "Christie's · Sotheby's · Bonhams · Brunk Auctions",
      en: {
        role: "American Impressionist · Monet's son-in-law",
        tagline: "The American who married into Monet's household and made Giverny his life's subject.",
        bio: [
          "Theodore Earl Butler reached Giverny in 1888, drawn — like a whole generation of American painters — to the village where Claude Monet had settled. He lodged at the Hôtel Baudy, at the centre of the colony, and in 1892 married Monet's stepdaughter, Suzanne Hoschedé; after her death he married her sister, Marthe.",
          "His painting absorbed the Impressionist light of Giverny while keeping a structure and intimacy of its own — the village streets, the family garden, the valley of the Seine around Vernon. He exhibited in Paris and New York and stands among the defining figures of American Impressionism.",
          "Butler's oeuvre is the subject of the forthcoming catalogue raisonné compiled by Patrick Bertrand — the reference by which his work is authenticated on the international market."
        ]
      },
      fr: {
        role: "Impressionniste américain · gendre de Monet",
        tagline: "L'Américain qui entra dans la famille de Monet et fit de Giverny le sujet de toute une vie.",
        bio: [
          "Theodore Earl Butler arrive à Giverny en 1888, attiré — comme toute une génération de peintres américains — par le village où Claude Monet s'était installé. Il loge à l'Hôtel Baudy, au cœur de la colonie, et épouse en 1892 la belle-fille de Monet, Suzanne Hoschedé ; après la mort de celle-ci, il épouse sa sœur, Marthe.",
          "Sa peinture absorbe la lumière impressionniste de Giverny tout en gardant une structure et une intimité propres — les rues du village, le jardin familial, la vallée de la Seine autour de Vernon. Il expose à Paris et à New York et compte parmi les figures majeures de l'impressionnisme américain.",
          "L'œuvre de Butler fait l'objet du catalogue raisonné en préparation établi par Patrick Bertrand — la référence par laquelle son travail est authentifié sur le marché international."
        ]
      },
      works: [
        { img: "assets/img/butler-village-giverny-1905-lg.jpg",
          en: { title: "Village of Giverny, 1905", meta: "Oil on canvas · Available" },
          fr: { title: "Village de Giverny, 1905", meta: "Huile sur toile · Disponible" } }
      ]
    },

    "blanche-hoschede-monet": {
      name: "Blanche Hoschedé-Monet",
      dates: "1865–1947",
      hero: "assets/img/blanche-haystack-giverny-1889-lg.jpg",
      thumb: "assets/img/blanche-haystack-giverny-1889-sm.jpg",
      heroAlt: "Blanche Hoschedé-Monet, Haystack at Giverny, 1889",
      en: {
        role: "Painter · Monet's stepdaughter & daughter-in-law",
        tagline: "A painter raised inside Impressionism, who worked at Monet's easel and kept his garden.",
        bio: [
          "Blanche Hoschedé-Monet grew up within the Impressionist world. Daughter of Alice Hoschedé, she became Claude Monet's stepdaughter when her mother married the painter, and later his daughter-in-law by marrying his son Jean. For decades she painted at Monet's side.",
          "Her own canvases — grainstacks, the Seine, the Giverny countryside — share the master's devotion to changing light while keeping a tender, personal touch. She was a serious artist in her own right, long overshadowed by the name she carried.",
          "After Monet's death she watched over his house and garden at Giverny, helping to preserve the place that had shaped them both."
        ]
      },
      fr: {
        role: "Peintre · belle-fille de Monet",
        tagline: "Une peintre née dans l'impressionnisme, qui travailla au chevalet de Monet et veilla sur son jardin.",
        bio: [
          "Blanche Hoschedé-Monet grandit au cœur du monde impressionniste. Fille d'Alice Hoschedé, elle devient la belle-fille de Claude Monet lorsque sa mère épouse le peintre, puis sa bru en épousant son fils Jean. Des décennies durant, elle peint aux côtés de Monet.",
          "Ses propres toiles — meules, bords de Seine, campagne de Giverny — partagent la dévotion du maître pour la lumière changeante tout en gardant une touche tendre et personnelle. Artiste à part entière, elle fut longtemps éclipsée par le nom qu'elle portait.",
          "Après la mort de Monet, elle veille sur sa maison et son jardin à Giverny, contribuant à préserver le lieu qui les avait tous deux façonnés."
        ]
      },
      works: [
        { img: "assets/img/blanche-haystack-giverny-1889-lg.jpg",
          en: { title: "Haystack at Giverny, 1889", meta: "Oil on canvas · Available" },
          fr: { title: "Meule à Giverny, 1889", meta: "Huile sur toile · Disponible" } }
      ]
    },

    "theodore-robinson": {
      name: "Theodore Robinson",
      dates: "1852–1896",
      hero: "assets/img/robinson-hotel-baudy-lg.jpg",
      thumb: "assets/img/robinson-hotel-baudy-sm.jpg",
      heroAlt: "Theodore Robinson, Hôtel Baudy, Giverny",
      en: {
        role: "American Impressionist · the Baudy circle",
        tagline: "Monet's close friend, and a founder of American Impressionism at Giverny.",
        bio: [
          "Theodore Robinson was among the first American painters to settle at Giverny, and one of the very few to form a genuine friendship with Claude Monet. He stayed at the Hôtel Baudy, the inn that became the social heart of the artists' colony.",
          "Robinson married French Impressionist light to an American clarity of structure, painting the village, its people and the valley of the Seine. His canvases and his celebrated diaries did much to carry Impressionism back to the United States before his early death in 1896."
        ]
      },
      fr: {
        role: "Impressionniste américain · le cercle Baudy",
        tagline: "L'ami proche de Monet, et l'un des fondateurs de l'impressionnisme américain à Giverny.",
        bio: [
          "Theodore Robinson fut l'un des premiers peintres américains à s'installer à Giverny, et l'un des rares à nouer une véritable amitié avec Claude Monet. Il séjournait à l'Hôtel Baudy, l'auberge devenue le cœur de la vie de la colonie d'artistes.",
          "Robinson allie la lumière impressionniste française à une clarté de structure toute américaine, peignant le village, ses habitants et la vallée de la Seine. Ses toiles et ses célèbres carnets contribuèrent à rapporter l'impressionnisme aux États-Unis avant sa mort prématurée en 1896."
        ]
      },
      works: [
        { img: "assets/img/robinson-hotel-baudy-lg.jpg",
          en: { title: "Hôtel Baudy, Giverny (study)", meta: "Oil on canvas · archival image" },
          fr: { title: "Hôtel Baudy, Giverny (étude)", meta: "Huile sur toile · image d'archive" } }
      ]
    },

    "jean-marie-toulgouat": {
      name: "Jean-Marie Toulgouat",
      dates: "1927–2006",
      hero: "assets/img/toulgouat-summer-garden-1980-lg.jpg",
      thumb: "assets/img/toulgouat-summer-garden-1980-sm.jpg",
      heroAlt: "Jean-Marie Toulgouat, Summer Garden, Giverny, 1980",
      en: {
        role: "Painter · Monet's last artistic heir",
        tagline: "Born into the lineage of Giverny, he carried its light into modern painting.",
        bio: [
          "Jean-Marie Toulgouat was born into the lineage itself — grandson of Theodore Earl Butler and Blanche Hoschedé-Monet, and so heir to both the American colony and the Monet family. He painted from his atelier at La Longère in Giverny.",
          "From the late 1960s until 2006 his work bridged the century between Impressionism and contemporary painting: rooted in the colour and atmosphere of the garden, yet wholly modern in spirit. He exhibited in France and abroad.",
          "With his wife, the writer Claire Joyes, Toulgouat helped restore Monet's house and gardens at Giverny — a labour that secured the site's international renown. He is remembered as Monet's last artistic heir."
        ]
      },
      fr: {
        role: "Peintre · dernier héritier artistique de Monet",
        tagline: "Né dans la lignée de Giverny, il en porta la lumière jusqu'à la peinture moderne.",
        bio: [
          "Jean-Marie Toulgouat naît dans la lignée même — petit-fils de Theodore Earl Butler et de Blanche Hoschedé-Monet, héritier à la fois de la colonie américaine et de la famille Monet. Il peint depuis son atelier de La Longère, à Giverny.",
          "De la fin des années 1960 jusqu'en 2006, son œuvre fait le pont entre l'impressionnisme et la peinture contemporaine : enracinée dans la couleur et l'atmosphère du jardin, mais résolument moderne. Il expose en France et à l'étranger.",
          "Avec son épouse, l'écrivaine Claire Joyes, Toulgouat contribue à restaurer la maison et les jardins de Monet à Giverny — un travail qui assura le rayonnement international du lieu. On se souvient de lui comme du dernier héritier artistique de Monet."
        ]
      },
      works: [
        { img: "assets/img/toulgouat-summer-garden-1980-lg.jpg",
          en: { title: "Summer Garden, Giverny, 1980", meta: "Tempera · Available" },
          fr: { title: "Jardin d'été, Giverny, 1980", meta: "Détrempe · Disponible" } },
        { img: "assets/img/archive-toulgouat-lily-butler-lg.jpg",
          en: { title: "With his mother, Lily Butler, in Giverny", meta: "Photograph © GivernyART Archive" },
          fr: { title: "Avec sa mère, Lily Butler, à Giverny", meta: "Photographie © GivernyART Archive" } }
      ]
    }
  };

  var ORDER = ["butler", "blanche-hoschede-monet", "theodore-robinson", "jean-marie-toulgouat"];
  var main = document.getElementById("apMain");
  if (!main) return;

  function lang() { return (window.AG_I18N && window.AG_I18N.lang) || "en"; }
  function ui(k) { return (UI[lang()] || UI.en)[k]; }

  var m = location.search.match(/[?&]id=([^&]+)/);
  var id = m ? decodeURIComponent(m[1]) : "butler";
  if (!DATA[id]) id = "butler";

  function render() {
    var a = DATA[id], L = a[lang()];
    document.title = a.name + " — Art Giverny";

    var bio = L.bio.map(function (p, i) {
      return "<p" + (i === 0 ? ' class="lead-cap"' : "") + ">" + p + "</p>";
    }).join("");

    var works = a.works.map(function (w) {
      var lw = w[lang()] || w.en;
      return '<figure class="ap-work"><img src="' + w.img + '" loading="lazy" decoding="async" alt="' +
        a.name + " — " + lw.title + '" /><figcaption><div class="w-title">' + lw.title +
        '</div><div class="w-meta">' + lw.meta + "</div></figcaption></figure>";
    }).join("");
    var worksClass = a.works.length > 1 ? "ap-works two" : "ap-works";

    var cited = a.cited
      ? '<div class="ap-cited"><span class="cited-label">' + ui("cited") +
        '</span><div class="ap-cited-names">' + a.cited + "</div></div>"
      : "";

    var more = ORDER.filter(function (k) { return k !== id; }).map(function (k) {
      var o = DATA[k], ol = o[lang()];
      return '<a class="artist-card" href="artist.html?id=' + k + '">' +
        '<div class="artist-card-media"><img src="' + o.thumb + '" loading="lazy" decoding="async" alt="' + o.name + '" /></div>' +
        '<div class="artist-card-body"><span class="artist-card-name">' + o.name + '</span>' +
        '<span class="artist-card-dates">' + o.dates + '</span>' +
        '<span class="artist-card-role">' + ol.role + '</span>' +
        '<span class="artist-card-link">' + ui("explore") + '</span></div></a>';
    }).join("");

    main.innerHTML =
      '<section class="ap-hero">' +
        '<div class="ap-hero-media"><img src="' + a.hero + '" alt="' + a.heroAlt + '" fetchpriority="high" decoding="async" /></div>' +
        '<div class="ap-hero-text">' +
          '<a class="ap-back" href="index.html#artists">' + ui("back") + '</a>' +
          '<p class="ap-role">' + L.role + '</p>' +
          '<h1 class="ap-name">' + a.name + '</h1>' +
          '<p class="ap-dates">' + a.dates + '</p>' +
          '<p class="ap-tagline">' + L.tagline + '</p>' +
        '</div>' +
      '</section>' +
      '<div class="ap-body">' +
        '<div class="ap-section ap-bio">' + bio + '</div>' +
        '<div class="ap-section"><h2 class="ap-h">' + ui("works") + '</h2>' +
          '<div class="' + worksClass + '">' + works + '</div>' + cited + '</div>' +
      '</div>' +
      '<section class="ap-more"><div class="wrap">' +
        '<div class="ap-more-head"><p class="eyebrow" style="justify-content:center">' + ui("moreEye") +
        '</p><h2 class="section-title">' + ui("moreTitle") + '</h2></div>' +
        '<div class="artist-grid">' + more + '</div>' +
      '</div></section>';

    window.scrollTo(0, 0);
  }

  render();
  document.addEventListener("ag:langchange", render);
})();

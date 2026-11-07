// Masonry_Single_002: one item per project (its first image), plus the films.
// Array order = grid DOM order = lightbox sequence.
// Schema follows website/portfolio-data.js so the reused lightbox reads it unchanged.
// dataW/dataH are the real pixel sizes; the grid reserves each box from them before load.
// Caption sources: website/portfolio-data.js first, then the old site
// (website_archives/Masonry/Masonry_Single_01). Unknown fields are left empty.
window.PORTFOLIO_PROJECTS = [
  // --- website/portfolio-data.js order ---
  { id: "more-or-less", title: "MORE OR LESS", line1: "Durimel", line2: "",
    media: [{ type: "image", full: "img/moreorless/9_2026/durimel/01.webp", alt: "More or Less", dataW: 969, dataH: 1200 }] },
  { id: "modern-weekly-style", title: "MODERN WEEKLY STYLE", line1: "Felix Cooper", line2: "",
    media: [{ type: "image", full: "img/modernweeklystyle/september2026/felixcooper_01/01.webp", alt: "Modern Weekly Style", dataW: 900, dataH: 1200 }] },
  { id: "voguecs", title: "VOGUE CS", line1: "Gosia Turczynska", line2: "",
    media: [{ type: "image", full: "img/voguecs/september2026/gosiaturczynska/01.webp", alt: "VOGUE CS", dataW: 969, dataH: 1200 }] },
  // Title from website/portfolio-data.js (film-04); photographer from the file name.
  { id: "film-04", title: "Vogue CS — Film", line1: "Gosia Turczynska", line2: "",
    media: [{ type: "video", thumb: "poster/film-04.jpg", src: "video/VDEF_VOGUECS_by Gosia Turczynska.mp4", dataW: 1350, dataH: 1080 }] },
  { id: "10-magazine", title: "10 MAGAZINE", line1: "Ferry van der Nat", line2: "",
    media: [{ type: "image", full: "img/10magazine/september_2026/01.webp", alt: "10 Magazine", dataW: 920, dataH: 1200 }] },
  { id: "hube-frabonasia", title: "HUBE", line1: "Fra Bonasia", line2: "",
    media: [{ type: "image", full: "img/hube/october2026/frabonasia_01/01.webp", alt: "Hube", dataW: 1200, dataH: 800 }] },
  // website/portfolio-data.js starts this project at 02.webp.
  { id: "vogue-adria-danilo-pavlovic", title: "VOGUE ADRIA", line1: "Danilo Pavlovic", line2: "",
    media: [{ type: "image", full: "img/vogueadria/summer2026/02.webp", alt: "Vogue Adria", dataW: 942, dataH: 1200 }] },
  { id: "krzysztof-jan", title: "Krzysztof Jan", line1: "", line2: "",
    media: [{ type: "image", full: "img/img/krzysztofjan_01/01.webp", alt: "Krzysztof Jan", dataW: 960, dataH: 1200 }] },
  { id: "carl-diner", title: "Carl Diner", line1: "", line2: "",
    media: [{ type: "image", full: "img/img/carldiner_01/01.webp", alt: "Carl Diner", dataW: 960, dataH: 1200 }] },
  { id: "film-02", title: "Carlife Therapy — King Kong", line1: "", line2: "",
    media: [{ type: "video", thumb: "poster/film-02.jpg", src: "video/Carlife Therapy King Kong_web.mp4", dataW: 1920, dataH: 1080 }] },
  { id: "beauty", title: "Beauty", line1: "", line2: "",
    media: [{ type: "image", full: "img/beauty/beauty01/01.webp", alt: "Beauty", dataW: 960, dataH: 1200 }] },
  { id: "replica-man-pavel-golik", title: "REPLICA MAN", line1: "Pavel Golik", line2: "",
    media: [{ type: "image", full: "img/replicaman/ss24/01.webp", alt: "Replica Man", dataW: 900, dataH: 1200 }] },
  { id: "beauty-papers-jeremie-monnier", title: "BEAUTY PAPERS", line1: "Jérémie Monnier", line2: "",
    media: [{ type: "image", full: "img/beautypapers/01/01.webp", alt: "Beauty Papers", dataW: 960, dataH: 1200 }] },
  // Title is empty in website/portfolio-data.js; "COSTUME" comes from the old site.
  { id: "costume-sascha-oda", title: "COSTUME", line1: "Sascha Oda", line2: "",
    media: [{ type: "image", full: "img/costume/saschaoda/01/01.webp", alt: "Costume", dataW: 907, dataH: 1200 }] },
  { id: "port-magazine-aude-le-barbey", title: "PORT MAGAZINE", line1: "Aude Le Barbey", line2: "",
    media: [{ type: "image", full: "img/portmagazine/isuue38/audelebarbey/01.webp", alt: "Port Magazine", dataW: 900, dataH: 1200 }] },
  { id: "office-jesper-lund", title: "Office", line1: "Jesper Lund", line2: "",
    media: [{ type: "image", full: "img/office/ofiicexkeen/01.webp", alt: "Office", dataW: 960, dataH: 1200 }] },
  // "Film 01" in website/portfolio-data.js is a placeholder, so no caption.
  { id: "film-01", title: "", line1: "", line2: "",
    media: [{ type: "video", thumb: "poster/film-01.jpg", src: "video/10000000_178996090025604_7361427675567393984_n.mp4", dataW: 1152, dataH: 648 }] },
  { id: "marrknull-aw26-jumbo-tsui", title: "MARRKNULL AW26", line1: "Jumbo Tsui", line2: "",
    media: [{ type: "image", full: "img/marrknull/AW26/01.webp", alt: "Marrknull AW26", dataW: 905, dataH: 1200 }] },
  { id: "numero-china-carla-rossi", title: "NUMERO CHINA", line1: "Carla Rossi", line2: "",
    media: [{ type: "image", full: "img/numerochina/01/01.webp", alt: "Numéro China", dataW: 925, dataH: 1200 }] },
  { id: "vogue-mexico-ward-ivan-rafik", title: "VOGUE MEXICO", line1: "Ward Ivan Rafik", line2: "",
    media: [{ type: "image", full: "img/voguemexico/01/01.webp", alt: "Vogue Mexico", dataW: 960, dataH: 1200 }] },
  // website/portfolio-data.js starts this project at 10.webp (the cover).
  { id: "numero-berlin-boris-ovini", title: "NUMERO BERLIN", line1: "Boris Ovini", line2: "",
    media: [{ type: "image", full: "img/numeroberlin/visionary/10.webp", alt: "Numéro Berlin", dataW: 966, dataH: 1200 }] },
  // line2 from the old site (editorial.html).
  { id: "sans-title-tess-petronio", title: "SANS TITLE", line1: "Tess Petronio", line2: "Suzanne Koller",
    media: [{ type: "image", full: "img/sanstitle/001/01.webp", alt: "Sans Title", dataW: 1200, dataH: 799 }] },

  // --- Not in website/portfolio-data.js: first image by folder/file name ---
  { id: "numero-switzerland-issue-01", title: "NUMERO SWITZERLAND", line1: "Antoine & Charlie", line2: "",
    media: [{ type: "image", full: "img/numeroswitzerland/issue_01/01.webp", alt: "Numéro Switzerland", dataW: 926, dataH: 1200 }] },
  // Title only: media name from the folder and the cover itself.
  { id: "numero-switzerland-issue-01-cover", title: "NUMERO SWITZERLAND", line1: "", line2: "",
    media: [{ type: "image", full: "img/numeroswitzerland/issue01_coverstory/01.webp", alt: "Numéro Switzerland", dataW: 960, dataH: 1200 }] },
  // "Film 03" in website/portfolio-data.js is a placeholder, so no caption.
  { id: "film-03", title: "", line1: "", line2: "",
    media: [{ type: "video", thumb: "poster/film-03.jpg", src: "video/SnapInsta.to_AQMuP5e3K8XwGZt7dNB39UvV1BTcnhQyF0FPYm0yeZ10FVIunnCrt1nRksLUJgr0bfTY0YB6_AMjVDr0YEhcMq0-seNKf7KnsDwH6uM.mp4", dataW: 752, dataH: 480 }] },
  { id: "numero-switzerland-issue-02", title: "NUMERO SWITZERLAND", line1: "", line2: "",
    media: [{ type: "image", full: "img/numeroswitzerland/issue_02/01.webp", alt: "Numéro Switzerland", dataW: 960, dataH: 1200 }] },
  { id: "numero-switzerland-homme", title: "NUMERO SWITZERLAND HOMME", line1: "Jonathan Wolpert", line2: "",
    media: [{ type: "image", full: "img/numeroswitzerlandhomme/issue_01/01.webp", alt: "Numéro Switzerland Homme", dataW: 960, dataH: 1200 }] },
  { id: "patcharavipa-ss26", title: "PATCHARAVIPA", line1: "Sirui Ma", line2: "",
    media: [{ type: "image", full: "img/patcharavipa/ss26/01.webp", alt: "Patcharavipa", dataW: 958, dataH: 1200 }] },
  { id: "untitled-lucie-rox", title: "UNTITLED", line1: "Lucie Rox", line2: "",
    media: [{ type: "image", full: "img/untitled/01/01.webp", alt: "Untitled", dataW: 960, dataH: 1200 }] },
  // Same img/beauty/ folder as the "Beauty" project above.
  { id: "beauty-02", title: "Beauty", line1: "", line2: "",
    media: [{ type: "image", full: "img/beauty/beauty02/01.webp", alt: "Beauty", dataW: 1200, dataH: 1200 }] },
  { id: "beauty-03", title: "Beauty", line1: "", line2: "",
    media: [{ type: "image", full: "img/beauty/beauty03/01.webp", alt: "Beauty", dataW: 900, dataH: 1200 }] },
  // No caption source found for the three below.
  { id: "circlezeroeight", title: "", line1: "", line2: "",
    media: [{ type: "image", full: "img/circlezeroeight/01.webp", alt: "", dataW: 913, dataH: 1200 }] },
  { id: "nicolasvalois", title: "", line1: "", line2: "",
    media: [{ type: "image", full: "img/img/nicolasvalois_01/01.webp", alt: "", dataW: 848, dataH: 1200 }] },
  { id: "bts", title: "", line1: "", line2: "",
    media: [{ type: "image", full: "img/bts/01.webp", alt: "", dataW: 1200, dataH: 675 }] },
];

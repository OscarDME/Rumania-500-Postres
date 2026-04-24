// SINGURA SURSĂ DE CONȚINUT VIZIBIL — tot textul de pe landing se află aici.
// Componentele nu trebuie să aibă string-uri hardcodate.
export const copy = {
  metadata: {
    title: "500 de Prăjituri Sănătoase — Bunica Maria",
    description:
      "500 de rețete pentru prăjituri moi, pufoase și delicioase, complet fără gluten, lactate și zahăr.",
    productName: "Cartea „Cele 500 de prăjituri ale Bunicii Maria”",
  },

  hero: {
    urgencyBar: "OFERTA EXPIRĂ ASTĂZI · 90% REDUCERE doar pentru azi",
    badge: "Carte nouă de rețete · +3.200 de clienți mulțumiți",
    headline: {
      before: "NU VEI MAI PRIVI NICIODATĂ ",
      accent: "PRĂJITURILE SĂNĂTOASE",
      after: " LA FEL DUPĂ CE VEI VEDEA ASTA.",
    },
    subheadline:
      "Descoperă 500 de rețete de prăjituri moi, pufoase și delicioase, complet fără gluten, lactate și zahăr. Bucură-te de fiecare înghițitură fără vinovăție sau restricții.",
    ctaLabel: "DA, VREAU REȚETELE",
    starsAriaLabel: "Evaluare 5 din 5 stele",
    starsRating: "5.0",
    socialProof: "+3.200 de cursanți certificați",
    trustChips: [
      { icon: "🌾", text: "Fără gluten" },
      { icon: "🥛", text: "Fără lactate" },
      { icon: "🍬", text: "Fără zahăr" },
    ],
    image: {
      src: "/hero-mockup.webp",
      alt: "Cartea 500 de prăjituri sănătoase de Bunica Maria",
    },
    floatingBadges: {
      speed: { icon: "⏱️", top: "Gata în doar", bottom: "20 min" },
      discount: { icon: "🔥", top: "Azi", bottom: "90% REDUCERE" },
    },
  },

  preview: {
    kicker: "Scurtă avanpremieră",
    headline: "VEZI BUNĂTĂȚILE PE CARE VEI ÎNVĂȚA SĂ LE PREPARI",
    items: [
      { src: "/preview/3-6.webp", alt: "Prăjitură sănătoasă 1" },
      { src: "/preview/2-7.webp", alt: "Prăjitură sănătoasă 2" },
      { src: "/preview/4-3.webp", alt: "Prăjitură sănătoasă 3" },
      { src: "/preview/3-5-1.webp", alt: "Prăjitură sănătoasă 4" },
      { src: "/preview/1-7.webp", alt: "Prăjitură sănătoasă 5" },
      { src: "/preview/4-2.webp", alt: "Prăjitură sănătoasă 6" },
      { src: "/preview/7-1-2-2.webp", alt: "Prăjitură sănătoasă 7" },
      { src: "/preview/1-5-1.webp", alt: "Prăjitură sănătoasă 8" },
      { src: "/preview/3-3.webp", alt: "Prăjitură sănătoasă 9" },
      { src: "/preview/2-4.webp", alt: "Prăjitură sănătoasă 10" },
      { src: "/preview/1-4.webp", alt: "Prăjitură sănătoasă 11" },
      { src: "/preview/1-6-1.webp", alt: "Prăjitură sănătoasă 12" },
      { src: "/preview/2-3.webp", alt: "Prăjitură sănătoasă 13" },
      { src: "/preview/chocolate.webp", alt: "Prăjitură sănătoasă cu ciocolată" },
      { src: "/preview/ce2f26de6ce5f6b237a4-1.webp", alt: "Prăjitură sănătoasă 15" },
      { src: "/preview/Design-sem-nome-5-1.webp", alt: "Prăjitură sănătoasă 16" },
      { src: "/preview/12-1-2.webp", alt: "Prăjitură sănătoasă 17" },
      { src: "/preview/2-6.webp", alt: "Prăjitură sănătoasă 18" },
      { src: "/preview/1-8.webp", alt: "Prăjitură sănătoasă 19" },
    ],
  },

  benefits: {
    kicker: "De ce o să te îndrăgostești",
    headline: "Prăjituri sănătoase fără compromisuri la gust",
    items: [
      { icon: "🎂", title: "500 de variante ca să nu te plictisești niciodată" },
      { icon: "✨", title: "Textură perfectă chiar și fără gluten" },
      { icon: "🌾", title: "Nu ai nevoie de făinuri speciale" },
      { icon: "⚡", title: "Prăjituri rapide gata în 20 de minute" },
      { icon: "💚", title: "Fără lapte și fără zahăr" },
      { icon: "📖", title: "Instrucțiuni simple pas cu pas" },
    ],
  },

  samples: {
    kicker: "Încearcă-le mai întâi",
    headline: "PRĂJITURI INCREDIBIL DE DELICIOASE (VARIANTA SĂNĂTOASĂ):",
    badge: "Fără zahăr, gluten și lactoză",
    items: [
      {
        name: "PRĂJITURĂ DE CIOCOLATĂ",
        variant: "(FIT ȘI PUFOASĂ)",
        kcal: "88",
        time: "20 min",
        src: "/samples/pastel-chocolate.gif",
        alt: "Prăjitură fit cu ciocolată",
      },
      {
        name: "PRĂJITURĂ CU MORCOVI",
        variant: "(CU GLAZURĂ FIT DE CIOCOLATĂ)",
        kcal: "120",
        time: "20 min",
        src: "/samples/pastel-zanahoria.gif",
        alt: "Prăjitură cu morcovi și ciocolată",
      },
      {
        name: "PRĂJITURĂ CU BANANE",
        variant: "(FIT)",
        kcal: "90",
        time: "20 min",
        src: "/samples/pastel-platano.gif",
        alt: "Prăjitură fit cu banane",
      },
      {
        name: "PRĂJITURĂ TRES LECHES",
        variant: "(FĂRĂ LACTOZĂ)",
        kcal: "100",
        time: "20 min",
        src: "/samples/pastel-tres-leches.gif",
        alt: "Prăjitură Tres Leches fără lactoză",
      },
      {
        name: "TORT DE CIOCOLATĂ",
        variant: "(DIN 5 INGREDIENTE)",
        kcal: "108",
        time: "20 min",
        src: "/samples/chocotorta.gif",
        alt: "Tort sănătos de ciocolată",
      },
      {
        name: "PRĂJITURĂ CU LĂMÂIE",
        variant: "(PREPARATĂ LA BLENDER)",
        kcal: "100",
        time: "20 min",
        src: "/samples/pastel-limon.gif",
        alt: "Prăjitură cu lămâie",
      },
      {
        name: "TORT RED VELVET",
        variant: "(FIT)",
        kcal: "105",
        time: "19 min",
        src: "/samples/pastel-red-velvet.gif",
        alt: "Tort Red Velvet Fit",
      },
    ],
    caloriesLabel: "Calorii",
    timeLabel: "Timp",
  },

  moreRecipesCta: {
    pretitle: "Și încă peste",
    big: "493",
    post: "DE REȚETE DE PRĂJITURI...",
    ctaLabel: "DESCARCĂ EXEMPLARUL MEU ACUM",
  },

  testimonials: {
    kicker: "Dovezi reale",
    headline: "VEZI CE SPUN CEI CARE DEJA COPTI CU NOI",
    subheadline: "Ce ne împărtășesc cursanții noștri",
    studentsBadge: "+ 3.200 de cursanți certificați",
    items: [
      {
        text: "Ieri am făcut prăjitura de ciocolată și n-a mai rămas nicio felie 😍 Familia deja m-a rugat să o mai fac și weekendul ăsta. Fără zahăr și fără gluten... pur și simplu incredibil!!",
        time: "10:23",
      },
      {
        text: "Nu-mi venea să cred că poate fi atât de bun fără lapte și zahăr. Prăjitura Tres Leches fără lactoză m-a lăsat fără cuvinte 🤯 De 3 zile coc fără oprire.",
        time: "11:47",
      },
      {
        text: "Am boala celiacă de 10 ani și n-am putut niciodată să mănânc un tort adevărat. Cu cartea asta mă pot bucura în sfârșit ca toată lumea 😭❤️",
        time: "14:02",
      },
      {
        text: "Prăjitura cu morcovi și glazură de ciocolată a ieșit EXACT ca la cofetărie, dar fără făină și zahăr. Am dus-o la birou și nu i-a venit nimănui să creadă că e sănătoasă hahaha.",
        time: "09:15",
      },
      {
        text: "Am cartea de o lună și am făcut deja peste 15 rețete. Red Velvet Fit iese pufos și are o culoare superbă 🎂 O recomand 100% tuturor!!",
        time: "16:38",
      },
      {
        text: "La început am fost sceptică... dar prima prăjitură m-a cucerit instantaneu. Prăjitura Fit cu banane în 20 de minute e o adevărată minune ⭐⭐⭐⭐⭐ Mulțumesc că existați.",
        time: "20:54",
      },
    ],
    mockup: {
      src: "/testimonials/mockup-grande.webp",
      alt: "Carte de rețete pe telefon, laptop și tabletă",
    },
  },

  categories: {
    kicker: "Ca să nu te plictisești niciodată",
    headline: "REȚETE ORGANIZATE PE CATEGORII",
    groups: [
      {
        title: "100 de Prăjituri umplute",
        items: [
          { src: "/preview/1-4.webp", alt: "Prăjitură umplută 1" },
          { src: "/preview/7-1-2-2.webp", alt: "Prăjitură umplută 2" },
          { src: "/preview/12-1-2.webp", alt: "Prăjitură umplută 3" },
          { src: "/preview/2-3.webp", alt: "Prăjitură umplută 4" },
          { src: "/preview/7-1-2-1.webp", alt: "Prăjitură umplută 5" },
        ],
      },
      {
        title: "100 de Prăjituri cu fructe",
        items: [
          { src: "/preview/1-5-1.webp", alt: "Prăjitură cu fructe 1" },
          { src: "/preview/2-4.webp", alt: "Prăjitură cu fructe 2" },
          { src: "/preview/3-3.webp", alt: "Prăjitură cu fructe 3" },
          { src: "/preview/Design-sem-nome-5-1.webp", alt: "Prăjitură cu fructe 4" },
          { src: "/preview/Design-sem-nome-6-1.webp", alt: "Prăjitură cu fructe 5" },
        ],
      },
      {
        title: "100 de Prăjituri clasice",
        items: [
          { src: "/preview/1-6-1.webp", alt: "Prăjitură clasică 1" },
          { src: "/preview/2-5-1.webp", alt: "Prăjitură clasică 2" },
          { src: "/preview/4-2.webp", alt: "Prăjitură clasică 3" },
        ],
      },
      {
        title: "100 de Prăjituri moderne",
        items: [
          { src: "/preview/1-7.webp", alt: "Prăjitură modernă 1" },
          { src: "/preview/2-6.webp", alt: "Prăjitură modernă 2" },
          { src: "/preview/3-5-1.webp", alt: "Prăjitură modernă 3" },
          { src: "/preview/4-3.webp", alt: "Prăjitură modernă 4" },
        ],
      },
      {
        title: "100 de Deserturi reci",
        items: [
          { src: "/preview/1-8.webp", alt: "Desert rece 1" },
          { src: "/preview/2-7.webp", alt: "Desert rece 2" },
          { src: "/preview/3-6.webp", alt: "Desert rece 3" },
          { src: "/preview/4-4.webp", alt: "Desert rece 4" },
        ],
      },
    ],
    ctaLabel: "VREAU REȚETELE",
  },

  story: {
    kicker: "Povestea din spatele cărții",
    headline: "CUM A LUAT NAȘTERE ACEASTĂ CARTE DE REȚETE?",
    paragraphs: [
      "Bunica Maria ne umplea mereu casa cu aroma prăjiturilor, care ne adunau pe toți laolaltă. Dar când fiica mea, Ioana, a aflat că nu mai poate consuma gluten, totul s-a schimbat.",
      "Ca nutriționist, am decis împreună cu mama mea să transformăm aceste rețete în variante sigure: fără zahăr, fără gluten și fără lactoză. După multe încercări, am ajuns la niște rezultate care au surprins-o până și pe Bunica Maria.",
      "Așa s-a născut această carte: o moștenire de familie, plină de gust și iubire, care acum poate face parte și din povestea ta.",
    ],
    image: {
      src: "/story.webp",
      alt: "Bunica Maria și nepoata ei în bucătărie",
    },
  },

  bonuses: {
    kicker: "Cadouri incluse",
    headline: "PRIMEȘTI +5 BONUSURI GRATUITE",
    items: [
      {
        label: "BONUS CARTEA 1",
        name: "BISCUIȚI ȘI BRIOȘE",
        desc: "20 de rețete irezistibile de biscuiți crocanți și brioșe pufoase, delicioase și sănătoase.",
        price: "95 lei",
        freeLabel: "AZI ESTE GRATUIT",
        image: { src: "/bonuses/bonus-galletas.webp", alt: "Bonus Biscuiți și Brioșe" },
      },
      {
        label: "BONUS CARTEA 2",
        name: "REȚETE PROTEICE LA AIR FRYER",
        desc: "20 de rețete pentru mese rapide, sănătoase și bogate în proteine, gătite doar la air fryer.",
        price: "95 lei",
        freeLabel: "AZI ESTE GRATUIT",
        image: { src: "/bonuses/bonus-freidora.webp", alt: "Bonus Air Fryer" },
      },
      {
        label: "BONUS CARTEA 3",
        name: "GOGOȘI SĂNĂTOASE",
        desc: "Gustări crocante, fără vinovăție, sănătoase și pline de savoare la fiecare înghițitură.",
        price: "95 lei",
        freeLabel: "AZI ESTE GRATUIT",
        image: { src: "/bonuses/bonus-bunuelos.webp", alt: "Bonus Gogoși Sănătoase" },
      },
      {
        label: "BONUS CARTEA 4",
        name: "REȚETE DE SALATE DELICIOASE",
        desc: "Salate proaspete, ușoare și sănătoase, pentru a te bucura în fiecare zi de gust și echilibru.",
        price: "95 lei",
        freeLabel: "AZI ESTE GRATUIT",
        image: { src: "/bonuses/bonus-ensaladas.webp", alt: "Bonus Salate" },
      },
      {
        label: "BONUS CARTEA 5",
        name: "67 DE SUCURI DETOX",
        desc: "Recapătă-ți energia cu 67 de rețete de sucuri detoxifiante, răcoritoare, naturale și hrănitoare.",
        price: "95 lei",
        freeLabel: "AZI ESTE GRATUIT",
        image: { src: "/bonuses/bonus-sucos.webp", alt: "Bonus 67 Sucuri Detox" },
      },
    ],
    secretBonus: {
      label: "+3 BONUSURI SECRETE",
      name: "Surprize exclusive pentru cei care iau cartea de rețete astăzi",
      price: "285 lei",
      freeLabel: "AZI ESTE GRATUIT",
      image: { src: "/bonuses/bonus-secreto.webp", alt: "Cutie cu bonusuri secrete" },
    },
    ctaLabel: "VREAU REȚETELE",
  },

  audience: {
    kicker: "E pentru tine?",
    headline: "PENTRU PERSOANELE CARE CAUTĂ:",
    items: [
      "Rețete mai sănătoase",
      "O schimbare a obiceiurilor alimentare",
      "Soluții pentru intoleranța la lactoză",
      "Preparate fără gluten (boala celiacă)",
      "Deserturi potrivite pentru diabetici",
    ],
  },

  finalCta: {
    flagline: "Primii 100 de clienți primesc 20 de lecții video gratuite",
    headline: "CARTEA CU 500 DE PRĂJITURI DE LA BUNICA MARIA ®",
    subheadline: "Tot ce ai nevoie pentru a coace fără vinovăție",
    includesTitle: "+5 CĂRȚI GRATUITE:",
    includes: [
      "+ REȚETE DELICIOASE DE SALATE ȘI DRESSINGURI",
      "+ REȚETE DE GOGOȘI SĂNĂTOASE",
      "+ REȚETE DE BISCUIȚI ȘI BRIOȘE",
      "+ REȚETE PROTEICE LA AIR FRYER",
      "+ 67 DE REȚETE DE SUCURI DETOX",
    ],
    secretTitle: "+3 BONUSURI SECRETE:",
    discountLabel: "90% REDUCERE",
    regularPriceLabel: "PREȚ VECHI:",
    regularPrice: "285 lei",
    regularPriceSuffix: "...",
    offerPriceLabel: "Doar astăzi",
    offerCurrency: "",
    offerPrice: "35 lei",
    button: "DA, O VREAU",
    urgencyNote: "**OFERTA EXPIRĂ ASTĂZI**",
    paymentLabel: "METODE DE PLATĂ",
    paymentImage: { src: "/payment-methods.webp", alt: "Metode de plată" },
    secureLabel: "SITE 100% SIGUR",
    secureImage: { src: "/secure-site.webp", alt: "Site 100% sigur" },
    image: { src: "/final-mockup.webp", alt: "Cărți de rețete pe toate platformele" },
    bonusesBadge: "+8 bonusuri gratuite",
    discountStickerLabel: "Reducere",
    discountStickerValue: "90% REDUCERE",
  },

  delivery: {
    kicker: "Livrare",
    headline: "CUM VOI PRIMI REȚETELE?",
    items: [
      { icon: "🖨️", text: "Pot fi tipărite pe hârtie." },
      { icon: "📱", text: "Le poți vizualiza pe telefon." },
      { icon: "💻", text: "Le poți citi pe laptop." },
      { icon: "✅", text: "Le poți vizualiza și pe tabletă." },
      { icon: "♾️", text: "Acces pe viață: inclusiv la noile rețete." },
      { icon: "📩", text: "Ai pierdut rețeta? Ți-o trimitem din nou." },
      { icon: "📚", text: "Primești cărți noi în fiecare lună." },
    ],
  },

  guarantee: {
    kicker: "Fără riscuri",
    headline: "ÎNCEARCĂ FĂRĂ NICIUN RISC — Garanție necondiționată de 14 zile.",
    body: "Ai 14 zile la dispoziție să le testezi. Dacă rețetele nu te conving, îți voi returna banii până la ultimul ban. Fără complicații. Fără stres.",
    alt: "Ștampilă garanție necondiționată 14 zile",
    image: { src: "/guarantee-badge.webp", alt: "14 zile garanție" },
  },

  faq: {
    kicker: "Întrebări și răspunsuri",
    headline: "FAQ — ce întreabă toată lumea",
    items: [
      {
        q: "Sunt scumpe ingredientele?",
        a: "Nu! Folosim ingrediente simple pe care le ai deja în casă: fără produse complicate sau scumpe.",
      },
      {
        q: "Chiar e gustoasă o prăjitură fără grâu, lapte, lactoză și zahăr?",
        a: "Da, și partea cea mai bună: se prepară extrem de ușor! Rețetele sunt create astfel încât să păstreze gustul pe care îl adori, cu ingrediente ușoare și simplu de găsit.",
      },
      {
        q: "Sunt rețetele potrivite pentru începători (care nu au mai făcut prăjituri niciodată)?",
        a: "Sunt ideale pentru începători! Totul este explicat pas cu pas, cu ingrediente obișnuite și instrucțiuni clare. Dacă știi să pornești cuptorul, înseamnă că poți să le prepari.",
      },
      {
        q: "Cu ce se îndulcesc prăjiturile?",
        a: "Poți alege varianta preferată: cu fructe (banane sau curmale), cu miere sau cu îndulcitori precum stevia și eritritol. În fiecare rețetă este specificată cantitatea exactă.",
      },
      {
        q: "Pot înlocui zahărul cu fructe (banane, curmale)? Cum fac asta?",
        a: "Da, poți! Și e mai simplu decât pare: rețeta îți spune ce fruct să folosești, cât să adaugi și cum să obții un desert perfect, însiropat și dulce.",
      },
      {
        q: "Ce tipuri de făină folosiți?",
        a: "Folosim un mix de făinuri, cum ar fi făina de orez, de ovăz sau de migdale, pe care le poți găsi în orice supermarket, adesea chiar mai ieftine decât făina de grâu.",
      },
      {
        q: "În câte minute este gata prăjitura?",
        a: "Majoritatea durează 20 sau 30 de minute. Până îți faci cafeaua, prăjitura îți va umple deja bucătăria de arome.",
      },
    ],
  },

  footer: {
    brand: "Bunica Maria",
    links: [
      { label: "Politică de confidențialitate", href: "https://grandmateresa.com/politica-de-privacidad/" },
      { label: "Termeni și condiții", href: "https://grandmateresa.com/condiciones-de-uso/" },
      { label: "Politică de retur", href: "https://grandmateresa.com/politica-de-devoluciones/" },
    ],
    copyright: "© 2026 / Bunica Maria – Toate drepturile rezervate.",
  },

  stickyCta: {
    priceLabel: "Azi",
    offerPrice: "35 lei",
    strikePrice: "285 lei",
    ctaLabel: "O VREAU",
  },
};
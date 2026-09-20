// Mock data for DC Électroménager Pièces
// NOTE: This is MOCK data used for the frontend-only teaser. It will be replaced
// by real backend data later. Prices are in CAD.

export const LOGO_URL =
  "https://customer-assets-wrfwihn1.emergentagent.net/job_388bb5fd-2a00-4b1e-bd26-3e4ab9c944bd/artifacts/phry4ciw_image.png";

export const CONTACT = {
  brand: "DC Électroménager Pièces",
  phone: "+1 (514) 708-1010",
  phoneRaw: "+15147081010",
  email: "Dcservicesinfo@dcstravel.net",
  address: "4100 rue Jarry E.",
  city: "Montréal, QC H1Z 2H4",
  hours: "Lun–Sam : 9h – 18h",
  mapsQuery: "4100 rue Jarry Est, Montréal, QC H1Z 2H4",
};

export const ANNOUNCEMENTS = [
  "Pièces d'origine · Toutes les marques",
  "Livraison partout au Canada",
  "Garantie sur les pièces",
  "Paiement 100% sécurisé",
  "Ramassage en magasin à Montréal",
  "Aide pour trouver votre numéro de modèle",
];

const IMG = {
  refrigerator:
    "https://images.unsplash.com/photo-1721613877687-c9099b698faa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxyZWZyaWdlcmF0b3J8ZW58MHx8fHwxNzg5OTI1ODE2fDA&ixlib=rb-4.1.0&q=85",
  dishwasher:
    "https://images.pexels.com/photos/3829555/pexels-photo-3829555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  washer:
    "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHx3YXNoaW5nJTIwbWFjaGluZXxlbnwwfHx8fDE3ODk5MjU4MTZ8MA&ixlib=rb-4.1.0&q=85",
  cooking:
    "https://images.unsplash.com/photo-1623114112815-74a4b9fe505d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzB8MHwxfHNlYXJjaHwxfHxvdmVufGVufDB8fHx8MTc4OTkyNTgxNnww&ixlib=rb-4.1.0&q=85",
  dryer:
    "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHxkcnllcnxlbnwwfHx8fDE3ODk5MjU4MTZ8MA&ixlib=rb-4.1.0&q=85",
  microwave:
    "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwxfHxtaWNyb3dhdmV8ZW58MHx8fHwxNzg5OTI1ODE2fDA&ixlib=rb-4.1.0&q=85",
  "range-hood":
    "https://images.unsplash.com/photo-1778731525619-b0d24e05813a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHw0fHxyYW5nZSUyMGhvb2R8ZW58MHx8fHwxNzg5OTI1ODE2fDA&ixlib=rb-4.1.0&q=85",
  "water-filters":
    "https://images.unsplash.com/photo-1628767719221-fdf36470b997?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHw0fHx3YXRlciUyMGZpbHRlcnxlbnwwfHx8fDE3ODk5MjU4MTZ8MA&ixlib=rb-4.1.0&q=85",
  parts:
    "https://images.unsplash.com/photo-1632496497047-706290273235?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwyfHxzcGFyZSUyMHBhcnRzfGVufDB8fHx8MTc4OTkyNTc4OXww&ixlib=rb-4.1.0&q=85",
};

export const HERO_IMAGE =
  "https://images.pexels.com/photos/38190070/pexels-photo-38190070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export const CATEGORIES = [
  { slug: "refrigerator", name: "Réfrigérateurs", image: IMG.refrigerator },
  { slug: "dishwasher", name: "Lave-vaisselle", image: IMG.dishwasher },
  { slug: "cooking", name: "Cuisinières & Fours", image: IMG.cooking },
  { slug: "washer", name: "Laveuses", image: IMG.washer },
  { slug: "dryer", name: "Sécheuses", image: IMG.dryer },
  { slug: "microwave", name: "Micro-ondes", image: IMG.microwave },
  { slug: "range-hood", name: "Hottes de cuisine", image: IMG["range-hood"] },
  { slug: "bbq", name: "BBQ & Grils", image: IMG.parts },
  { slug: "water-filters", name: "Filtres à eau", image: IMG["water-filters"] },
  { slug: "cleaners", name: "Produits nettoyants", image: IMG.parts },
  { slug: "tools", name: "Outils & Accessoires", image: IMG.parts },
];

export const BRANDS = [
  "Whirlpool", "LG", "Samsung", "GE", "Bosch", "Frigidaire", "Maytag",
  "KitchenAid", "Electrolux", "Kenmore", "Danby", "Panasonic", "Miele",
  "Speed Queen", "Thermador", "Broan", "Weber", "Napoleon", "Broil King",
  "Fisher & Paykel", "ASKO", "Midea", "Blomberg", "Comerco",
];

// Part-type templates per category with realistic price ranges (CAD)
const PART_TEMPLATES = {
  refrigerator: [
    ["Filtre à eau", 34, 79], ["Ensemble machine à glaçons", 89, 249],
    ["Joint de porte", 59, 189], ["Ventilateur d'évaporateur", 42, 129],
    ["Thermostat de dégivrage", 22, 64], ["Valve d'entrée d'eau", 38, 98],
    ["Bac à légumes", 29, 89], ["Tablette en verre", 44, 119],
    ["Carte de contrôle", 89, 289], ["Balconnet de porte", 24, 74],
    ["Compresseur", 179, 449], ["Élément de dégivrage", 34, 96],
  ],
  dishwasher: [
    ["Pompe de vidange", 42, 129], ["Pompe de circulation", 89, 259],
    ["Bras de lavage", 28, 88], ["Loquet de porte", 34, 96],
    ["Élément chauffant", 48, 139], ["Carte de contrôle", 79, 239],
    ["Panier supérieur", 59, 189], ["Flotteur de sécurité", 18, 46],
    ["Distributeur de savon", 36, 98], ["Joint de porte", 32, 92],
  ],
  cooking: [
    ["Élément de cuisson", 32, 98], ["Élément de gril", 34, 104],
    ["Brûleur de surface", 26, 84], ["Allumeur", 29, 89],
    ["Sonde de four", 22, 62], ["Bouton de contrôle", 14, 44],
    ["Charnière de porte", 39, 118], ["Surface vitrocéramique", 129, 349],
    ["Grille de fonte", 34, 96], ["Thermostat", 28, 88],
  ],
  washer: [
    ["Pompe de vidange", 38, 118], ["Courroie d'entraînement", 18, 52],
    ["Accouplement de moteur", 16, 44], ["Tige de suspension", 34, 96],
    ["Joint de porte (soufflet)", 89, 219], ["Valve d'entrée d'eau", 36, 98],
    ["Interrupteur de couvercle", 24, 68], ["Agitateur", 49, 149],
    ["Amortisseur", 28, 82], ["Carte de contrôle", 89, 269],
  ],
  dryer: [
    ["Élément chauffant", 42, 128], ["Courroie de tambour", 18, 54],
    ["Roulette de tambour", 14, 42], ["Poulie tendeuse", 16, 46],
    ["Fusible thermique", 12, 34], ["Thermostat", 18, 52],
    ["Filtre à charpie", 22, 64], ["Allumeur", 34, 96],
    ["Interrupteur de porte", 16, 46], ["Turbine de ventilation", 29, 84],
  ],
  microwave: [
    ["Magnétron", 79, 229], ["Interrupteur de porte", 12, 38],
    ["Moteur de plateau", 24, 68], ["Plateau en verre", 29, 79],
    ["Filtre au charbon", 16, 44], ["Filtre à graisse", 14, 42],
    ["Diode", 11, 32], ["Condensateur", 22, 62], ["Ampoule", 9, 26],
    ["Panneau de contrôle", 69, 199],
  ],
  "range-hood": [
    ["Filtre à graisse", 16, 52], ["Filtre au charbon", 18, 56],
    ["Moteur de ventilateur", 59, 179], ["Lumière DEL", 22, 64],
    ["Interrupteur de contrôle", 18, 52], ["Pale de ventilateur", 24, 68],
  ],
  bbq: [
    ["Tube de brûleur", 24, 74], ["Grille de cuisson", 34, 129],
    ["Plaque de chaleur", 22, 68], ["Kit d'allumage", 19, 58],
    ["Barre de saveur", 18, 54], ["Bac à graisse", 14, 42],
    ["Boyau régulateur", 29, 84], ["Housse de gril", 39, 119],
  ],
  "water-filters": [
    ["Filtre à eau réfrigérateur", 34, 79], ["Filtre à eau EveryDrop", 44, 89],
    ["Filtre à air réfrigérateur", 16, 42], ["Filtre à eau en ligne", 28, 62],
  ],
  cleaners: [
    ["Nettoyant lave-vaisselle", 9, 24], ["Nettoyant laveuse", 9, 24],
    ["Détergent à lessive", 19, 79], ["Nettoyant vitrocéramique", 12, 28],
    ["Rince-éclat", 8, 18], ["Sel pour lave-vaisselle", 6, 14],
    ["Crayons de retouche", 8, 16],
  ],
  tools: [
    ["Tournevis multi-embouts", 29, 59], ["Ensemble de douilles", 22, 48],
    ["Multimètre numérique", 34, 89], ["Kit de conduit de sécheuse", 16, 42],
    ["Glisseurs d'électroménager", 12, 28], ["Ruban à mesurer", 9, 24],
  ],
};

// Deterministic pseudo-random for stable prices/skus across renders
function seeded(n) {
  const x = Math.sin(n) * 10000;
  return x - Math.floor(x);
}

function price(min, max, seed) {
  const v = min + seeded(seed) * (max - min);
  return Math.round(v * 100) / 100;
}

function skuFor(brand, category, i) {
  const b = brand.replace(/[^A-Za-z]/g, "").slice(0, 3).toUpperCase();
  const c = category.slice(0, 2).toUpperCase();
  const num = 100000 + Math.floor(seeded(i * 7.3 + brand.length) * 899999);
  return `${b}-${c}${num}`;
}

// Generate the full catalog
function buildCatalog() {
  const items = [];
  let idc = 0;
  CATEGORIES.forEach((cat) => {
    const templates = PART_TEMPLATES[cat.slug] || PART_TEMPLATES.tools;
    // Which brands apply
    const brandPool =
      cat.slug === "bbq"
        ? ["Weber", "Napoleon", "Broil King"]
        : cat.slug === "cleaners"
        ? ["Comerco", "Affresh", "Glisten", "Persil", "Somat", "Cerama Bryte"]
        : cat.slug === "tools"
        ? ["Megapro", "Reliable", "Supco", "Comerco"]
        : BRANDS.filter((b) => !["Weber", "Napoleon", "Broil King"].includes(b));

    templates.forEach((t) => {
      brandPool.forEach((brand) => {
        idc += 1;
        const [pname, min, max] = t;
        const p = price(min, max, idc + pname.length);
        items.push({
          id: `p${idc}`,
          sku: skuFor(brand, cat.slug, idc),
          name: `${pname} ${brand}`,
          shortName: pname,
          brand,
          category: cat.slug,
          categoryName: cat.name,
          price: p,
          image: cat.image,
          inStock: seeded(idc) > 0.08,
          description: `Pièce de rechange d'origine — ${pname.toLowerCase()} compatible avec les appareils ${brand}. Vendue à l'unité. Vérifiez votre numéro de modèle avant de commander.`,
        });
      });
    });
  });
  return items;
}

export const PRODUCTS = buildCatalog();

export const FEATURED = PRODUCTS.filter(
  (p) => ["water-filters", "cleaners", "tools", "dryer"].includes(p.category)
).slice(0, 10);

export const NEW_ITEMS = PRODUCTS.slice(0, 8);

export function formatCAD(n) {
  return new Intl.NumberFormat("fr-CA", {
    style: "currency",
    currency: "CAD",
  }).format(n);
}

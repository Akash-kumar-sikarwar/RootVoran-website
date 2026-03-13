import hairSerum1 from "../assets/images/hair-serum/1.jpg";
import sunscreenGel1 from "../assets/images/sunscreen-gel/1.png";
import facewash1 from "../assets/images/facewash/1.png";
import effervescent1 from "../assets/images/effervescent-tablets/1.png";

const products = [
  {
    id: 1,
    name: "Advance Hair Care Serum",
    tagline: "Restore. Repair. Revitalize.",
    description:
      "A lightweight, fast-absorbing serum that strengthens hair from root to tip, reducing breakage and adding luminous shine.",
    ingredients: ["Redensyl", "Baicapil", "Procapil", "Capilia Longa"],
    images: [hairSerum1],
    color: "#e8ddd0",
    amazonUrl: "https://amazon.in",
  },
  {
    id: 2,
    name: "Glutathione Sunscreen Gel",
    tagline: "Shield. Brighten. Protect.",
    description:
      "SPF 50+ broad-spectrum sunscreen infused with Glutathione for sun protection and a radiant, even-toned complexion.",
    ingredients: ["Glutathione", "Hyaluronic Acid", "Vitamin E", "SPF 50+"],
    images: [sunscreenGel1],
    color: "#f5f0e3",
    amazonUrl: "https://amazon.in",
  },
  {
    id: 3,
    name: "Glutathione Facewash",
    tagline: "Cleanse. Glow. Renew.",
    description:
      "A gentle, sulfate-free facewash enriched with Glutathione that deeply cleanses while brightening your skin with every wash.",
    ingredients: ["Glutathione", "Salicylic Acid", "Vitamin E", "Niacinamide"],
    images: [facewash1],
    color: "#f0ebe4",
    amazonUrl: "https://amazon.in",
  },
  {
    id: 4,
    name: "Glutathione Effervescent Tablets",
    tagline: "Glow from Within.",
    description:
      "Dissolve one tablet daily for powerful antioxidant support that promotes radiant skin, detoxification, and inner wellness.",
    ingredients: ["Glutathione", "Vitamin C", "Vitamin E", "Collagen Booster"],
    images: [effervescent1],
    color: "#fdf5e6",
    amazonUrl: "https://amazon.in",
  },
];

export default products;

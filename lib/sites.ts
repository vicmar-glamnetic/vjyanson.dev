export type Platform = "Shopify" | "WordPress";

export type Site = {
  name: string;
  url: string;
  platform: Platform;
  sector: string;
  /** Slug of a screenshot in /public/work. Omitted when the live site no longer shows my work. */
  shot?: string;
};

/*
 * Removed in Nov 2026 because the live domains no longer show the work:
 * amarala.co (domain lapsed, now a gambling site), cartellash.ca (redirects away),
 * swallowsndaggers.com and kaivallabs.com (domains no longer resolve).
 */
export const SITES: Site[] = [
  { name: "INH Hair", url: "https://inhhair.com", platform: "Shopify", sector: "Hair extensions", shot: "inh-hair" },
  { name: "INH Professional", url: "https://inhprofessional.com", platform: "Shopify", sector: "Pro stylist channel", shot: "inh-professional" },
  { name: "Glamnetic", url: "https://glamnetic.com", platform: "Shopify", sector: "Beauty", shot: "glamnetic" },
  { name: "PureCare", url: "https://www.purecare.com", platform: "Shopify", sector: "Bedding", shot: "purecare" },
  { name: "Goody's Powder", url: "https://www.goodyspowder.com", platform: "Shopify", sector: "Health", shot: "goodys-powder" },
  { name: "Eskute", url: "https://eskute.de", platform: "Shopify", sector: "E-bikes", shot: "eskute" },
  { name: "Atlantic Naturals", url: "https://atlanticnaturals.com", platform: "Shopify", sector: "Supplements", shot: "atlantic-naturals" },
  { name: "Critter Concepts", url: "https://critterconcepts.com", platform: "Shopify", sector: "Pet products", shot: "critter-concepts" },
  { name: "DCB Worldwide", url: "https://dcbworldwide.com", platform: "Shopify", sector: "Apparel", shot: "dcb-worldwide" },
  { name: "Moken Vision", url: "https://mokenvision.myshopify.com", platform: "Shopify", sector: "Eyewear", shot: "moken-vision" },
  { name: "My Work Supply", url: "https://myworksupply.com", platform: "Shopify", sector: "Workplace supplies" },
  { name: "Jessica Rich", url: "https://jessicarich.com", platform: "Shopify", sector: "Footwear", shot: "jessica-rich" },
  { name: "Macklowe Gallery", url: "https://www.macklowegallery.com", platform: "Shopify", sector: "Fine jewellery", shot: "macklowe-gallery" },
  { name: "Vanity Makeup", url: "https://vanitymakeup.com", platform: "Shopify", sector: "Beauty education", shot: "vanity-makeup" },
  { name: "Homecraft Textiles", url: "https://www.homecrafttextiles.com.au", platform: "Shopify", sector: "Fabrics", shot: "homecraft-textiles" },
  { name: "Invatech Italia", url: "https://invatechitalia.com", platform: "Shopify", sector: "Equipment", shot: "invatech-italia" },
  { name: "Peace Love Hormones", url: "https://www.peacelovehormones.com", platform: "Shopify", sector: "Herbal wellness", shot: "peace-love-hormones" },
  { name: "Schroder USA", url: "https://schroderusa.com", platform: "Shopify", sector: "Outdoor power tools", shot: "schroder-usa" },
  { name: "McCrystal Creations", url: "https://mccrystalcreations.com", platform: "Shopify", sector: "Home decor", shot: "mccrystal-creations" },
  { name: "Urban Depot", url: "https://urbandepot.com.au", platform: "Shopify", sector: "Gifts & homewares", shot: "urban-depot" },

  { name: "247 Pro Restoration", url: "https://247prorestoration.com", platform: "WordPress", sector: "Property restoration", shot: "247-pro-restoration" },
  { name: "Modern Comfort Builders", url: "http://moderncomfortbuilders.com", platform: "WordPress", sector: "Construction & remodeling", shot: "modern-comfort-builders" },
  { name: "Bidi Vapor", url: "https://bidivapor.com", platform: "WordPress", sector: "Consumer goods", shot: "bidi-vapor" },
  { name: "McKay Drilling", url: "https://mckaydrilling.com.au", platform: "WordPress", sector: "Mining services", shot: "mckay-drilling" },
  { name: "Glowing Rooms", url: "https://www.glowingrooms.com.au", platform: "WordPress", sector: "Entertainment venue", shot: "glowing-rooms" },
  { name: "Vital Vet", url: "http://vitalvet.com.au", platform: "WordPress", sector: "Veterinary clinic", shot: "vital-vet" },
  { name: "QRX Digital", url: "https://qrxdigital.com", platform: "WordPress", sector: "Marketing agency", shot: "qrx-digital" },
];

export const domainOf = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");

export const shotSrc = (slug: string, full = false) =>
  `/work/${slug}${full ? "-full" : ""}.webp`;

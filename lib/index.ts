export const NAV_LINKS = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#process", label: "Process" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
] as const;

const BASE = "/assets/images";

export const IMAGES = {
    logo: `${BASE}/logo.png`,
    heroResidential: `${BASE}/hero.jpg`,
    entryInterior: `${BASE}/refined-interior.jpg`,
    houseElevation: `${BASE}/completed-house-front.jpg`,
    underConstruction: `${BASE}/storey-building.jpg`,
    kitchenInstall: `${BASE}/kitchen.jpg`,
    interiorMasonry: `${BASE}/masonry-room.jpg`,
    flyerFloorPlan: `${BASE}/flyer.jpg`,
    villaRender: `${BASE}/villas.jpg`,
} as const;

export const BRAND = {
    name: "CHRYSOLYTE",
    tagline: "Design + Build / Kenya",
} as const;

/** Placeholder details carried over from the design  confirm before launch. */
export const CONTACT = {
    name: "CHRYSOLYTE",
    email: "hello@chrysolyte.co.ke",
    phone: "+254 700 000 000",
    phoneHref: "+254700000000",
    address: "P.O. Box 00000 - 00100 Nairobi, Kenya",
} as const;

export const DISCIPLINES = [
    "Architecture",
    "Interiors",
    "Landscape",
    "Construction",
    "Value Engineering",
    "Project Management",
] as const;

export const FOOTER_TAGLINE =
    "Architecture • Interiors • Landscape • Project Delivery";
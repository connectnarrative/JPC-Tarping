export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  number: string;
  slug: string;
  title: string;
  titleLines: [string, string];
  short: string;
  hero: string;
  image: string;
  imageAlt: string;
  statement: string;
  detail: string;
  protects: string[];
  idealFor: string[];
  approach: { title: string; copy: string }[];
  faqs: ServiceFaq[];
};

export const services: Service[] = [
  {
    number: "01",
    slug: "full-interior-wraps",
    title: "Full interior wraps",
    titleLines: ["Full interior", "wraps"],
    short: "Wall-to-wall protection for finished rooms, millwork, fixtures, and high-value interiors.",
    hero: "A complete protective envelope built around the finished space—before demolition, trades, dust, and daily traffic arrive.",
    image: "/images/services/full-interior-wraps.png",
    imageAlt: "Luxury residential interior professionally wrapped for renovation protection",
    statement: "Protect the room as one complete system.",
    detail: "Full interior wrapping combines surface-specific materials, clean taped seams, protected access points, and a coordinated installation plan. Instead of treating each item separately after work begins, JPC prepares the entire finished environment so contractors can move with confidence from day one.",
    protects: ["Walls, doors & glazing", "Custom millwork & cabinetry", "Fixtures, counters & appliances", "Finished rooms & occupied zones"],
    idealFor: ["Luxury home renovations", "Hotel and suite turnovers", "Occupied commercial interiors", "High-value restoration projects"],
    approach: [
      { title: "Map every finish", copy: "We identify exposed surfaces, access needs, and the trades moving through the room." },
      { title: "Build the envelope", copy: "Materials are measured, fitted, taped, and reinforced around the complete work zone." },
      { title: "Maintain & remove", copy: "Protection stays serviceable through the job and comes down carefully at completion." },
    ],
    faqs: [
      { question: "Does a full wrap make the room unusable?", answer: "The protected work zone is intentionally controlled, but access doors and pathways can be incorporated where the project requires them." },
      { question: "Can delicate finishes be wrapped safely?", answer: "Yes. Material and tape selection is matched to the surface, finish, duration, and site conditions before installation." },
      { question: "Can the wrap remain for a long project?", answer: "Yes. We plan for the expected project duration and can inspect, maintain, or adjust the system as phases change." },
    ],
  },
  {
    number: "02",
    slug: "dust-containment",
    title: "Dust containment",
    titleLines: ["Dust", "containment"],
    short: "Sealed work zones and temporary barriers that keep dust, debris, and overspray where they belong.",
    hero: "Separate active construction from clean, occupied space with disciplined barriers, sealed transitions, and controlled access.",
    image: "/images/services/dust-containment.png",
    imageAlt: "Floor-to-ceiling dust containment barrier with sealed access doorway",
    statement: "Control the work zone. Protect everything beyond it.",
    detail: "Dust travels through open doors, shared corridors, return-air paths, and tiny gaps. JPC containment systems create a clear boundary around active work using floor-to-ceiling barriers, reinforced seams, protected entries, and site-specific transitions that help the rest of the property stay cleaner and more operational.",
    protects: ["Occupied rooms & tenant areas", "HVAC-adjacent spaces", "Corridors and shared access", "Furniture, stock & electronics"],
    idealFor: ["Demolition and drywall", "Painting and finishing", "Restoration and remediation", "Retail, office and healthcare fit-outs"],
    approach: [
      { title: "Define the boundary", copy: "We review air paths, doors, corridors, and the clean-to-work-zone transition." },
      { title: "Seal the separation", copy: "Barriers are fitted from floor to ceiling with reinforced edges and controlled entry." },
      { title: "Adapt to the phase", copy: "Containment can shift as the active work zone moves through the building." },
    ],
    faqs: [
      { question: "Can containment be installed in an occupied building?", answer: "Yes. That is one of its primary uses. We plan access and sequencing to reduce disruption to people outside the work zone." },
      { question: "Do you create zipper-door access?", answer: "Controlled access can be integrated using the opening type best suited to the site and frequency of use." },
      { question: "Is dust containment the same as hazardous-material containment?", answer: "No. Regulated hazardous-material work requires project-specific engineering, procedures, and licensed specialists. JPC scopes protection to the requirements provided for the project." },
    ],
  },
  {
    number: "03",
    slug: "floor-protection",
    title: "Floor protection",
    titleLines: ["Floor", "protection"],
    short: "Durable coverage for hardwood, stone, tile, carpet, and other finished surfaces.",
    hero: "Give crews a durable working path without gambling with hardwood, stone, tile, carpet, or finished thresholds.",
    image: "/images/services/floor-protection.png",
    imageAlt: "Installer fitting heavy-duty floor protection over finished flooring",
    statement: "The floor carries the entire project. Protect it first.",
    detail: "Every trade, delivery, tool cart, ladder, and debris load crosses the floor. JPC selects protection around the surface below and the traffic above, then builds continuous coverage with clean edges, reinforced routes, protected transitions, and details that reduce movement during the job.",
    protects: ["Hardwood and engineered wood", "Natural stone and tile", "Carpet and resilient flooring", "Thresholds, landings and transitions"],
    idealFor: ["Material delivery routes", "Interior renovations", "Elevator-to-suite pathways", "Move-ins and commercial turnovers"],
    approach: [
      { title: "Match the surface", copy: "We account for finish, breathability, cure time, traffic, and project duration." },
      { title: "Reinforce the route", copy: "High-use paths, turns, transitions, and loading points receive deliberate detailing." },
      { title: "Keep it secure", copy: "Edges and seams are checked so the protective layer stays useful as work progresses." },
    ],
    faqs: [
      { question: "Can newly finished floors be protected?", answer: "Sometimes, but cure time and manufacturer requirements matter. We review the floor type and finish before selecting a system." },
      { question: "Will tape touch the finished floor?", answer: "Our preferred detailing limits direct adhesion to sensitive finishes whenever the system and site allow it." },
      { question: "Can you protect an entire delivery route?", answer: "Yes. Protection can continue through entrances, lobbies, elevators, corridors, stairs, and the active work area." },
    ],
  },
  {
    number: "04",
    slug: "stairs-corridors",
    title: "Stairs & corridors",
    titleLines: ["Stairs &", "corridors"],
    short: "Precision protection for high-traffic access routes, elevators, lobbies, and shared areas.",
    hero: "Turn the building’s busiest circulation routes into protected, clearly defined paths for crews, tools, and materials.",
    image: "/images/services/stairs-corridors.png",
    imageAlt: "Protected staircase and corridor prepared for construction traffic",
    statement: "Safe movement starts with a protected route.",
    detail: "Stairs and corridors take concentrated abuse because every person and material passes through them. JPC protects treads, risers, landings, walls, corners, railings, elevator interiors, and corridor floors as a connected route—keeping critical access organized without ignoring the details most likely to be hit.",
    protects: ["Treads, risers & landings", "Walls, corners & handrails", "Elevator cabs and entrances", "Lobby-to-work-zone routes"],
    idealFor: ["Condo and apartment renovations", "Occupied office projects", "Material and waste movement", "Hospitality and multi-floor work"],
    approach: [
      { title: "Trace the movement", copy: "We follow the full route from building entry to the active work zone." },
      { title: "Detail impact points", copy: "Turns, corners, doors, railings, and transitions receive focused protection." },
      { title: "Preserve access", copy: "The system is designed around practical circulation and project scheduling." },
    ],
    faqs: [
      { question: "Can stairs remain usable while protected?", answer: "Protection can be designed around continued access where project and safety requirements permit." },
      { question: "Do you protect elevator interiors?", answer: "Yes. Elevator floors, wall panels, corners, doors, and thresholds can be included in the protected route." },
      { question: "Can the route change during the project?", answer: "Yes. We can phase or revise protection as site logistics and active work zones change." },
    ],
  },
  {
    number: "05",
    slug: "furniture-equipment",
    title: "Furniture & equipment",
    titleLines: ["Furniture &", "equipment"],
    short: "Custom-fitted covers for furnishings, appliances, machinery, and sensitive equipment.",
    hero: "Keep valuable furnishings and operational equipment isolated from construction dust, splatter, impact, and daily jobsite movement.",
    image: "/images/services/furniture-equipment.png",
    imageAlt: "Furniture and sensitive equipment precisely wrapped for renovation protection",
    statement: "If it stays in the space, it becomes part of the protection plan.",
    detail: "Not everything can be removed before work begins. JPC creates fitted covers and protected islands around furniture, appliances, machinery, displays, and sensitive equipment—while considering ventilation, access, stability, edges, and the way trades will move around each item.",
    protects: ["Furniture and built-in pieces", "Appliances and kitchen equipment", "Machinery and technical equipment", "Displays, stock and sensitive assets"],
    idealFor: ["Occupied homes and offices", "Hospitality renovations", "Retail and restaurant fit-outs", "Equipment-heavy commercial spaces"],
    approach: [
      { title: "Assess the asset", copy: "We review material, sensitivity, access, ventilation, and surrounding activity." },
      { title: "Fit the cover", copy: "Protection is shaped and secured to minimize loose material and exposed edges." },
      { title: "Coordinate access", copy: "Service points or required access can be incorporated into the protection plan." },
    ],
    faqs: [
      { question: "Can equipment remain operational while covered?", answer: "Only when its manufacturer, ventilation, heat, electrical, and access requirements can be safely maintained. We plan around the information provided by the project team." },
      { question: "Do you protect oversized furniture?", answer: "Yes. Covers can be fitted to large or irregular items that cannot practically leave the space." },
      { question: "Can staff access protected items?", answer: "Where access is required, we can plan controlled openings or removable sections appropriate to the item." },
    ],
  },
  {
    number: "06",
    slug: "temporary-enclosures",
    title: "Temporary enclosures",
    titleLines: ["Temporary", "enclosures"],
    short: "Clean, adaptable partitions for phased work, occupied sites, and changing project conditions.",
    hero: "Create a professional temporary boundary that separates work, guides movement, and adapts as the project changes.",
    image: "/images/services/temporary-enclosures.png",
    imageAlt: "Clean temporary enclosure separating a construction zone from an occupied interior",
    statement: "Build the boundary the project needs today.",
    detail: "Temporary enclosures give projects a defined edge without permanent construction. JPC builds clean partitions and transitions for phased renovations, active tenant spaces, temporary rooms, corridor separation, and shifting work zones—combining practical access with an installation that looks considered in occupied environments.",
    protects: ["Occupied and public-facing areas", "Adjacent rooms and operations", "Temporary access corridors", "Phased construction zones"],
    idealFor: ["Retail and hospitality projects", "Office and institutional fit-outs", "Multi-phase renovations", "Short-term separation needs"],
    approach: [
      { title: "Set the boundary", copy: "We define separation, access, sightline, and duration requirements with the project team." },
      { title: "Build it clean", copy: "The enclosure is fitted and reinforced around the real conditions of the space." },
      { title: "Move or remove", copy: "The system can be revised between phases and removed when separation is no longer needed." },
    ],
    faqs: [
      { question: "Can an enclosure include doors?", answer: "Yes. Controlled access can be integrated based on use frequency, dimensions, and site requirements." },
      { question: "Can it look presentable in a customer-facing space?", answer: "That is a core design consideration. We prioritize straight lines, tidy seams, and a deliberate finished appearance." },
      { question: "How quickly can an enclosure change?", answer: "That depends on scale and material, but temporary systems are specifically planned to support project phasing and change." },
    ],
  },
  {
    number: "07",
    slug: "interior-roof-tarping-open-decking",
    title: "Interior roof tarping / open decking",
    titleLines: ["Interior roof tarping", "open decking"],
    short: "Overhead tarping below open roof decks protects occupied interiors from dust, debris, insulation, and incidental water.",
    hero: "Install a protective ceiling beneath active roofing and exposed decking—before overhead work reaches the occupied space below.",
    image: "/images/services/interior-roof-tarping-open-decking.png",
    imageAlt: "Suspended interior tarping beneath open roof decking protecting the space below",
    statement: "Put protection between the open deck and everything below it.",
    detail: "Roof replacement and open-deck work expose the interior to falling dust, insulation, small debris, and incidental water. JPC installs suspended interior tarping below the deck to create a secondary protective ceiling. The system is planned around structural conditions, elevations, obstructions, access, drainage strategy, and the occupied environment beneath it.",
    protects: ["Inventory and operational areas", "Finished ceilings and interiors", "Equipment and production floors", "Occupied areas beneath roof work"],
    idealFor: ["Commercial roof replacement", "Warehouses and retail stores", "Open-deck industrial buildings", "Occupied facilities and institutions"],
    approach: [
      { title: "Survey overhead", copy: "We review deck height, structure, obstructions, work sequencing, and the area below." },
      { title: "Engineer the layout", copy: "Tarp fields, overlaps, transitions, and drainage intent are planned for the site conditions." },
      { title: "Install & monitor", copy: "The suspended system is secured, checked, and coordinated with the active roof schedule." },
    ],
    faqs: [
      { question: "Is interior roof tarping waterproof?", answer: "It is a secondary protection system, not a replacement roof or guarantee against all water entry. The design and water-management intent must match the project conditions." },
      { question: "Can it be installed over an operating space?", answer: "Often, yes. Occupancy, equipment, clearance, installation access, and project safety requirements must all be reviewed during planning." },
      { question: "How is the tarp supported?", answer: "Support strategy depends on the building structure, deck, elevation, obstructions, and approved project requirements. JPC scopes the installation after a site review." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

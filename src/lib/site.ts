import { blogPosts } from "@/lib/blog";

export const REQUEST_URL = "/services/new-request";

export const ADDRESS_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("6806 55th St., Kenosha, WI 53144");

export const socials = [
  { label: "Facebook", href: "https://www.facebook.com/pooptopia/" },
  { label: "Instagram", href: "https://www.instagram.com/princessolive_n_sirlouie/" },
  { label: "X", href: "https://www.x.com/Pooptopia2023" },
  { label: "Yelp", href: "https://www.yelp.com/biz/pooptopia-kenosha?osq=pooptopia" },
  { label: "YouTube", href: "https://www.youtube.com/@Pooptopia2023" },
];

export const CLIENT_LOGIN =
  "https://clienthub.getjobber.com/client_hubs/c2c3283b-1fee-4b15-b250-b85c50bb9940/login/new?source=share_login";

export const DOG_PARK_URL =
  "https://www.sniffspot.com/listings/kenosha-wi/pooptopia-dog-park-in-kenosha-88111";

export const NOW_HIRING_URL =
  "https://jobs.gusto.com/postings/pooptopia-canine-clean-up-specialist-03c8934f-8158-48b4-b897-1738143169f7";

export type NavItem = {
  href?: string;
  label: string;
  children?: NavItem[];
};

export const headerNav: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Pooptopia Services",
    children: [
      { href: "/services", label: "Pooptopia Services" },
      { href: "/services/new-request", label: "New Service Request" },
    ],
  },
  { href: "/gallery", label: "Gallery" },
  {
    href: "/about/our-why",
    label: "About Us",
    children: [
      { href: "/about/our-why", label: "Our Why" },
      { href: "/about/service-area", label: "Service Area" },
      { href: "/about/videos", label: "Pooptopia Videos" },
      { href: "/about/blog", label: "Woof to Waste Blog" },
      { href: "/reviews", label: "Reviews" },
    ],
  },
  {
    label: "Resources",
    children: [
      { href: CLIENT_LOGIN, label: "Client Log-In" },
      { href: DOG_PARK_URL, label: "Pooptopia Dog Park" },
      { href: NOW_HIRING_URL, label: "Now Hiring" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export const siteNav: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Pooptopia Services",
    children: [
      { href: "/services", label: "Pooptopia Services" },
      { href: "/services/new-request", label: "New Service Request" },
    ],
  },
  { href: "/gallery", label: "Gallery" },
  {
    href: "/about/our-why",
    label: "About Us",
    children: [
      { href: "/about/our-why", label: "Our Why" },
      { href: "/about/service-area", label: "Service Area" },
      { href: "/about/videos", label: "Pooptopia Videos" },
      { href: "/about/blog", label: "Woof to Waste Blog" },
      { href: "/reviews", label: "Reviews" },
    ],
  },
  {
    label: "Resources",
    children: [
      { href: CLIENT_LOGIN, label: "Client Log-In" },
      { href: DOG_PARK_URL, label: "Pooptopia Dog Park" },
      { href: NOW_HIRING_URL, label: "Now Hiring" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export type GalleryCategory = "before-after" | "dogs" | "cleaning";

export type GalleryItem = {
  src: string;
  title: string;
  category: GalleryCategory;
};

export const gallery: GalleryItem[] = [
  { src: "/images/gallery/before-after-turf.webp", title: "Before and after turf", category: "before-after" },
  { src: "/images/gallery/before-after-planter.webp", title: "Before and after a backyard cleanup", category: "before-after" },
  { src: "/images/gallery/before-after-slope.webp", title: "Before and after a sloped yard", category: "before-after" },
  { src: "/images/gallery/before-after-tree.webp", title: "Before and after under a shade tree", category: "before-after" },
  { src: "/images/gallery/before-after-wide-yard.webp", title: "Before and after a wide backyard", category: "before-after" },
  { src: "/images/gallery/before-after-trampoline.webp", title: "Before and after a backyard with a trampoline", category: "before-after" },
  { src: "/images/gallery/before-after-fence.webp", title: "Before and after along the fence", category: "before-after" },
  { src: "/images/gallery/before-after-gravel.webp", title: "Before and after a gravel path", category: "before-after" },
  { src: "/images/gallery/before-after-snow-corner.webp", title: "Before and after a snowy corner", category: "before-after" },
  { src: "/images/gallery/dogs-with-supplies.webp", title: "Dogs beside sanitation supplies", category: "dogs" },
  { src: "/images/gallery/pickup-with-dog.webp", title: "A visit with a dog", category: "dogs" },
  { src: "/images/gallery/dog-with-team.webp", title: "A team member with a dog", category: "dogs" },
  { src: "/images/gallery/dogs-in-yard.webp", title: "Dogs in a clean yard", category: "dogs" },
  { src: "/images/gallery/team-curbside.webp", title: "Two-person team at the curb", category: "dogs" },
  { src: "/images/gallery/sanitize-trampoline.webp", title: "Sanitizing under a trampoline", category: "cleaning" },
  { src: "/images/gallery/equipment-fence.webp", title: "Equipment along the fence", category: "cleaning" },
  { src: "/images/gallery/waste-bags-snow.webp", title: "Waste bagged to haul away", category: "cleaning" },
  { src: "/images/gallery/grass-closeup.webp", title: "A close look at the grass", category: "cleaning" },
  { src: "/images/gallery/late-winter-yard.webp", title: "A yard in late winter", category: "cleaning" },
  { src: "/images/gallery/team-rakes.webp", title: "The two-person team", category: "cleaning" },
  { src: "/images/gallery/riding-mower.webp", title: "A pass across the lawn", category: "cleaning" },
];

export const serviceAreas = [
  {
    county: "Kenosha County",
    state: "Wisconsin",
    towns: [
      "Kenosha",
      "Pleasant Prairie",
      "Somers",
      "Bristol",
      "Salem",
      "Paddock Lake",
      "Silver Lake",
      "Twin Lakes",
    ],
  },
  {
    county: "Racine County",
    state: "Wisconsin",
    towns: ["Racine", "Mount Pleasant", "Caledonia", "Sturtevant", "Union Grove"],
  },
  {
    county: "Walworth County",
    state: "Wisconsin",
    towns: ["Lake Geneva", "East Troy", "Genoa City"],
  },
  {
    county: "Lake County",
    state: "Illinois",
    towns: ["Antioch", "Fox Lake", "Lindenhurst", "Wadsworth"],
  },
];

export const serviceCounties = serviceAreas.map(
  (area) => `${area.county}, ${area.state === "Wisconsin" ? "WI" : "IL"}`,
);

export const serviceTowns = serviceAreas.flatMap((area) => area.towns);

export type SearchItem = {
  href: string;
  title: string;
  text: string;
};

export const searchCatalog: SearchItem[] = [
  {
    href: "/",
    title: "Home",
    text: "dog waste removal yard sanitation Kenosha family visits",
  },
  {
    href: "/services",
    title: "Pooptopia Services",
    text: "regular and one-time cleanup packages add-ons",
  },
  {
    href: "/services",
    title: "Pooptopia Premium Package",
    text: "weekly full detailing two technicians sticky spots waste hauled away gate photo",
  },
  {
    href: "/services",
    title: "Pooptopia Prestige Package",
    text: "twice weekly dog waste removal two-person team",
  },
  {
    href: "/services",
    title: "Pooptopia Precision Clean",
    text: "one-time dog waste cleanup one complete detailing",
  },
  {
    href: "/services",
    title: "Paw Protection by Pooptopia",
    text: "yard sanitation add-on",
  },
  {
    href: "/services",
    title: "Pooptopia Playtime Pickup",
    text: "dog let-out playtime waste pickup",
  },
  {
    href: "/services/new-request",
    title: "New Service Request",
    text: "request service get started",
  },
  {
    href: "/gallery",
    title: "Gallery",
    text: gallery.map((item) => item.title).join(" "),
  },
  {
    href: "/about/our-why",
    title: "About Us",
    text: "locally owned family-run since 2023",
  },
  {
    href: "/reviews",
    title: "Reviews",
    text: "google reviews neighbors",
  },
  {
    href: "/about/our-why",
    title: "Our Why",
    text: "family story Olive and Louie",
  },
  {
    href: "/about/service-area",
    title: "Service Area",
    text: `${serviceCounties.join(" ")} ${serviceTowns.join(" ")}`,
  },
  {
    href: "/about/videos",
    title: "Pooptopia Videos",
    text: "videos",
  },
  {
    href: "/about/blog",
    title: "Woof to Waste Blog",
    text: `blog yard notes newsletter ${blogPosts.map((post) => post.title).join(" ")}`,
  },
  {
    href: "/faq",
    title: "FAQ",
    text: "questions winter visit waste gate photo",
  },
  {
    href: "/contact",
    title: "Contact",
    text: "6806 55th St. Kenosha WI 53144 phone email admin@pooptopia.dog",
  },
  {
    href: "/sitemap",
    title: "Sitemap",
    text: "all pages on the site",
  },
  {
    href: "/service-index",
    title: "AI Readiness Service Index",
    text: "premium prestige precision clean paw protection playtime pickup packages",
  },
  {
    href: "/privacy-policy",
    title: "Privacy Policy",
    text: "personal information email phone contact form",
  },
  {
    href: "/ai-policy",
    title: "AI Policy",
    text: "people perform visits photos are from Pooptopia",
  },
];

export const faqs = [
  {
    q: "Do you service yards in winter?",
    a: "Yes. We pick up all year round.",
  },
  {
    q: "Do I need to be home during a visit?",
    a: "No. We contact you before we arrive and again when we leave, and we send a photo confirming your gate is securely latched.",
  },
  {
    q: "What happens to the waste?",
    a: "We haul it away with us.",
  },
  {
    q: "How do you keep yards from cross-contaminating?",
    a: "We sanitize the yard’s sticky spots during the visit, and we sanitize our equipment between yards.",
  },
  {
    q: "How do I get started?",
    a: "Submit a New Service Request and tell us about your yard and your dogs. We will be in touch.",
  },
];

for (const item of faqs) {
  searchCatalog.push({ href: "/faq", title: item.q, text: item.a });
}

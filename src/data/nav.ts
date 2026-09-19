// Primary site navigation. Kept deliberately small (see README/IA notes).
// The "Explore an Immersion" CTA is rendered separately as the emphasized
// primary action, so it is not repeated in this list.
export interface NavItem {
  label: string;
  href: string;
}

export const primaryNav: NavItem[] = [
  { label: "Vision", href: "/vision" },
  { label: "Cities", href: "/cities" },
  { label: "Immersions", href: "/immersions" },
];

// The single primary conversion action, used in the header and page CTAs.
export const primaryCta = {
  label: "Explore an Immersion",
  href: "/immersions",
};

// Immersion events.
//
// IMPORTANT: No real dates or locations are invented. This array is empty on
// purpose; the Immersions section/page renders an "upcoming dates coming soon"
// empty state until real events exist. Add entries here to populate the site.

export type ImmersionStatus = "open" | "waitlist" | "closed";

export interface Immersion {
  slug: string;
  city: string;
  /** ISO date string, e.g. "2026-03-14". */
  startDate: string;
  endDate?: string;
  status: ImmersionStatus;
}

export const immersions: Immersion[] = [];

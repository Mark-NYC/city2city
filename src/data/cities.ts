// City evidence / stories.
//
// IMPORTANT: No real city data, statistics, or stories are invented here. The
// entries below are clearly-flagged PLACEHOLDERS that exist only to show the
// card layout. Replace them with real content (and set `placeholder: false` /
// remove the flag) when it is available. Do not ship placeholder cards as if
// they were real fruit.

export type CityStatus = "hub" | "emerging" | "immersion";

export interface CityFruit {
  /** Leave a field undefined when the number is not known — do not guess. */
  baptisms?: number;
  churches?: number;
  /** Generational depth of the multiplication stream. */
  streamDepth?: number;
}

export interface City {
  slug: string;
  name: string;
  status: CityStatus;
  fruit?: CityFruit;
  /** Short practitioner/story excerpt. Real quotes only — never invented. */
  story?: string;
  placeholder?: boolean;
}

export const cities: City[] = [
  {
    slug: "placeholder-1",
    name: "Placeholder city",
    status: "hub",
    placeholder: true,
  },
  {
    slug: "placeholder-2",
    name: "Placeholder city",
    status: "emerging",
    placeholder: true,
  },
];

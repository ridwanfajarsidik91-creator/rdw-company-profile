// Add only figures approved for public use and original RDW operational photographs.
export const verifiedMetrics: ReadonlyArray<{
  label: "Kapasitas pasokan" | "Jangkauan distribusi" | "Mitra bisnis";
  value: number;
  unit: string;
  context: string;
}> = [];

export const operationPhotos: ReadonlyArray<{
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
}> = [];

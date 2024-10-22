export type TProjectDetail = {
  name?: string;
  contribution?: string;
  subImage1?: string;
  subImage2?: string;
  subImage3?: string;
  subImage4?: string;
  subImage5?: string;
  thumbnail?: string;
  thumbnailImage?: string;
  mockup?: string;
  mockupPCImage?: string;
  mockupMobileImage?: string;
  description?: string;
  descriptionImage?: string;
};

export type TProjectImage = {
  id: number;
  title: string;
  detail: TProjectDetail[];
};

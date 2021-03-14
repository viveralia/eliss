import { StrapiBaseComponent, StrapiCloudinaryImage } from "./strapi.types";

export interface StrapiHeader extends StrapiBaseComponent {
  title: string;
  subtitle: string;
}

export interface StrapiHero extends StrapiBaseComponent {
  headline: string;
  img: StrapiCloudinaryImage;
}

export interface StrapiSeo extends StrapiBaseComponent {
  metaTitle: string;
  metaDescription: string;
  shareImg: StrapiCloudinaryImage;
}

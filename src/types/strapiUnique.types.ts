import { StrapiHeader, StrapiHero, StrapiSeo } from "./strapiComponent.types";

export interface StrapiEventsPage {
  header: StrapiHeader;
  seo: StrapiSeo;
}

export interface StrapiHomePage {
  hero: StrapiHero;
  seo: StrapiSeo;
}

export interface StrapiMerchPage {
  header: StrapiHeader;
  seo: StrapiSeo;
}

export interface StrapiPresskitPage {
  header: StrapiHeader;
  seo: StrapiSeo;
  content: string;
}

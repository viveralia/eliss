/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_SOCIALNETWORK_NAME } from "./globalTypes";

// ====================================================
// GraphQL query operation: HomePageQuery
// ====================================================

export interface HomePageQuery_page_seo_shareImg {
  __typename: "UploadFile";
  alternativeText: string | null;
  formats: any | null;
}

export interface HomePageQuery_page_seo {
  __typename: "ComponentSharedSeo";
  metaTitle: string;
  metaDescription: string | null;
  shareImg: HomePageQuery_page_seo_shareImg | null;
}

export interface HomePageQuery_page_hero_img {
  __typename: "UploadFile";
  alternativeText: string | null;
  url: string;
}

export interface HomePageQuery_page_hero {
  __typename: "ComponentSharedHero";
  headline: string;
  img: HomePageQuery_page_hero_img | null;
}

export interface HomePageQuery_page {
  __typename: "HomePage";
  seo: HomePageQuery_page_seo | null;
  hero: HomePageQuery_page_hero | null;
  featuredVideo: string | null;
}

export interface HomePageQuery_songs {
  __typename: "Song";
  id: string;
  spotifyUri: string;
}

export interface HomePageQuery_events {
  __typename: "Event";
  id: string;
  name: string;
  link: string;
  place: string;
  starts: any;
  ends: any;
}

export interface HomePageQuery_socialNetworks {
  __typename: "SocialNetwork";
  id: string;
  name: ENUM_SOCIALNETWORK_NAME;
  link: string;
  footer: boolean;
  streaming: boolean;
}

export interface HomePageQuery {
  page: HomePageQuery_page | null;
  songs: (HomePageQuery_songs | null)[] | null;
  events: (HomePageQuery_events | null)[] | null;
  socialNetworks: (HomePageQuery_socialNetworks | null)[] | null;
}

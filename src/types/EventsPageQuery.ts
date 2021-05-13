/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_SOCIALNETWORK_NAME } from "./globalTypes";

// ====================================================
// GraphQL query operation: EventsPageQuery
// ====================================================

export interface EventsPageQuery_page_seo_shareImg {
  __typename: "UploadFile";
  alternativeText: string | null;
  formats: any | null;
}

export interface EventsPageQuery_page_seo {
  __typename: "ComponentSharedSeo";
  metaTitle: string;
  metaDescription: string | null;
  shareImg: EventsPageQuery_page_seo_shareImg | null;
}

export interface EventsPageQuery_page_header {
  __typename: "ComponentSharedHeader";
  title: string;
  subtitle: string | null;
}

export interface EventsPageQuery_page {
  __typename: "EventsPage";
  seo: EventsPageQuery_page_seo | null;
  header: EventsPageQuery_page_header | null;
}

export interface EventsPageQuery_events {
  __typename: "Event";
  id: string;
  name: string;
  link: string;
  place: string;
  starts: any;
  ends: any;
}

export interface EventsPageQuery_socialNetworks {
  __typename: "SocialNetwork";
  id: string;
  name: ENUM_SOCIALNETWORK_NAME;
  link: string;
  footer: boolean;
  streaming: boolean;
}

export interface EventsPageQuery {
  page: EventsPageQuery_page | null;
  events: (EventsPageQuery_events | null)[] | null;
  socialNetworks: (EventsPageQuery_socialNetworks | null)[] | null;
}

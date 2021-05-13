/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_SOCIALNETWORK_NAME } from "./globalTypes";

// ====================================================
// GraphQL query operation: PresskitPageQuery
// ====================================================

export interface PresskitPageQuery_page_seo_shareImg {
  __typename: "UploadFile";
  alternativeText: string | null;
  formats: any | null;
}

export interface PresskitPageQuery_page_seo {
  __typename: "ComponentSharedSeo";
  metaTitle: string;
  metaDescription: string | null;
  shareImg: PresskitPageQuery_page_seo_shareImg | null;
}

export interface PresskitPageQuery_page_header {
  __typename: "ComponentSharedHeader";
  title: string;
  subtitle: string | null;
}

export interface PresskitPageQuery_page {
  __typename: "PresskitPage";
  seo: PresskitPageQuery_page_seo | null;
  header: PresskitPageQuery_page_header | null;
  content: string;
}

export interface PresskitPageQuery_socialNetworks {
  __typename: "SocialNetwork";
  id: string;
  name: ENUM_SOCIALNETWORK_NAME;
  link: string;
  footer: boolean;
  streaming: boolean;
}

export interface PresskitPageQuery {
  page: PresskitPageQuery_page | null;
  socialNetworks: (PresskitPageQuery_socialNetworks | null)[] | null;
}

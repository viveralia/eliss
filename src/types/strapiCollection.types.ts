import { StrapiResponse } from "./strapi.types";

export interface StrapiEvent extends StrapiResponse {
  name: string;
  link: string;
  place: string;
  starts: Date;
  ends: Date;
}

export interface StrapiSocialNetwork extends StrapiResponse {
  name: string;
  link: string;
  footer: boolean;
  streaming: boolean;
}

export interface StrapiSong extends StrapiResponse {
  name: string;
  spotifyUri: string;
}

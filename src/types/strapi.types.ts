export interface StrapiResponse {
  createdAt: Date;
  id: string;
  updatedAt: Date;
}

interface StrapiImage {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: string | null;
  url: string;
}

export interface StrapiCloudinaryImage extends StrapiImage {
  alternativeText: string;
  caption: string;
  provider: string;
  related: unknown[];
  url: string;
  formats: {
    thumbnail: StrapiImage;
    large: StrapiImage;
    medium: StrapiImage;
    small: StrapiImage;
  };
}

export interface StrapiBaseComponent {
  id: string;
}

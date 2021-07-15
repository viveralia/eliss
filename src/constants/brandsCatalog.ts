import { AiFillFacebook } from "react-icons/ai";
import { IconType } from "react-icons/lib";
import {
  SiApple,
  SiSpotify,
  SiYoutube,
  SiInstagram,
  SiTiktok,
  SiTwitter,
} from "react-icons/si";

export interface BrandsStrategy {
  [brand: string]: {
    Icon: IconType;
    color?: string;
    name: string;
  };
}

const brandsStrategy: BrandsStrategy = {
  appleMusic: {
    Icon: SiApple,
    name: "Apple Music",
  },
  facebook: {
    Icon: AiFillFacebook,
    color: "blue",
    name: "Facebook",
  },
  instagram: {
    Icon: SiInstagram,
    name: "Instagram",
  },
  spotify: {
    Icon: SiSpotify,
    color: "#1ed760",
    name: "Spotify",
  },
  tikTok: {
    Icon: SiTiktok,
    name: "Tik Tok",
  },
  twitter: {
    Icon: SiTwitter,
    color: "blue",
    name: "Twitter",
  },
  youTube: {
    Icon: SiYoutube,
    color: "#fa2200",
    name: "YouTube",
  },
  youTubeMusic: {
    Icon: SiYoutube,
    color: "#fa2200",
    name: "YouTube Music",
  },
};

export default brandsStrategy;

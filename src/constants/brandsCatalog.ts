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
  };
}

const brandsStrategy: BrandsStrategy = {
  appleMusic: {
    Icon: SiApple,
  },
  facebook: {
    Icon: AiFillFacebook,
    color: "blue",
  },
  instagram: {
    Icon: SiInstagram,
  },
  spotify: {
    Icon: SiSpotify,
    color: "#1ed760",
  },
  tikTok: {
    Icon: SiTiktok,
  },
  twitter: {
    Icon: SiTwitter,
    color: "blue",
  },
  youTube: {
    Icon: SiYoutube,
    color: "#fa2200",
  },
  youTubeMusic: {
    Icon: SiYoutube,
    color: "#fa2200",
  },
};

export default brandsStrategy;

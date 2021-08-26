import { DefaultSeoProps } from "next-seo";

const defaultSeo: DefaultSeoProps = {
  openGraph: {
    images: [
      {
        alt: "Miembros de Eliss",
        height: 600,
        url: "",
        width: 1200,
      },
    ],
    locale: "es_MX",
    // eslint-disable-next-line camelcase
    site_name: "Eliss",
    type: "website",
    url: "https://eliss.mx",
  },
  titleTemplate: "%s | Eliss",
};

export default defaultSeo;

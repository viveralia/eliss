import { DefaultSeoProps } from "next-seo";

const defaultSeo: DefaultSeoProps = {
  titleTemplate: "%s | Eliss",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://eliss.mx",
    site_name: "Eliss",
    images: [
      {
        url: "",
        width: 1200,
        height: 600,
        alt: "Miembros de Eliss",
      },
    ],
  },
};

export default defaultSeo;

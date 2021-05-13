import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

import { ComingEvents, Contact, Hero, FeaturedVideo, Layout, TopSongs } from "~components";
import {
  StrapiEvent,
  StrapiHomePage,
  StrapiSocialNetwork,
  StrapiSong,
} from "~types";
import { fetchStrapi } from "~utils";

interface ServerProps {
  page: StrapiHomePage;
  songs: StrapiSong[];
  events: StrapiEvent[];
  socialNetworks: StrapiSocialNetwork[];
}

const HomePage: NextPage<ServerProps> = ({
  page,
  songs,
  events,
  socialNetworks,
}) => {
  const comingEventsOnly = events.filter(event => {
    return new Date(event.ends) > new Date();
  });

  return (
    <Layout socialNetworks={socialNetworks}>
      <NextSeo
        title={page.seo.metaTitle}
        titleTemplate="Eliss | %s"
        description={page.seo.metaDescription}
        openGraph={{
          images: [
            {
              url: page.seo.shareImg.formats.medium.url,
              alt: page.seo.shareImg.alternativeText,
              width: page.seo.shareImg.formats.medium.width,
              height: page.seo.shareImg.formats.medium.height,
            },
          ],
        }}
      />
      <Hero headline={page.hero.headline} img={page.hero.img} />
      <TopSongs songs={songs} />
      <FeaturedVideo videoSrc={page.featuredVideo} channelHref="https://www.youtube.com/channel/UCWsFcpGSE3lVAh1PZK07lGw" />
      <ComingEvents events={comingEventsOnly} />
      <Contact />
    </Layout>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const [page, songs, events, socialNetworks] = await Promise.all([
    fetchStrapi("/home-page"),
    fetchStrapi("/songs", { _limit: 6, featured: true }),
    fetchStrapi("/events", { _limit: 5, _sort: "starts" }),
    fetchStrapi("/social-networks"),
  ]);

  return {
    props: { page, songs, events, socialNetworks },
  };
};

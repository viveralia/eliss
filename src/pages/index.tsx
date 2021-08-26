import { gql } from "@apollo/client";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

import { ComingEvents, Contact, Hero, FeaturedVideo, Layout, TopSongs } from "~components";
import { client } from "~graphql";
import { HomePageQuery } from "~types";

const HomePage: NextPage<HomePageQuery> = ({ page, songs, events, socialNetworks }) => {
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
              alt: page.seo.shareImg.alternativeText,
              height: page.seo.shareImg.formats.medium.height,
              url: page.seo.shareImg.formats.medium.url,
              width: page.seo.shareImg.formats.medium.width,
            },
          ],
        }}
      />
      <Hero headline={page.hero.headline} img={page.hero.img} />
      <TopSongs songs={songs} />
      <FeaturedVideo
        videoSrc={page.featuredVideo}
        channelHref="https://www.youtube.com/channel/UCWsFcpGSE3lVAh1PZK07lGw"
      />
      <ComingEvents events={comingEventsOnly} />
      <Contact />
    </Layout>
  );
};

export default HomePage;

const homePageQuery = gql`
  query HomePageQuery {
    page: homePage {
      seo {
        metaTitle
        metaDescription
        shareImg {
          alternativeText
          formats
        }
      }
      hero {
        headline
        img {
          alternativeText
          hash
          url
        }
      }
      featuredVideo
    }
    songs(limit: 6, where: { featured: true }) {
      id
      spotifyUri
    }
    events(limit: 5, sort: "starts") {
      id
      name
      link
      place
      starts
      ends
    }
    socialNetworks {
      id
      name
      link
      footer
      streaming
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query<HomePageQuery>({ query: homePageQuery });

  return {
    props: { ...data },
    revalidate: 1000 * 60, // each minute
  };
};

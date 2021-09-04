import { gql } from "@apollo/client";
import { Container, Typography } from "@material-ui/core";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

import { Layout, PageHeader } from "~components";
import { client } from "~graphql";
import { EventsPageQuery } from "~types";

const MerchPage: NextPage<EventsPageQuery> = ({ page, socialNetworks }) => {
  return (
    <Layout socialNetworks={socialNetworks}>
      <NextSeo
        title={page.seo.metaTitle}
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
      <PageHeader title={page.header.title} subtitle={page.header.subtitle} />
      <Container>
        <Typography color="textSecondary">No hay merch disponible</Typography>
      </Container>
    </Layout>
  );
};

export default MerchPage;

const merchPageQuery = gql`
  query MerchPageQuery {
    page: eventsPage {
      seo {
        metaTitle
        metaDescription
        shareImg {
          alternativeText
          formats
        }
      }
      header {
        title
        subtitle
      }
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
  const { data } = await client.query<EventsPageQuery>({
    query: merchPageQuery,
  });

  return {
    props: { ...data },
    revalidate: 1000 * 60, // each minute
  };
};

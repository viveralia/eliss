import { Container, Typography } from "@material-ui/core";
import gql from "graphql-tag";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

import { Event, Layout, PageHeader } from "~components";
import { client } from "~graphql";
import { EventsPageQuery } from "~types/EventsPageQuery";

const EventsPage: NextPage<EventsPageQuery> = ({
  page,
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
      <PageHeader title={page.header.title} subtitle={page.header.subtitle} />
      <Container>
        {comingEventsOnly.length > 0 ? (
          events.map(event => <Event key={event.id} event={event} />)
        ) : (
          <Typography color="textSecondary">
            No hay eventos disponibles 😞
          </Typography>
        )}
      </Container>
    </Layout>
  );
};

export default EventsPage;

const eventsPageQuery = gql`
  query EventsPageQuery {
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
    events {
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
  const { data } = await client.query<EventsPageQuery>({ query: eventsPageQuery })

  return {
    props: { ...data },
    revalidate: 1000 * 60, // each minute
  };
};

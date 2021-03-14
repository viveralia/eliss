import { Container, Typography } from "@material-ui/core";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

import { Event, Layout, PageHeader } from "../components";
import { StrapiEvent, StrapiEventsPage, StrapiSocialNetwork } from "../types";
import { fetchStrapi } from "../utils";

interface ServerProps {
  page: StrapiEventsPage;
  events: StrapiEvent[];
  socialNetworks: StrapiSocialNetwork[];
}

const EventsPage: NextPage<ServerProps> = ({
  page,
  events,
  socialNetworks,
}) => {
  const comingEventsOnly = events.filter((event) => {
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
          events.map((event) => <Event key={event.id} event={event} />)
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

export const getStaticProps: GetStaticProps = async () => {
  const [page, events, socialNetworks] = await Promise.all([
    fetchStrapi("/events-page"),
    fetchStrapi("/events"),
    fetchStrapi("/social-networks"),
  ]);

  return {
    props: { page, events, socialNetworks },
  };
};

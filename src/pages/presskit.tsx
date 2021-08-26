import { gql } from "@apollo/client";
import { Container, makeStyles } from "@material-ui/core";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import Markdown from "react-markdown";

import { Layout, PageHeader } from "~components";
import { client } from "~graphql";
import { PresskitPageQuery } from "~types";

const useStyles = makeStyles(theme => ({
  container: {
    "& h2, & h3, & h4, & h5": {
      fontFamily: theme.typography.h1.fontFamily,
      fontWeight: 500,
      textTransform: "uppercase",
    },
    "& img": {
      marginLeft: "-1rem",
      marginRight: "-1rem",
      width: "calc(100% + 2rem)",
      [theme.breakpoints.up("sm")]: {
        display: "block",
        margin: "auto",
        maxWidth: "40rem",
        width: "100%",
      },
    },
    "& p": {
      color: theme.palette.text.secondary,
      fontSize: "1rem",
      lineHeight: 1.5,
    },
  },
}));

const PresskitPage: NextPage<PresskitPageQuery> = ({ page, socialNetworks }) => {
  const classes = useStyles();

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
      <Container className={classes.container}>
        <Markdown>{page.content}</Markdown>
      </Container>
    </Layout>
  );
};

export default PresskitPage;

const presskitPageQuery = gql`
  query PresskitPageQuery {
    page: presskitPage {
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
      content
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
  const { data } = await client.query<PresskitPageQuery>({
    query: presskitPageQuery,
  });

  return {
    props: { ...data },
    revalidate: 1000 * 60, // each minute
  };
};

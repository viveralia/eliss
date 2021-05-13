import { Container, makeStyles } from "@material-ui/core";
import gql from "graphql-tag";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import Markdown from "react-markdown";

import { Layout, PageHeader } from "~components";
import { client } from "~graphql";
import { PresskitPageQuery } from "~types/PresskitPageQuery";

const useStyles = makeStyles(theme => ({
  container: {
    "& img": {
      marginLeft: "-1rem",
      marginRight: "-1rem",
      width: "calc(100% + 2rem)",
      [theme.breakpoints.up("sm")]: {
        marginLeft: 0,
        marginRight: 0,
        width: "100%",
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: "50rem",
        display: "block",
        margin: "auto",
      },
    },
    "& p": {
      fontSize: "1rem",
      color: theme.palette.text.secondary,
      lineHeight: 1.5,
    },
    "& h2, & h3, & h4, & h5": {
      fontFamily: theme.typography.h1.fontFamily,
      textTransform: "uppercase",
      fontWeight: 500,
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
              url: page.seo.shareImg.formats.medium.url,
              alt: page.seo.shareImg.alternativeText,
              width: page.seo.shareImg.formats.medium.width,
              height: page.seo.shareImg.formats.medium.height,
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
`

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query<PresskitPageQuery>({ query: presskitPageQuery })

  return {
    props: { ...data },
    revalidate: 1000 * 60, // each minute
  };
};

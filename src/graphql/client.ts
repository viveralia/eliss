import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.NEXT_STRAPI_URL + "/graphql",
});

export default client;

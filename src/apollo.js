import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://tmdb.apps.quintero.io/",
});

export default client;
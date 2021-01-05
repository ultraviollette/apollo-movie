import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://tmdb.apps.quintero.io/",
  resolvers: {
    Movie:{
      isLiked: () => false
    }
  }
});

export default client;
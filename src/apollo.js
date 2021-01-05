import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://tmdb.apps.quintero.io/",
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
    Mutation: {
      toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
        // console.log(id);
        // console.log(cache);
        cache.writeData({
          id: `Movie: ${id}`,
          data: {
            isLiked: !isLiked,
          },
        });
      },
    },
  },
});

export default client;

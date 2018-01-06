import ApolloClient, { createNetworkInterface } from 'apollo-client';

export default new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:8080/graphql',
    opts: {
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    },
  }),
});

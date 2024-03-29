import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  uri: 'http://127.0.0.1:4000',
  cache: new InMemoryCache(),
});

export default client;

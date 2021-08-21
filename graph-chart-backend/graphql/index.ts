import { ApolloServer } from 'apollo-server';
import resolvers from './educationResolver';
import typeDefs from './educationSchema';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

server.listen().then(({ url }) => {
  console.log(`graphql server is running on ${url}`);
});
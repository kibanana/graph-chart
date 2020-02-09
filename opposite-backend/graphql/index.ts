import { GraphQLServer } from "graphql-yoga";
import resolvers from "./educationResolver";

const server = new GraphQLServer({
    typeDefs: "./educationSchema.graphql",
    resolvers,
});

server.start(() => {
  console.log('graphql server is running');
});
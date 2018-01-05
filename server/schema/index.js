const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
  type Link {
    id: ID!
    url: String!
    description: String
  }

  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
  }

  type Query {
    allLinks: [Link!]!
  }

  type Mutation {
    createLink(url: String!, description: String!): Link
    createUser(name: String!, auth: AuthSignupData!): User
    signinUser(email: PROVIDER_EMAIL): SigninPayload!
  } 
  
  input AuthSignupData {
      email: PROVIDER_EMAIL
  }

  input PROVIDER_EMAIL {
      email: String!
      password: String!
  }

  type SigninPayload {
    token: String
    user: User
  }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });

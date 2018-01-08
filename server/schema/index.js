const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

// mutation {
//   signinUser(
//     email: {
//       email: "example@example.com",
//       password: "test123"
//     }
//   ) {
//     user {
//       id
//       name
//       email
//     }
//     token
//   }
// }

const typeDefs = `
  type User {
    id: ID
    name: String!
    email: String!
  }

  type Comment {
    id: ID
    author: [User]
    body: String!
    comments: [Comment!]
  }

  type Link {
    id: ID
    author: [User!]
    score: Int!
    comments: [Comment!]
    url: String!
    description: String
  }

  type Query {
    allLinks: [Link!]!
    allUsers: [User!]!
  }

  type Mutation {
    createLink(url: String!, description: String!): Link
    destroyLink(id: String!): Link
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

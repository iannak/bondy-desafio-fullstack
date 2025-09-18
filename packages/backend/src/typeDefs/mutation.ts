import gql from 'graphql-tag'

export default gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    company: String
    password: String!
  }
  type Mutation {
    mutationTest(test: Boolean): Boolean
    login(email: String!, password: String!): User
  }
`

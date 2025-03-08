import { gql } from "apollo-server-express";


export const userTypeDefs = gql`
    type User {
    userName: String!
    id: ID!
    }

    type Query {
        getAllUsers: [User!]!
        getUser(id:ID!): User
    }

    # type Mutation {}
`

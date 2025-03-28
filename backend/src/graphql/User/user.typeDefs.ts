import { gql } from "apollo-server-express";


export const userTypeDefs = gql`
    type User {
    username: String!
    id: ID!
    email: String!
    created_at: String!
    password: String!
    }

    type LoginResponse {
        success: Boolean!
        message: String!
        token: String
        user: User
    }

    type Query {
        getAllUsers: [User!]!
        getUser(id:ID!): User
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): User
        logInUser(email: String!, password: String!): LoginResponse
    }
`

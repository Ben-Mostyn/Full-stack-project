import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
# // Defines a mutation named CreateUser and its required input variables
    mutation CreateUser($username: String!, $email: String!, $password: String!) {
        # calls the backend mutation
        createUser(username: $username, email: $email, password: $password) {
            id
            username
            email
        }
    }
`
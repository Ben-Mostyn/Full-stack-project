import { gql } from "@apollo/client";

export const LOGIN_USER_MUTATION = gql`
  mutation LogInUser($email: String!, $password: String!) {
    logInUser(email: $email, password: $password) {
      success
      message
      token
      user {
        id
        username
        email
      }
    }
  }
`

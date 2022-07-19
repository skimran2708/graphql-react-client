import { gql } from "@apollo/client";

export const SIGNUP_USER = gql`
  mutation CreateUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    user: createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      id
      firstName
      lastName
      email
    }
  }
`;

export const LOGIN_USER = gql`
  mutation SignIn($email: String!, $password: String!) {
    user: singnInUser(email: $email, password: $password) {
      token
    }
  }
`;

export const CREATE_QUOTE = gql`
  mutation CreateQuote($text: String!) {
    quote: createQuote(text: $text)
  }
`;

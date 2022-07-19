import { gql } from "@apollo/client";

export const GET_ALL_QUOTES = gql`
  query GetAllQuotes {
    quotes {
      text
      by
    }
  }
`;

export const USER_PROFILE = gql`
  query UserProfile {
    user: userProfile {
      firstName
      lastName
      email
      quotes {
        text
      }
    }
  }
`;

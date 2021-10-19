import { gql } from '@apollo/client'

export const GET_USERS = gql`
  {
    users {
      name
      email
    }
  }
`

export const GET_USER = gql`
  query getPost($email: String!) {
    user(email: $email) {
      name
      email
    }
  }
`
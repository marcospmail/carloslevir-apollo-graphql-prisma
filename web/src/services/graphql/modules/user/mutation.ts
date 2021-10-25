import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation createUser($email: String!, $name: String!) {
    createUser(data: { name: $name, email: $email }) {
      email
      name
    }
  }
`
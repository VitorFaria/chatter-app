import { graphql } from "../gql";

export const userFragment = graphql(`
  fragment UserFragment on User {
    _id
    username
    email
    imageUrl
  }
`);
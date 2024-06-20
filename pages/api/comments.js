// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { gql } from "graphql-request";

import { GraphQLClient as gqcl } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function comments(req, res) {
  const { name, email, slug, comment } = req.body;
  const GraphQLClient = new gqcl(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      CreateComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      )
    }
  `;

  try {
    const result = await GraphQLClient.request(query, req.body);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
}

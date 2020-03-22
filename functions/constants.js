// gql db

exports.GQL_BASEURI = "https://graphql.fauna.com/graphql";
exports.GQL_AUTH =
  "Basic " + Buffer.from(process.env.FAUNADB_KEY + ":").toString("base64");

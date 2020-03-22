import * as consts from "../constants";

export const gql = {
  async fetch(query, variables = {}) {
    const res = await fetch(consts.API_GQL_BASEURI, {
      method: "POST",
      headers: {
        "API-KEY": consts.API_KEY
      },
      body: JSON.stringify({ query, variables })
    });
    let data = await res.json();
    if (data.error) throw data.error;
    return data.data;
  }
};

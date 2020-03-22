const fetch = require("node-fetch");
const consts = require("./constants");

exports.handler = async (event, context, cb) => {
  try {
    const res = await fetch(consts.GQL_BASEURI, {
      method: "POST",
      headers: {
        Authorization: consts.GQL_AUTH
      },
      body: event.body
    });
    const data = await res.text();
    cb(null, {
      statusCode: 200,
      body: data
    });
  } catch (err) {
    cb(JSON.stringify(err));
  }
};

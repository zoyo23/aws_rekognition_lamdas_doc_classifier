'use strict';

const infra_docs = require(process.env.PATH_LAYER);

module.exports.handle = async (event) => {

  console.log(event);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: infra_docs.log()
      },
      null,
      4
    ),
  };
};
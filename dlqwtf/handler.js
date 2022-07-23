"use strict";

module.exports.hello = async (event) => {
  throw new Error(`Wow this error: ${(new Date()).toISOString()}`);
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify(
  //     {
  //       message: "Go Serverless v3.0! Your function executed successfully!",
  //       input: event,
  //     },
  //     null,
  //     2
  //   ),
  // };
};
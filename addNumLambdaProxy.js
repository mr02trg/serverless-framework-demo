'use strict';

module.exports.addNum = async (event) => {

  if (event.body) {
    const {num1, num2} = JSON.parse(event.body);
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          num1,
          num2,
          result: num1 + num2
        },
        null,
        2
      ),
    };
  }

  return {
    statusCode: 400,
    body: "Bad Request"
  }

  

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

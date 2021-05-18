'use strict';

module.exports.addNum = async (event) => {

  const {num1, num2} = event;
  return num1 + num2;
};

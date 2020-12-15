const {checkInventory} = require('./Main2.js');

const order = [['sunglasses', 4], ['bags', 2]];

// Write your code below:

const handleSuccess = (resolvedValue) => {
  return console.log(resolvedValue);
}

const handleFailure = (rejectedValue) => {
  return console.log(rejectedValue);
}

checkInventory(order).then(handleSuccess, handleFailure);

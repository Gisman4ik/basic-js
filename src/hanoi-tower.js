const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  const obj = {
    turns: 3,
    seconds: 0,
  }
  for (let i = 2; i < disksNumber; i++) {
    obj.turns = obj.turns*2 + 1;
  }
  obj.seconds= Math.floor(obj.turns/(turnsSpeed/60/60));
  return obj;
};

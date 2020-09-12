const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
let time =0;
if(!sampleActivity || typeof sampleActivity !== 'string' || !!isNaN(+sampleActivity) || +sampleActivity>15 || +sampleActivity<=0) {
  return false;
}
time = Math.ceil(Math.log(MODERN_ACTIVITY/+sampleActivity)/(0.693/5730));
return time
  
};

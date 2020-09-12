const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  depth = 0;  
  calculateDepth = ( arr ) => {
    if(Array.isArray(arr)) {
      this.depth++;
      for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
          console.log(this.depth, arr[i])
          this.calculateDepth(arr[i]);
        }
      }  
    }
    return this.depth;
  }
};
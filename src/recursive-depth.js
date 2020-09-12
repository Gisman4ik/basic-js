const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth = ( arr ) => {
    if(Array.isArray(arr)) {
      let comDepth=1;
      for (let i = 0; i < arr.length || i<1; i++) {
        let locDepth=1;
        if(Array.isArray(arr[i])) {
          locDepth += this.calculateDepth(arr[i]);
        }
        if(locDepth > comDepth) {
          comDepth = locDepth
        };
        locDepth=0;
      }  
      return comDepth ;
    }
  }
};
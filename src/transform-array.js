const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  if (!Array.isArray(array)) {
    throw new Error ('error');
  }
  const arr = [...array];
  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case '--discard-prev' :
        if (!arr[i-1] && arr[i-1]!==false && arr[i-1]!==0 && !Number.isNaN(arr[i-1])) {
          arr.splice(i,1)
          break;
        }
        delete arr[i-1];
        arr.splice(i,1);
        i-=1
        break;
      case '--discard-next' :
        if (!arr[i+1] && arr[i+1]!==false && arr[i+1]!==0 && !Number.isNaN(arr[i+1])) {
          arr.splice(i,1)
          break;
        }
        delete arr[i+1]
        arr.splice(i,1);
        break;
      case '--double-prev' :
        if (!arr[i-1] && arr[i-1]!==false && arr[i-1]!==0 && !Number.isNaN(arr[i-1])) {
          arr.splice(i,1)
          break;
        }
        arr.splice(i-1,2,arr[i-1],arr[i-1]);
        i-=1
        break;
      case '--double-next' :
        if (!arr[i+1] && arr[i+1]!==false && arr[i+1]!==0 && !Number.isNaN(arr[i+1])) {
          arr.splice(i,1)
          break;
        }
        arr.splice(i,2,arr[i+1],arr[i+1]);
        i-=1
        break;
    }
  }
  for(let k=0;k<arr.length;k++) {
    if(arr[k] === undefined) {
      arr.splice(k,1)
      k--
    }
  } 
    return arr;
};
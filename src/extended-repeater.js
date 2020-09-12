const CustomError = require("../extensions/custom-error");
module.exports = function repeater( str, options ) {
  let result = '';
  if (!options.repeatTimes) {
    if (!!options.addition) {
      return str+options.addition;
    }
    return str;
  }
  if (typeof str !== 'string') {
    str=str+'';
    if (typeof options.addition !== 'string') {
      options.addition=options.addition+'';
    }
  }
  for(let i=0;i<options.repeatTimes;i++) {
    result+=str;
    if (!!options.addition) {
      if (!!options.additionRepeatTimes) {
        for(let k=1;k<=options.additionRepeatTimes;k++){
          if(!!options.additionSeparator && k<options.additionRepeatTimes) {
            result+=options.addition + options.additionSeparator;
          }
          else result+=options.addition;
        }
        
      }
    }
  
    if(!!options.separator && i+1<options.repeatTimes) {
      result+=options.separator
    }    
    else if (!options.separator && i+1<options.repeatTimes) result+='+'
  }

  return result;
};
  
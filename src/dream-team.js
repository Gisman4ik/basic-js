const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let name=''; 
  if(!Array.isArray(members)) return false;
  for (let k = 0; k < members.length; k++) {
    if (typeof members[k]=== 'string') {
      members[k]=members[k].toUpperCase().replace(/\s/g,'');
    }
    
  }
  members.sort();
  for(let i=0;i<members.length;i++){
    if (typeof members[i]=== 'string') {
      name+=members[i][0];
    }

  }
  return name;
};

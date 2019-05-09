function isPalindrom(str){
  for(let i = 0; i < parseInt(str.length / 2); i++){
    if(str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

console.log(isPalindrom('ABBA'));
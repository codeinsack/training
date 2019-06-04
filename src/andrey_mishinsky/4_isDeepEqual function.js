function isDeepEqual(first, second){
  return (JSON.stringify(first) === JSON.stringify(second));
}

console.log(isDeepEqual([1, 2],[1, 2]));
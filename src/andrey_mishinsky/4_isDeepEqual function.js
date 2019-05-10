function isDeepEqual(first, second){
  if(typeof(first) === typeof(second)){
    if(typeof(first) !== "object"){
      return (first === second)
    }
    else{
      return (JSON.stringify(first) === JSON.stringify((second)));
    }
  }
  else return false;
}
const a = { name: 'John', age: 18, car: { name: 'Ford', year: 2007 } };
const b = { name: 'John', age: 18, car: { name: 'Mazda', year: 2007 } };

function isDeepEqual(first, second) {
  if (typeof (first) !== typeof (second)) return false;
  if (typeof (first) !== 'object') return (first === second);
  if (Array.isArray(first)) {
    for (let i = 0; i < first.length; i++) {
      if (!isDeepEqual(first[i], second[i])) {
        return false;
      }
    }
    return true;
  }
  if (typeof (first) === 'object') {
    const keysInFirst = (Object.keys(first)).sort();
    const keysInSecond = (Object.keys(second)).sort();
    for (let i = 0; i < keysInFirst.length; i++) {
      if (keysInFirst[i] !== keysInSecond[i]) {
        return false;
      }
    }
    for (let i = 0, j = 0; i < keysInFirst.length; i++) {
      j = keysInFirst[i];
      if (!isDeepEqual(first[j], second[j])) {
        return false;
      }
    }
    return true;
  }
}

console.log(isDeepEqual(true, true));

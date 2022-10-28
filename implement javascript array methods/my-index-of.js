Array.prototype.myIndexOf = function(value) {
  const myArr = this;
  for (let i = 0; i < myArr.length; i++) {
    // if value  exist return index
    if (myArr[i] == value) return i;
  }
  // if value doesn't exist return -1
  return -1;
};

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(myArr.indexOf(4)); // 3
console.log(myArr.myIndexOf(4)); // 3
console.log(myArr.indexOf(11)); // -1
console.log(myArr.myIndexOf(11)); // -1

Array.prototype.myLastIndexOf = function(value) {
  // iterate  the array from end to start
  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i] == value) return i;
  }
  return -1;
};

const myArr = [1, 2, 3, 4, 5, 9, 7, 9, 9, 10];

console.log(myArr.myLastIndexOf(9)); // 8

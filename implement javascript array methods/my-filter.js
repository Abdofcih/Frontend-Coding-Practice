Array.prototype.myFilter = function(callback) {
  const results = [];
  for (let i = 0; i < this.length; i++) {
    // if callback returns true add the element to the new array
    if (callback(this[i], i, this)) results.push(this[i]);
  }
  return results;
};

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter the array and return odd numbers
myArr = myArr.myFilter((element, index, arr) => {
  return element % 2; // true: 3 % 2 = 1 , false: 4 % 2 = 0
});

console.log(myArr); // [1, 3, 5, 7, 9]

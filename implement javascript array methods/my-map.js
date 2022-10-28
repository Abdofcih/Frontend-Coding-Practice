Array.prototype.myMap = function map(callback) {
  const results = []; //new array to save new elements
  for (let i = 0; i < this.length; i++) {
    let newElement = callback(this[i], i, this);
    results.push(newElement);
  }
  return results;
};

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

myArr = myArr.myMap((element, index, arr) => {
  return index * element;
});

console.log(myArr); // [0, 2, 6, 12, 20, 30, 42, 56, 72, 90]

Array.prototype.myReduce = function(callback, initialValue) {
  let value = initialValue;
  for (let i = 0; i < this.length; i++) {
    value = callback(value, this[i]);
  }
  return value;
};
const myArr = [1, 2, 3, 4, 5];
const sum = myArr.myReduce((acc, elem) => {
  return acc + elem;
}, 0);

console.log(sum); // 15

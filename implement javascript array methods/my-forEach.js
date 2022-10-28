Array.prototype.myForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

output.myForEach((element, index, array) => {
  console.log(element, index, array);
}); // 1 2 3 4 5 6 7 8 9 10

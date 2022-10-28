Array.prototype.myReverse = function() {
  let firstIndex = 0;
  let lastIndex = this.length - 1;
  while (firstIndex < lastIndex) {
    let temp = this[firstIndex];
    this[firstIndex] = this[lastIndex];
    this[lastIndex] = temp;
    firstIndex++;
    lastIndex--;
  }
  return this;
};

const myArr = [1, "a", "word", { name: "abdo" }, 2, "last element"];

console.log(myArr.myReverse());
// ['last element', 2, { name: 'abdo' }, 'word', 'a', 1]

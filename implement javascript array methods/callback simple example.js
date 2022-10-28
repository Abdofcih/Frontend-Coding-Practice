const doJob = (num, callback) => {
  console.log("this runs first");
  console.log(`Do Job : ${num - 2}`);
  callback();
};
const myFunction = doJob(5, function() {
  console.log("this - my code - runs second");
});

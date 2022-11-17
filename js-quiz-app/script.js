const correctAnswers = ["B", "B", "B", "B"];

const form = document.querySelector(".quiz-form");
const resultEl = document.querySelector(".result");
const resultNum = document.querySelector(".resultNum");

form.addEventListener("submit", e => {
  e.preventDefault();
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ];
  const qLength = userAnswers.length;
  let score = 0;
  userAnswers.forEach((answer, i) => {
    if (answer === correctAnswers[i]) score++;
  });
  const percentage = (score / qLength) * 100;
  //the same as window.scrollTo(0,0)
  scrollTo(0, 0);

  resultEl.classList.remove("d-none");
  let output = 0;
  const timer = setInterval(() => {
    resultNum.innerText = `${output}%`;
    if (output == percentage) clearInterval(timer);
    else output++;
  }, 10);
  console.log(percentage);
});

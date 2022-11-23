//select elements to deal with and  write in
const section = document.querySelector("section");
const tbody = document.querySelector("tbody");

const tick = () => {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minuts = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  section.innerHTML = ` 
    <span>${hours < 10 ? `0${hours}` : hours}</span>
    <span>${minuts < 10 ? `0${minuts}` : minuts}</span>
    <span>${seconds < 10 ? `0${seconds}` : seconds}</span>`;
};
setInterval(tick, 1000);

const now = new Date();

const values = [
  { name: "now", value: now },
  { name: "now.getFullYear()", value: now.getFullYear() },
  { name: "now.getMonth()", value: now.getMonth() },
  { name: "now.getDate()", value: now.getDate() },
  { name: "now.getDay()", value: now.getDay() },
  { name: "now.getHours()", value: now.getHours() },
  { name: "now.getMinutes()", value: now.getMinutes() },
  { name: "now.getSeconds()", value: now.getSeconds() },
  { name: "now.timeStamp()", value: now.getTime() },
  { name: "now.toDateString()", value: now.toDateString() },
  { name: "now.toLocaleString()", value: now.toLocaleString() },
  { name: "now.toTimeString()", value: now.toTimeString() },
  { name: "now.toLocaleDateString()", value: now.toLocaleDateString() },
  { name: "now.toLocaleTimeString()", value: now.toLocaleTimeString() }
];

const displayMethods = () => {
  tbody.innerHTML = `${values
    .map(({ name, value }, index) => {
      return `
  <tr>
  <td>${index + 1}</td>
    <td>${name}</td>
    <td>${value}</td>
  </tr>
  </tr>`;
    })
    .join("")}
  `;
};
displayMethods();

const searchEl = document.querySelector(".searchForm input");
const searchForm = document.querySelector(".searchForm");
const addEl = document.querySelector(".addFrom");
const todosEl = document.querySelector(".todos");
const todoEls = document.querySelectorAll(".todo");

addEl.addEventListener("submit", e => {
  e.preventDefault();
  const newItemValue = addEl.add.value.trim();
  let newItem = `<article class="todo">
  <p>${newItemValue}</p>
  <button class="btn btn-delete">delete</button>
</article>`;
  todosEl.innerHTML += newItem;
  addEl.reset();
});

todosEl.addEventListener("click", e => {
  console.log(e.target);
  if (e.target.classList.contains("btn-delete")) {
    e.target.parentElement.remove();
  }
});

searchForm.addEventListener("submit", e => e.preventDefault());

// onChange does not work instantly
searchEl.addEventListener("keyup", e => {
  const searchValue = searchEl.value.trim().toLowerCase();

  Array.from(todosEl.children).forEach(item => {
    if (item.innerText.includes(searchValue)) {
      item.classList.remove("filtered");
    } else {
      item.classList.add("filtered");
    }
  });
});

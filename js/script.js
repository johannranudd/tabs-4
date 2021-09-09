const tabsContainer = document.querySelector(".tabs-container");
const btns = tabsContainer.querySelectorAll("button");
const content = tabsContainer.querySelectorAll(".content");

window.addEventListener("DOMContentLoaded", function () {
  content.forEach(function (item) {
    if (!item.className.includes("history")) {
      return item;
    }
    item.classList.add("active");
  });
  btns.forEach(function (item) {
    if (!item.className.includes("history")) {
      return item;
    }
    item.classList.add("active");
  });
});

tabsContainer.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    addActive(content, id);
    addActive(btns, id);
  }
});

function addActive(items, id) {
  items.forEach(function (item) {
    if (!item.className.includes(id)) {
      return item;
    }
    item.classList.add("active");
  });
  items.forEach(function (newItem) {
    if (newItem.className.includes(id)) {
      return newItem;
    }
    newItem.classList.remove("active");
  });
}

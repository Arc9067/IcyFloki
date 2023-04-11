let navToggle = document.querySelector(".nav-toggle");
let navUl = document.querySelector(".nav-ul");
let navLi = document.querySelectorAll(".nav-li");
let header = document.querySelector("header");
let date = document.querySelector("#date");
navToggle.addEventListener("click", () => {
  navUl.classList.toggle("display-ul");
});

navLi.forEach((ele) => {
  ele.addEventListener("click", () => {
    navUl.classList.contains("display-ul")
      ? navUl.classList.remove("display-ul")
      : console.log("hey");
  });
});

document.addEventListener("scroll", (event) => {
  window.pageYOffset > 500
    ? (header.style.background = "#fff")
    : (header.style.background = "transparent");
});

let year = new Date().getFullYear();
date.textContent = year;

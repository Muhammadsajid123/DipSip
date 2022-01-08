const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelectorAll(".nav-list");

hamburger.addEventListener("click", () => {
  header.classList.toggle("active");
});

navList.forEach((item) => {
  item.addEventListener("click", () => {
    header.classList.remove("active");
  });
});

// ==================
const footerYear = document.querySelector(".year");
const year = new Date().getFullYear();

footerYear.textContent = year;

//===================
const fields = document.querySelectorAll(".contacts-wrapper > div > *");

fields.forEach((field) => {
  field.addEventListener("click", (e) => {
    fields.forEach((field) => {
      field.classList.remove("active");
      console.log(field.classList);
    });
    if (!e.target.classList.contains("active")) {
      e.target.classList.add("active");
      console.log(e.target.classList);
    }
  });
});

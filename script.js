"use strict";
// let burgerDiv = document.querySelector(".burger");
// let navi = document.querySelector(".navigation");
// let header = document.querySelector(".header");
// burgerDiv.addEventListener("click", function (x) {
//   burgerDiv.classList.toggle("burgeractive");
//   navi.classList.toggle("active");
//   header.classList.toggle("activeHeader");
// });

let container = document.querySelectorAll(".container");

let icons = document.querySelectorAll(".icon1");

container.forEach(function (item) {
  item.addEventListener("click", function () {
    this.classList.toggle("activeContainer");

    icons.forEach((x) => {
      x.classList.toggle("fa-arrow-up");
      x.classList.toggle("fa-arrow-down");
    });
  });
});

// let clickhere = document.querySelector(".scroll");
// clickhere.addEventListener("click", function (event1) {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });

// let maincHeade = document.querySelector(".mainHeader");

// window.onscroll = function () {
//   let top = window.scrollY;
//   console.log(top);
//   if (top >= 100) {
//     maincHeade.classList.add("actiuri");
//   } else {
//     maincHeade.classList.remove("actiuri");
//   }
// };

const btn = document.querySelector("#btn");
const codeChecker = document.querySelector("#code_checker");
const orderSuccess = document.querySelector("#order_success");
const closeSuccess = document.querySelector("#order_close");
const closeCode = document.querySelector("#code_close");
const btnSuccess = document.querySelector("#btn_success");
const orderBack = document.querySelector("#order-back");
const codeBack = document.querySelector("#code-back");
const allBtn = document.querySelector("#allBtn");
btn.addEventListener("click", () => {
  codeChecker.style.transform = "translateX(0)";
  codeChecker.style.display = "block";
});

closeCode.addEventListener("click", () => {
  codeChecker.style.transform = "translateX(100%)";
  codeChecker.style.display = "block";
});

btnSuccess.addEventListener("click", () => {
  orderSuccess.style.transform = "translateX(0)";
  codeChecker.style.transform = "translateX(100%)";
  codeChecker.style.display = "none";
  orderSuccess.style.display = "block";
});

closeSuccess.addEventListener("click", () => {
  orderSuccess.style.transform = "translateX(100%)";
  orderSuccess.style.display = "none";
});
orderBack.addEventListener("click", () => {
  orderSuccess.style.transform = "translateX(100%)";
  orderSuccess.style.display = "none";
  codeChecker.style.transform = "translateX(0)";
  codeChecker.style.display = "block";
});
codeBack.addEventListener("click", () => {
  codeChecker.style.transform = "translateX(100%)";
  codeChecker.style.display = "none";
});
allBtn.addEventListener("click", () => {
  orderSuccess.style.transform = "translateX(100%)";
  orderSuccess.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

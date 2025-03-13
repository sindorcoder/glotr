document.addEventListener("DOMContentLoaded", function () {
  // Cache DOM elements
  const elements = {
    btn: document.querySelector("#btn"),
    codeChecker: document.querySelector("#code_checker"),
    orderSuccess: document.querySelector("#order_success"),
    closeSuccess: document.querySelector("#order_close"),
    closeCode: document.querySelector("#code_close"),
    btnSuccess: document.querySelector("#btn_success"),
    orderBack: document.querySelector("#order-back"),
    codeBack: document.querySelector("#code-back"),
    allBtn: document.querySelector("#allBtn"),
  };

  // Show element function
  const showElement = (el) => {
    el.style.transform = "translateX(0)";
    el.style.display = "block";
  };

  const hideElement = (el) => {
    el.style.transform = "translateX(100%)";
    setTimeout(() => {
      el.style.display = "none";
    }, 300);
  };

  elements.btn.addEventListener("click", () =>
    showElement(elements.codeChecker)
  );

  elements.closeCode.addEventListener("click", () =>
    hideElement(elements.codeChecker)
  );

  elements.btnSuccess.addEventListener("click", () => {
    hideElement(elements.codeChecker);
    showElement(elements.orderSuccess);
  });

  elements.closeSuccess.addEventListener("click", () =>
    hideElement(elements.orderSuccess)
  );

  elements.orderBack.addEventListener("click", () => {
    hideElement(elements.orderSuccess);
    showElement(elements.codeChecker);
  });

  elements.codeBack.addEventListener("click", () =>
    hideElement(elements.codeChecker)
  );

  elements.allBtn.addEventListener("click", () =>
    hideElement(elements.orderSuccess)
  );

  new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

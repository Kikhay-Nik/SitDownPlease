const filtersWrapper = document.querySelector(".filter-column");

if (filtersWrapper) {
  const filterMoreBtns = document.querySelectorAll(".filter__more-btn");

  filterMoreBtns.forEach((el) => {
    el.addEventListener("click", (e) => {
      const currentBtn = e.currentTarget;
      const currentHiddenElements =
        currentBtn.previousElementSibling.querySelectorAll(
          ".filter__item--hidden"
        );
      currentHiddenElements.forEach((elem) => {
        elem.classList.add("filter__item--visible");
        elem.classList.remove("filter__item--hidden");
      });

      currentBtn.classList.add("visually-hidden");
    });
  });
}

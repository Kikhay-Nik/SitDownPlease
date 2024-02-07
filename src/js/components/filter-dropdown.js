const filtersWrapper = document.querySelector(".filter-column");

if (filtersWrapper) {
  const filterBtns = document.querySelectorAll(".filter__btn");
  const filterDropdowns = document.querySelectorAll(".filter__dropdown");

  filterBtns.forEach((el) => {
    el.addEventListener("click", (e) => {
      const currentBtn = e.currentTarget;
      const filterDropdown = currentBtn
        .closest(".filter")
        .querySelector(".filter__dropdown");

      filterBtns.forEach((el) => {
        if (el !== currentBtn) {
          el.classList.remove("filter__btn--active");
        }
      });

      filterDropdowns.forEach((el) => {
        if (el !== filterDropdown) {
          el.classList.remove("filter__dropdown--active");
        }
      });

      currentBtn.classList.toggle("filter__btn--active");
      filterDropdown.classList.toggle("filter__dropdown--active");
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest('.filter')) {
      filterBtns.forEach((el) => {
        el.classList.remove("filter__btn--active");
      });

      filterDropdowns.forEach((el) => {
        el.classList.remove("filter__dropdown--active");
      });
    }
  });
}

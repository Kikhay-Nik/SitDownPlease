const ratingProductWrapper = document.querySelector(
  ".rating__products-wrapper"
);
const ratingMoreBtn = document.querySelector(".rating__more-btn");
const hideClass = "product-card--hide";
const visibleClass = "product-card--visible";
const amountShowElements = 4;

function showHiddenElem(wrapper, hideClass, visibleClass, btn, amountElement) {
  const hideElements = wrapper.querySelectorAll(`.${hideClass}`);
  const elemLenght = hideElements.length;
  if (elemLenght === 0) {
    btn.style.display = "none";
    return
  } else {
    if (elemLenght > amountElement) {
      for (let i = 0; i < amountElement; i++) {
        const element = hideElements[i];
        element.classList.add(visibleClass);
        element.classList.remove(hideClass);
      }
    } else {
      for (const hideElem of hideElements) {
        hideElem.classList.add(visibleClass);
        hideElem.classList.remove(hideClass);
      }
      btn.style.display = "none";
    }
  }
}

if (ratingMoreBtn) {
  ratingMoreBtn.addEventListener("click", () => {
    showHiddenElem(
      ratingProductWrapper,
      hideClass,
      visibleClass,
      ratingMoreBtn,
      amountShowElements
    );
  });
}

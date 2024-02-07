import { throttle } from "../functions/throttle";

const ratingProductWrapper = document.querySelector(
  ".rating__products-wrapper"
);
const ratingMoreBtn = document.querySelector(".rating__more-btn");
const hideClass = "product-card--hide";
const visibleClass = "product-card--visible";
const amountShowElementsLarge = 4;
const amountShowElementsMiddle = 3;
const elementsClass = "rating__product";

function showHiddenElem(wrapper, hideClass, visibleClass, btn, amountElement) {
  const hideElements = wrapper.querySelectorAll(`.${hideClass}`);
  const elemLenght = hideElements.length;
  if (elemLenght === 0) {
    btn.style.display = "none";
    return;
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

function showCurrentElementsAmount(wrapper, elemClass, hideClass) {
  const clientWidth = document.documentElement.clientWidth;
  const allElements = wrapper.querySelectorAll(`.${elemClass}`);
  const amountElementsLarge = 8;
  const amountElementsMiddle = 6;

  allElements.forEach((element) => {
    element.classList.remove(hideClass);
  });

  if (clientWidth > 1240) {
    for (let i = amountElementsLarge; i < allElements.length; i++) {
      allElements[i].classList.add(hideClass);
    }
  }

  if (clientWidth < 1240) {
    for (let i = amountElementsMiddle; i < allElements.length; i++) {
      allElements[i].classList.add(hideClass);
    }
  }
}

if (ratingProductWrapper) {
  showCurrentElementsAmount(ratingProductWrapper, elementsClass, hideClass);

  let yourFunc = () => {
    showCurrentElementsAmount(ratingProductWrapper, elementsClass, hideClass);
  };
  let func = throttle(yourFunc);
  window.addEventListener("resize", func);
}

if (ratingMoreBtn) {
  ratingMoreBtn.addEventListener("click", () => {
    const screenWidth = document.documentElement.clientWidth;

    if (screenWidth < 995) {
      showHiddenElem(
        ratingProductWrapper,
        hideClass,
        visibleClass,
        ratingMoreBtn,
        amountShowElementsLarge
      );

      return;
    }

    if (screenWidth < 1240) {
      showHiddenElem(
        ratingProductWrapper,
        hideClass,
        visibleClass,
        ratingMoreBtn,
        amountShowElementsMiddle
      );

      return;
    }

    if (screenWidth > 1240) {
      showHiddenElem(
        ratingProductWrapper,
        hideClass,
        visibleClass,
        ratingMoreBtn,
        amountShowElementsLarge
      );

      return;
    }
  });
}

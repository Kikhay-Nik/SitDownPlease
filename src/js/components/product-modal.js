import GraphModal from "graph-modal";
import { largeSlider, thumbSlider } from "./product-modal-slider";

const productImageWrapper = document.querySelector(".product__image-wrapper");

if (productImageWrapper) {
  const productImageBtns = productImageWrapper.querySelectorAll(
    ".product-modal-button"
  );

  productImageBtns.forEach((btn, index) => {
    btn.setAttribute("data-index", index);

    btn.addEventListener("click", (e) => {
      let slideIndex = 0;
      slideIndex = e.currentTarget.dataset.index;

      largeSlider.slideTo(slideIndex);
      thumbSlider.slideTo(slideIndex);
    });
  });

  let productModal = document.querySelector(".product__modal");
  productModal = new GraphModal();
}

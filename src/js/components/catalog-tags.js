import { throttle } from "../functions/throttle";

const formatValue = (n) => new Intl.NumberFormat("ru-RU").format(n);

const createTagElement = (value, className) => {
  const tag = document.createElement("div");
  const tagText = document.createElement("span");
  const tagCloseBtn = document.createElement("button");
  const tagBtnIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  const svgTag = document.createElementNS("http://www.w3.org/2000/svg", "use");
  svgTag.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    "img/sprite.svg#close"
  );

  tagBtnIcon.classList.add("tag__btn-icon");
  tagCloseBtn.classList.add("tag__btn-close", "btn-reset");
  tagText.classList.add("tag__text");
  tag.classList.add("tag", className);

  tagText.innerText = value;

  tagCloseBtn.addEventListener("click", () => {
    if (!tag.className.includes("price")) {
      const checkboxes = document.querySelectorAll(".custom-checkbox__field");
      checkboxes.forEach((elem) => {
        if (elem.value === tagText.textContent) {
          elem.checked = false;
          return;
        }
      });
    } else {
      const priceMaxInput = document.getElementById("input-max");
      priceMaxInput.value = 150000;
    }

    tag.remove();
  });

  tagBtnIcon.append(svgTag);
  tagCloseBtn.append(tagBtnIcon);
  tag.append(tagText);
  tag.append(tagCloseBtn);

  return tag;
};

const createFilterCheckboxTags = (wrapper, parent) => {
  const checkedInputs = wrapper.querySelectorAll(".custom-checkbox__field");
  const checkedValues = [];

  for (var index = 0; index < checkedInputs.length; index++) {
    if (checkedInputs[index].checked) {
      checkedValues.push(checkedInputs[index].value);
    }
  }

  for (const value of checkedValues) {
    if (wrapper.className.includes("category")) {
      const tagElement = createTagElement(value, "tag--category");
      parent.prepend(tagElement);
    }

    if (wrapper.className.includes("discount")) {
      const tagElement = createTagElement(value, "tag--discount");
      parent.prepend(tagElement);
    }

    if (wrapper.className.includes("color")) {
      const tagElement = createTagElement(value, "tag--color");
      parent.prepend(tagElement);
    }
  }
};

const createPriceMaxTag = (parent) => {
  const priceMaxInput = document.getElementById("input-max");
  const inputValue = priceMaxInput.value;

  const curentValue = `до ${formatValue(inputValue)}`;
  const priceTag = createTagElement(curentValue, "tag--price");
  parent.prepend(priceTag);
};

const catalog = document.querySelector(".catalog");
if (catalog) {
  const tagsWrapper = document.querySelector(".tags-wrapper");
  const categoryWrapper = document.querySelector(".filter__list--category");
  const discountWrapper = document.querySelector(".filter__list--discount");
  const colorWrapper = document.querySelector(".filter__list--color");

  createFilterCheckboxTags(colorWrapper, tagsWrapper);
  createFilterCheckboxTags(discountWrapper, tagsWrapper);
  createPriceMaxTag(tagsWrapper);
  createFilterCheckboxTags(categoryWrapper, tagsWrapper);

  // category tags
  const categoryCheckboxes = categoryWrapper.querySelectorAll(
    ".custom-checkbox__field"
  );
  categoryCheckboxes.forEach((elem) => {
    elem.addEventListener("input", (e) => {
      const checkboxValue = elem.value;
      if (elem.checked) {
        const tagElement = createTagElement(checkboxValue, "tag--category");
        tagsWrapper.prepend(tagElement);
      } else {
        const categoryTags = tagsWrapper.querySelectorAll(".tag--category");
        categoryTags.forEach((tag) => {
          const tagText = tag.querySelector(".tag__text").textContent;
          if (checkboxValue === tagText) tag.remove();
        });
      }
    });
  });

  // priceTag
  const priceMaxInput = document.getElementById("input-max");
  priceMaxInput.addEventListener("change", (elem) => {
    const priceTag = tagsWrapper.querySelector(".tag--price");
    if (!priceTag) createPriceMaxTag(tagsWrapper);
    else {
      const tagText = priceTag.querySelector(".tag__text");
      tagText.textContent = `до ${formatValue(priceMaxInput.value)}`;
    }
  });

  // discount tag
  const discountCheckboxes = discountWrapper.querySelectorAll(
    ".custom-checkbox__field"
  );
  discountCheckboxes.forEach((elem) => {
    elem.addEventListener("input", () => {
      const checkboxValue = elem.value;
      const discountTag = tagsWrapper.querySelector(".tag--discount");
      discountCheckboxes.forEach((e) => {
        e.checked = false;
        elem.checked = true;
        discountTag.remove();
      });
      if (elem.checked) {
        const tagElement = createTagElement(checkboxValue, "tag--discount");
        tagsWrapper.prepend(tagElement);
      }
    });
  });

  // color checkboxes
  const colorCheckboxes = colorWrapper.querySelectorAll(
    ".custom-checkbox__field"
  );
  colorCheckboxes.forEach((elem) => {
    elem.addEventListener("input", (e) => {
      const checkboxValue = elem.value;
      if (elem.checked) {
        const tagElement = createTagElement(checkboxValue, "tag--color");
        tagsWrapper.prepend(tagElement);
      } else {
        const colorTags = tagsWrapper.querySelectorAll(".tag--color");
        colorTags.forEach((tag) => {
          const tagText = tag.querySelector(".tag__text").textContent;
          if (checkboxValue === tagText) tag.remove();
        });
      }
    });
  });

  let filtersPosition = () => {
    const clientWidth = document.documentElement.clientWidth;
    const filtersWrapper = document.querySelector(".filter-column");
    const catalogSlider = document.querySelector(".catalog-swiper");
    const catalogAside = document.querySelector(".catalog__aside");
    const filtersTitile = document.querySelector(".filter-column__title");
    if (clientWidth > 1240) {
      catalogAside.insertAdjacentElement("afterbegin", filtersWrapper);
      filtersTitile.textContent = "Фильтровать по:";
    } else {
      catalogSlider.before(filtersWrapper);
      filtersTitile.textContent = "Фильтры:";
    }
  };

  filtersPosition();
  let func = throttle(filtersPosition);
  window.addEventListener("resize", func);
}

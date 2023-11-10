import { rule } from "postcss";
import { validateForms } from "../functions/validate-forms";
import GraphModal from "graph-modal";

const rules1 = [
  {
    ruleSelector: ".search-form__input",
    rules: [
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Минимальное количество символов 3",
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Введите что хотите найти",
      },
    ],
  },
];

const rules2 = [
  {
    ruleSelector: "#feedbackName",
    rules: [
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Минимальное колличество символов 3",
      },
      {
        rule: "maxLength",
        value: 30,
        errorMessage: "Введите не более 30-ти символов",
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Это поле обязательно для заполнения",
      },
      {
        rule: "customRegexp",
        value: /^[а-яА-ЯёЁa-zA-Z]+$/,
        errorMessage: "Неверный формат",
      },
    ],
  },
  {
    ruleSelector: "#feedbackPhone",
    tel: true,
    telError: "Введите номер телефона полность",
    rules: [
      {
        rule: "required",
        errorMessage: "Укажите ваш телефон",
      },
      {
        rule: "minLength",
        value: 10,
        errorMessage: "Введите 10 символов",
      },
    ],
  },
  {
    ruleSelector: "#feedbackEmail",
    rules: [
      {
        rule: "required",
        errorMessage: "Введите Email",
      },
      {
        rule: "email",
        errorMessage: "Введите коректный Email",
      },
    ],
  },
  {
    ruleSelector: ".custom-checkbox__field",
    rules: [
      {
        rule: "required",
        errorMessage: "Подтвердите согласие на обработку данных",
      },
    ],
  },
];

const rules3 = [
  {
    ruleSelector: "#buyOneClickName",
    rules: [
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Минимальное колличество символов 3",
      },
      {
        rule: "maxLength",
        value: 30,
        errorMessage: "Введите не более 30-ти символов",
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Это поле обязательно для заполнения",
      },
      {
        rule: "customRegexp",
        value: /^[а-яА-ЯёЁa-zA-Z]+$/,
        errorMessage: "Неверный формат",
      },
    ],
  },
  {
    ruleSelector: "#buyOneClickPhone",
    tel: true,
    telError: "Введите номер телефона полность",
    rules: [
      {
        rule: "required",
        errorMessage: "Укажите ваш телефон",
      },
      {
        rule: "minLength",
        value: 10,
        errorMessage: "Введите 10 символов",
      },
    ],
  },
  {
    ruleSelector: ".custom-checkbox__field",
    rules: [
      {
        rule: "required",
        errorMessage: "Подтвердите согласие на обработку данных",
      },
    ],
  },
];

const rules4 = [
  {
    ruleSelector: ".search-form__input",
    rules: [
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Минимальное количество символов 3",
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Введите что хотите найти",
      },
    ],
  },
];

const afterFeedbackForm = () => {
  const feedbackFormMessage = document.querySelector(".feedback-form__message");

  if (feedbackFormMessage) {
    feedbackFormMessage.classList.add("message-visible");

    setTimeout(() => {
      feedbackFormMessage.classList.remove("message-visible");
    }, 2500);
  }
};

const afterBuyOneClick = () => {
  let buyOneClickModal = document.querySelector(
    '[data-graph-target="confirm-modal"]'
  );
  let buyOneClickModalClose = buyOneClickModal.querySelector(".js-modal-close");

  buyOneClickModalClose.click();

  new GraphModal().open("confirm-modal");
};

const searchForm = document.querySelector(".search-form");
const feedbackForm = document.querySelector(".feedback-form");
const buyOneClickForm = document.querySelector(".buy-one-click__form");
const findStoresForm = document.querySelector(".find-stores__form");

if (searchForm) {
  validateForms(".search-form", rules1);
}

if (feedbackForm) {
  validateForms(".feedback-form", rules2, afterFeedbackForm);
}

if (buyOneClickForm) {
  validateForms(".buy-one-click__form", rules3, afterBuyOneClick);
}

if (findStoresForm) {
  validateForms('.find-stores__form', rules4);
}

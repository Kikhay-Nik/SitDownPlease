import noUiSlider from "../../../node_modules/nouislider/dist/nouislider.min.mjs";

const rangeSlider = document.getElementById("range-slider-line");

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [2000, 150000],
    step: 100,
    connect: true,
    handleAttributes: [
      { "aria-label": "уменьшить цену" },
      { "aria-label": "увеличить цену" },
    ],
    behaviour: "tap",
    range: {
      min: 0,
      max: 220000,
    },
  });

  const inputMin = document.getElementById("input-min");
  const inputMax = document.getElementById("input-max");
  const inputs = [inputMin, inputMax];

  rangeSlider.noUiSlider.on("update", function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });

  const setRangeValue = (i, value) => {
    const arr = [null, null];

    arr[i] = value;
    rangeSlider.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener("change", (e) => {
      setRangeValue(index, e.currentTarget.value);
    });
  });
}

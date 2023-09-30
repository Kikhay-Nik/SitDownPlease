const regionDropdown = document.querySelector('.location-dropdown');

if (regionDropdown) {
  const regionChoices = regionDropdown.querySelector('.location-dropdown__choices');
  const coices = new Choices(regionChoices,
   {
    allowHTML: false,
    searchEnabled: false,
    itemSelectText: '',
    renderSelectedChoices: 'false',
    shouldSort: false,
   });
}

const categoryDropdown = document.querySelector('.category-dropdown');

if (categoryDropdown) {
  const categoryChoices = categoryDropdown.querySelector('.category-dropdown__choices');
  const coices = new Choices(categoryChoices,
   {
    allowHTML: false,
    searchEnabled: false,
    itemSelectText: '',
    renderSelectedChoices: 'false',
    shouldSort: false,
   });
}

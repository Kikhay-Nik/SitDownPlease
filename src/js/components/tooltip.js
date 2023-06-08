import tippy from 'tippy.js';

tippy('.js-tooltip', {
  allowHTML: true,
  arrow: true,
  trigger: 'mouseenter focus click',
  interactive: true,
  duration: 300,
  theme: 'Accent',
  hideOnClick: false,
});

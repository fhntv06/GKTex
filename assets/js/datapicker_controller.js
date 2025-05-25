(function DataPickerInit() {
  const elem = document.querySelector('#datapicker');

  new DateRangePicker(elem, {
      buttonClass: 'custom-button-class',
      nextArrow: '<svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M1.25 1.75L7.25 7.75L1.25 14.25" stroke="#1A2B3C" stroke-width="2" stroke-linecap="round"/>\n' +
        '</svg>',
      prevArrow: '<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M8.25 14.25L2.25 8.25L8.25 1.75" stroke="#1A2B3C" stroke-width="2" stroke-linecap="round"/>\n' +
        '</svg>\n',
      format: 'dd.mm.yy',
  });
})();

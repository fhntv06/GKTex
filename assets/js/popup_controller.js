(function PopupParams() {
  const
    params = Array.from(document.querySelectorAll('[data-popup]')),
    popup = document.getElementById('popup-param');

  function closePopup(event) {
    if (event.target === popup) {
      popup.classList.remove('popup-param--open');
      popup.removeEventListener('click', closePopup);
      document.body.style.overflow = '';
    }
  }
  function openPopup(event) {
    popup.querySelector('[data-param-name]').textContent = event.currentTarget.dataset.paramName;
    popup.querySelector('[data-param-value]').textContent = event.currentTarget.dataset.paramValue;

    popup.classList.add('popup-param--open');
    document.body.style.overflow = 'hidden';

    popup.addEventListener('click', closePopup);
  }

  params.forEach((param) => param.addEventListener('click', openPopup))
})();

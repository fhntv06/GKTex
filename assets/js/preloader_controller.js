function preloaderInit() {
  const body = document.querySelector('body');
  const preloader = document.getElementById('preloader');

  const idTimer = setTimeout(() => {
    body.classList.add('loaded');
    preloader.classList.add('preloader--unvisible')

    clearTimeout(idTimer)
    document.removeEventListener('DOMContentLoaded', preloaderInit);
  }, Number(preloader.dataset?.timeout) || 1000);
}

document.addEventListener('DOMContentLoaded', preloaderInit);

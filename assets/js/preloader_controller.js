function preloaderInit() {
  const body = document.querySelector('body');
  const preloader = document.getElementById('preloader');

  const idTimerLoaded = setTimeout(() => {
    body.classList.add('loaded');
    preloader.classList.add('preloader--unvisible')

    clearTimeout(idTimerLoaded)
    document.removeEventListener('DOMContentLoaded', preloaderInit);
  }, Number(preloader.dataset?.timeout) || 1000);
}

document.addEventListener('DOMContentLoaded', preloaderInit);

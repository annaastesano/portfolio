import {log} from './logger';
import {init as initHeader} from './components/header';
import smoothScroll from 'smoothscroll';

log('Hello World');
const initSmoothScrollLinks = () => {
  const links = document.querySelectorAll('a[href^="#"]');
  [].forEach.call(links, (link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSelector = link.hash;
      const target = document.querySelector(targetSelector);
      console.log(smoothScroll);
      smoothScroll(target);
    })
  })
}

initHeader();
initSmoothScrollLinks();

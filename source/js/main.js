import {log} from './logger';
import {init as initHeader} from './components/header';
import {init as initEvents} from './components/events';
import SmoothScroll from 'smooth-scroll';
import './components/events/events-controller';



const initSmoothScrollLinks = () => {
  var scroll = new SmoothScroll('a[href*="#"]', {
    ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
    header: '.aa-header', // Selector for fixed headers (must be a valid CSS selector)
    topOnEmptyHash: true, // Scroll to the top of the page for links with href="#"
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    clip: true, // If true, adjust scroll distance to prevent abrupt stops near the bottom of the page
    easing: 'easeInOutCubic', // Easing pattern to use
    customEasing: function (time) {
      return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
    },
    updateURL: true, // Update the URL on scroll
    popstate: true, // Animate scrolling with the forward/backward browser buttons (requires updateURL to be true)
    emitEvents: true // Emit custom events
  });
}

initHeader();
initSmoothScrollLinks();
initSmoothScrollLinks();
initEvents();

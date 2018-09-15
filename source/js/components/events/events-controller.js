import axios from 'axios';
import handlebars from 'handlebars'

import eventsTemplate from './events-tempate';
import {init as initEvents} from '../events';

const eventsEndpoint = '/events.json';
const eventsContainer = document.querySelector('.aa-events__list');

const html = handlebars.compile(eventsTemplate);


axios.get(eventsEndpoint)
    .then((r) => {
        const events = r.data;
         eventsContainer.innerHTML = html({
            events
        });
        initEvents();
    });


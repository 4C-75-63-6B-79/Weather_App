import './style.css';

import makeDom  from './modules/makeHtmlElements.js';
import getWeatherInfo from './modules/getWeatherInfo.js';

console.log('weather app');

makeDom();
getWeatherInfo('Greenwich');

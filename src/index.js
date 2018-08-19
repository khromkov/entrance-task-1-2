/* global ymaps */

import { initMap } from './map';

ymaps.ready(() => {
  initMap(ymaps, 'map');
  console.log('inited'); // eslint-disable-line no-console
});
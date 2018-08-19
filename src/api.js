/* global IS_PRODUCTION */

/*
eslint-disable global-require
*/

import { mapServerData } from './mappers';

if (IS_PRODUCTION) {
  require('../utils/fake-backend');
}

export function loadList() {
  return fetch('/api/stations')
    .then(response => response.json())
    .then(mapServerData);
}

export function loadDetails(id) {
  return fetch(`/api/stations/${id}`).then(response => response.json());
}

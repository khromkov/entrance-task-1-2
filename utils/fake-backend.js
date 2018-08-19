const stations = require('./stations');

const nativeFetch = window.fetch;
class FakeResponse {
  constructor(data) {
    this.data = data;
  }

  json() {
    return this.data;
  }
}

window.fetch = (url, ...other) => {
  if (url === '/api/stations') {
    return Promise.resolve(new FakeResponse(stations.get()));
  }

  if (/api\/stations\/.+/.test(url)) {
    const id = url.match(/api\/stations\/(.+)/)[1];
    return Promise.resolve(new FakeResponse(stations.get(id)));
  }

  return nativeFetch(url, ...other);
};

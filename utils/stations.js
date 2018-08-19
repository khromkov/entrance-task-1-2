const { generateData, generateDetails } = require('./generate-data');

const stations = {
  data: generateData(),
  cache: {},
  get(id) {
    const { data, cache } = this;

    if (id == null) {
      return data;
    }

    const info = data[id];
    const details = cache[id] || (cache[id] = generateDetails(info));

    return { ...info, ...details };
  },
};

module.exports = stations;

const stations = require('./stations');

exports.initBackendStub = app => {
  app.get('/api/stations', (req, res) => {
    res.json(stations.get());
  });

  app.get('/api/stations/:id', (req, res) => {
    const { id } = req.params;

    res.json(stations.get(id));

    return {};
  });
};

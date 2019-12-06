const proxy = require('http-proxy-middleware');

module.exports = function(app) {

  app.use(
    "/api",
    proxy({
      target: "http://baobab.kaiyanapp.com",
      changeOrigin: true
    })
  );

};

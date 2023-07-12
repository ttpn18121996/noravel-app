const Application = (base_dir) => {
  const express = require('express');
  const app = express();
  require('dotenv').config();
  const path = require('path');
  const ServiceProvider = require(`${base_dir}/core/Support/ServiceProvider`)(app);
  const webRouter = require(`${base_dir}/routes/web`);

  // Register static files
  app.use(express.static('public'));

  // Register view engine
  app.set('views', `${base_dir}/resources/views`);
  app.set('view engine', 'ejs');

  // Register router
  ServiceProvider.initial();
  ServiceProvider.run();

  return app;
};

module.exports = Application;

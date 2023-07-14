const Application = require('noravel').default;

const Bootstrap = base_dir => {
  console.log(base_dir)
  const express = require('express');
  const app = express();
  require('dotenv').config();
  const path = require('path');

  // Register static files
  app.use(express.static('public'));

  // Register view engine
  app.set('views', `${base_dir}/resources/views`);
  app.set('view engine', 'ejs');

  Application(app, base_dir).run();

  return app;
};

module.exports = Bootstrap;

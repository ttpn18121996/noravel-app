const Noravel = require('noravel').default;
const path = require('path');

const Bootstrap = base_dir => {
  const express = require('express');
  const app = express();
  require('dotenv').config();
  const path = require('path');
  const expressLayouts = require('express-ejs-layouts');

  // Register static files
  app.use(express.static('public'));

  // Register view engine
  app.use(expressLayouts);
  app.set('views', `${base_dir}/resources/views`);
  app.set('layout', 'layouts/app');
  app.set('view engine', 'ejs');

  const kernel = Noravel(app, base_dir);
  kernel.run();

  return kernel;
};

const kernel = Bootstrap(path.join(__dirname + '/..'));

exports.default = kernel;
exports.resolve = (abstract = null) => {
  if (!abstract) {
    return kernel.container
  }

  return kernel.container.resolve(abstract);
};

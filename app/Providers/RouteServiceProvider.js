'use strict';

const { ServiceProvider } = require('noravel');

class RouteServiceProvider extends ServiceProvider {
  constructor(app, contaier) {
    super(app, contaier);
    this.registered = [];
  }

  load() {
    for (const routeFile of this.registered) {
      const router = require('../../' + routeFile.route_path);
      this.app.use(routeFile?.prefix ?? '', router);
    }
  }

  register() {
    this.registered.push({
      route_path: 'routes/web',
    });
  }

  boot() {
    this.load();
  }
}

module.exports = RouteServiceProvider;

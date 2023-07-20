'use strict';

function RouteServiceProvider(app) {
  return {
    registered: [],
  
    load() {
      for (const routeFile of this.registered) {
        const router = require('../../' + routeFile.route_path);
        app.use(routeFile?.prefix ?? '', router);
      }
    },
  
    register() {
      this.registered.push({
        route_path: 'routes/web',
      });
    },
  
    boot() {
      this.load();
    },
  };
}

module.exports = RouteServiceProvider;

const appConfig = {
  app_name: process.env.APP_NAME,

  providers: [
    'AppServiceProvider',
    'RouteServiceProvider',
  ],
};

module.exports = appConfig;

function ServiceProvider(app) {
  const serviceProviderRegistered = [];

  return {
    initial() {
      const { providers } = require('../../config/app');
      for (const providerName of providers) {
        const provider = require(`../../app/Providers/${providerName}`)(app);
        provider.register();
        serviceProviderRegistered.push(provider);
      }
    },
  
    run() {
      for (const serviceProvider of serviceProviderRegistered) {
        serviceProvider.boot();
      }
    },
  }
}

module.exports = ServiceProvider;

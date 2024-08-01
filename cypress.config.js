const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "https://www.leyaonline.com/pt/",
    testIsolation: true,
    retries: {
      runMode: 2,
      openMode: 2,
    },
    chromeWebSecurity: false,
  },
});

const { defineConfig } = require("cypress");


module.exports = defineConfig({
  env: {
    sauceDemoUrl: "https://www.saucedemo.com/",
    UserName: 'standard_user',
    Password: 'secret_sauce',
    invalidPassword: 'invalid_secret_sauce'
  },

  chromeWebSecurity: false,
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    specPattern: "./cypress/feature/*.feature",
  },
});

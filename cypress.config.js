const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    chromeWebSecurity: false,
    experimentalRunAllSpecs: true, // Enables the "Run all specs" button in the UI
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
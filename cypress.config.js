const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "36kyjz",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

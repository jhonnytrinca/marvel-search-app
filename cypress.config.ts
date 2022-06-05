import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
    setupNodeEvents(on, config) {},
    viewportHeight: 1080,
    viewportWidth: 1920,
    specPattern: 'cypress/unit/**/*.test.{jsx,tsx}',
  }
})

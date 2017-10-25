const ProxySettings = require('./proxy-settings')
const pageDefinitions = require('./page-definitions')

exports.config = {
  name: 'integration-tests',
  bootstrap: './bootstrap.js',
  tests: './tests/**/*_test.js',
  output: './output',
  timeout: 10000,
  helpers: {
    WebDriverIO: {
      host: process.env.WEB_DRIVER_HOST || 'localhost',
      port: process.env.WEB_DRIVER_PORT || '4444',
      browser: process.env.BROWSER || 'chrome',
      url: process.env.URL || 'https://localhost:3000',
      waitForTimeout: 15000,
      desiredCapabilities: {
        proxy: new ProxySettings()
      }
    },
    IdamHelper: {
      require: './helpers/idamHelper'
    }
  },
  include: pageDefinitions,
  mocha: {
    reporterOptions: {
      'codeceptjs-cli-reporter': {
        stdout: '-',
        options: {
          steps: true
        }
      },
      'mocha-junit-reporter': {
        stdout: './output/mocha-stdout.log',
        options: {
          mochaFile: './output/integration-result.xml'
        }
      }
    }
  }
}

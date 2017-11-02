const ProxySettings = require('./src/config/proxy-settings')
const citizenPageDefinitions = require('./src/tests/citizen/page-definitions')
const legalPageDefinitions = require('./src/tests/legal/page-definitions')

exports.config = {
  name: 'integration-tests',
  bootstrap: './src/bootstrap/bootstrap.ts',
  tests: './src/tests/**/*_test.*',
  output: './output',
  timeout: 10000,
  helpers: {
    WebDriverIO: {
      host: process.env.WEB_DRIVER_HOST || 'localhost',
      port: process.env.WEB_DRIVER_PORT || '4444',
      browser: process.env.BROWSER || 'chrome',
      url: process.env.CITIZEN_APP_URL || 'https://localhost:3000',
      waitForTimeout: 15000,
      desiredCapabilities: {
        proxy: new ProxySettings()
      }
    },
    IdamHelper: {
      require: './src/helpers/idamHelper'
    },
    PageHelper: {
      require: './src/helpers/pageHelper'
    },
    DownloadPdfHelper: {
      require: './src/helpers/downloadPdfHelper'
    }
  },
  include: Object.assign({ }, citizenPageDefinitions, legalPageDefinitions),
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
      },
      'mochawesome': {
        stdout: `./output/mochawesome-stdout.log`,
        options: {
          reportDir: 'output',
          reportFilename: `e2e-result`,
          inlineAssets: true,
          reportTitle: `E2E tests result`
        }
      }
    }
  }
}

const pageDefinitions = require('./page-definitions')
const supportedBrowsers = require('./supported-browsers')

const browser = requiredValue(process.env.SAUCELABS_BROWSER, 'SAUCELABS_BROWSER')
const saucelabsTunnelIdentifier = requiredValue(process.env.SAUCELABS_TUNNEL_IDENTIFIER, 'SAUCELABS_TUNNEL_IDENTIFIER')
const saucelabsUsername = requiredValue(process.env.SAUCELABS_USERNAME, 'SAUCELABS_USERNAME')
const saucelabsAccessKey = requiredValue(process.env.SAUCELABS_ACCESS_KEY, 'SAUCELABS_ACCESS_KEY')

function requiredValue (envVariableValue, variableName) {
  if (envVariableValue && envVariableValue.trim().length > 0) {
    return envVariableValue
  } else {
    throw new Error(`${variableName} is a required environment variable, but wasn't set`)
  }
}

function setupDesiredCapabilitiesFor (browser, saucelabsTunnelName) {
  let desiredCapability = supportedBrowsers[browser]
  desiredCapability.tunnelIdentifier = saucelabsTunnelName
  desiredCapability.tags = ['cmc']
  return desiredCapability
}

exports.config = {
  name: 'integration-tests',
  bootstrap: './bootstrap.js',
  tests: './tests/**/*_test.js',
  output: './output',
  timeout: 10000,
  helpers: {
    WebDriverIO: {
      url: process.env.URL || 'https://localhost:3000',
      browser: supportedBrowsers[browser].browserName,
      waitForTimeout: 60000,
      windowSize: '1600x900',
      uniqueScreenshotNames: true,
      timeouts: {
        script: 60000,
        pageLoad: 60000,
        'page load': 60000
      },
      host: 'ondemand.saucelabs.com',
      port: 80,
      user: saucelabsUsername,
      key: saucelabsAccessKey,
      desiredCapabilities: setupDesiredCapabilitiesFor(browser, saucelabsTunnelIdentifier)
    },
    IdamHelper: {
      require: './helpers/idamHelper'
    },
    SaucelabsReporter: {
      require: './helpers/saucelabsReporter.js'
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
        stdout: `./output/${browser}-mocha-junit-reporter-stdout.log`,
        options: {
          mochaFile: `./output/${browser}-e2e-result.xml`,
          reportTitle: `Cross browser E2E results for: ${browser}`,
          inlineAssets: true
        }
      },
      'mochawesome': {
        stdout: `./output/${browser}-mochawesome-stdout.log`,
        options: {
          reportDir: 'output',
          reportFilename: `${browser}-e2e-result`,
          inlineAssets: true,
          reportTitle: `${browser} E2E tests result`
        }
      }
    }
  }
}

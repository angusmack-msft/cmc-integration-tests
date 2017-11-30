/* tslint:disable:no-console */

import * as fs from 'fs'
import * as request from 'request-promise-native'
import { RequestResponse } from 'request'

const citizenAppURL = process.env.CITIZEN_APP_URL
const legalAppURL = process.env.LEGAL_APP_URL

class Client {
  static checkHealth (appURL: string): Promise<RequestResponse> {
    return request.get({
      uri: `${appURL}/health`,
      resolveWithFullResponse: true,
      rejectUnauthorized: false,
      ca: fs.readFileSync('localhost.crt'),
      json: true
    }).catch((error) => {
      return error
    })
  }
}
// TS:no-
function logStartupProblem (response) {
  if (response.body) {
    console.log(response.body)
  } else if (response.message) {
    console.log(response.message)
  }
}

function handleError (error) {
  const errorBody = () => {
    return error && error.response ? error.response.body : error
  }
  console.log('Error during bootstrap, exiting', errorBody())
  process.exit(1)
}

function sleepFor (sleepDurationInSeconds: number) {
  console.log(`Sleeping for ${sleepDurationInSeconds} seconds`)
  return new Promise((resolve) => {
    setTimeout(resolve, sleepDurationInSeconds * 1000)
  })
}

async function waitTillHealthy (appURL: string) {
  const maxTries = 36
  const sleepInterval = 10

  console.log(`Verifying health for ${appURL}`)

  let response: RequestResponse
  for (let i = 0; i < maxTries; i++) {
    response = await Client.checkHealth(appURL)
    console.log(`Attempt ${i + 1} - received status code ${response.statusCode} from ${appURL}/health`)

    if (response.statusCode === 200) {
      console.log(`Service ${appURL} became ready after ${sleepInterval * i} seconds`)
      return Promise.resolve()
    } else {
      logStartupProblem(response)
      await sleepFor(sleepInterval)
    }
  }

  const error = new Error(`Failed to successfully contact ${appURL} after ${maxTries} attempts`)
  error.message = '' + response
  return Promise.reject(error)
}

module.exports = async function (done: () => void) {
  try {
    await Promise.all([
      waitTillHealthy(citizenAppURL),
      waitTillHealthy(legalAppURL)
    ])
  } catch (error) {
    handleError(error)
  }
  done()
}

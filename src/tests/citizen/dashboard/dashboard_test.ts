import { claimant, defendant } from 'data/test-data'
import { Helper } from 'tests/citizen/endToEnd/steps/helper'
import I = CodeceptJS.I

const helperSteps: Helper = new Helper()

Scenario('Check newly created claim is in my account dashboard with correct claim amount @citizen', function* (I: I) {
  const email: string = yield I.createCitizenUser()
  const claimRef: string = yield helperSteps.makeClaim(email)
  I.click('My account')
  I.see('Your money claims account')
  I.see(claimRef + ' ' + defendant(email).name + ' £' + claimant().claimAmount.getTotal().toFixed(2))
})

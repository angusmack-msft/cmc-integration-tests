import { defendant } from 'data/test-data'

Scenario('Check newly created claim is in my account dashboard with correct claim amount @citizen', function * (I: CodeceptJS.I, helperSteps, claimSteps) {
  const email = yield I.createCitizenUser()
  const claimRef = yield helperSteps.makeClaim(email)
  I.click('My account')
  I.see('Your money claims account')
  I.see(claimRef + ' ' + defendant(email).name + ' £' + claimSteps.getTotalClaimAmount().toString())
})

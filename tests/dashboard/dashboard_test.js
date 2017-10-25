'use strict'

const defendant = require('../../test-data').defendant

Scenario('Check newly created claim is in my account dashboard with correct claim amount', function * (I, helperSteps, claimSteps) {
  const email = yield I.createIdamUser()
  const claimRef = yield helperSteps.makeClaim(email)
  I.click('My account')
  I.see('Your money claims account')
  I.see(claimRef + ' ' + defendant(email).name + ' £' + claimSteps.getTotalClaimAmount().toString())
})

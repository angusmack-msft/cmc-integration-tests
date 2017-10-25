let I
let claimSteps
let defenceSteps

module.exports = {

  _init () {
    I = actor()
    claimSteps = require('../../claim/steps/claim')
    defenceSteps = require('../../defence/steps/defence')
  },

  makeClaim (email) {
    return claimSteps.makeAClaimAndSubmit(email, claimSteps.claimantType.individual, defenceSteps.defendantType.individual)
  },
  async enterPinNumber (claimRef) {
    defenceSteps.enterClaimReference(claimRef)
    I.waitForText('Please enter your security code to continue')
    defenceSteps.enterClaimPin(claimRef)
  },
  finishResponse (typeofDefendant, defendant) {
    I.waitForText('View the claim')
    defenceSteps.respondToClaim()
    defenceSteps.makeDefenceAndSubmit(typeofDefendant, defendant)
  }
}

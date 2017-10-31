'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    claimReference: 'input#reference'
  },
  buttons: {
    submit: 'input[type=submit]'
  },

  open () {
    I.amOnCitizenAppPage('/first-contact/claim-reference')
  },

  enterClaimReference (claimReference) {
    I.fillField(this.fields.claimReference, claimReference)

    I.click(this.buttons.submit)
  }
}

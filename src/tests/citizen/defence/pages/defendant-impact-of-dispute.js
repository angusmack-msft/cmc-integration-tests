'use strict'
let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    text: 'textarea[id="text"]'
  },

  enterImpactOfDispute (text) {
    I.fillField(this.fields.text, text)
  },

  submitForm () {
    I.click('Save and continue')
  }

}

'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    pinNumber: 'input#pinnumber'
  },
  buttons: {
    submit: 'input[type=submit]'
  },

  enterPinNumber (pinNumber) {
    I.fillField(this.fields.pinNumber, pinNumber)

    I.click(this.buttons.submit)
  }
}

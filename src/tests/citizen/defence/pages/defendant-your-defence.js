'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    reason: 'textarea[id=text]'
  },

  buttons: {
    submit: 'input[type=submit]'
  },

  enterYourDefence (defence) {
    I.fillField(this.fields.reason, defence)
    I.click(this.buttons.submit)
  }
}

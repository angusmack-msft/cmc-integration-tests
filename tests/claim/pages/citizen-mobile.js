'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    mobileNumber: 'input[id=number]'
  },

  buttons: {
    submit: 'input[type=submit]'
  },

  open (type) {
    I.amOnPage(`/claim/${type}-mobile`)
  },

  enterMobile (mobileNumber) {
    I.fillField(this.fields.mobileNumber, mobileNumber)
    I.click(this.buttons.submit)
  }
}

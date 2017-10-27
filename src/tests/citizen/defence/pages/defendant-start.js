'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  buttons: {
    submit: 'a.button.button-start'
  },

  open () {
    I.amOnPage('/first-contact/start')
  },

  start () {
    I.click(this.buttons.submit)
  }
}

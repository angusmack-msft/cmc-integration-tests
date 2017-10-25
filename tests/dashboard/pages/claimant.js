'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  buttons: {
    submit: 'input[type=submit]'
  },

  clickRequestCCJ () {
    I.click(this.buttons.submit)
  }
}

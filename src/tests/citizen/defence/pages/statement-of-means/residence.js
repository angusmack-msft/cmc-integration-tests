'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    ownHome: 'input[id="typeOWN_HOME"]'
  },

  buttons: {
    submit: 'input[type=submit]'
  },

  selectOwnHome () {
    I.checkOption(this.fields.ownHome)
    I.click(this.buttons.submit)
  }
}

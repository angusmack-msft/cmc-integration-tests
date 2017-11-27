'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    dontPayMaintenance: 'input[id="optionfalse"]'
  },

  buttons: {
    submit: 'input[type=submit]'
  },

  selectDontPayMaintenance () {
    I.checkOption(this.fields.dontPayMaintenance)
    I.click(this.buttons.submit)
  }
}

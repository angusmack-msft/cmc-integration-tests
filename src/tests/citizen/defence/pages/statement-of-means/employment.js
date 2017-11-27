'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    notWorkingCurrently: 'input[id="isCurrentlyEmployedfalse"]'
  },

  buttons: {
    submit: 'input[type=submit]'
  },

  selectNotWorkingCurrently () {
    I.checkOption(this.fields.notWorkingCurrently)
    I.click(this.buttons.submit)
  }
}

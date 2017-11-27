'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    dontHaveChildren: 'input[id="hasAnyChildrenfalse"]'
  },

  buttons: {
    submit: 'input[type=submit]'
  },

  selectDontHaveChildren () {
    I.checkOption(this.fields.dontHaveChildren)
    I.click(this.buttons.submit)
  }
}

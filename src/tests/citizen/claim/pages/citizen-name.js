'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    name: 'input[id=name]'
  },
  buttons: {
    submit: 'input[type=submit]'
  },

  open (type) {
    I.amOnCitizenAppPage(`/claim/${type}-name`)
  },

  enterName (name) {
    I.fillField(this.fields.name, name)
    I.click(this.buttons.submit)
  }
}

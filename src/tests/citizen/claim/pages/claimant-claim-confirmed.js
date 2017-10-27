'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    claimReference: 'div.reference-number > h1.bold-large'
  },

  getClaimReference () {
    return I.grabTextFrom(this.fields.claimReference)
  }
}

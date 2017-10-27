'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  links: {
    iAlreadyHaveAnAccount: 'Already have an account? Click here to login instead.'
  },

  clickLinkIAlreadyHaveAnAccount () {
    I.click(this.links.iAlreadyHaveAnAccount)
  }
}

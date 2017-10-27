'use strict'

let I

module.exports = {

  _init () {
    I = actor()
  },
  open () {
    I.click('My account')
  },

  selectClaim (claimRef) {
    I.click(claimRef)
  }
}

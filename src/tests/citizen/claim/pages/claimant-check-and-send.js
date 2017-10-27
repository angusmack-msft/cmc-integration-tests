 'use strict'
/* global actor */

 let I

 module.exports = {

   _init () {
     I = actor()
   },

   fields: {
     checkboxFactsTrue: 'input#signedtrue',
     signerName: 'input[id=signerName]',
     signerRole: 'input[id=signerRole]'
   },
   buttons: {
     submit: 'input[type=submit]'
   },

   open (type) {
     I.amOnPage('/claim/check-and-send')
   },

   signStatementOfTruthAndSubmit (signerName, signerRole) {
     I.fillField(this.fields.signerName, signerName)
     I.fillField(this.fields.signerRole, signerRole)
     this.checkFactsTrueAndSubmit()
   },

   checkFactsTrueAndSubmit () {
     I.checkOption(this.fields.checkboxFactsTrue)
     I.click(this.buttons.submit)
   },

   verifyCheckAndSendAnswers (claimant) {
     I.see('Check your answers before submitting your claim')
     I.see(claimant.address.line1)
     I.see(claimant.address.line2)
     I.see(claimant.address.city)
     I.see(claimant.address.postcode)
     I.see(claimant.correspondenceAddress.line1)
     I.see(claimant.correspondenceAddress.line2)
     I.see(claimant.correspondenceAddress.city)
     I.see(claimant.correspondenceAddress.postcode)
   }

 }

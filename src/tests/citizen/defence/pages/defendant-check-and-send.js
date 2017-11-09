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

   signStatementOfTruthAndSubmit (signerName, signerRole) {
     I.fillField(this.fields.signerName, signerName)
     I.fillField(this.fields.signerRole, signerRole)
     this.checkFactsTrueAndSubmit()
   },

   checkFactsTrueAndSubmit () {
     I.checkOption(this.fields.checkboxFactsTrue)
     I.click(this.buttons.submit)
   },

   verifyFactsPartialResponseClaimAmountTooMuch () {
     I.see('I reject part of the claim')
     I.see('The claim amount is too much')
     I.see('How much money do you believe you owe?')
     I.see('Why this is what you owe?')
     I.see('Your timeline of events (optional)')
     I.see('Your evidence (optional)')
     I.see('Free mediation')
   },

   verifyFactsPartialResponseIBelieveIPaidWhatIOwe () {
     I.see('I reject part of the claim')
     I.see('I’ve paid what I believe I owe')
     I.see('How much have you paid the claimant?')
     I.see('When did you pay this amount?')
     I.see("Explain why you don’t owe the full amount")
     I.see('Your timeline of events (optional)')
     I.see('Your evidence (optional)')
     I.see('Free mediation')
   }

 }

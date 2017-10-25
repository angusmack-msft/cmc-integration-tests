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
   }
 }

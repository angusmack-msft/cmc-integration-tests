 'use strict'
/* global actor */

 let I
 let claimSteps
 let amountOutstanding
 let defenceSteps

 module.exports = {

   _init () {
     I = actor()
     claimSteps = require('../../claim/steps/claim')
     defenceSteps = require('../../defence/steps/defence')
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

   checkDefendantName (defendant, defendantType) {
     switch (defendantType) {

       case defenceSteps.defendantType.individual:
         I.see(defendant.name)
         break
       case defenceSteps.defendantType.soleTrader:
         I.see(defendant.soleTraderName)
         break
       case defenceSteps.defendantType.company:
         I.see(defendant.companyName)
         break
       case defenceSteps.defendantType.organisation:
         I.see(defendant.organisationName)
         break
       default:
         throw new Error('non-matching defendant type in check-and-send')
     }
   },

   verifyCheckAndSendAnswers (defendant, defendantType, defendantPaidAmount, address) {
     I.see('Check your answers')
     this.checkDefendantName(defendant, defendantType)
     I.see(address.line1)
     I.see(address.line2)
     I.see(address.city)
     I.see(address.postcode)
     I.see('Amount to be paid by defendant')
     amountOutstanding = claimSteps.getTotalClaimAmount() - defendantPaidAmount
     amountOutstanding = amountOutstanding.toFixed(2)
     I.see('£' + amountOutstanding.toString())
   }

 }

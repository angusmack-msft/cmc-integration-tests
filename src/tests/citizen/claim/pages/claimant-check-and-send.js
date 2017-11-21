 'use strict'
/* global actor */

 let I
 let claimSteps
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

   open (type) {
     I.amOnCitizenAppPage('/claim/check-and-send')
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

   verifyClaimantCheckAndSendAnswers (claimant, claimantType) {
     I.see(claimant.address.line1)
     I.see(claimant.address.line2)
     I.see(claimant.address.city)
     I.see(claimant.address.postcode)
     I.see(claimant.correspondenceAddress.line1)
     I.see(claimant.correspondenceAddress.line2)
     I.see(claimant.correspondenceAddress.city)
     I.see(claimant.correspondenceAddress.postcode)
     switch (claimantType) {

       case claimSteps.claimantType.individual:
         I.see(claimant.name)
// todo have to convert numeric month to full text month I.see(claimant.dateOfBirth)
         break
       case claimSteps.claimantType.soleTrader:
         I.see(claimant.soleTraderName)
         break
       case claimSteps.claimantType.company:
         I.see(claimant.companyName)
         I.see(claimant.name) // contact person
         break
       case claimSteps.claimantType.organisation:
         I.see(claimant.organisationName)
         I.see(claimant.name) // contact person
         break
       default:
         throw new Error('non-matching claimant type for claim')
     }
     I.see(claimant.mobileNumber)
     I.see(claimant.claimReason)
   },

   verifyDefendantCheckAndSendAnswers (defendant, defendantType, enterDefendantEmail = true) {
     I.see(defendant.address.line1)
     I.see(defendant.address.line2)
     I.see(defendant.address.city)
     I.see(defendant.address.postcode)
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
         throw new Error('non-matching defendant Type type for claim')
     }
     if (enterDefendantEmail) {
       I.see(defendant.email)
     }
   },
   verifyClaimAmount () {
     I.see('£' + claimSteps.getClaimAmount())
     I.see('£' + claimSteps.getClaimFee())
     I.see('£' + claimSteps.getTotalClaimAmount())
   },

   verifyCheckAndSendAnswers (claimant, claimantType, defendant, defendantType, enterDefendantEmail = true) {
     I.see('Check your answers before submitting your claim')
     this.verifyClaimantCheckAndSendAnswers(claimant, claimantType)
     this.verifyDefendantCheckAndSendAnswers(defendant, defendantType, enterDefendantEmail)
     this.verifyClaimAmount()
   }

 }

import { PartyType } from 'data/party-type'
import { claimant } from 'data/test-data'
import I = CodeceptJS.I

const I: I = actor()

const fields = {
  checkboxFactsTrue: 'input#signedtrue',
  signerName: 'input[id=signerName]',
  signerRole: 'input[id=signerRole]'
}

const buttons = {
  submit: 'input[type=submit]'
}

export class ClaimantCheckAndSendPage {

  open (type: string): void {
    I.amOnCitizenAppPage('/claim/check-and-send')
  }

  signStatementOfTruthAndSubmit (signerName: string, signerRole: string): void {
    I.fillField(fields.signerName, signerName)
    I.fillField(fields.signerRole, signerRole)
    this.checkFactsTrueAndSubmit()
  }

  checkFactsTrueAndSubmit (): void {
    I.checkOption(fields.checkboxFactsTrue)
    I.click(buttons.submit)
  }

  verifyClaimantCheckAndSendAnswers (claimant, claimantType: PartyType): void {
    I.see(claimant.address.line1)
    I.see(claimant.address.line2)
    I.see(claimant.address.city)
    I.see(claimant.address.postcode)
    I.see(claimant.correspondenceAddress.line1)
    I.see(claimant.correspondenceAddress.line2)
    I.see(claimant.correspondenceAddress.city)
    I.see(claimant.correspondenceAddress.postcode)
    switch (claimantType) {

      case PartyType.INDIVIDUAL:
        I.see(claimant.name)
        // todo have to convert numeric month to full text month I.see(claimant.dateOfBirth)
        break
      case PartyType.SOLE_TRADER:
        I.see(claimant.soleTraderName)
        break
      case PartyType.COMPANY:
        I.see(claimant.companyName)
        I.see(claimant.name) // contact person
        break
      case PartyType.ORGANISATION:
        I.see(claimant.organisationName)
        I.see(claimant.name) // contact person
        break
      default:
        throw new Error('non-matching claimant type for claim')
    }
    I.see(claimant.mobileNumber)
    I.see(claimant.claimReason)
  }

  verifyDefendantCheckAndSendAnswers (defendant, defendantType: PartyType, enterDefendantEmail: boolean = true): void {
    I.see(defendant.address.line1)
    I.see(defendant.address.line2)
    I.see(defendant.address.city)
    I.see(defendant.address.postcode)
    switch (defendantType) {

      case PartyType.INDIVIDUAL:
        I.see(defendant.name)
        break
      case PartyType.SOLE_TRADER:
        I.see(defendant.soleTraderName)
        break
      case PartyType.COMPANY:
        I.see(defendant.companyName)
        break
      case PartyType.ORGANISATION:
        I.see(defendant.organisationName)
        break
      default:
        throw new Error('non-matching defendant Type type for claim')
    }
    if (enterDefendantEmail) {
      I.see(defendant.email)
    }
  }

  verifyClaimAmount (): void {
    I.see('£' + claimant().claimAmount.getClaimTotal().toFixed(2))
    I.see('£' + claimant().claimAmount.claimFee.toFixed(2))
    I.see('£' + claimant().claimAmount.getTotal().toFixed(2))
  }

  verifyCheckAndSendAnswers (claimant, claimantType: PartyType, defendant, defendantType: PartyType, enterDefendantEmail: boolean = true): void {
    I.see('Check your answers before submitting your claim')
    this.verifyClaimantCheckAndSendAnswers(claimant, claimantType)
    this.verifyDefendantCheckAndSendAnswers(defendant, defendantType, enterDefendantEmail)
    this.verifyClaimAmount()
  }

}

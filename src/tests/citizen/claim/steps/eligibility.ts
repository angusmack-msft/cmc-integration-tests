import I = CodeceptJS.I

const I: I = actor()

function completeEligibilityPage (optionSelector: string) {
  I.checkOption(optionSelector)
  I.click('input[type=submit]')
}

export class EligibilitySteps {

  complete (): void {
    I.see('Check eligibility')
    I.click('Continue to questions')

    completeEligibilityPage('input[id=claimOnBehalfno]')
    completeEligibilityPage('input[id=claimIsForTenancyDepositno]')
    completeEligibilityPage('input[id=claimValueUNDER_10000]')
    completeEligibilityPage('input[id=singleClaimantyes]')
    completeEligibilityPage('input[id=singleDefendantyes]')
    completeEligibilityPage('input[id=eighteenOrOveryes]')
    completeEligibilityPage('input[id=helpWithFeesno]')
    completeEligibilityPage('input[id=claimantAddressyes]')
    completeEligibilityPage('input[id=defendantAddressyes]')
    completeEligibilityPage('input[id=governmentDepartmentno]')

    I.see('You can use this service')
    I.click('Continue')

  }
}

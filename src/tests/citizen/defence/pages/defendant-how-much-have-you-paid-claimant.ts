import I = CodeceptJS.I

const I: I = actor()

const fields = {
  amountClaimed: 'input[id=optionamountClaimed]',
  lessThanClaimed: 'input[id=optionlessThanClaimed]'
}

const buttons = {
  submit: 'input[type=submit]'
}

export class DefendantHowMuchHaveYouPaidClaimantPage {

  selectAmountClaimedOption (): void {
    I.checkOption(fields.amountClaimed)
    I.click(buttons.submit)
  }

  selectLessThanClaimedOption (): void {
    I.checkOption(fields.lessThanClaimed)
    I.click(buttons.submit)
  }
}

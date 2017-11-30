import I = CodeceptJS.I

const I: I = actor()

const fields = {
  dispute: 'input[id=optiondispute]',
  alreadyPaid: 'input[id=optionalreadyPaid]',
  counterClaim: 'input[id=optioncounterClaim]'
}

const buttons = {
  submit: 'input[type=submit]'
}

export class DefendantRejectAllOfClaimPage {

  disputeTheClaim (): void {
    I.checkOption(fields.dispute)
    I.click(buttons.submit)
  }

  alreadyPaid (): void {
    I.checkOption(fields.alreadyPaid)
    I.click(buttons.submit)
  }
}

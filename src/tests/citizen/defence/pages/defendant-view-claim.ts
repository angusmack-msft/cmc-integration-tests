import I = CodeceptJS.I

const I: I = actor()

const buttons = {
  submit: 'input[type=submit]'
}

export class DefendantViewClaimPage {

  open (): void {
    I.amOnCitizenAppPage('/first-contact/claim-summary')
  }

  clickRespondToClaim (): void {
    I.click(buttons.submit)
  }
}

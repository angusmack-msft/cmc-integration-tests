import I = CodeceptJS.I

const I: I = actor()

const buttons = {
  submit: 'input[type=submit]'
}

export class DefendantDefenceTypePage {

  rejectAllOfMoneyClaim (): void {
    I.checkOption('I admit all of the claim')
    I.click(buttons.submit)
  }

  rejectPartOfMoneyClaim (): void {
    I.checkOption('I admit part of the claim')
    I.click(buttons.submit)
  }

  rejectMoneyClaim (): void {
    I.checkOption('I reject all of the claim')
    I.click(buttons.submit)
  }

}

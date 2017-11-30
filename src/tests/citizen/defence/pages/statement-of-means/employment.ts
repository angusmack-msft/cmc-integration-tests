import I = CodeceptJS.I

const I: I = actor()

const fields = {
  notWorkingCurrently: 'input[id="isCurrentlyEmployedfalse"]'
}

const buttons = {
  submit: 'input[type=submit]'
}

export class EmploymentPage {

  selectNotWorkingCurrently (): void {
    I.checkOption(fields.notWorkingCurrently)
    I.click(buttons.submit)
  }
}

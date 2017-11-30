import I = CodeceptJS.I

const I: I = actor()

const fields = {
  dontPayMaintenance: 'input[id="optionfalse"]'
}

const buttons = {
  submit: 'input[type=submit]'
}

export class MaintenancePage {

  selectDontPayMaintenance (): void {
    I.checkOption(fields.dontPayMaintenance)
    I.click(buttons.submit)
  }
}

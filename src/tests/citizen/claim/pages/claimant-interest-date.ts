import I = CodeceptJS.I

const I: I = actor()

const fields = {
  typeSubmission: 'input[id=typesubmission]',
  typeCustom: 'input[id=typecustom]',

  day: 'input[id="date[day]"]',
  month: 'input[id="date[month]"]',
  year: 'input[id="date[year]"]',

  reason: 'input[id="reason"]'
}

const buttons = {
  submit: 'input[type=submit]'
}

export class ClaimantInterestDatePage {

  selectDefaultDate (): void {
    I.checkOption(fields.typeSubmission)
    I.click(buttons.submit)
  }

  selectParticularDate (day: string, month: string, year: string): void {
    I.checkOption(fields.typeCustom)
    I.fillField(fields.day, day)
    I.fillField(fields.month, month)
    I.fillField(fields.year, year)
    I.fillField(fields.reason, 'Because I want to')
    I.click(buttons.submit)
  }
}

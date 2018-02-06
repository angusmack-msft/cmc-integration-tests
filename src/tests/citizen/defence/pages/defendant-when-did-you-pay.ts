import I = CodeceptJS.I

const I: I = actor()

const fields = {
  day: 'input[id="date[day]"]',
  month: 'input[id="date[month]"]',
  year: 'input[id="date[year]"]',
  text: 'textarea[id=text]'
}

const buttons = {
  submit: 'input[type=submit]'
}

export class DefendantWhenDidYouPayPage {

  enterDateAndExplaination (date, explaination: string): void {
    I.fillField(fields.day, date.day)
    I.fillField(fields.month, date.month)
    I.fillField(fields.year, date.year)
    I.fillField(fields.text, explaination)
    I.click(buttons.submit)
  }
}

import I = CodeceptJS.I

const I: I = actor()

const fields = {
  day: 'input[id="date[day]"]',
  month: 'input[id="date[month]"]',
  year: 'input[id="date[year]"]'
}

const buttons = {
  submit: 'input[type=submit]'
}

export class DefendantPayBySetDatePage {

  paymentBySetDate (paymentDate): void {
    I.see('Order them to pay full amount by a set date')
    I.fillField(fields.day, paymentDate.day)
    I.fillField(fields.month, paymentDate.month)
    I.fillField(fields.year, paymentDate.year)

    I.click(buttons.submit)
  }
}

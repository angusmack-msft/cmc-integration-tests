import I = CodeceptJS.I
import { DateParser } from 'utils/date-parser'

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

  paymentBySetDate (paymentDate: string): void {
    const [ year, month, day ] = DateParser.parse(paymentDate)

    I.see('Order them to pay full amount by a set date')
    I.fillField(fields.day, day)
    I.fillField(fields.month, month)
    I.fillField(fields.year, year)

    I.click(buttons.submit)
  }
}

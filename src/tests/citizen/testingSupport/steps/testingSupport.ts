import I = CodeceptJS.I
import { UpdateResponseDeadlinePage } from 'tests/citizen/testingSupport/pages/update-response-deadline'

const I: I = actor()
const updateResponseDeadline: UpdateResponseDeadlinePage = new UpdateResponseDeadlinePage()

export class TestingSupportSteps {

  makeClaimAvailableForCCJ (claimRef: string): void {
    I.click('Testing support')
    I.click('Update response deadline')
    updateResponseDeadline.updateDeadline(claimRef, { day: '1', month: '1', year: '2000' })
  }
}

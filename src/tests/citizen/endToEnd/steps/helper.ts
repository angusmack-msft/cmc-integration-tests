import I = CodeceptJS.I
import { PartyType } from 'data/party-type'
import { DefenceSteps } from 'tests/citizen/defence/steps/defence'
import { DefenceType } from 'data/defence-type'

const I: I = actor()
const defenceSteps: DefenceSteps = new DefenceSteps()

export class Helper {

  async enterPinNumber (claimRef: string): Promise<void> {
    defenceSteps.enterClaimReference(claimRef)
    I.waitForText('Please enter your security code to continue')
    defenceSteps.enterClaimPin(claimRef)
  }

  finishResponse (defendantEmail: string, defendantType: PartyType, defenceType: DefenceType = DefenceType.FULL_REJECTION_WITH_DISPUTE): void {
    I.waitForText('View the claim')
    defenceSteps.respondToClaim()
    defenceSteps.makeDefenceAndSubmit(defendantEmail, defendantType, defenceType)
  }
}

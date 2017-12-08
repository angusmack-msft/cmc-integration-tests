declare namespace CodeceptJS {
  export interface I {
    createCitizenUser: () => string
    createSolicitorUser: () => string
    createClaim: (claimData: ClaimData, userEmail: string) => string

    amOnCitizenAppPage: (path: string) => void

    fillField: (locator: string, value: string) => any
  }
}

type CodeceptJSHelper = {
  _before: () => void;
  _after: () => void;
}

declare const codecept_helper: { new(): CodeceptJSHelper }

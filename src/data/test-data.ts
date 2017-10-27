const DEFAULT_PASSWORD = 'Password12'

const claimant = function (email) {
  return {
    email: email,
    password: DEFAULT_PASSWORD,
    name: 'John Smith',
    address: {
      line1: '23 Acacia Road',
      line2: 'some area',
      city: 'London',
      postcode: 'SW1A 1AA'
    },
    correspondenceAddress: {
      line1: '234 Acacia Road',
      line2: 'a really cool place',
      city: 'Edinburgh',
      postcode: 'EDE 1AC'
    },
    soleTraderName: 'Mr. Sole trader',
    companyName: 'Claimant company Inc',
    organisationName: 'United Nations',
    mobileNumber: '07700000001',
    dateOfBirth: {
      day: '26',
      month: '07',
      year: '1982'
    },
    claimAmount: {
      amount1: '10',
      amount2: '20.50',
      amount3: '50'
    }
  }
}

const defendant = function (email) {
  return {
    email: email,
    password: DEFAULT_PASSWORD,
    name: 'Rose Smith',
    address: {
      line1: 'The University of Manchester',
      line2: 'Oxford Road',
      city: 'Manchester',
      postcode: 'M13 9PL'
    },
    soleTraderName: 'Sole fish trader',
    companyName: 'Defendant company Inc',
    organisationName: 'OrgBritish Red Cross',
    mobileNumber: '07700000002',
    dateOfBirth: {
      day: '26',
      month: '07',
      year: '1982'
    }
  }
}

export {
  claimant,
  defendant
}

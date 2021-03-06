export const complianceDocuments = {
  nigeria: {
    individual: [
      { name: 'validId', id: 0, desc: 'Valid means of ID' },
      { name: 'bvn', id: 1, desc: 'Bank Verification Number' },
      { name: 'weburl', id: 2, desc: 'Web URL/Social Media page' },
      { name: 'physicalAddress', id: 3, desc: 'Residential address' },
      { name: 'bvn', id: 4, desc: 'Personal bank account details' },
      { name: 'bvn', id: 5, desc: 'Estimated Monthly Sales' },
    ],
    business: [
      { desc: 'Directors IDs & BVN' },
      { desc: 'Full MEMART Document' },
      { desc: 'Corporate Bank Account details' },
      { desc: 'Operational Business Address' },
      { desc: 'Verifiable website URL showing business activities' },
      { desc: 'Operating License (where business is regulated)' },
      { desc: 'Estimated Monthly Sales' },
    ],
    ngo: [
      { desc: 'IDs & BVN' },
      { desc: 'Trustees Names' },
      { desc: 'Full CAC Documents' },
      { desc: 'Corporate Bank Account details' },
      { desc: 'Operational Business Address' },
      { desc: 'Verifiable website URL (where required)' },
      { desc: 'Constitution/Memorandum of Guidance' },
      { desc: 'SCUML Certificate' },
      { desc: 'Estimated Monthly Sales' },
    ],
  },
  ghana: {
    individual: [
      { desc: 'Valid means of ID' },
      { desc: 'Web URL/Social Media page' },
      { desc: 'Residential address' },
      { desc: 'Personal bank account details' },
      { desc: 'Estimated Monthly Sales' },
    ],
    business: [
      { desc: 'IDs' },
      { desc: 'Incorporation Documents' },
      { desc: 'Directors Names' },
      { desc: 'Corporate Bank Account details' },
      { desc: 'Operational Business Address' },
      { desc: 'Verifiable website URL (where required)' },
      { desc: 'Operating License (where business is regulated' },
      { desc: 'Estimated Monthly Sales' },
    ],
    ngo: [
      { desc: 'IDs' },
      { desc: 'Incorporation DocumentsTrustees Names' },
      { desc: 'Corporate Bank Account details' },
      { desc: 'Operational Business Address' },
      { desc: 'Verifiable website URL (where required)' },
      { desc: 'Operating License (where business is regulated).' },
    ],
  },
  kenya: {
    individual: [
      { desc: 'I.D. Card (both sides) or International passport' },
      { desc: 'KRA Pin certificate' },
      { desc: 'A cancelled cheque or Bank reference letter' },
      { desc: 'A verifiable website URL' },
      { desc: 'Business profile detailing your nature of business' },
      { desc: 'Business physical address' },
    ],
    business: [
      { desc: 'Certificate of incorporation' },
      { desc: 'CR12 not older than 90days' },
      { desc: 'Company KRA Pin certificate' },
      {
        desc: 'I.D. Card (both sides) or International passport - for all directors',
      },
      {
        desc: 'A cancelled cheque or Bank reference letter (Corporate Account details)',
      },
      { desc: 'A verifiable website URL' },
      { desc: 'Business profile detailing your nature of business' },
      { desc: 'Business physical address' },
    ],
    ngo: [
      { desc: 'Valid IDs of Trustees (Certified True copies)' },
      { desc: 'Certificate of Registration' },
      {
        desc: 'Signed letter on letter head from NGO Board confirming Registration and existence including officials',
      },
      { desc: 'Corporate Bank Details' },
      { desc: 'Constitution/Particulars of Nominated Trustees' },
      { desc: 'KRA PIN of Trustees' },
      { desc: 'Operational Address' },
      { desc: 'Bank Reference Letter/ Voided Check.' },
    ],
  },
  uganda: {
    individual: [
      { desc: 'National ID Cards (both sides)' },
      { desc: 'Driving License or International passport' },
      { desc: 'Bank reference letter' },
      { desc: 'Other requirements' },
      { desc: 'Verifiable website URL or social media website' },
      { desc: 'Business profile' },
      { desc: 'Business physical Address' },
    ],
    business: [
      { desc: 'Directors National I.D. Cards (both sides)' },
      { desc: 'Driving License or International passport' },
      { desc: 'Certificate of Incorporation' },
      { desc: 'Certified Memorandum and articles of association' },
      { desc: 'URA Pin certificate' },
      { desc: 'A cancelled cheque or a Bank reference letter' },
      { desc: 'Operating License (if applicable)' },
      { desc: 'Other requirements' },
      { desc: 'Verifiable website URL or social media website' },
      { desc: 'Business profile' },
      { desc: 'Business physical Address' },
    ],
    ngo: [
      { desc: 'Directors National I.D. Cards (both sides)' },
      { desc: 'Certificate of Registration' },
      { desc: 'Permit to operate an NGO issued by NGO Board' },
      { desc: 'Certified Memorandum and articles of association' },
      { desc: 'Board resolution letter signed by directors of the NGO' },
      { desc: 'URA PIN certificate - (No available way of verifying)' },
      { desc: 'Driving License or International passport' },
      {
        desc: 'A cancelled cheque or a Bank reference letter confirming Bank account details',
      },
      { desc: 'Verifiable website URL' },
    ],
  },
  southAfrica: {
    individual: [
      {
        desc: 'Copy of ID document (SA Citizens) / Passport (Foreign Nationals)',
      },
      {
        desc: 'Proof of residential address ??? must reflect name of person signing up',
      },
      { desc: 'Copy of SARS document confirming income tax number' },
      {
        desc: 'Copy of bank document confirming individual banking details - account name must match name of business being signed up',
      },
      {
        desc: 'Work permit/authorization to earn income in SA (Foreign Nationals)',
      },
      { desc: 'Operating License (if licensed business activity)' },
      { desc: 'Source of funds' },
      { desc: 'Verifiable URL /social media page' },
    ],
    business: [
      { desc: 'Company CIPC registration documents' },
      { desc: 'Proof of business address' },
      {
        desc: 'Copy of SARS document confirming Income tax / VAT registration number for company',
      },
      {
        desc: 'Resolution on company letterhead signed by all directors nominating authorized signatory / representative',
      },
      { desc: 'Company shareholding structure' },
      { desc: 'Resolution on who is the signatory/ representative' },
      { desc: 'Copy of bank document confirming company banking details' },
      {
        desc: 'Copy of ID of authorized signatory / representative and / or CEO',
      },
      { desc: 'each director' },
      { desc: 'Verifiable URL' },
      { desc: 'Phone number' },
      { desc: 'Detailed business description' },
      { desc: 'Email address (business requirements)' },
    ],
    ngo: [
      {
        desc: 'Copy of document confirming list of all individuals who exercise control over the entity',
      },
      {
        desc: 'Resolution signed by all individuals who exercise control over the entity nominating authorized signatory / representative',
      },
      { desc: 'Proof of physical address for the entity' },
      {
        desc: 'Copy of SARS document confirming Income tax / VAT registration number for the entity',
      },
      { desc: 'Purpose' },
      { desc: 'founding values and beneficiaries of organization' },
      {
        desc: 'Copy of bank document confirming banking details of partnership account',
      },
      { desc: 'Copy of ID' },
      { desc: 'Proof of residential address' },
      { desc: 'Source of funds' },
      { desc: 'Verifiable URL' },
      { desc: 'phone number' },
      {
        desc: 'detailed business description and email address (business requirements)',
      },
    ],
  },
  rwanda: {
    individual: [
      { desc: 'ID Cards (both sides) or International passport' },
      { desc: 'Operating License' },
      { desc: 'Verifiable website URL or social media website' },
      { desc: 'Business profile' },
      { desc: 'Business physical Address' },
    ],
    business: [
      { desc: 'DB Certificate of Incorporation' },
      { desc: 'RDB Full registration information of the company' },
      { desc: 'RRA Pin certificate' },
      { desc: 'Directors I.D. Cards (both sides) or International passport' },
      {
        desc: 'A cancelled cheque or a Bank reference letter confirming Bank account',
      },
      { desc: 'Operating License' },
      { desc: 'Verifiable website URL' },
      { desc: 'Business profile' },
      { desc: 'Business physical Address' },
    ],
    ngo: [
      { desc: 'Certificate of Registration' },
      {
        desc: 'Signed letter on letterhead from NGO Board confirming Registration and existence including officials',
      },
      { desc: 'Corporate Bank Details' },
      { desc: 'Constitution/Particulars of Nominated Trustees' },
      { desc: 'Valid IDs of Trustees (Certified True copies)' },
      { desc: 'Operational Address' },
      { desc: 'Bank Reference Letter/Voided Check' },
    ],
  },
  zambia: {
    individual: [
      { desc: 'Valid means of ID' },
      { desc: 'Web URL/Social Media page' },
      { desc: 'Residential address ' },
      { desc: 'Personal bank account statement' },
    ],
    business: [
      { desc: 'Certification of Incorporation of the company' },
      { desc: 'ZRA tax registration' },
      { desc: 'Articles of Association' },
      { desc: 'Director ID / Passport' },
      { desc: 'Bank statement in the name of the company' },
      { desc: 'Website URL' },
    ],
    ngo: [
      { desc: 'Certification of Incorporation of the company & Constitution' },
      { desc: 'ZRA tax registration' },
      {
        desc: 'Signed letter on letterhead from NGO Board confirming Registration and existence including officials',
      },
      { desc: 'Trustees IDs / International Passport' },
      { desc: 'Bank statement in the name of the company' },
    ],
  },
  tanzania: {
    individual: [
      { desc: 'ID Cards (both sides) or International passport' },
      { desc: 'Bank reference letter' },
      { desc: 'Operating License (if applicable)' },
      { desc: 'Verifiable website URL or social media website' },
      { desc: 'Business profile' },
      { desc: 'Business physical Address' },
    ],
    business: [
      { desc: 'Certificate of Incorporation' },
      { desc: 'Company Tax certificate' },
      { desc: 'Certified Memorandum and articles of association' },
      { desc: 'Directors Driving License' },

      { desc: 'Business registration certificate' },
      { desc: 'Driving License' },
      { desc: 'National I.D. Cards (both sides) or International passport' },
      { desc: 'A cancelled cheque or a Bank reference letter' },
      { desc: 'Operating License (if applicable)' },
      { desc: 'Verifiable website URL or social media website' },
      { desc: 'Business profile' },
      { desc: 'Business physical Address' },
    ],
    ngo: [
      { desc: 'Certificate of Registration' },
      { desc: 'Certificate of Compliance' },
      {
        desc: 'A stamped or sealed Board resolution letter signed by directors of the NGO',
      },
      { desc: 'Directors I.D. Cards (both sides) or International passport' },
      { desc: 'Verifiable website URL' },
      {
        desc: 'A cancelled cheque or a Bank reference letter confirming Bank account details',
      },
    ],
  },
  cameroon: {
    individual: [
      { desc: 'Valid Identity Card (for Nationals)' },
      { desc: 'Valid Passport and Resident Permit for Foreign Nationals' },
      { desc: 'Tax payers / NIU card' },
      { desc: 'Localization Plan' },
      { desc: 'Contact details' },
    ],
    business: [
      { desc: 'Contract duly completed, signed and stamped ( If we have one)' },
      { desc: 'Fill, sign and stamp the KYC form' },
      { desc: 'Articles of Association' },
      { desc: 'Certificate of Non Indebtedness' },
      { desc: 'Certificate of incorporation' },
      { desc: 'ID of manager' },
      { desc: 'Tax Payers Card' },
      { desc: 'Bank domiciliation' },
      { desc: 'Attestation of location & Location plan' },
      { desc: 'Letter naming manager if different from that in statutes' },
      { desc: 'Business License' },
    ],
    ngo: null,
  },
  untiedKingdom: {
    individual: [
      { desc: 'Valid means of ID' },
      { desc: 'Web URL/Social Media page' },
      { desc: 'Residential address' },
      { desc: 'Personal bank account details' },
    ],
    business: [
      { desc: 'Incorporation Documents' },
      { desc: 'Directors Names' },
      { desc: 'IDs' },
      { desc: 'Corporate Bank Account details' },
      { desc: 'Operational Business Address' },
      { desc: 'Verifiable website URL (where required)' },
      { desc: 'Operating License (where business is regulated' },
      { desc: 'Estimated Monthly Sales' },
    ],
    ngo: [
      { desc: 'Incorporation Documents' },
      { desc: 'Directors??? Names' },
      { desc: 'IDs' },
      { desc: 'Corporate Bank Account details' },
      { desc: 'Operational Business Address' },
      { desc: 'Verifiable website URL (where required)' },
      { desc: 'Operating License (where business is regulated' },
      { desc: 'Estimated Monthly Sales' },
    ],
  },
  default: {
    individual: [
      { desc: 'Valid means of ID' },
      { desc: 'Web URL/Social Media page' },
      { desc: 'Residential address' },
      { desc: 'Personal bank account details' },
    ],
    business: [
      { desc: 'Incorporation Documents' },
      { desc: 'Directors??? IDs' },
      { desc: 'Corporate Bank Account details & Bank Reference Letter' },
      { desc: 'Operational Business Address' },
      { desc: 'Verifiable website URL (where required)' },
      { desc: 'Operating License (where business is regulated' },
      { desc: 'Estimated Monthly Sales' },
    ],
    ngo: null,
  },
};

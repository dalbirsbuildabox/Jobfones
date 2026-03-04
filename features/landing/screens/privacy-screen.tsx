import TextLister from '../components/terms-and-privacy/text-lister';

const PRIVACY_SECTIONS = [
  {
    id: 'information-we-collect',
    headingLevel: 'h1' as const,
    title: 'Information We Collect',
    intro: 'We may collect personal information including:',
    listItems: [
      'Full name',
      'Company name',
      'Email address',
      'Phone number',
      'Business address',
      'Project specifications and production requirements',
      'Any other information you provide when contacting us',
    ],
    paragraphs: ['We may also collect non-personal information such as browser type, IP address, and website usage data for analytics purposes.'],
  },
  {
    id: 'how-we-collect-information',
    headingLevel: 'h2' as const,
    title: 'How We Collect Information',
    intro: 'We collect information when you:',
    listItems: [
      'Submit an enquiry through our website',
      'Request a quote',
      'Contact us via phone or email',
      'Engage us for engineering or tooling services',
      'Subscribe to updates or marketing communications',
    ],
    outro: 'Information may be collected directly from you or through secure third-party service providers.',
  },
  {
    id: 'how-we-use-your-information',
    headingLevel: 'h2' as const,
    title: 'How We Use Your Information',
    intro: 'We use your information to:',
    listItems: [
      'Provide die-cutting tooling and engineering services',
      'Prepare quotes and proposals',
      'Respond to enquiries',
      'Manage client relationships',
      'Improve our website and services',
      'Comply with legal obligations',
    ],
    outro: 'We do not sell or rent your personal information to third parties.',
  },
  {
    id: 'disclosure-of-information',
    headingLevel: 'h2' as const,
    title: 'Disclosure of Information',
    intro: 'We may disclose your information to:',
    listItems: [
      'Employees and contractors who require access to perform services',
      'Suppliers and manufacturing partners involved in production',
      'Professional advisers (accountants, legal advisers)',
      'Government authorities where required by law',
    ],
    outro: 'All third parties are expected to maintain confidentiality and comply with privacy obligations.',
  },
  {
    id: 'data-security',
    headingLevel: 'h2' as const,
    title: 'Data Security',
    paragraphs: [
      'Job Formes takes reasonable steps to protect your personal information from misuse, loss, unauthorised access, modification, or disclosure.',
      'We implement appropriate technical and organisational safeguards, including secure servers and controlled access to sensitive data.',
    ],
  },
  {
    id: 'cookies-and-analytics',
    headingLevel: 'h2' as const,
    title: 'Cookies and Website Analytics',
    paragraphs: [
      'Our website may use cookies and analytics tools to improve user experience and monitor site performance. Cookies help us understand how visitors use our site and allow us to enhance functionality.',
      'You may disable cookies through your browser settings, though this may affect certain features of the website.',
    ],
  },
  {
    id: 'access-and-correction',
    headingLevel: 'h2' as const,
    title: 'Access and Correction',
    paragraphs: [
      'You have the right to request access to the personal information we hold about you and request corrections if necessary.',
      'To make a request, please contact us using the details below.',
    ],
  },
  {
    id: 'complaints',
    headingLevel: 'h2' as const,
    title: 'Complaints',
    paragraphs: [
      'If you believe we have breached the Australian Privacy Principles, you may contact us to lodge a complaint. We will investigate and respond within a reasonable timeframe.',
      'If you are not satisfied with our response, you may contact the Office of the Australian Information Commissioner (OAIC).',
    ],
  },
  {
    id: 'changes-to-this-policy',
    headingLevel: 'h2' as const,
    title: 'Changes to This Policy',
    paragraphs: [
      'Job Formes may update this Privacy Policy from time to time to reflect changes in legal requirements or business practices. The latest version will always be available on our website.',
    ],
  },
];

const PrivacyScreen = () => {
  return (
    <>
      <TextLister SECTIONS_TEXT={PRIVACY_SECTIONS} />
    </>
  );
};

export default PrivacyScreen;

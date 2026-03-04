import React from 'react';
import TextLister from '../components/terms-and-privacy/text-lister';

const TERMS_SECTIONS = [
  {
    id: 'about-us',
    headingLevel: 'h1' as const,
    title: 'About Us',
    paragraphs: [
      'Job Formes is an Australian provider of high-performance die-cutting tooling solutions. With decades of technical heritage and modern precision manufacturing, we supply custom tooling to support efficient production lines.',
    ],
  },
  {
    id: 'use-of-website',
    headingLevel: 'h2' as const,
    title: 'Use of Website',
    intro: 'By using our website, you agree to:',
    listItems: [
      'Use the website for lawful purposes only',
      'Not engage in any activity that may damage or disrupt the website',
      'Not attempt to gain unauthorised access to systems or data',
      'Provide accurate information when submitting enquiries or requests',
    ],
    outro: 'We reserve the right to restrict or terminate access if misuse is detected.',
  },
  {
    id: 'quotes-and-orders',
    headingLevel: 'h2' as const,
    title: 'Quotes and Orders',
    intro: 'All quotes provided by Job Formes:',
    listItems: [
      'Are valid for the period stated in the quotation',
      'Are subject to change if project specifications are modified',
      'Do not constitute a binding agreement until accepted in writing',
    ],
    outro: 'Orders are confirmed only once written acceptance is received and, where applicable, deposit payments are made',
  },
  {
    id: 'pricing-and-payment',
    headingLevel: 'h2' as const,
    title: 'Pricing and Payment',
    intro: 'All quotes provided by Job Formes:',
    listItems: [
      'Prices are quoted in Australian Dollars (AUD) unless otherwise stated',
      'Payment terms will be specified in the quotation or invoice',
      'Late payments may incur additional charges or interest where permitted by law',
    ],
    outro: 'We reserve the right to suspend production or delivery if payment terms are not met.',
  },
  {
    id: 'custom-tooling',
    headingLevel: 'h2' as const,
    title: 'Custom Tooling and Specifications',
    intro: 'As we manufacture custom die-cutting tooling:',
    listItems: [
      'Clients are responsible for providing accurate drawings, measurements, and specifications',
      'Job Formes is not liable for defects resulting from incorrect or incomplete information supplied by the client',
      'Any modifications requested after production has commenced may incur additional costs and delays',
    ],
  },
  {
    id: 'delivery-and-lead-times',
    headingLevel: 'h2' as const,
    title: 'Delivery and Lead Times',
    intro: 'Delivery timeframes are estimates only and may vary depending on:',
    listItems: ['Project complexity', 'Material availability', 'Production scheduling'],
    outro: 'While we aim to meet agreed deadlines, Job Formes is not liable for delays caused by circumstances beyond our reasonable control.',
  },
  {
    id: 'intellectual-property',
    headingLevel: 'h2' as const,
    title: 'Intellectual Property',
    paragraphs: [
      'All designs, drawings, tooling concepts and technical documents produced by Job Formes remain in our intellectual property portfolio and cannot be reproduced or shared without explicit written permission.',
    ],
    outro: 'Clients must not reproduce, distribute, or share proprietary designs without prior written consent.',
  },
  {
    id: 'limitation-of-liability',
    headingLevel: 'h2' as const,
    title: 'Limitation of Liability',
    intro: 'To the maximum extent permitted by Australian law: ',
    listItems: [
      'Our liability is limited to repair, replacement, or resupply of the tooling or services provided.',
      'We are not liable for indirect, incidental, or consequential losses, including production downtime or loss of profits.',
    ],
    outro: 'Nothing in these Terms excludes rights that cannot be excluded under Australian Consumer Law.',
  },
  {
    id: 'warranties',
    headingLevel: 'h2' as const,
    title: 'Warranties',
    paragraphs: [
      'We warrant that our tooling products will be manufactured with reasonable care and skill.',
      'Any warranty claims must be made in writing within a reasonable period after delivery and must include supporting documentation. ',
    ],
  },
  {
    id: 'confidentiality',
    headingLevel: 'h2' as const,
    title: 'Confidentiality',
    paragraphs: [
      'Both parties agree to keep confidential any proprietary, commercial, or technical information shared during the course of business.',
    ],
  },
  {
    id: 'Termination',
    headingLevel: 'h2' as const,
    title: 'Termination',
    intro: 'We reserve the right to terminate services or cancel orders if: ',
    listItems: ['Payment obligations are not met', 'False or misleading information is provided', 'These Terms & Conditions are breached'],
  },
  {
    id: 'governing-law',
    headingLevel: 'h2' as const,
    title: 'Governing Law',
    paragraphs: [
      'These Terms & Conditions are governed by the laws of Australia. Any disputes arising in connection with our services will be subject to the jurisdiction of Australian courts.',
    ],
  },
  {
    id: 'changes-to-terms',
    headingLevel: 'h2' as const,
    title: 'Changes to Terms',
    paragraphs: ['Job Formes may update these Terms & Conditions from time to time. The latest version will always be available on our website.'],
  },
];

const TermsScreen = () => {
  return (
    <>
      <TextLister SECTIONS_TEXT={TERMS_SECTIONS} />
    </>
  );
};

export default TermsScreen;

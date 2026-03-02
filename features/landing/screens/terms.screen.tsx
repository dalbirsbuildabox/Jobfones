import React from 'react';

type HeadingLevel = 'h1' | 'h2';

type TermsSection = {
  id: string;
  headingLevel: HeadingLevel;
  title: string;
  paragraphs?: string[];
  intro?: string;
  listItems?: string[];
  outro?: string;
};

const TermsScreen = ({ TERMS_SECTIONS }: { TERMS_SECTIONS: TermsSection[] }) => {
  return TERMS_SECTIONS.map((section: TermsSection) => {
    const HeadingTag = section.headingLevel;

    return (
      <section key={section.id} className='space-y-[20px]'>
        <HeadingTag className={`text-[50px] font-[400]`}>{section.title}</HeadingTag>

        {section.paragraphs?.map((text: string, idx: number) => (
          <p
            key={idx}
            className={`text-[24px] text-muted-foreground font-[300] ${idx === 0 && !section.intro && !section.listItems ? 'leading-relaxed' : ''}${
              idx < (section.paragraphs?.length || 0) - 1 ? ' ' : ''
            }`}
          >
            {text}
          </p>
        ))}

        {section.intro && <p className='text-[24px] text-muted-foreground font-[300]'>{section.intro}</p>}

        {section.listItems && (
          <ul className='list-disc pl-6 space-y-2 text-[24px] text-muted-foreground font-[300]'>
            {section.listItems.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        {section.outro && <p className='text-[24px] text-muted-foreground font-[300]'>{section.outro}</p>}
      </section>
    );
  });
};

export default TermsScreen;

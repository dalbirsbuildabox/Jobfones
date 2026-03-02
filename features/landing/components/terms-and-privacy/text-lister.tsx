import React from 'react';

type HeadingLevel = 'h1' | 'h2';

type Section_text = {
  id: string;
  headingLevel: HeadingLevel;
  title: string;
  paragraphs?: string[];
  intro?: string;
  listItems?: string[];
  outro?: string;
};

const TextLister = ({ SECTIONS_TEXT }: { SECTIONS_TEXT: Section_text[] }) => {
  return SECTIONS_TEXT.map((section: Section_text) => {
    const HeadingTag = section.headingLevel;

    return (
      <section key={section.id} className='space-y-4 sm:space-y-[20px]'>
        <HeadingTag className='text-2xl sm:text-3xl lg:text-[50px] font-normal'>{section.title}</HeadingTag>

        {section.paragraphs?.map((text: string, idx: number) => (
          <p
            key={idx}
            className={`text-base sm:text-lg lg:text-[24px] text-muted-foreground font-light ${
              idx === 0 && !section.intro && !section.listItems ? 'leading-relaxed' : ''
            }`}
          >
            {text}
          </p>
        ))}

        {section.intro && <p className='text-base sm:text-lg lg:text-[24px] text-muted-foreground font-light leading-relaxed'>{section.intro}</p>}

        {section.listItems && (
          <ul className='list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-base sm:text-lg lg:text-[24px] text-muted-foreground font-light'>
            {section.listItems.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        {section.outro && <p className='text-base sm:text-lg lg:text-[24px] text-muted-foreground font-light leading-relaxed'>{section.outro}</p>}
      </section>
    );
  });
};

export default TextLister;

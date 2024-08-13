import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { useTranslations } from 'next-intl';

interface faqsParams {
  [key: string]: {
    question: string;
    answer: string;
    textColor?: string;
    bgColor?: string;
  }[];
}

const FAQs = ({ faqs = [], textColor, bgColor }: faqsParams) => {
  const t = useTranslations('FAQs');

  return (
    <div className={`m-3 rounded-lg p-6 ${textColor} ${bgColor}`}>
      <h3>
        <b className="text-2xl">{t('header')}</b>
      </h3>
      {faqs.map((faq, index) => {
        return (
          <Accordion
            key={index}
            className=""
          >
            <AccordionItem
              title={faq.question}
              className={`text-lg font-semibold ${textColor}`}
            >
              <p
                className="text-medium font-normal"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              ></p>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
};

export default FAQs;
import { faqsParams } from '@/types';
import { Accordion, AccordionItem } from '@nextui-org/accordion';

const FAQs = ({ faqs }: faqsParams) => {
  return (
    <div>
      {faqs.map((faq, index) => {
        return (
          <Accordion key={index}>
            <AccordionItem title={faq.question}>
              <p>{faq.answer}</p>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
};

export default FAQs;

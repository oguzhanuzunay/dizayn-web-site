import { Accordion, AccordionItem } from '@nextui-org/accordion';

interface FAQsParams {
  faqs: {
    question: string;
    answer: string;
  }[];
}

const FAQs = ({ faqs }: FAQsParams) => {
  return (
    <div>
      {faqs.map((faq: { question: string; answer: string }, index: number) => {
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

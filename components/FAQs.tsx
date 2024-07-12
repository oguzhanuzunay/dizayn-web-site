import { faqsParams } from '@/types';
import { Accordion, AccordionItem } from '@nextui-org/accordion';

const FAQs = ({ faqs, textColor, bgColor }: faqsParams) => {
  return (
    <div className={`m-3 rounded-lg p-6 ${textColor} ${bgColor}`}>
      <h3>
        <b className="text-2xl">Sıkça Sorulan Sorular</b>
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

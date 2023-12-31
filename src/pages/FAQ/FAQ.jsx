import React from "react";
import { Helmet } from "react-helmet";
import { faq } from "../../../public/data";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

const FAQ = () => {
  const faqData = faq;
  return (
    <div>
      <Helmet>
        <title>Smart Gadget | FAQ</title>
      </Helmet>

      <div className="container mx-auto">
        <Accordion>
          {faqData.map(({ question, answer }, i) => (
            <AccordionItem header={question} key={i}>
              {answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;

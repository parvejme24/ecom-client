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

      <div className="container mx-auto space-y-2 py-24">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">Popular FAQ</h2>
        {faqData.map((item) => (
          <div className="lg:w-3/4 lg:mx-auto collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              {item.question}
            </div>
            <div className="collapse-content">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

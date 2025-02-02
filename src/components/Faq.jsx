import React from "react";
import { useState } from "react";

const faqData = [
  {
    question: "Do you offer subscription-based architecture services?",
    answer:
      "Yes, we offer flexible subscription-based architecture services that allow startups to access continuous design support, regular consultations, and updates. This is ideal for businesses that require ongoing architectural assistance as they grow.",
  },
  {
    question:
      "How long does it take to see results from your architecture services?",
    answer:
      "The timeline for seeing results depends on the scope of the project. For design-focused services, initial concepts can be presented within a few weeks, while larger-scale projects may take several months to complete. We ensure regular updates and progress reports throughout the process.",
  },
  {
    question: "What kind of customer support do you provide for startups?",
    answer:
      "We offer dedicated customer support to startups, including personalized design consultations, project management, and advice on scaling your architectural needs. Our team is always available to provide guidance and address any questions during the project lifecycle.",
  },
  {
    question:
      "What are the biggest challenges startups face in architecture, and how do you help?",
    answer:
      "Startups often face budget constraints, tight timelines, and the need for scalable solutions. We help by offering cost-effective design solutions, flexible service plans, and a focus on efficiency and sustainability, ensuring that your project is both affordable and forward-thinking.",
  },
];
const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index); // toggle between open and close
  };

  return (
    <div className="w-4/5 m-auto my-20 p-4">
      <h1 className="text-2xl font-semibold text-gray-600 mb-6">
        Frequently Asked Questions
      </h1>
      {faqData.map((faq, index) => (
        <div className="mb-4" key={index}>
          <div
            onClick={() => toggleFaq(index)}
            className="flex justify-between items-center bg-white/50 px-5 py-3 rounded-lg cursor-pointer"
          >
            <h2 className="text-lg font-medium text-gray-700">
              {faq.question}
            </h2>
            <span className="text-xl text-gray-500">
              {openFaq === index ? " -" : " +"}
            </span>
          </div>
          <div
            className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
              openFaq === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="p-4 text-gray-400">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;

'use client'
import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

import FaqCards from "./FaqCards";

const FaqPage = () => {
  // Define an array of FAQ items with titles and answers
  const faqs = [
    {
      id: 1,
      title: 'Question 1',
      answer: 'Answer 1 goes here.',
    },
    {
      id: 2,
      title: 'Question 2',
      answer: 'Answer 2 goes here.',
    },
    {
      id: 3,
      title: 'Question 3',
      answer: 'Answer 3 goes here.',
    },
    {
      id: 4,
      title: 'Question 4',
      answer: 'Answer 4 goes here.',
    },
    {
      id: 5,
      title: 'Question 5',
      answer: 'Answer 5 goes here.',
    },
    {
      id: 6,
      title: 'Question 6',
      answer: 'Answer 6 goes here.',
    },
    // Add more FAQ items as needed
  ];

  // Define a state variable to track which FAQ item is currently expanded
  const [expandedFaqId, setExpandedFaqId] = useState(null);

  // Function to toggle the visibility of an FAQ answer
  const toggleFaq = (faqId) => {
    if (expandedFaqId === faqId) {
      // Clicking the same FAQ item again will close it
      setExpandedFaqId(null);
    } else {
      // Clicking a different FAQ item will close the previous one and open the new one
      setExpandedFaqId(faqId);
    }
  };

  return (
    <div className='h-50 py-11'>
      <h1 className='text-3xl font-semibold mb-4'>Frequently Asked Questions</h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {faqs.map((faq) => (
          <div className='' key={faq.id}>
            <FaqCards
              title={faq.title}
              icon={faq.icon}
              onClick={() => toggleFaq(faq.id)}
              expanded={expandedFaqId === faq.id} // Pass expanded state
            />
            {expandedFaqId === faq.id && (
              <animated.p className='mt-2'>{faq.answer}</animated.p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;

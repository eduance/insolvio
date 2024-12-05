import React from 'react';
import { PromiseItem } from './PromiseItem';

const promiseItems = [
  {
    title: "Unwavering Dedication to Clarity",
    description: "We believe that within every complex challenge lies an elegant solution. Our promise is to navigate through the maze of complexity, emerging with crystal-clear answers that drive real results."
  },
  {
    title: "Innovation with Purpose",
    description: "We don't innovate for innovation's sake. Every solution we craft is purposefully designed to address your specific challenges, ensuring meaningful impact and sustainable growth."
  },
  {
    title: "Partnership in Progress",
    description: "Your challenges are our challenges. We commit to standing beside you as true partners, sharing in your vision and working tirelessly to transform obstacles into stepping stones."
  },
  {
    title: "Sustainable Solutions",
    description: "We design solutions that stand the test of time. Our commitment extends beyond quick fixes to create lasting, adaptable frameworks that evolve with your needs."
  },
  {
    title: "Knowledge Transfer",
    description: "We promise not just to solve problems, but to empower your team with the insights and understanding to maintain and build upon our solutions."
  }
];

export function PromiseSection() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-4">
      {promiseItems.map((item, index) => (
        <PromiseItem
          key={index}
          title={item.title}
          description={item.description}
          index={index}
        />
      ))}
    </div>
  );
}
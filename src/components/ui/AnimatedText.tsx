
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  childClassName?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  once = true,
  delay = 0,
  tag = 'span',
  childClassName = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once]);

  const renderContent = () => {
    const words = text.split(' ');
    
    return words.map((word, wordIndex) => (
      <span key={wordIndex} className="inline-block overflow-hidden mr-[0.25em]">
        <span
          className={cn(
            "inline-block transition-transform",
            isVisible ? "transform-none" : "translate-y-full",
            childClassName
          )}
          style={{
            transitionDelay: `${delay + wordIndex * 50}ms`,
            transitionDuration: '800ms',
            transitionProperty: 'transform',
            transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
        >
          {word}
        </span>
      </span>
    ));
  };

  const Tag = tag;
  
  return (
    <div ref={containerRef} className={cn("inline", className)}>
      {React.createElement(
        Tag,
        { className: "inline" },
        renderContent()
      )}
    </div>
  );
};

export default AnimatedText;

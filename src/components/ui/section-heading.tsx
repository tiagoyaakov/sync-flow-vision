
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  highlightWords?: string[];
}

export function SectionHeading({ 
  title, 
  subtitle, 
  centered = true, 
  className,
  highlightWords = [] 
}: SectionHeadingProps) {
  // Replace highlighted words with span
  const highlightedTitle = title.split(' ').map((word, i) => {
    if (highlightWords.includes(word)) {
      return <span key={i} className="text-gradient font-bold">{word} </span>;
    }
    return word + ' ';
  });

  return (
    <div className={cn(
      'mb-12 space-y-4',
      centered ? 'text-center mx-auto' : '',
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {highlightedTitle}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

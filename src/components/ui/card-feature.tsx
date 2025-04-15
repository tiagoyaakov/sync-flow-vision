
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CardFeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function CardFeature({ title, description, icon: Icon, className }: CardFeatureProps) {
  return (
    <div className={cn(
      'group relative rounded-lg border bg-elohit-card-dark p-6 transition-all hover:shadow-md card-shine',
      className
    )}>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted/30 group-hover:bg-gradient-primary">
        <Icon className="h-6 w-6 text-primary group-hover:text-white" />
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

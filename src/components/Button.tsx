import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ButtonProps {
  to?: string;
  href?: string;
  text: string;
  variant?: 'default' | 'primary' | 'ghost';
  icon?: 'none' | 'arrow-right' | 'arrow-left';
  className?: string;
  'aria-label'?: string;
}

export function Button({ 
  to,
  href,
  text,
  variant = 'default',
  icon = 'none',
  className = '',
  'aria-label': ariaLabel,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center gap-2 px-6 py-2 rounded-full transition-colors duration-200 text-md";
  
  const variantStyles = {
    default: "border border-black/10 text-brand-primary hover:bg-brand-primary/5",
    primary: "bg-brand-primary text-white hover:bg-brand-primary/90",
    ghost: "text-brand-primary hover:bg-brand-primary/10"
  };

  const Icon = icon === 'arrow-right' ? ArrowRight : icon === 'arrow-left' ? ArrowLeft : null;
  
  const content = (
    <>
      {icon === 'arrow-left' && Icon && (
        <span className="inline-flex transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">
          <Icon className="w-5 h-5" />
        </span>
      )}
      <span>{text}</span>
      {icon === 'arrow-right' && Icon && (
        <span className="inline-flex transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
          <Icon className="w-5 h-5" />
        </span>
      )}
    </>
  );

  const commonProps = {
    className: `group ${baseStyles} ${variantStyles[variant]} ${className} hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200`,
    'aria-label': ariaLabel,
  };

  if (to) {
    return (
      <Link 
        to={to}
        {...commonProps}
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      {...commonProps}
    >
      {content}
    </a>
  );
}
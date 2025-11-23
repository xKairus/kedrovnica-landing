import React from 'react';

// В интерфейсе только два варианта
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'; 
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', // По умолчанию - доминирующий стиль CTA
  className = '', 
  children, 
  ...props 
}) => {
  
  const baseStyles = "font-semibold transition-all duration-200 flex items-center gap-2 justify-center active:scale-[0.98]";

  const primaryStyles = "bg-terracotta hover:bg-[#b07b5a] text-white text-lg font-medium px-10 py-4 rounded-2xl shadow-lg uppercase tracking-wider";
  
  const outlineStyles = "border-2 border-dark text-dark px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-dark hover:text-white uppercase tracking-tight";
  
  const chosenStyles = variant === 'primary' ? primaryStyles : outlineStyles;
  
  return (
    <button 
      className={`${baseStyles} ${chosenStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
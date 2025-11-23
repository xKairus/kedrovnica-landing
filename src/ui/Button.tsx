import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;  
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  className = '', 
  children, 
  ...props 
}) => {
  
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center gap-2 active:scale-95";
  
  const variants = {
    primary: "bg-secondary text-white hover:bg-green-700 shadow-lg hover:shadow-green-500/30",
    outline: "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
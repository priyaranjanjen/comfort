"use client"

import React, { ButtonHTMLAttributes, useState } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'reverse';
}

export const Button: React.FC<ButtonProps> = ({ children, className, variant = 'primary', ...props }) => {
  const [hoverState, setHoverState] = useState<'idle' | 'enter' | 'leave'>('idle');

  const isReverse = variant === 'reverse';

  return (
    <button 
      onMouseEnter={() => setHoverState('enter')}
      onMouseLeave={() => setHoverState('leave')}
      onAnimationEnd={() => {
        if (hoverState === 'leave') {
          setHoverState('idle');
        }
      }}
      className={`group relative overflow-hidden flex border-2 ${
        isReverse ? 'border-white bg-white text-black' : 'border-black bg-black text-white'
      } rounded-lg p-2 justify-center ${className || ''}`} 
      {...props}
    >
      <span 
        className={`${styles.btnFill} ${isReverse ? styles.btnFillReverse : ''} ${
          hoverState === 'enter' ? styles.fillEnter : 
          hoverState === 'leave' ? styles.fillLeave : ''
        }`}
      ></span>
      <span className={`relative z-10 flex w-full items-center justify-center gap-2 transition-colors duration-500 ${
        hoverState === 'enter' ? (isReverse ? 'text-white' : 'text-black') : ''
      }`}>
        {children}
      </span>
    </button>
  );
};

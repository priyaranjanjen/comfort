import React, { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className, ...props }) => {
  return (
    <label className={`border border-[#B2BEB5] rounded-lg p-2 w-full ${className || ''}`}>
      <input className="placeholder-gray-600 w-full h-full outline-none text-black" {...props} />
    </label>
  );
};

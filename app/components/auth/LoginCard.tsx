"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export const LoginCard: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center w-full max-w-[380px] z-10">
      <div className="mb-8">
        <h1 className="text-[2.75rem] font-extrabold text-[#28282B] tracking-tighter flex items-start leading-none">
          comfort<span className="text-[0.8rem] font-semibold ml-0.5 mt-1">™</span>
        </h1>
      </div>

      <div className="flex flex-col items-center gap-5 w-full">
        <Input
          type="email"
          label="Email Address"
          placeholder="hello@samuelmay.co"
        />

        <Input
          type="password"
          placeholder="Password"
        />

        <Button type="button" className='w-full shadow-md' onClick={() => router.push('/home')}>Sign in</Button>
              <a href="#" className=" text-center text-xs text-[#8C8EA6] underline underline-offset-4 cursor-pointer font-semibold transition-colors duration-200 tracking-wider hover:text-white">
        forgot your password?
      </a>

        <span className='text-black'>or</span>

        <Button type="button" variant="reverse" className='w-full shadow-md'>Sign in with Google</Button>

      </div>
    </div>
  );
};

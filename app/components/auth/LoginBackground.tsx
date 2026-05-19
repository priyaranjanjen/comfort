import React from 'react';

export const LoginBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const shapeBase = "absolute rounded-[100px] bg-[#1D1E31] z-[1]";
  const crossBase = "absolute w-[14px] h-[14px] opacity-40 z-[1] before:absolute before:bg-[#4B4D6A] before:rounded-[2px] before:top-[6px] before:left-0 before:w-[14px] before:h-[2px] before:content-[''] after:absolute after:bg-[#4B4D6A] after:rounded-[2px] after:top-0 after:left-[6px] after:w-[2px] after:h-[14px] after:content-['']";

  return (
    <div className="min-h-screen w-screen bg-[#171828] flex flex-col items-center justify-center relative overflow-hidden font-inherit">
      {/* Background Shapes */}
      <div className={`${shapeBase} w-[600px] h-[140px] -rotate-[35deg] top-[15%] left-[20%]`}></div>
      <div className={`${shapeBase} w-[500px] h-[140px] -rotate-[35deg] bottom-[10%] right-[15%]`}></div>
      <div className={`${shapeBase} w-[300px] h-[140px] -rotate-[35deg] -bottom-[5%] left-[10%]`}></div>
      <div className="absolute w-[120px] h-[120px] bg-[#1D1E31] rounded-full top-[55%] left-[12%] z-[1]"></div>
      
      {/* Small Crosses */}
      <div className={`${crossBase} top-[12%] left-[18%]`}></div>
      <div className={`${crossBase} top-[35%] right-[15%] rotate-45`}></div>
      <div className={`${crossBase} bottom-[15%] right-[20%]`}></div>
      <div className={`${crossBase} bottom-[5%] left-[25%] rotate-45`}></div>

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center w-full">
        {children}
      </div>
    </div>
  );
};

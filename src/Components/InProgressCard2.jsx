import React from 'react';

const InProgressCard2 = () => {
    return (
        <div className="relative w-[700px] h-[220px]  bg-gradient-to-r from-[#77d069] to-[#44837a] rounded-xl text-white shadow-md flex flex-col items-center justify-center ">
      {/* Background image */}
        <img
        src="/vector1.png"
        alt="bgx"
        className="w-[250px] h-full object-cover absolute inset-0  pointer-events-none"
        />
        <img
            src="/vector1.png"
            alt="bgx"
            className="absolute right-0 top-0 w-[250px] h-full object-cover pointer-events-none transform scale-x-[-1]"
/>

            <h1 className="text-lg mt-[2rem] font-semibold tracking-wide uppercase opacity-80">
                Resolved
            </h1>

            <h5 className="text-7xl pb-[4rem] text-center font-bold leading-tight">
                0
            </h5>
    </div>
);
};

export default InProgressCard2;

import React from "react";
import SplitText from "./reactbits/SplitText";

const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
          {eyebrow}
        </p>
      </div>
      <div className="flex justify-center">
      <SplitText
  text={title}
  className="font-serif text-3xl md:text-5xl text-center mt-6 mx-auto"
 
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  textAlign="center"
  threshold={0.2}
  rootMargin="-50px"
  
/>
      </div>
      
      
      <p className="text-center md:text-lg lg:text-2xl text-white/60 mt-4 max-w-md lg:max-w-lg mx-auto">
        {description}
      </p>
    </>
  );
};

export default SectionHeader;

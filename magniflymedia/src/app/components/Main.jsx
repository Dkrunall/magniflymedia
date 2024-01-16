import React from "react";

const Main = () => {
  return (
    <>
      <div className="main-video">
        <video src="/images/2.mp4" autoPlay muted loop />
      </div>

      <div className="our-ability flex items-center justify-center">
        <div className="text text-center">
          <h1 className="text-white lg:text-[100px] xs:text-[48px] tracking-[-5px] xs:tracking-[-3px]">Our ability to adapt</h1>
          <p className='text-white lg:text-[22px] xs:text-[18px]'>
            We adapt to your needs and constraints. We are flexible and
            responsive.
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;

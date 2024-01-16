"use client";
import { motion } from "framer-motion";
import React, { useRef } from "react";

const Info = () => {
  const ref = useRef(null);
  return (
    <>
      <div className="info">
        <div className="lg:h-[500px] xs:h-[350px] w-11/12 bg-[#E2F040] m-auto rounded-[50px] flex items-center justify-center p-5 mb-20">
          <h1 className="lg:text-[56px] xs:text-[30px] text-[#6430C5] text-center font-medium tracking-[-2px] lg:leading-[60px] xs:leading-[45px]">
            Though marketing knows no boundaries, FYI, We are based in India &
            UAE
          </h1>
        </div>
        <div
          ref={ref}
          className="h-[500px] w-11/12 m-auto bg-[#804CE2] rounded-[50px] flex items-center justify-around p-5 flex-col  mb-[80px] "
        >
          <h1 className="lg:text-[50px] xs:text-[30px] text-white text-center font-medium tracking-[-2px] lg:leading-[55px] xs:leading-[45px]">
            Unveil your brand's full potential by partnering with us. where
            creativity knows no bounds.
          </h1>
          <div className="main lg:flex lg:gap-3 xs:gap-3 xs:grid grid-cols-2">
            <motion.div
              drag
              dragConstraints={ref}
              className="w-44 h-14 bg-white rounded-full flex items-center justify-center"
            >
              <h1 className="text-[#804CE1] text-2xl font-medium">creative</h1>
            </motion.div>
            <motion.div
              drag
              dragConstraints={ref}
              className="w-44 h-14 bg-[#D997F6] rounded-full flex items-center justify-center"
            >
              <h1 className="text-[#E1EF40] text-2xl font-medium">
                imaginative
              </h1>
            </motion.div>
            <motion.div
              drag
              dragConstraints={ref}
              className="w-44 h-14 bg-[#FF9142] rounded-full flex items-center justify-center"
            >
              <h1 className="text-[#804CE1] text-2xl font-medium">
                innovative
              </h1>
            </motion.div>
            <motion.div
              drag
              dragConstraints={ref}
              className="w-44 h-14 bg-[#E1EF40] rounded-full flex items-center justify-center"
            >
              <h1 className="text-[#804CE1] text-2xl font-medium">
                expressive
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;

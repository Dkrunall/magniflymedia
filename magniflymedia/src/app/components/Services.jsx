"use client";
import { motion } from "framer-motion";
import React, { useRef } from "react";
const Services = () => {
  const ref = useRef(null);
  return (
    <>
      <div
        ref={ref}
        className="services px-12 h-[80vh] flex items-center justify-center flex-col relative mt-20 mb-20"
      >
        <motion.div
          drag
          dragConstraints={ref}
          className="w-64 rounded-3xl bg-[#FF6C9A] p-4 flex justify-center flex-col absolute left-40 top-14"
        >
          <h1 className="text-[#E1EF40] text-3xl font-medium">
            Social Media Excellence
          </h1>
          <p className="text-[#E1EF40] text-sm mt-3">
            We're your navigator on the social media journey, ensuring your
            brand reaches new heights with strategic planning and innovative
            campaigns.
          </p>
        </motion.div>
        <motion.div
          drag
          dragConstraints={ref}
          className="w-60 rounded-3xl bg-[#D997F6] p-4 flex flex-col justify-center absolute right-32 top-28"
        >
          <h1 className="text-[#E1EE41] text-3xl font-medium text-left">
            Production Magic
          </h1>
          <p className="text-[#E1EE41] text-sm mt-3">
            Our creative team crafts captivating campaigns and content, making
            your brand shine.
          </p>
        </motion.div>
        <motion.div
          drag
          dragConstraints={ref}
          className="w-64 rounded-3xl bg-[#E2F040] p-4 flex justify-center mb-10 flex-col"
        >
          <h1 className="text-[#804CE1] text-3xl font-medium">
            Influencer Marketing
          </h1>
          <p className="text-[#804CE1] text-sm mt-3">
            We connect your brand with the right influencers to fuel its flight
            to success.
          </p>
        </motion.div>
        <h1 className="lg:text-[80px] xs:text-[40px] font-medium text-[#6430c548] tracking-[-1.5px] leading-[80px] text-center pt-7 pb-7">
          Fully-integrated design solution for your brand.
        </h1>
        <motion.div
          drag
          dragConstraints={ref}
          className="w-56 rounded-3xl bg-[#E2F040] p-4 flex flex-col justify-center mt-10"
        >
          <h1 className="text-[#804CE1] text-3xl font-medium">
            Digital Pioneering
          </h1>
          <p className="text-[#804CE1] text-sm mt-3">
            We provide the digital tools and expertise your brand needs to
            dominate the online landscape.
          </p>
        </motion.div>
        <motion.div
          drag
          dragConstraints={ref}
          className="w-56 rounded-3xl bg-[#FF9142] p-4 flex justify-center absolute left-56 bottom-28 flex-col"
        >
          <h1 className="text-[#E2F040] text-3xl font-medium">
            Brand Elevation
          </h1>
          <p className="text-[#E2F040] text-sm mt-3">
            We elevate your brand's identity and visibility, ensuring it soars
            high in the market.
          </p>
        </motion.div>
        <motion.div
          drag
          dragConstraints={ref}
          className="w-64 rounded-3xl bg-[#FF6C9A] p-4 flex justify-center absolute right-32 bottom-24 flex-col"
        >
          <h1 className="text-[#E1EF40] text-3xl font-medium">
            Web Development
          </h1>
          <p className="text-[#E1EF40] text-sm mt-3">
            We turn digital visions into captivating, user-friendly websites.
            Our skilled team blends creativity with cutting-edge tech to deliver
            responsive, scalable, and visually stunning web solutions.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Services;

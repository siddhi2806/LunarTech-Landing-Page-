import React from "react";
import { motion } from "framer-motion";
import pricingImage from "../assets/pricing.svg";

const Pricing = () => {
  const imageVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="py-20 w-4/5 m-auto flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
      <div className="md:w-1/2 space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold">
          Maximize your efficiency with EPIC Inc.
        </h1>
        <h3 className="text-3xl md:text-5xl font-bold">Rs 29,99.99</h3>
        <p className="md:text-2xl leading-8">
          {" "}
          We offer tailored virtual services for your business, supporting your
          team remotely so hey can thrive.
        </p>
      </div>
      <div className="w-full md:w-1/3">
        <motion.img
          src={pricingImage}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={imageVariant}
          alt=""
          className="w-full " // Ensures the background is transparent
        />
      </div>
    </div>
  );
};

export default Pricing;

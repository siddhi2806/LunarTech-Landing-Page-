import React from "react";
import { IoPlay } from "react-icons/io5";
import { motion } from "framer-motion";

// Import the image
import heroImage from "../assets/hero.png";

const Hero = () => {
  const textVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.8,
      },
    },
  };

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
    <div className="w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
      <div className="md:w-1/2 space-y-6">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={textVariant} 
        >
          __Innovation Requires Courage
        </motion.p>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={textVariant}
          className="text-5xl md:text-7xl font-bold"
        >
          Being Innovators Requires Courage
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={textVariant}
          className="md:text-lg"
        >
          Understanding your capacity for risk can guide your business into
          unstoppable opportunities, helping you navigate growth.
        </motion.p>
        <div className="flex space-x-5">
          <button className="px-10 py-2 rounded-full font-semibold bg-black text-white">
            Book
          </button>
          <button className="flex space-x-4 items-center">
            <span className="w-8 h-8 flex justify-center items-center bg-black text-white rounded-full">
              <IoPlay />
            </span>
            <span>Watch Video</span>
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/3">
        <motion.img
          initial="hidden"
          whileInView="visible"
          variants={imageVariant}
          viewport={{ amount: 0.5 }}
          src={heroImage}
          alt="Hero"
          className="w-full "
        />
      </div>
    </div>
  );
};

export default Hero;

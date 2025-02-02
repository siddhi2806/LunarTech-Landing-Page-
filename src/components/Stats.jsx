import React from "react";
import { FaChartLine } from "react-icons/fa";
import statsImage from "../assets/stats.png";
import { motion } from "framer-motion";

const Stats = () => {
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
    <div className="py-20 bg-white/50">
      <div className="w-4/5 m-auto flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:gap-x-50">
        <div className="w-full md:w-1/3">
          <motion.img
            src={statsImage}
            initial="hidden"
            whileInView="visible"
            variants={imageVariant}
            viewport={{ amount: 0.5 }}
            alt="stats"
            className="w-full"
          />
        </div>
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold">Over 30,000</h1>
          <p className="md:text-4xl font-bold">
            Remote professionals provide essential services to businesses
            globally, delivering support from any location.
          </p>

          <div className="flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0">
            <div className="w-full md:w-1/2 space-y-3">
              <div className="flex items-center space-x-2">
                <span className="p-3 rounded-full bg-violet-300 text-violet-800">
                  <FaChartLine />
                </span>
                <h1>Data Validation</h1>
              </div>
              <p>
                Ask your AI-powered assistant anything. Your virtual companion
                is here to help you stay ahead.
              </p>
            </div>

            {/* Optimize Efficiency Box */}
            <div className="w-full md:w-1/2 space-y-3">
              <div className="flex items-center space-x-2">
                <span className="p-3 rounded-full bg-violet-300 text-violet-800">
                  <FaChartLine />
                </span>
                <h1>Optimize Efficiency</h1>
              </div>
              <p>
                Get expert assistance for technical or performance-related
                challenges, all managed remotely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

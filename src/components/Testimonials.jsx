import React from "react";
import { motion } from "framer-motion";
import insight1 from "../assets/insightsimage1.jpeg";
import insight2 from "../assets/insightsimage2.jpg";
import insight3 from "../assets/insightsimage3.jpg";

const Testimonials = () => {
  const testimonialData = [
    {
      image: insight1,
      name: "John Doe",
      position: "Lead Architect at Design Studio",
      feedback:
        "Working with this team has been a game-changer. Their innovative designs always exceed our expectations and make our projects stand out.",
    },
    {
      image: insight2,
      name: "Alice Smith",
      position: "Principal Architect at Smith & Co.",
      feedback:
        "The creativity and precision they bring to every project is unmatched. The team's attention to detail ensures the final result is always perfect.",
    },
    {
      image: insight3,
      name: "Michael Johnson",
      position: "Senior Architect at Green Build",
      feedback:
        "Their ability to integrate sustainability into cutting-edge designs is exactly what we need for modern architecture. A true pleasure to collaborate with.",
    },
  ];
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
  return (
    <div className="py-10 bg-white/50 ">
      <div className="w-4/5 m-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <h1 className="text-center text-lg">____Client Reviews</h1>
          <h2 className="text-sm md:text-xl md:font-semibold text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
            Delectus similique animi non? Aperiam id labore error vitae
            doloremque.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 py-10">
          {testimonialData.map((testimonial, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5 }}
              variants={textVariant}
              className="p-5 space-y-5 border border-black rounded-lg flex flex-col items-center"
            >
              <div className="flex items-center space-x-2">
                <img
                  src={testimonial.image}
                  alt=""
                  className="w-16 h-16 rounded-full border-2"
                />
                <div>
                  <h1 className="font-bold text-lg ">{testimonial.name}</h1>
                  <p className="text-sm text-gray-400">
                    {testimonial.position}
                  </p>
                </div>
              </div>
              <p className="text-center text-lg">{testimonial.feedback}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <div className="bg-slate-200 h-screen flex items-center justify-center">
        <motion.div
          ref={ref}
          className="bg-slate-200 w-full md:w-3/4 p-8 rounded-lg flex flex-col md:flex-row items-center justify-center overflow-hidden relative"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 },
          }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="md:w-1/2 text-black text-center md:text-left mb-4 md:mb-0">
            <p className="text-black font-extrabold text-2xl font-mono italic">
              The EnduranceExplo aims to transform the way people plan travel
              and lodging. This platform strives to offer consumers a smooth and
              engaging experience as they explore several possibilities and
              select the one that best meets their tastes and requirements. Our
              website will provide an easy-to-use interface to improve the whole
              ticket purchase experience, whether it be for trains, flights,
              hotels/staycations, theatre, taxis, or buses. Our primary
              objective is to simplify the ticket ordering process and provide
              hassle-free process for booking tickets for traveling and lodging.
            </p>
          </div>
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden bg-slate-200 mx-12">
              <motion.img
                src="https://t4.ftcdn.net/jpg/01/08/34/53/360_F_108345358_mREIebrNXJM0iuAlxvEshj1j2QrhhzpK.jpg"
                alt="About Us"
                className="w-full"
                initial={{ opacity: 0, y: -100 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.5, delay: 0.7 },
                }}
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full  "></div>
            <motion.div
              className="absolute inset-0 "
              initial={{ opacity: 0, scale: 1.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 1.5, delay: 0.5 },
              }}
            ></motion.div>
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              style={{ backgroundImage: "url('/images/stars.png')" }}
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 2, delay: 0.8 },
              }}
            ></motion.div>
            <motion.div
              className="absolute top-0 left-0 w-full h-full opacity-20"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 0.2,
                transition: { duration: 2, delay: 0.8 },
              }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutUs;

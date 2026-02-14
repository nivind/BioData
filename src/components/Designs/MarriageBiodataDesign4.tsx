// Design 4.2 - Left Side Big Photo + Clean Right Content (Teal Theme)
// With subtle continuous breathing effect on profile photo
import React from "react";
import { motion, useScroll, useSpring, Variants } from "framer-motion";

// 1. Left side entrance animation
export const smoothFadeLeft = {
  hidden: { opacity: 0, x: -80, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
} as const satisfies Variants;

// 2. Right side entrance animation (with custom delay)
export const smoothFadeRight = {
  hidden: { opacity: 0, x: 80, scale: 0.96 },
  visible: (customDelay: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
      delay: customDelay,
    },
  }),
} as const satisfies Variants;

// 3. Breathing / pulsing animation (more elastic feel)
export const breathingAnimation = {
  scale: 1.06,
  transition: {
    duration: 3,
    ease: [0.4, 0, 0.6, 1],
    repeat: Infinity,
    repeatType: "reverse",
    from: 1, // ← explicit starting point
  },
} as const;

const MarriageBiodataDesign4: React.FC = () => {
  // Optional: Scroll Progress Bar (you can remove if not needed)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Scroll Progress Bar - optional but premium touch */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-linear-to-r from-teal-500 via-cyan-400 to-teal-600 origin-left z-50 shadow-lg shadow-teal-500/30"
        style={{ scaleX }}
      />

      <div
        id="biodata-content"
        className="min-h-screen bg-linear-to-br from-teal-50 via-cyan-50 to-teal-100 
                   dark:from-teal-950 dark:via-cyan-950 dark:to-teal-950
                   text-gray-900 dark:text-gray-100 overflow-x-hidden"
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          boxSizing: "border-box",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 p-6 md:p-10 lg:p-16">
          {/* Left Column - Photo & Title */}
          <motion.div
            className="lg:w-5/12 flex flex-col items-center lg:items-start lg:sticky lg:top-10 lg:self-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={smoothFadeLeft}
          >
            <motion.div
              className="w-64 h-80 lg:w-70 lg:h-85.5 rounded-3xl overflow-hidden 
                         border-8 border-teal-600/50 dark:border-teal-500/60 
                         shadow-2xl"
              animate={breathingAnimation}
            >
              <img
                src="./profile/Profile1.jpeg"
                alt="Groom Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <h1
              className="mt-10 text-4xl lg:text-5xl whitespace-nowrap font-bold text-blue-800 dark:text-blue-500 
                         text-center leading-tight tracking-wide"
            >
              Marriage Biodata
              {/* <br /> */}
            </h1>
          </motion.div>

          {/* Right Column - Content Sections */}
          <div className="lg:w-7/12 space-y-14 lg:space-y-20 pt-4 md:pt-0">
            {/* PERSONAL DETAILS */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.15}
              variants={smoothFadeRight}
            >
              <h2 className="text-2xl font-bold text-teal-800 dark:text-teal-300 mb-5 border-l-4 border-teal-600 pl-4">
                PERSONAL DETAILS
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-base leading-relaxed">
                <div>
                  <span className="font-semibold">Name:</span> Nivin D
                </div>
                <div>
                  <span className="font-semibold">Age:</span> 28 Years
                </div>
                <div>
                  <span className="font-semibold">Degree:</span> BE
                </div>
                <div>
                  <span className="font-semibold">Height:</span> 5’8”
                </div>
                <div>
                  <span className="font-semibold">Weight:</span> 77 kg
                </div>
                {/* <div>
                  <span className="font-semibold">Marital Status:</span>{" "}
                  Unmarried
                </div> */}
                <div className="">
                  <span className="font-semibold">Religion:</span> Christian
                  (Pentecostal)
                </div>
                <div>
                  <span className="font-semibold">DOB:</span> 28/12/1997
                </div>
                <div className="col-span-full">
                  <span className="font-semibold">Languages:</span> Kannada,
                  Malayalam, English, Tamil, Telugu
                </div>
              </div>
            </motion.section>

            {/* PROFESSIONAL DETAILS */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.3}
              variants={smoothFadeRight}
            >
              <h2 className="text-2xl font-bold text-teal-800 dark:text-teal-300 mb-5 border-l-4 border-teal-600 pl-4">
                PROFESSIONAL DETAILS
              </h2>
              <div className="space-y-3 leading-relaxed">
                <p>
                  <span className="font-semibold">Profession:</span> Software
                  Engineer
                </p>
                <p>
                  <span className="font-semibold">Company:</span> Setty Mech
                  Engineers Pvt. Ltd., Mysore
                </p>
                <p>
                  <span className="font-semibold">Monthly Income:</span> 55K+
                </p>
              </div>
            </motion.section>

            {/* CONTACT DETAILS */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.45}
              variants={smoothFadeRight}
            >
              <h2 className="text-2xl font-bold text-teal-800 dark:text-teal-300 mb-5 border-l-4 border-teal-600 pl-4">
                CONTACT DETAILS
              </h2>
              <div className="space-y-3 leading-relaxed">
                <p>
                  <span className="font-semibold">Phone:</span> +91 9483839425
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  nivinganganadu@gmail.com
                </p>
              </div>
            </motion.section>

            {/* FAMILY DETAILS */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.6}
              variants={smoothFadeRight}
            >
              <h2 className="text-2xl font-bold text-teal-800 dark:text-teal-300 mb-5 border-l-4 border-teal-600 pl-4">
                FAMILY DETAILS
              </h2>
              <div className="space-y-3 leading-relaxed flex flex-col">
                <div className="flex flex-col md:flex-row md:gap-8">
                  <div className="">
                    <span className="font-semibold">Father:</span>&nbsp; Deva
                    Arul (Farmer)
                  </div>
                  <div className="ml-3.5">
                    <span className="font-semibold">Mob:</span>&nbsp; +91
                    8970500425
                  </div>
                </div>
                <div>
                  <span className="font-semibold">Mother:</span>&nbsp; Anitha
                  (Home Maker)
                </div>
                <div>
                  <span className="font-semibold">Siblings:</span> &nbsp;One
                  Younger Brother
                </div>
                <div>
                  <span className="font-semibold">Family Background:</span>
                  &nbsp; Respectable, God-fearing Christian family
                </div>
              </div>
            </motion.section>

            {/* SPIRITUAL DETAILS */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.75}
              variants={smoothFadeRight}
            >
              <h2 className="text-2xl font-bold text-teal-800 dark:text-teal-300 mb-5 border-l-4 border-teal-600 pl-4">
                SPIRITUAL DETAILS
              </h2>
              <div className="space-y-3 leading-relaxed">
                <p>
                  <span className="font-semibold">Home Church:</span> Life and
                  Light Ministries, Shiroor, Udupi
                </p>
                <p>
                  <span className="font-semibold">Workplace Church:</span> IPC
                  Feast of Harvest Church, Mysore
                </p>
              </div>
            </motion.section>

            {/* ABOUT ME */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.9}
              variants={smoothFadeRight}
            >
              <h2 className="text-2xl font-bold text-teal-800 dark:text-teal-300 mb-5 border-l-4 border-teal-600 pl-4">
                ABOUT ME
              </h2>
              <ul className="list-disc pl-6 space-y-2.5 text-gray-800 dark:text-gray-300 leading-relaxed">
                <li>
                  God-fearing and family-oriented individual with strong
                  Christian values.
                </li>
                <li>
                  Believes in integrity, mutual respect, and growing together as
                  a Christ-centered family.
                </li>
                <li>
                  Career-focused, disciplined, and hardworking with a positive
                  outlook on life.
                </li>
              </ul>
            </motion.section>

            {/* HOBBIES & INTERESTS */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1.05}
              variants={smoothFadeRight}
            >
              <h2 className="text-2xl font-bold text-teal-800 dark:text-teal-300 mb-5 border-l-4 border-teal-600 pl-4">
                HOBBIES & INTERESTS
              </h2>
              <ul className="list-disc pl-6 space-y-2.5 text-gray-800 dark:text-gray-300 leading-relaxed">
                <li>Cycling, Singing, Fitness</li>
                <li>Listening to sermons</li>
                <li>Exploring technology and continuous learning</li>
                <li>Spending quality time with family and church fellowship</li>
              </ul>
            </motion.section>

            {/* PARTNER PREFERENCE */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1.2}
              variants={smoothFadeRight}
            >
              <h2 className="text-2xl font-bold text-teal-800 dark:text-teal-300 mb-5 border-l-4 border-teal-600 pl-4">
                PARTNER PREFERENCE
              </h2>
              <ul className="list-disc pl-6 space-y-2.5 text-gray-800 dark:text-gray-300 leading-relaxed">
                <li>Born-again Christian</li>
                <li>God-fearing, prayerful, values family life</li>
                <li>Health & Well-being (Wellness)</li>
                <li>
                  Passionate about her dreams or career; goal-driven,
                  hardworking, and joyful in her journey.
                </li>
              </ul>
            </motion.section>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarriageBiodataDesign4;

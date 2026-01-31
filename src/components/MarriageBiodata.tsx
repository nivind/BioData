// src/components/MarriageBiodata.tsx
import React from "react";

const MarriageBiodata: React.FC = () => {
  return (
    <div
      id="biodata-content"
      className={`
        w-full h-auto
        bg-white dark:bg-gray-950
        text-gray-900 dark:text-gray-100
        shadow-lg print:shadow-none
      `}
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* Header with Photo */}
      <div
        className="
        relative 
        bg-gradient-to-r from-indigo-700 to-indigo-900 
        dark:from-indigo-950 dark:to-gray-950
        text-white dark:text-gray-100
        p-6 pb-16 sm:pb-20 md:pb-24
      "
      >
        <h1
          className="
          text-2xl sm:text-3xl md:text-4xl font-bold text-center tracking-wide
        "
        >
          MARRIAGE BIODATA
        </h1>

        {/* Profile Photo - responsive positioning */}
        <div
          className="
          absolute top-4 right-4 sm:top-6 sm:right-6
          w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40
          rounded-full overflow-hidden 
          border-4 border-white dark:border-gray-300
          shadow-xl
        "
        >
          <img
            src="./profile/Profile1.jpeg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 text-sm sm:text-base">
        {/* PERSONAL DETAILS */}
        <section>
          <h2
            className="
            text-lg sm:text-xl font-bold 
            text-indigo-800 dark:text-indigo-300 
            mb-2 sm:mb-3 border-b border-indigo-200 dark:border-indigo-800/40 pb-1
          "
          >
            PERSONAL DETAILS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-x-8 sm:gap-y-2">
            <div>
              <span className="font-semibold">Name:</span> XXX
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
            <div>
              <span className="font-semibold">Marital Status:</span> Unmarried
            </div>
            <div className="sm:col-span-2">
              <span className="font-semibold">Religion:</span> Christian
              (Pentecostal)
            </div>
            <div className="sm:col-span-2">
              <span className="font-semibold">Languages:</span> Kannada,
              Malayalam, English, Tamil, Telugu
            </div>
          </div>
        </section>

        {/* PROFESSIONAL DETAILS */}
        <section>
          <h2
            className="
            text-lg sm:text-xl font-bold 
            text-indigo-800 dark:text-indigo-300 
            mb-2 sm:mb-3 border-b border-indigo-200 dark:border-indigo-800/40 pb-1
          "
          >
            PROFESSIONAL DETAILS
          </h2>
          <div className="space-y-1.5">
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
        </section>

        <section>
          <h2
            className="
            text-lg sm:text-xl font-bold 
            text-indigo-800 dark:text-indigo-300 
            mb-2 sm:mb-3 border-b border-indigo-200 dark:border-indigo-800/40 pb-1
          "
          >
            CONTACT DETAILS
          </h2>
          <div className="space-y-1.5">
            <p>
              <span className="font-semibold">Phone:</span> +91 XXXXXXXXXX
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              nivinganganadu@gmail.com
            </p>
          </div>
        </section>

        <section>
          <h2
            className="
            text-lg sm:text-xl font-bold 
            text-indigo-800 dark:text-indigo-300 
            mb-2 sm:mb-3 border-b border-indigo-200 dark:border-indigo-800/40 pb-1
          "
          >
            FAMILY DETAILS
          </h2>
          <div className="space-y-1.5">
            <p>
              <span className="font-semibold">Father:</span> Deva Arul (Farmer)
            </p>
            <p>
              <span className="font-semibold">Mother:</span> Anitha (Home Maker)
            </p>
            <p>
              <span className="font-semibold">Siblings:</span> One Younger
              Brother
            </p>
            <p>
              <span className="font-semibold">Family Background:</span>{" "}
              Respectable, God-fearing Christian family
            </p>
          </div>
        </section>

        <section>
          <h2
            className="
            text-lg sm:text-xl font-bold 
            text-indigo-800 dark:text-indigo-300 
            mb-2 sm:mb-3 border-b border-indigo-200 dark:border-indigo-800/40 pb-1
          "
          >
            SPIRITUAL DETAILS
          </h2>
          <div className="space-y-1.5">
            <p>
              <span className="font-semibold">Home Church:</span> Life and Light
              Ministries, Shiroor, Udupi
            </p>
            <p>
              <span className="font-semibold">Workplace Church:</span> IPC Feast
              of Harvest Church, Mysore
            </p>
          </div>
        </section>

        <section>
          <h2
            className="
            text-lg sm:text-xl font-bold 
            text-indigo-800 dark:text-indigo-300 
            mb-2 sm:mb-3 border-b border-indigo-200 dark:border-indigo-800/40 pb-1
          "
          >
            ABOUT ME
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-300">
            <li>
              God-fearing and family-oriented individual with strong Christian
              values.
            </li>
            <li>
              Believes in integrity, mutual respect, and growing together as a
              Christ-centered family.
            </li>
            <li>
              Career-focused, disciplined, and hardworking with a positive
              outlook on life.
            </li>
          </ul>
        </section>

        <section>
          <h2
            className="
    text-lg sm:text-xl font-bold 
    text-indigo-800 dark:text-indigo-300 
    mb-2 sm:mb-3 border-b border-indigo-200 dark:border-indigo-800/40 pb-1
  "
          >
            HOBBIES & INTERESTS
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-300">
            <li>Cycling, Singing, Fitness</li>
            <li>Listening to sermons</li>
            <li>Exploring technology and continuous learning</li>
            <li>Spending quality time with family and church fellowship</li>
          </ul>
        </section>

        <section>
          <h2
            className="
            text-lg sm:text-xl font-bold 
            text-indigo-800 dark:text-indigo-300 
            mb-2 sm:mb-3 border-b border-indigo-200 dark:border-indigo-800/40 pb-1
          "
          >
            PARTNER PREFERENCE
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-300">
            <li>Born-again Christian</li>
            <li>God-fearing, prayerful, values family life</li>
            <li>
              Passionate about her dreams or career; goal-driven, hardworking,
              and joyful in her journey.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default MarriageBiodata;

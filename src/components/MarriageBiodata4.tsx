// src/components/MarriageBiodata4.tsx
import React from "react";

const MarriageBiodata4: React.FC = () => {
  return (
    <div
      className="bg-gradient-to-b from-blue-50 via-white to-indigo-50 w-[210mm] min-h-[297mm] mx-auto print:bg-white print:shadow-none"
      style={{
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        boxSizing: "border-box",
      }}
    >
      <div className="p-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-indigo-700 tracking-wide">
            MARRIAGE BIODATA
          </h1>
          <p className="text-indigo-600 mt-3 text-xl italic">In Christ Alone</p>
        </div>

        {/* Centered Photo */}
        <div className="flex justify-center mb-12">
          <div className="w-64 h-64 rounded-3xl overflow-hidden border-8 border-indigo-100 shadow-2xl">
            <img
              src="./profile/Profile1.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-10 text-[15px]">
          {/* Column 1 */}
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b-2 border-indigo-200">
                PERSONAL DETAILS
              </h2>
              <div className="space-y-2">
                <p>
                  <strong>Name:</strong> XXX
                </p>
                <p>
                  <strong>Age:</strong> 28 Years
                </p>
                <p>
                  <strong>Degree:</strong> BE
                </p>
                <p>
                  <strong>Height:</strong> 5’8”
                </p>
                <p>
                  <strong>Weight:</strong> 77 kg
                </p>
                <p>
                  <strong>Marital Status:</strong> Unmarried
                </p>
                <p>
                  <strong>Religion:</strong> Christian (Pentecostal)
                </p>
                <p>
                  <strong>Languages:</strong> Kannada, Malayalam, English,
                  Tamil, Telugu
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b-2 border-indigo-200">
                PROFESSIONAL DETAILS
              </h2>
              <div className="space-y-2">
                <p>
                  <strong>Profession:</strong> Software Engineer
                </p>
                <p>
                  <strong>Company:</strong> Setty Mech Engineers Pvt. Ltd.,
                  Mysore
                </p>
                <p>
                  <strong>Monthly Income:</strong> 55K+
                </p>
              </div>
            </section>
          </div>

          {/* Column 2 */}
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b-2 border-indigo-200">
                CONTACT & FAMILY
              </h2>
              <div className="space-y-2">
                <p>
                  <strong>Phone:</strong> +91 XXXXXXXXXX
                </p>
                <p>
                  <strong>Email:</strong> nivinganganadu@gmail.com
                </p>
                <p>
                  <strong>Father:</strong> Deva Arul (Farmer)
                </p>
                <p>
                  <strong>Mother:</strong> Anitha (Home Maker)
                </p>
                <p>
                  <strong>Siblings:</strong> One Younger Brother
                </p>
                <p>
                  <strong>Family Background:</strong> Respectable, God-fearing
                  Christian family
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b-2 border-indigo-200">
                SPIRITUAL DETAILS
              </h2>
              <div className="space-y-2">
                <p>
                  <strong>Home Church:</strong> Life and Light Ministries,
                  Shiroor, Udupi
                </p>
                <p>
                  <strong>Workplace Church:</strong> IPC Feast of Harvest
                  Church, Mysore
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Bottom full width sections */}
        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b-2 border-indigo-200">
              ABOUT ME
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                God-fearing and family-oriented individual with strong Christian
                values
              </li>
              <li>
                Believes in integrity, mutual respect, and growing together as a
                Christ-centered family
              </li>
              <li>
                Career-focused, disciplined, and hardworking with positive
                outlook on life
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b-2 border-indigo-200">
              PARTNER PREFERENCE
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Born-again Christian</li>
              <li>God-fearing, prayerful, and values family life</li>
              <li>
                Passionate about her dreams or career; goal-driven, hardworking,
                and joyful
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MarriageBiodata4;

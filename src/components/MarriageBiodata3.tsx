// src/components/MarriageBiodata3.tsx
import React from "react";

const MarriageBiodata3: React.FC = () => {
  return (
    <div
      className="bg-white text-gray-900 w-[210mm] min-h-[297mm] mx-auto print:shadow-none"
      style={{
        fontFamily: "'Times New Roman', Times, serif",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-950 to-indigo-950 text-white p-12 text-center">
        <h1 className="text-5xl font-bold tracking-wider">MARRIAGE BIODATA</h1>
      </div>

      <div className="p-12 space-y-10 text-[15.5px]">
        {/* Photo + Personal & Professional side by side */}
        <div className="flex gap-12 items-start">
          <div className="w-56 h-72 bg-gray-200 rounded-lg overflow-hidden border-4 border-indigo-900 shadow-xl flex-shrink-0">
            <img
              src="./profile/Profile1.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-indigo-950 mb-4 border-b-2 border-amber-500 pb-2">
                PERSONAL DETAILS
              </h2>
              <div className="grid grid-cols-2 gap-x-10 gap-y-3">
                <div>
                  <strong>Name:</strong> XXX
                </div>
                <div>
                  <strong>Age:</strong> 28 Years
                </div>
                <div>
                  <strong>Degree:</strong> BE
                </div>
                <div>
                  <strong>Height:</strong> 5’8”
                </div>
                <div>
                  <strong>Weight:</strong> 77 kg
                </div>
                <div>
                  <strong>Marital Status:</strong> Unmarried
                </div>
                <div className="col-span-2">
                  <strong>Religion:</strong> Christian (Pentecostal)
                </div>
                <div className="col-span-2">
                  <strong>Languages Known:</strong> Kannada, Malayalam, English,
                  Tamil, Telugu
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-indigo-950 mb-4 border-b-2 border-amber-500 pb-2">
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
        </div>

        <section>
          <h2 className="text-2xl font-bold text-indigo-950 mb-4 border-b-2 border-amber-500 pb-2">
            CONTACT DETAILS
          </h2>
          <div className="space-y-2">
            <p>
              <strong>Phone:</strong> +91 XXXXXXXXXX
            </p>
            <p>
              <strong>Email:</strong> nivinganganadu@gmail.com
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-indigo-950 mb-4 border-b-2 border-amber-500 pb-2">
            FAMILY DETAILS
          </h2>
          <div className="space-y-2">
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
          <h2 className="text-2xl font-bold text-indigo-950 mb-4 border-b-2 border-amber-500 pb-2">
            SPIRITUAL DETAILS
          </h2>
          <div className="space-y-2">
            <p>
              <strong>Home Church:</strong> Life and Light Ministries, Shiroor,
              Udupi (Regular Attendee)
            </p>
            <p>
              <strong>Workplace Church:</strong> IPC Feast of Harvest Church,
              Mysore (Regular Attendee)
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-indigo-950 mb-4 border-b-2 border-amber-500 pb-2">
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
              Career-focused, disciplined, and hardworking with positive outlook
              on life
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-indigo-950 mb-4 border-b-2 border-amber-500 pb-2">
            PARTNER PREFERENCE
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Born-again Christian</li>
            <li>God-fearing, prayerful, and values family life</li>
            <li>
              Passionate about her dreams or career; goal-driven, hardworking,
              and joyful in her journey
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default MarriageBiodata3;

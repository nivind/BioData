// src/components/MarriageBiodata5.tsx
import React from "react";

const MarriageBiodata5: React.FC = () => {
  return (
    <div className="bg-white w-full h-full flex ">
      {/* Left Sidebar */}
      <div className="w-[40%] bg-linear-to-b from-indigo-950 to-indigo-900 text-white p-8 flex flex-col gap-8">
        {/* Photo */}
        <div className="mb-6">
          <div className="w-40 h-48 mx-auto rounded-xl overflow-hidden border-4 border-indigo-400/60 shadow-2xl">
            <img
              src="./profile/Profile1.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Spiritual */}
        <section>
          <h2 className="text-xl font-bold mb-3 text-indigo-100">
            SPIRITUAL LIFE
          </h2>
          <div className="space-y-1 text-indigo-100/90 text-sm">
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

        {/* About Me */}
        <section>
          <h2 className="text-xl font-bold mb-3 text-indigo-100">ABOUT ME</h2>
          <ul className="list-disc pl-4 space-y-1 text-indigo-100/90 text-sm">
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
          <h2 className="text-xl font-bold mb-3 text-indigo-100">
            HOBBIES & INTERESTS
          </h2>
          <ul className="list-disc pl-4 space-y-1 text-indigo-100/90 text-sm">
            <li>Cycling, Singing, Fitness</li>
            <li>Listening to sermons</li>
            <li>Exploring technology and continuous learning</li>
            <li>Spending quality time with family and church fellowship</li>
          </ul>
        </section>
      </div>

      {/* Right Main Content */}
      <div className="w-[60%] bg-white p-8 flex flex-col ">
        <h1 className="text-4xl font-bold text-indigo-950 mb-8 text-center tracking-wide">
          MARRIAGE BIODATA
        </h1>

        <div className="space-y-8 text-[14px] text-gray-800 flex-1">
          <section>
            <h2 className="text-xl font-bold text-indigo-900 mb-3 border-b border-indigo-200 pb-1">
              PERSONAL DETAILS
            </h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1">
              <div>
                <strong>Name:</strong> Nivin D
              </div>
              <div>
                <strong>Age:</strong> 28 Years
              </div>
              <div>
                <strong>DOB:</strong> 28/12/1997
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
              {/* <div>
                <strong>Marital Status:</strong> Unmarried
              </div> */}
              <div className="col-span-2">
                <strong>Religion:</strong> Christian (Pentecostal)
              </div>
              <div className="col-span-2">
                <strong>Languages:</strong> Kannada, Malayalam, English, Tamil,
                Telugu
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-indigo-900 mb-3 border-b border-indigo-200 pb-1">
              PROFESSIONAL DETAILS
            </h2>
            <div className="space-y-1">
              <p>
                <strong>Profession:</strong> Software Engineer
              </p>
              <p>
                <strong>Company:</strong> Setty Mech Engineers Pvt. Ltd., Mysore
              </p>
              <p>
                <strong>Monthly Income:</strong> 55K+
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-indigo-900 mb-3 border-b border-indigo-200 pb-1">
              CONTACT & FAMILY DETAILS
            </h2>
            <div className="space-y-1">
              <p>
                <strong>Phone:</strong> +91 9483839425
              </p>
              <p>
                <strong>Email:</strong> nivinganganadu@gmail.com
              </p>
              <p>
                <strong>Father:</strong> Deva Arul (Farmer)
              </p>
              <p>
                <strong>Father Mob:</strong> +91 8970500425
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

          <section className="mt-auto">
            <h2 className="text-xl font-bold text-indigo-900 mb-3 border-b border-indigo-200 pb-1">
              PARTNER PREFERENCE
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Born-again Christian</li>
              <li>God-fearing, prayerful, and values family life</li>
              <li>Health & Well-being (Wellness)</li>
              <li>
                Passionate about her dreams or career; goal-driven, hardworking,
                and joyful in her journey
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MarriageBiodata5;

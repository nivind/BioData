// src/components/MarriageBiodata2.tsx
import React from "react";

const MarriageBiodata2: React.FC = () => {
  return (
    <div
      className="bg-white text-gray-800 w-[210mm] min-h-[297mm] mx-auto border-4 border-gray-300 p-8"
      style={{ fontFamily: "Georgia, serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 pb-4 mb-6">
        <h1 className="text-3xl font-bold tracking-wide">MARRIAGE BIODATA</h1>
        <div className="w-36 h-36 border rounded-md overflow-hidden">
          <img
            src="./profile/Profile1.jpeg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Sections */}
      {[
        {
          title: "PERSONAL DETAILS",
          content: (
            <div className="grid grid-cols-2 gap-y-2">
              <p>
                <b>Name:</b> XXX
              </p>
              <p>
                <b>Age:</b> 28 Years
              </p>
              <p>
                <b>Degree:</b> BE
              </p>
              <p>
                <b>Height:</b> 5’8”
              </p>
              <p>
                <b>Weight:</b> 77 kg
              </p>
              <p>
                <b>Marital Status:</b> Unmarried
              </p>
              <p className="col-span-2">
                <b>Religion:</b> Christian (Pentecostal)
              </p>
              <p className="col-span-2">
                <b>Languages:</b> Kannada, Malayalam, English, Tamil, Telugu
              </p>
            </div>
          ),
        },
        {
          title: "PROFESSIONAL DETAILS",
          content: (
            <>
              <p>
                <b>Profession:</b> Software Engineer
              </p>
              <p>
                <b>Company:</b> Setty Mech Engineers Pvt. Ltd., Mysore
              </p>
              <p>
                <b>Monthly Income:</b> 55K+
              </p>
            </>
          ),
        },
        {
          title: "FAMILY DETAILS",
          content: (
            <>
              <p>
                <b>Father:</b> Deva Arul (Farmer)
              </p>
              <p>
                <b>Mother:</b> Anitha (Home Maker)
              </p>
              <p>
                <b>Siblings:</b> One Younger Brother
              </p>
              <p>
                <b>Family Background:</b> Respectable, God-fearing Christian
                family
              </p>
            </>
          ),
        },
      ].map((sec) => (
        <section key={sec.title} className="mb-5">
          <h2 className="text-lg font-bold border-b mb-2">{sec.title}</h2>
          <div className="space-y-1">{sec.content}</div>
        </section>
      ))}
    </div>
  );
};

export default MarriageBiodata2;

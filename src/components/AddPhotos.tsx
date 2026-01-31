"use client";

import { motion, Variants } from "framer-motion";

// Import your animations (adjust path as needed)
import {
  breathingAnimation,
  smoothFadeLeft,
} from "./Designs/MarriageBiodataDesign4";
import ThemeSwitcher from "./ThemeSwitcher";
import { useRouter } from "next/navigation";
import { FileUser } from "lucide-react";

// ─── Shared Variants ─────────────────────────────────────────────────────────
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.4,
    },
  },
};

// ─── Reusable Photo Card ─────────────────────────────────────────────────────
interface PhotoCardProps {
  src: string;
  alt: string;
  heightClass?: string;
  widthClass?: string;
  className?: string;
}

function PhotoCard({
  src,
  alt,
  heightClass = "h-100",
  widthClass = "w-75 lg:w-70",
  className = "",
}: PhotoCardProps) {
  return (
    <motion.div
      className={`flex flex-col items-center ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={smoothFadeLeft}
    >
      <motion.div
        className={`${widthClass} ${heightClass} rounded-3xl overflow-hidden border-8 border-teal-600/50 dark:border-teal-500/60 shadow-2xl`}
        animate={breathingAnimation}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function AddPhotos() {
  const router = useRouter();
  const photos: PhotoCardProps[] = [
    {
      src: "./profile/Profile2.jpeg",
      alt: "Groom Profile 1",
      heightClass: "h-100 ",
    },
    {
      src: "./profile/Profile3.jpeg",
      alt: "Groom Profile 2",
      heightClass: "h-110 ",
    },
    {
      src: "./profile/Profile4.jpeg",
      alt: "Groom Profile 3",
      heightClass: "h-100 ",
    },
    {
      src: "./profile/Profile5.jpeg",
      alt: "Groom Profile 4",
      heightClass: "h-120 ",
    },
    {
      src: "./profile/Profile6.jpeg",
      alt: "Groom Profile 5",
      heightClass: "h-110 ",
    },
    {
      src: "./profile/Profile7.jpeg",
      alt: "Groom Profile 6",
      heightClass: "h-110 ",
    },
    {
      src: "./profile/Profile1.jpeg",
      alt: "Groom Profile 7",
      heightClass: "h-100 ",
    },
    {
      src: "./profile/Profile8.jpeg",
      alt: "Groom Profile 8",
      heightClass: "h-100 ",
    },
  ];

  return (
    <>
      {/* Top Toolbar */}
      <div className="p-2 sm:p-4 flex w-full flex-wrap sm:flex-row  gap-3 sm:gap-4  bg-gray-300 dark:bg-gray-800">
        <button
          onClick={() => router.push("/")}
          className="cursor-pointer flex items-center gap-2 px-6 py-3  bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
        >
          Biodata
          <FileUser className="w-4 h-4" />
        </button>

        <ThemeSwitcher />
      </div>
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-teal-50/30 dark:from-gray-950 dark:to-teal-950/20 py-8 px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mx-auto w-full "
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {photos.map((photo, index) => (
            <PhotoCard
              key={index}
              src={photo.src}
              alt={photo.alt}
              heightClass={photo.heightClass}
              widthClass={photo.widthClass}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
}

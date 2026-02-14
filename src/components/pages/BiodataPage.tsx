"use client";

import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas-pro";
import MarriageBiodata5 from "@/components/MarriageBiodata5";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { DownloadIcon, Images } from "lucide-react";
import { useRouter } from "next/navigation";
import HydrationFix from "../HydrationFix";

import MarriageBiodataDesign4 from "../Designs/MarriageBiodataDesign4";
import ActionButton from "../ActionButton";

export default function BiodataPage() {
  const page1Ref = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const generatePDF = async () => {
    if (!page1Ref.current) return;

    try {
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      // Helper: Capture ref and add as PDF page
      const addPageFromRef = async (
        ref: React.RefObject<HTMLDivElement | null>,
        pageNum: number,
      ) => {
        if (!ref.current) return;

        const canvas = await html2canvas(ref.current, {
          scale: 2, // good balance between quality & size
          useCORS: true,
          backgroundColor: "#ffffff",
          logging: false,
        });

        const imgData = canvas.toDataURL("image/jpeg", 0.95);

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        const imgWidth = canvas.width;
        const imgHeight = canvas.height;

        // Maintain aspect ratio
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

        const finalWidth = imgWidth * ratio;
        const finalHeight = imgHeight * ratio;

        if (pageNum > 1) pdf.addPage();

        pdf.addImage(imgData, "JPEG", 0, 0, finalWidth, finalHeight);
      };

      // Page 1
      await addPageFromRef(page1Ref, 1);

      pdf.save("Nivin_Biodata.pdf");
    } catch (error) {
      console.error("PDF generation failed:", error);
    }
  };

  // Shared button variants
  const buttonVariants = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.06, y: -3, transition: { duration: 0.2 } },
    tap: { scale: 0.97, y: 1 },
  };

  const iconVariants = {
    rest: { rotate: 0, scale: 1 },
    hover: { rotate: 8, scale: 1.15, transition: { duration: 0.4 } },
  };

  return (
    <div className="relative min-h-screen w-full">
      <HydrationFix />

      {/* Top Toolbar – improved version */}
      <div
        className="
          sticky top-0 z-50
          flex flex-wrap items-center justify-center sm:justify-start
          gap-3 p-4 
          bg-gray-100/80 dark:bg-gray-900/80 
          backdrop-blur-md border-b border-gray-200 dark:border-gray-800
        "
      >
        <ActionButton
          onClick={generatePDF}
          icon={<DownloadIcon className="w-5 h-5" />}
          label="Bio"
          tooltip="Save as beautiful PDF file"
          color="green"
        />

        <ActionButton
          onClick={() => router.push("/photos")}
          icon={<Images className="w-5 h-5" />}
          label="View Photos"
          tooltip="Upload or see profile pictures"
          color="blue"
        />

        <div className="ml-auto">
          <ThemeSwitcher />
        </div>
      </div>

      {/* Visible Preview */}
      <div
        id="main-content"
        className="overflow-y-auto h-[calc(100vh-80px)] p-4 pb-20"
      >
        {/* <MarriageBiodata /> */}
        {/* <MarriageBiodataDesign1 /> */}
        {/* <MarriageBiodataDesign2 /> */}
        {/* <MarriageBiodataDesign3 /> */}
        <MarriageBiodataDesign4 />
        {/* <MarriageBiodataDesign5 /> */}
        {/* <MarriageBiodataDesign6 /> */}
        {/* <MarriageBiodataDesign7 /> */}
      </div>

      {/* Hidden A4 Capture Area */}
      <div
        ref={page1Ref}
        className="w-[210mm] h-[297mm] bg-white mx-auto mb-12 shadow-lg fixed -left-2499.75 top-0"
        aria-hidden="true"
      >
        <MarriageBiodata5 />
      </div>
    </div>
  );
}

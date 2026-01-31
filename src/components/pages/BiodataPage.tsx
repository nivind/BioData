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
        pageNum: number
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

      pdf.save("Marriage_Biodata.pdf");
    } catch (error) {
      console.error("PDF generation failed:", error);
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      <HydrationFix />

      {/* Top Toolbar */}

      <div className="p-2 sm:p-4 flex w-full flex-wrap sm:flex-row  gap-3 sm:gap-4  bg-gray-300 dark:bg-gray-800">
        <button
          onClick={generatePDF}
          className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium"
        >
          Download Biodata
          <DownloadIcon className="w-4 h-4" />
        </button>

        <button
          onClick={() => router.push("/photos")}
          className="cursor-pointer flex items-center gap-2 px-6 py-3  bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
        >
          Photos
          <Images className="w-4 h-4" />
        </button>

        <ThemeSwitcher />
      </div>

      {/* Visible Preview */}
      <div
        id="main-content"
        className="overflow-y-auto h-[calc(100vh-80px)] p-4"
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

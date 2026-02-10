import { motion, AnimatePresence } from "framer-motion";
import { DownloadIcon, Images } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
// Reusable animated button with tooltip
type ActionButtonProps = {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  tooltip: string;
  color: string; // e.g. "green", "blue"
};

function ActionButton({
  onClick,
  icon,
  label,
  tooltip,
  color,
}: ActionButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const baseClasses = `
    relative flex items-center gap-2 px-4 py-3
    text-white font-medium rounded-xl shadow-md
    transition-shadow duration-200
    hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2
  `;

  const colorClasses = {
    green: "bg-green-600 hover:bg-green-700 focus:ring-green-500",
    blue: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
  }[color];

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <motion.button
        onClick={onClick}
        className={`${baseClasses} ${colorClasses}`}
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.94, y: 0 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
      >
        {icon}
        <span>{label}</span>
      </motion.button>

      {/* <AnimatePresence>
        {showTooltip && (
          <motion.div
            className={`
              absolute left-1/2 -translate-x-1/2 top-full mt-3
              px-4 py-2 bg-gray-900 text-white text-sm rounded-lg
              whitespace-nowrap shadow-xl z-50
            `}
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.18 }}
          >
            {tooltip}
            <div
              className="absolute -top-1.5 left-1/2 -translate-x-1/2
                         w-3 h-3 bg-gray-900 rotate-45"
            />
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  );
}

export default ActionButton;

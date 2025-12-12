import { motion } from "framer-motion";

const CatPawDecoration = () => {
  return (
    <motion.div
      className="absolute -bottom-4 -right-4 md:bottom-8 md:right-8"
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
    >
      <div className="relative">
        {/* Speech Bubble */}
        <motion.div
          className="absolute -top-16 -left-8 bg-card rounded-2xl px-4 py-2 shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <span className="text-sm font-medium text-foreground whitespace-nowrap">
            Best of Luck! 🍀
          </span>
          {/* Bubble tail */}
          <div className="absolute -bottom-2 left-8 w-4 h-4 bg-card rotate-45" />
        </motion.div>

        {/* Cat Paw SVG */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 100 100"
          className="text-quiz-paw-accent drop-shadow-lg"
        >
          {/* Main pad */}
          <ellipse cx="50" cy="60" rx="25" ry="20" fill="currentColor" />
          {/* Toe pads */}
          <circle cx="30" cy="35" r="12" fill="currentColor" />
          <circle cx="50" cy="28" r="12" fill="currentColor" />
          <circle cx="70" cy="35" r="12" fill="currentColor" />
          {/* Inner pad details */}
          <ellipse cx="50" cy="60" rx="15" ry="12" fill="hsl(var(--card))" opacity="0.3" />
          <circle cx="30" cy="35" r="7" fill="hsl(var(--card))" opacity="0.3" />
          <circle cx="50" cy="28" r="7" fill="hsl(var(--card))" opacity="0.3" />
          <circle cx="70" cy="35" r="7" fill="hsl(var(--card))" opacity="0.3" />
        </svg>
      </div>
    </motion.div>
  );
};

export default CatPawDecoration;
import { motion } from "framer-motion";

interface QuizOptionProps {
  option: string;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}

const QuizOption = ({ option, index, isSelected, onSelect }: QuizOptionProps) => {
  const letters = ["A", "B", "C", "D"];

  return (
    <motion.button
      onClick={onSelect}
      className={`w-full p-4 rounded-2xl text-left transition-all duration-200 border-2 ${
        isSelected
          ? "bg-primary text-primary-foreground border-primary shadow-lg"
          : "bg-card text-card-foreground border-transparent hover:border-primary/30 hover:bg-quiz-option-hover"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
    >
      <div className="flex items-center gap-4">
        <span
          className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
            isSelected
              ? "bg-primary-foreground/20 text-primary-foreground"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {letters[index]}
        </span>
        <span className="text-base font-medium">{option}</span>
      </div>
    </motion.button>
  );
};

export default QuizOption;
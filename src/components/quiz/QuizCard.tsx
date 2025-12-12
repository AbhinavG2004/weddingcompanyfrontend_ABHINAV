import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import QuizOption from "./QuizOption";
import type { QuizQuestion } from "@/data/quizData";

interface QuizCardProps {
  question: QuizQuestion;
  selectedAnswer: number | null;
  onSelectAnswer: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  isLastQuestion: boolean;
}

const QuizCard = ({
  question,
  selectedAnswer,
  onSelectAnswer,
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  isLastQuestion,
}: QuizCardProps) => {
  return (
    <div className="w-full max-w-lg mx-auto">
      <motion.div
        className="bg-quiz-card-bg rounded-3xl overflow-hidden shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Question Header */}
        <div className="bg-secondary px-6 py-4">
          <AnimatePresence mode="wait">
            <motion.h2
              key={question.id}
              className="text-lg font-semibold text-secondary-foreground text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {question.question}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Options */}
        <div className="p-6 space-y-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={question.id}
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {question.options.map((option, index) => (
                <QuizOption
                  key={`${question.id}-${index}`}
                  option={option}
                  index={index}
                  isSelected={selectedAnswer === index}
                  onSelect={() => onSelectAnswer(index)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="px-6 pb-6 flex justify-between items-center">
          <motion.button
            onClick={onPrevious}
            disabled={!canGoPrevious}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              canGoPrevious
                ? "bg-card text-foreground hover:bg-muted shadow-md"
                : "bg-muted/50 text-muted-foreground cursor-not-allowed"
            }`}
            whileHover={canGoPrevious ? { scale: 1.1 } : {}}
            whileTap={canGoPrevious ? { scale: 0.95 } : {}}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={onNext}
            disabled={!canGoNext}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              canGoNext
                ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
                : "bg-muted/50 text-muted-foreground cursor-not-allowed"
            }`}
            whileHover={canGoNext ? { scale: 1.1 } : {}}
            whileTap={canGoNext ? { scale: 0.95 } : {}}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default QuizCard;
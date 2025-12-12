import { motion } from "framer-motion";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";
import type { QuizQuestion } from "@/data/quizData";

interface QuizResultsProps {
  questions: QuizQuestion[];
  answers: (number | null)[];
  onRestart: () => void;
}

const QuizResults = ({ questions, answers, onRestart }: QuizResultsProps) => {
  const correctCount = questions.reduce((count, question, index) => {
    return answers[index] === question.correctAnswer ? count + 1 : count;
  }, 0);

  const percentage = Math.round((correctCount / questions.length) * 100);

  const getMessage = () => {
    if (percentage >= 80) return "Excellent! You're an animal expert! 🎉";
    if (percentage >= 60) return "Great job! You know your animals! 🌟";
    if (percentage >= 40) return "Good effort! Keep learning! 📚";
    return "Keep practicing! You'll get better! 💪";
  };

  return (
    <motion.div
      className="w-full max-w-lg mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-quiz-card-bg rounded-3xl overflow-hidden shadow-xl">
        {/* Header */}
        <div className="bg-secondary px-6 py-6 text-center">
          <motion.h2
            className="text-2xl font-bold text-secondary-foreground font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Quiz Complete!
          </motion.h2>
        </div>

        {/* Score */}
        <div className="p-6">
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 mb-4">
              <span className="text-4xl font-bold text-primary">
                {correctCount}/{questions.length}
              </span>
            </div>
            <p className="text-lg font-medium text-foreground">{getMessage()}</p>
            <p className="text-muted-foreground mt-1">You scored {percentage}%</p>
          </motion.div>

          {/* Results List */}
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {questions.map((question, index) => {
              const isCorrect = answers[index] === question.correctAnswer;
              const userAnswer = answers[index] !== null ? question.options[answers[index]] : "Not answered";
              const correctAnswer = question.options[question.correctAnswer];

              return (
                <motion.div
                  key={question.id}
                  className={`p-4 rounded-xl border-2 ${
                    isCorrect ? "bg-primary/5 border-primary/20" : "bg-destructive/5 border-destructive/20"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex items-start gap-3">
                    {isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {question.question}
                      </p>
                      {!isCorrect && (
                        <p className="text-xs text-muted-foreground mt-1">
                          Your answer: <span className="text-destructive">{userAnswer}</span>
                          <br />
                          Correct: <span className="text-primary">{correctAnswer}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Restart Button */}
          <motion.button
            onClick={onRestart}
            className="w-full mt-6 py-4 px-6 bg-primary text-primary-foreground rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <RotateCcw className="w-5 h-5" />
            Take Quiz Again
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default QuizResults;
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import QuizHeader from "@/components/quiz/QuizHeader";
import QuizProgress from "@/components/quiz/QuizProgress";
import QuizCard from "@/components/quiz/QuizCard";
import QuizResults from "@/components/quiz/QuizResults";
import CatPawDecoration from "@/components/quiz/CatPawDecoration";
import { quizQuestions } from "@/data/quizData";

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(quizQuestions.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);

  const handleSelectAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (answers[currentQuestion] !== null) {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers(new Array(quizQuestions.length).fill(null));
    setShowResults(false);
  };

  const canGoNext = answers[currentQuestion] !== null;
  const canGoPrevious = currentQuestion > 0;
  const isLastQuestion = currentQuestion === quizQuestions.length - 1;

  return (
    <div className="min-h-screen bg-gradient-to-b from-quiz-gradient-start to-quiz-gradient-end py-8 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/3 rounded-full blur-2xl" />
      </div>

      <div className="max-w-2xl mx-auto relative">
        <QuizHeader />

        <AnimatePresence mode="wait">
          {!showResults ? (
            <div key="quiz">
              <QuizProgress
                current={currentQuestion + 1}
                total={quizQuestions.length}
              />
              <QuizCard
                question={quizQuestions[currentQuestion]}
                selectedAnswer={answers[currentQuestion]}
                onSelectAnswer={handleSelectAnswer}
                onPrevious={handlePrevious}
                onNext={handleNext}
                canGoPrevious={canGoPrevious}
                canGoNext={canGoNext}
                isLastQuestion={isLastQuestion}
              />
            </div>
          ) : (
            <QuizResults
              key="results"
              questions={quizQuestions}
              answers={answers}
              onRestart={handleRestart}
            />
          )}
        </AnimatePresence>

        {!showResults && <CatPawDecoration />}
      </div>
    </div>
  );
};

export default Index;
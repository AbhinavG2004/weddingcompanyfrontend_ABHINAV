import { motion } from "framer-motion";

const QuizHeader = () => {
  return (
    <motion.div
      className="text-center mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-2">
        Test Your{" "}
        <span className="text-primary">Knowledge</span>
      </h1>
      <p className="text-muted-foreground text-lg">
        Fun animal trivia to challenge your brain!
      </p>
    </motion.div>
  );
};

export default QuizHeader;
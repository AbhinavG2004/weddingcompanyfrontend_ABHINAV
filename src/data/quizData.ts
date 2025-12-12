export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the largest mammal on Earth?",
    options: ["African Elephant", "Blue Whale", "Giraffe"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "Which animal is known as the 'King of the Jungle'?",
    options: ["Tiger", "Lion", "Leopard"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "How many legs does an octopus have?",
    options: ["Six", "Eight", "Ten"],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: "What is a group of wolves called?",
    options: ["Pack", "Herd", "Flock"],
    correctAnswer: 0,
  },
  {
    id: 5,
    question: "Which bird is known for its ability to mimic human speech?",
    options: ["Eagle", "Parrot", "Owl"],
    correctAnswer: 1,
  },
  {
    id: 6,
    question: "What is the fastest land animal?",
    options: ["Cheetah", "Horse", "Gazelle"],
    correctAnswer: 0,
  },
  {
    id: 7,
    question: "Which animal has the longest lifespan?",
    options: ["Elephant", "Tortoise", "Whale"],
    correctAnswer: 1,
  },
  {
    id: 8,
    question: "What is a baby kangaroo called?",
    options: ["Cub", "Joey", "Pup"],
    correctAnswer: 1,
  },
];
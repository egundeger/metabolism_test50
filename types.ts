
export interface AnswerOption {
  text: string;
  rationale: string;
  isCorrect: boolean;
}

export interface Question {
  questionNumber: number;
  question: string;
  imageUrl: string;
  answerOptions: AnswerOption[];
  hint: string;
}


import React from 'react';
import { Question } from '../types';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface QuizProps {
  currentQuestion: Question;
  totalQuestions: number;
  currentQuestionIndex: number;
  selectedAnswer: number | null;
  onAnswerSelect: (selectedIndex: number) => void;
  onNext: () => void;
  onPrev: () => void;
  onFinish: () => void;
}

const Quiz: React.FC<QuizProps> = ({
  currentQuestion,
  totalQuestions,
  currentQuestionIndex,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  onPrev,
  onFinish,
}) => {
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center text-slate-400">
        <span className="font-bold text-lg">Soru {currentQuestionIndex + 1} / {totalQuestions}</span>
      </div>
      <ProgressBar current={currentQuestionIndex} total={totalQuestions} />
      
      <QuestionCard 
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={onAnswerSelect}
      />
      
      <div className="flex justify-between mt-4">
        <button
          onClick={onPrev}
          disabled={currentQuestionIndex === 0}
          className="px-6 py-3 bg-slate-700 text-slate-200 rounded-lg font-semibold flex items-center gap-2 transition-all hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeftIcon />
          Önceki
        </button>
        {isLastQuestion ? (
          <button
            onClick={onFinish}
            disabled={selectedAnswer === null}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold flex items-center gap-2 transition-all hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Testi Bitir
          </button>
        ) : (
          <button
            onClick={onNext}
            disabled={selectedAnswer === null}
            className="px-6 py-3 bg-sky-600 text-white rounded-lg font-semibold flex items-center gap-2 transition-all hover:bg-sky-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Sonraki
            <ChevronRightIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;

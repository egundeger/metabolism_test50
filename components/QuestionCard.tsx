
import React, { useState } from 'react';
import { Question, AnswerOption } from '../types';
import { LightbulbIcon, CheckCircleIcon, XCircleIcon } from './Icons';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onAnswerSelect: (selectedIndex: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, selectedAnswer, onAnswerSelect }) => {
  const [showHint, setShowHint] = useState(false);
  const hasAnswered = selectedAnswer !== null;

  const getButtonClasses = (option: AnswerOption, index: number): string => {
    const baseClasses = "w-full text-left p-4 my-2 rounded-lg border-2 transition-all duration-300 flex items-center text-sm md:text-base";
    
    if (!hasAnswered) {
      return `${baseClasses} bg-slate-700 border-slate-600 hover:bg-slate-600 hover:border-sky-500`;
    }

    const isCorrect = option.isCorrect;
    const isSelected = selectedAnswer === index;

    if (isCorrect) {
      return `${baseClasses} bg-green-900/50 border-green-500 text-slate-100 cursor-not-allowed`;
    }
    if (isSelected && !isCorrect) {
      return `${baseClasses} bg-red-900/50 border-red-500 text-slate-100 cursor-not-allowed`;
    }
    
    return `${baseClasses} bg-slate-800 border-slate-700 text-slate-400 cursor-not-allowed opacity-70`;
  };
  
  const selectedRationale = hasAnswered ? question.answerOptions[selectedAnswer as number].rationale : null;

  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-2xl border border-slate-700">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-100">{question.question}</h2>
      
      <div className="flex flex-col">
        {question.answerOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(index)}
            disabled={hasAnswered}
            className={getButtonClasses(option, index)}
          >
            <span className="font-bold mr-3">{String.fromCharCode(65 + index)}.</span>
            <span className="flex-1">{option.text}</span>
            {hasAnswered && option.isCorrect && <CheckCircleIcon className="w-6 h-6 ml-3 text-green-400" />}
            {hasAnswered && selectedAnswer === index && !option.isCorrect && <XCircleIcon className="w-6 h-6 ml-3 text-red-400" />}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-col sm:flex-row gap-4">
        <button
            onClick={() => setShowHint(!showHint)}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-md transition-colors text-yellow-400"
        >
            <LightbulbIcon className="w-5 h-5" />
            <span>İpucu</span>
        </button>
      </div>

      {showHint && (
        <div className="mt-4 p-4 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-300">
            <p><span className="font-bold text-yellow-400">İpucu:</span> {question.hint}</p>
        </div>
      )}

      {hasAnswered && selectedRationale && (
         <div className="mt-4 p-4 bg-slate-900/50 border border-slate-700 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-sky-400">Açıklama</h3>
            <p className="text-slate-300">{selectedRationale}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;

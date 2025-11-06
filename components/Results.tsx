
import React from 'react';

interface ResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ScoreCircle: React.FC<{ score: number; total: number }> = ({ score, total }) => {
    const percentage = total > 0 ? (score / total) * 100 : 0;
    const circumference = 2 * Math.PI * 54; // 2 * pi * r
    const offset = circumference - (percentage / 100) * circumference;

    let colorClass = 'text-green-400';
    if (percentage < 75) colorClass = 'text-yellow-400';
    if (percentage < 50) colorClass = 'text-red-400';

    return (
        <div className="relative w-48 h-48">
            <svg className="w-full h-full" viewBox="0 0 120 120">
                <circle
                    className="text-slate-700"
                    strokeWidth="12"
                    stroke="currentColor"
                    fill="transparent"
                    r="54"
                    cx="60"
                    cy="60"
                />
                <circle
                    className={`${colorClass} transition-all duration-1000 ease-out`}
                    strokeWidth="12"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="54"
                    cx="60"
                    cy="60"
                    transform="rotate(-90 60 60)"
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={`text-4xl font-bold ${colorClass}`}>{score}</span>
                <span className="text-slate-400">/ {total}</span>
            </div>
        </div>
    );
};


const Results: React.FC<ResultsProps> = ({ score, totalQuestions, onRestart }) => {
  const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
  let message = '';
  if (percentage === 100) {
    message = 'Harika! Mükemmel bir skor!';
  } else if (percentage >= 80) {
    message = 'Çok iyi! Konuya oldukça hakimsiniz.';
  } else if (percentage >= 50) {
    message = 'İyi bir başlangıç! Gözden geçirmeye devam.';
  } else {
    message = 'Tekrar denemekte fayda var!';
  }

  return (
    <div className="bg-slate-800 p-8 rounded-xl shadow-2xl border border-slate-700 flex flex-col items-center gap-6">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">Test Tamamlandı!</h2>
      <p className="text-xl text-slate-300">{message}</p>
      
      <ScoreCircle score={score} total={totalQuestions} />

      <button
        onClick={onRestart}
        className="mt-4 px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold text-lg transition-all hover:bg-indigo-500 transform hover:scale-105"
      >
        Yeniden Başla
      </button>
    </div>
  );
};

export default Results;

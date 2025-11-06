
import React, { useState, useCallback } from 'react';
import { quizData } from './data';
import Quiz from './components/Quiz';
import Results from './components/Results';

type QuizState = 'in-progress' | 'completed';

const App: React.FC = () => {
  const [questions] = useState(quizData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(() =>
    Array(questions.length).fill(null)
  );
  const [score, setScore] = useState(0);
  const [quizState, setQuizState] = useState<QuizState>('in-progress');

  const handleAnswerSelect = useCallback((selectedIndex: number) => {
    if (selectedAnswers[currentQuestionIndex] !== null) return;

    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = selectedIndex;
    setSelectedAnswers(newSelectedAnswers);

    if (questions[currentQuestionIndex].answerOptions[selectedIndex].isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  }, [currentQuestionIndex, questions, selectedAnswers]);

  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  }, [currentQuestionIndex, questions.length]);

  const handlePrevQuestion = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  }, [currentQuestionIndex]);
  
  const handleFinishQuiz = useCallback(() => {
    setQuizState('completed');
  }, []);

  const handleRestartQuiz = useCallback(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers(Array(questions.length).fill(null));
    setScore(0);
    setQuizState('in-progress');
  }, [questions.length]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 flex flex-col items-center justify-center p-4">
      <header className="w-full max-w-4xl mx-auto mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
          Biyokimya Metabolizma Testi
        </h1>
      </header>
      <main className="w-full max-w-4xl mx-auto">
        {quizState === 'in-progress' ? (
          <Quiz
            currentQuestion={questions[currentQuestionIndex]}
            totalQuestions={questions.length}
            currentQuestionIndex={currentQuestionIndex}
            selectedAnswer={selectedAnswers[currentQuestionIndex]}
            onAnswerSelect={handleAnswerSelect}
            onNext={handleNextQuestion}
            onPrev={handlePrevQuestion}
            onFinish={handleFinishQuiz}
          />
        ) : (
          <Results
            score={score}
            totalQuestions={questions.length}
            onRestart={handleRestartQuiz}
          />
        )}
      </main>
      <footer className="w-full max-w-4xl mx-auto mt-6 text-center text-slate-500 text-sm">
        <p>React & Tailwind CSS ile oluşturulmuştur.</p>
      </footer>
    </div>
  );
};

export default App;

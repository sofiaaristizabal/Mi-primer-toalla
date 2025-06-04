
import React, { useState } from 'react';
import { QuizData, QuizQuestion, QuizOption } from '../../types';

interface ComprehensionQuizProps {
  quizData: QuizData;
}

const ComprehensionQuiz: React.FC<ComprehensionQuizProps> = ({ quizData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});
  const [feedbackMessages, setFeedbackMessages] = useState<{ [key: string]: string }>({});
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = quizData.questions[currentQuestionIndex];

  const handleOptionSelect = (questionId: string, optionId: string) => {
    if (selectedAnswers[questionId]) return; // Already answered

    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    const isCorrect = optionId === currentQuestion.correctOptionId;
    setFeedbackMessages((prev) => ({
      ...prev,
      [questionId]: isCorrect ? currentQuestion.feedbackCorrect : currentQuestion.feedbackIncorrect,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setFeedbackMessages({});
    setShowResults(false);
  };

  if (showResults) {
    let score = 0;
    quizData.questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctOptionId) {
        score++;
      }
    });
    return (
      <div className="bg-white/70 p-6 rounded-lg shadow-md mt-6 text-center backdrop-blur-sm border border-pink-200">
        <h3 className="text-2xl font-['Fredoka_One'] text-pink-600 mb-4">¡Resultados del Quiz!</h3>
        <p className="text-lg text-rose-700 mb-2">
          Obtuviste {score} de {quizData.questions.length} respuestas correctas.
        </p>
        {score === quizData.questions.length ? (
            <p className="text-xl font-semibold text-purple-500 mb-4">🎉 ¡Felicidades! ¡Eres una estrella del conocimiento! 🎉</p>
        ) : (
            <p className="text-lg text-rose-700 mb-4">¡Muy bien hecho por intentarlo! Cada pregunta es una oportunidad para aprender más. ✨</p>
        )}
        <ul className="text-left mb-6 space-y-3">
          {quizData.questions.map(q => {
            const userAnswer = q.options.find(opt => opt.id === selectedAnswers[q.id])?.text || "No respondida";
            const correctAnswerText = q.options.find(opt => opt.id === q.correctOptionId)?.text;
            const isUserCorrect = selectedAnswers[q.id] === q.correctOptionId;

            return (
              <li key={q.id} className={`p-3 rounded-md ${isUserCorrect ? 'bg-green-100 border-green-300' : 'bg-yellow-100 border-yellow-300'} border`}>
                <p className="font-semibold text-gray-700">{q.questionText}</p>
                <p className={`${isUserCorrect ? 'text-green-700' : 'text-yellow-700'}`}>
                  Tu respuesta: {userAnswer}
                  {isUserCorrect && " - ¡Correcto! 👍"}
                </p>
                {!isUserCorrect && (
                  <p className="text-sm text-green-600">Respuesta correcta: {correctAnswerText}</p>
                )}
              </li>
            );
          })}
        </ul>
        <button
          onClick={handleRestartQuiz}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-150 ease-in-out font-['Fredoka_One']"
        >
          Jugar de Nuevo
        </button>
      </div>
    );
  }

  if (!currentQuestion) {
    return <p>Cargando quiz...</p>;
  }
  
  const selectedOptionId = selectedAnswers[currentQuestion.id];

  return (
    <div className="bg-white/70 p-6 md:p-8 rounded-lg shadow-xl mt-8 backdrop-blur-md border border-pink-200">
      <h3 className="text-3xl font-['Fredoka_One'] text-pink-600 mb-6 text-center">{quizData.title}</h3>
      <div className="mb-8 p-4 bg-rose-50 rounded-lg shadow">
        <p className="text-xl font-semibold text-rose-700 mb-1 text-center">
          Pregunta {currentQuestionIndex + 1} de {quizData.questions.length}
        </p>
        <p className="text-lg text-rose-600 text-center">{currentQuestion.questionText}</p>
      </div>

      <div className="space-y-4 mb-6">
        {currentQuestion.options.map((option) => {
          const isSelected = selectedOptionId === option.id;
          const isCorrect = option.id === currentQuestion.correctOptionId;
          
          let buttonClass = `w-full text-left p-4 rounded-lg shadow-sm transition-all duration-150 ease-in-out text-base `;

          if (selectedOptionId) { // An answer has been selected
            if (isCorrect) {
              buttonClass += 'bg-green-400 text-white scale-105 ring-2 ring-green-300 ';
            } else if (isSelected && !isCorrect) {
              buttonClass += 'bg-yellow-300 text-yellow-800 scale-105 ring-2 ring-yellow-200 ';
            } else {
              buttonClass += 'bg-gray-200 text-gray-500 opacity-70 cursor-not-allowed ';
            }
          } else { // No answer selected yet
            buttonClass += 'bg-pink-100 hover:bg-pink-200 text-pink-700 focus:ring-2 focus:ring-pink-400 ';
          }

          return (
            <button
              key={option.id}
              onClick={() => handleOptionSelect(currentQuestion.id, option.id)}
              disabled={!!selectedOptionId}
              className={buttonClass}
            >
              {option.text}
            </button>
          );
        })}
      </div>

      {feedbackMessages[currentQuestion.id] && (
        <div className={`p-3 mb-6 rounded-md text-center font-semibold ${selectedAnswers[currentQuestion.id] === currentQuestion.correctOptionId ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-800'}`}>
          {feedbackMessages[currentQuestion.id]}
        </div>
      )}

      {selectedAnswers[currentQuestion.id] && (
        <div className="text-center">
          <button
            onClick={handleNextQuestion}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-150 ease-in-out font-['Fredoka_One'] text-lg"
          >
            {currentQuestionIndex < quizData.questions.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ComprehensionQuiz;

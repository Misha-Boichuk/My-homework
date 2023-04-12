// import React from 'react';
// import { styled, Box } from '@mui/material';

// const Favor = styled(Box)({

//   width: '450wv',
//   backgroundColor: 'lightblue',
//   overflow: 'hidden',
// });

// export default function Favorite() {
//   return (
//     <Favor>
//       <h1>Favorite</h1>
//     </Favor>
//   );
// }

import React, { useState } from 'react';

const FavoriteQuizzes = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['Paris', 'Madrid', 'Rome', 'Berlin'],
      answer: 'Paris',
      userAnswer: null,
    },
    {
      id: 2,
      question: 'What is the largest planet in our solar system?',
      options: ['Jupiter', 'Mars', 'Venus', 'Mercury'],
      answer: 'Jupiter',
      userAnswer: null,
    },
    {
      id: 3,
      question: 'What is the capital of India?',
      options: ['Mumbai', 'Delhi', 'Kolkata', 'Chennai'],
      answer: 'Delhi',
      userAnswer: null,
    },
    {
      id: 4,
      question: 'What is the capital of Spain?',
      options: ['Paris', 'Madrid', 'Rome', 'Berlin'],
      answer: 'Madrid',
      userAnswer: null,
    },
    {
      id: 5,
      question: 'What is the capital of Italy?',
      options: ['Paris', 'Madrid', 'Rome', 'Berlin'],
      answer: 'Rome',
      userAnswer: null,
    },
    {
      id: 6,
      question: 'What is the capital of Germany?',
      options: ['Paris', 'Madrid', 'Rome', 'Berlin'],
      answer: 'Berlin',
      userAnswer: null,
    },
    {
      id: 7,
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
      answer: 'Canberra',
      userAnswer: null,
    },
    {
      id: 8,
      question: 'What is the capital of Brazil?',
      options: ['Rio de Janeiro', 'Sao Paulo', 'Brasilia', 'Salvador'],
      answer: 'Brasilia',
      userAnswer: null,
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedAnswer) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion].userAnswer = selectedAnswer;
    setQuestions(updatedQuestions);

    if (selectedAnswer === updatedQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < updatedQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='favorite'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerOptionClick(option)}
                className='favorite-button'
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FavoriteQuizzes;

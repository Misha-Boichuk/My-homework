// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// function Quiz() {
//   const [quizzes, setQuizzes] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     const fetchQuizzes = async () => {
//       const response = await fetch('https://example.com/api/quizzes');
//       const data = await response.json();
//       setQuizzes(data);
//     };
//     fetchQuizzes();
//   }, []);

//   const filteredQuizzes = quizzes.filter((quiz) => quiz.name.toLowerCase().includes(searchQuery.toLowerCase()));

//   return (
//     <div className='quiz' >
//       <h1>Quiz List</h1>
//       <input type='text' value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
//       <ul>
//         {filteredQuizzes.map((quiz) => (
//           <li key={quiz.id}>
//             <Link to={`/quiz/${quiz.id}`}>{quiz.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default Quiz; ///

import React, { useState } from 'react';

const QuizPage = () => {
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
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
      answer: 'Canberra',
      userAnswer: null,
    },
    {
      id: 5,
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
    <div className='quiz-page'>
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

export default QuizPage;

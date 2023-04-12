import React, { useState } from 'react';

const CreateQuiz = () => {
  const [quizName, setQuizName] = useState('');
  const [quizDescription, setQuizDescription] = useState('');
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [options, setOptions] = useState([]);
  const [option, setOption] = useState('');
  const addQuestion = () => {
    const newQuestion = {
      question,
      answer,
      options,
    };
    setQuizQuestions([...quizQuestions, newQuestion]);
    setQuestion('');
    setAnswer('');
    setOptions([]);
  };

  const addOption = () => {
    setOptions([...options, option]);
    setOption('');
  };

  const saveQuiz = () => {
    const quiz = {
      quizName,
      quizDescription,
      quizQuestions,
    };
    console.log(quiz);
  };

  return (
    <div className='create-quiz' >
      <div>
      <h1>Create Quiz</h1>
      <div>
          <label>Quiz Name</label>
          <input
          type="text"
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
          />
      </div>
      <div>
          <label>Quiz Description</label>
          <input
          type="text"
          value={quizDescription}
          onChange={(e) => setQuizDescription(e.target.value)}
          />
      </div>
      <div>
          <label>Question</label>
          <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          />
      </div>
      <div>
          <label>Answer</label>
          <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          />
      </div>
      <div>
          <label>Option</label>
          <input
          type="text"
          value={option}
          onChange={(e) => setOption(e.target.value)}
          />
          <button onClick={addOption}>Add Option</button>
      </div>
      <div>
          <button onClick={addQuestion}>Add Question</button>
      </div>
      <div>
          <button onClick={saveQuiz}>Save Quiz</button>
      </div>
      </div>
    </div>
  );
};

export default CreateQuiz;

import React, { useState } from 'react';

const Quiz = ({ quizData }) => {
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (answer) => {
    setAnswers((prev) => [...prev, answer]);
  };

  const calculateResult = () => {
    const counts = answers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {});

    const mostCommonAnswer = Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );

    setResult(quizData.results[mostCommonAnswer]);
  };

  if (result) {
    return (
      <div style={{ padding: '20px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
        <h1>{result.title}</h1>
        <p>{result.description}</p>
        <button onClick={() => setResult(null)}>Retake Quiz</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Georgia, serif' }}>
      <h1>{quizData.title}</h1>
      <p>{quizData.introduction}</p>
      {quizData.questions.map((q, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <p>{q.question}</p>
          {q.options.map((option, i) => (
            <button
              key={i}
              style={{
                display: 'block',
                margin: '10px 0',
                padding: '10px',
                border: '1px solid #ddd',
                background: '#fdf4e3',
                cursor: 'pointer'
              }}
              onClick={() => handleAnswer(option.charAt(0).toLowerCase())}
            >
              {option}
            </button>
          ))}
        </div>
      ))}
      {answers.length === quizData.questions.length && (
        <button onClick={calculateResult} style={{ marginTop: '20px', padding: '10px 20px' }}>
          See Your Result
        </button>
      )}
    </div>
  );
};

export default Quiz

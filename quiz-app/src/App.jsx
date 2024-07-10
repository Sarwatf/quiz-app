import React, { useState } from 'react';
import './App.css';

function App() {
  // STATE VARIABLES 
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  // Quiz questions array 
  const questions = [{
    question: 'Where does the sun rise?',
    options: ['east', 'west', 'north', 'south'],
    correctAnswer: 'east'
  },
  {
    question: 'where do you live?',
    options: ['  karachi', '  lahore', '  Islamabad', '  peshawar'],
    correctAnswer: 'peshawar'
  },
  {
    question: 'what is the capital of France?',
    options: ['Madrid', 'Berlin', 'Paris', 'Rome'],
    correctAnswer: 'Paris'
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"',
    options: ['William Shakespeare', 'Charles Dickens', 'Mark Twain', 'Jane Austen'],
    correctAnswer: 'William Shakespeare'
  },
  {
    question: 'What is the chemical symbol for water?',
    options: ['H2O', 'S2', 'H2', 'CO2'],
    correctAnswer: 'H2O'
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    correctAnswer: 'Mars'
  },
  {
    question: ' Which country is known as the Land of the Rising Sun?',
    options: ['Japan', 'China', 'SouthKorea', 'Thailand'],
    correctAnswer: 'Japan'
  },
  {
    question: 'Which is the largest ocean on Earth?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    correctAnswer: 'Pacific Ocean'
  },
  {
    question: 'In which year did the Titanic sink?',
    options: ['1905', '1909', '1912', '1915'],
    correctAnswer: '1912'
  },
  {
    question: 'Who was the first President of the United States',
    options: ['Abraham Lincoln', 'George Washington', 'Thomas Jefferson', 'John Adams'],
    correctAnswer: 'George Washington'
  }];

  function handleOptionClick(selectedOption) {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    
    <div className="App">
    <h1>Quiz Application</h1>
    {showScore ? (
      <h3 className="score">Score: {score} / {questions.length}</h3>
    ) : (
      <>
        <h3>{questions[currentQuestion].question}</h3>
        {questions[currentQuestion].options.map((option, index) => {
          return <button key={index} onClick={() => handleOptionClick(option)} >{option}</button>
        })}
      </>
    )}
  </div>
      
  );
}  
    
export default App;
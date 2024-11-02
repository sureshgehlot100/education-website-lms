import React, { useState } from 'react';

function Test() {
  const [answers, setAnswers] = useState({
    js: '',
    react: '',
    node: '',
    mongodb: ''
  });

  const handleAnswer = (question, answer) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [question]: answer
    }));
  };

  return (
    <div>
      <h1>Programming Language Examination</h1>

      <div>
        <h2>JavaScript Question</h2>
        <p>What is the result of typeof null in JavaScript?</p>
        <input type="radio" name="js" value="A" onChange={() => handleAnswer('js', 'A')} /> A) "null"
        <input type="radio" name="js" value="B" onChange={() => handleAnswer('js', 'B')} /> B) "object"
        <input type="radio" name="js" value="C" onChange={() => handleAnswer('js', 'C')} /> C) "undefined"
        <input type="radio" name="js" value="D" onChange={() => handleAnswer('js', 'D')} /> D) "number"
      </div>

      <div>
        <h2>React Question</h2>
        <p>Which hook is used for side effects in React?</p>
        <input type="radio" name="react" value="A" onChange={() => handleAnswer('react', 'A')} /> A) useEffect
        <input type="radio" name="react" value="B" onChange={() => handleAnswer('react', 'B')} /> B) useState
        <input type="radio" name="react" value="C" onChange={() => handleAnswer('react', 'C')} /> C) useContext
        <input type="radio" name="react" value="D" onChange={() => handleAnswer('react', 'D')} /> D) useReducer
      </div>

      <div>
        <h2>Node.js Question</h2>
        <p>Which of the following is not a core module in Node.js?</p>
        <input type="radio" name="node" value="A" onChange={() => handleAnswer('node', 'A')} /> A) http
        <input type="radio" name="node" value="B" onChange={() => handleAnswer('node', 'B')} /> B) fs
        <input type="radio" name="node" value="C" onChange={() => handleAnswer('node', 'C')} /> C) path
        <input type="radio" name="node" value="D" onChange={() => handleAnswer('node', 'D')} /> D) express
      </div>

      <div>
        <h2>MongoDB Question</h2>
        <p>Which of the following is used to insert a single document in MongoDB?</p>
        <input type="radio" name="mongodb" value="A" onChange={() => handleAnswer('mongodb', 'A')} /> A) insertOne()
        <input type="radio" name="mongodb" value="B" onChange={() => handleAnswer('mongodb', 'B')} /> B) insert()
        <input type="radio" name="mongodb" value="C" onChange={() => handleAnswer('mongodb', 'C')} /> C) addOne()
        <input type="radio" name="mongodb" value="D" onChange={() => handleAnswer('mongodb', 'D')} /> D) createOne()
      </div>

      <h2>Your Answers:</h2>
      <p>JavaScript: {answers.js}</p>
      <p>React: {answers.react}</p>
      <p>Node.js: {answers.node}</p>
      <p>MongoDB: {answers.mongodb}</p>
    </div>
  );
}

export default Test;
import './quiz.css';
import React from 'react';
// import { Link } from 'react-router-dom';

function QuizResult() {
  const score1 = localStorage.getItem('Question1') || '0';
  const score2 = localStorage.getItem('Question2') || '0';
  const score3 = localStorage.getItem('Question3') || '0';
  const result =
    parseInt(score1, 10) + parseInt(score2, 10) + parseInt(score3, 10);
  const resultToScore = result / 10;
  const handleClic = () => {
    localStorage.setItem('result', result);
  };

  return (
    <div>
      <h3 className="quizScore">Votre score : {resultToScore}/3</h3>
      <p className="quizScoreMessage">
        {result === 3
          ? 'Super ! tu as réussi. Rejoins-nous vite pour collecter tes premiers points.'
          : "Tu peux mieux faire. Rejoins-nous vite pour t'améliorer !"}
      </p>
      <button type="button" onClick={handleClic}>
        Continuer
      </button>
      <p>Points gagnés: {result}</p>
    </div>
  );
}

export default QuizResult;

import { useEffect, useState } from "react";
import Button from "./Button";
import Loading from "./Loading";
import Message from "./Message";
import Options from "./Options";
import Score from "./Score";

export default function QuizzItem({ questions }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  // to disable the option
  const [hasAnswered, setHasAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [isbtnDisabled, setIsBtnDisabled] = useState(true);

  const currentQuestion = questions?.[currentIndex];

  useEffect(() => {
    setCurrentIndex(0);
    setScore(0);
    setHasAnswered(false);
    setCorrect(false);
    setIsBtnDisabled(true);
  }, [questions]);

  if (currentIndex >= questions.length) {
    return (
      <div className="final-message">
        <p>No more questions available. Select next category.</p>
        <p>Your final score is: {score}</p>
      </div>
    );
  }

  if (!currentQuestion) {
    return <Loading />;
  }

  // get the key whose value is true
  const correctAnswerKey = Object.keys(currentQuestion.correct_answers).find(
    (key) => currentQuestion.correct_answers[key] === "true"
  );

  //replace the word correct and get the answer from the key generated
  const correctAnswer =
    currentQuestion.answers[correctAnswerKey.replace("_correct", "")];

  function handleOption(option) {
    if (hasAnswered) return;
    const isCorrect = option === correctAnswer;
    setCorrect(isCorrect);
    setHasAnswered(true);
    setIsBtnDisabled(false);

    if (isCorrect) {
      setScore((score) => score + 1);
    }
    console.log(isCorrect);
  }

  function handleNext() {
    setCurrentIndex((currentIndex) => currentIndex + 1);
    setHasAnswered(false);
    setIsBtnDisabled(true);
  }
  return (
    <div className="quizz-item">
      <h2>{currentQuestion.question}</h2>
      <ol>
        {Object.values(currentQuestion.answers)
          .filter((answer) => answer !== null)
          .map((option, index) => (
            <Options option={option} key={index} onTap={handleOption} />
          ))}
      </ol>
      <Button onClick={handleNext} isDisabled={isbtnDisabled} />
      <p style={{ display: "flex", gap: "10rem" }}>
        <span>
          <Score score={score} />
        </span>
        <span>{hasAnswered && <Message status={correct} />}</span>
      </p>
    </div>
  );
}

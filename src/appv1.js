import { useEffect, useState } from "react";
import QuizzItem from "./components/QuizzItem";
import Sidebar from "./components/Sidebar";

const apiKey = "yVsPRyH7jA7E1q8Asu6aN3VmnlMVGTEodNJxglsJ";

export default function Appv1() {
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Linux");

  function handleSelectCategory(name) {
    setSelectedCategory(name);
  }

  useEffect(
    function () {
      async function fetchInitialQuestion() {
        try {
          const res = await fetch(
            `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&category=${selectedCategory}`
          );
          const body = await res.json();
          console.log(body.length);
          setQuestions(body);
        } catch (e) {
          console.log("Failed to fetch the questions");
        }
      }
      fetchInitialQuestion();
    },
    [selectedCategory]
  );

  return (
    <div className="app">
      <Sidebar
        categories={categories}
        setCategories={setCategories}
        onSelectCategory={handleSelectCategory}
      />
      <div className="quizz-container">
        <h1>Test Your knowledge</h1>
        <Quizz questions={questions} />
      </div>
    </div>
  );
}

function Quizz({ questions }) {
  return (
    <div className="quizz">
      {" "}
      <QuizzItem questions={questions} />{" "}
    </div>
  );
}

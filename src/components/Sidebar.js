import { useEffect } from "react";

export default function Sidebar({
  categories,
  setCategories,
  onSelectCategory,
}) {
  useEffect(function () {
    async function fetchCategories() {
      const res = await fetch(
        "https://quizapi.io/api/v1/categories?apiKey=yVsPRyH7jA7E1q8Asu6aN3VmnlMVGTEodNJxglsJ"
      );
      const body = await res.json();
      setCategories(body);
    }
    fetchCategories();
  }, []);

  return (
    <div className="sidebar">
      <h3>Categories</h3>
      <Categories categories={categories} onSelectCategory={onSelectCategory} />
    </div>
  );
}

function Categories({ categories, onSelectCategory }) {
  return (
    <ul>
      {categories.map((category) => (
        <Category
          category={category}
          key={category.id}
          onSelectCategory={onSelectCategory}
        />
      ))}
    </ul>
  );
}

function Category({ category, onSelectCategory }) {
  return (
    <li onClick={() => onSelectCategory(category.name)}>{category.name}</li>
  );
}

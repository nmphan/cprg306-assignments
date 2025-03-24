import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  // Fetch list of meals based on the ingredient
  useEffect(() => {
    if (!ingredient) return;
    //console.log("Fetching meals for:", ingredient);

    async function fetchMealIdeas() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        //console.log("API Response:", data);
        setMeals(data.meals || []);
      } catch (error) {
        console.error("Error fetching meal ideas:", error);
      }
    }

    fetchMealIdeas();
  }, [ingredient]);

  // Fetch full meal details when a meal is clicked
  const handleMealClick = async (mealId) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      const data = await response.json();
      //console.log("Meal Details:", data);
      setSelectedMeal(data.meals ? data.meals[0] : null);
    } catch (error) {
      console.error("Error fetching meal details:", error);
    }
  };

  return (
    <div className="p-4 bg-stone-800 rounded-lg">
      <h3 className="text-xl font-bold text-white">Meal Ideas</h3>
      {!ingredient ? (
        <p className="text-white">Select an item to see meal ideas</p>
      ) : meals.length === 0 ? (
        <p className="text-white">No meals found for this ingredient.</p>
      ) : (
        <>
          <p className="text-white">
            Here are some meal ideas using {ingredient}:
          </p>
          <ul>
            {meals.map((meal) => (
              <li
                key={meal.idMeal}
                className="text-white cursor-pointer hover:text-orange-500 hover:bg-stone-700 bg-stone-500 p-2 m-2 rounded-lg transition-colors duration-200"
                onClick={() => handleMealClick(meal.idMeal)}
              >
                <div>{meal.strMeal}</div>

                {selectedMeal && selectedMeal.idMeal === meal.idMeal && (
                  <div className="mt-4 p-4 bg-orange-900 rounded-lg text-white">
                    <h4 className="font-semibold text-gray-300">
                      Ingredients needed:
                    </h4>
                    <ul className="list-disc pl-5 text-gray-300">
                      {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
                        const ingredient = selectedMeal[`strIngredient${i}`];
                        const measure = selectedMeal[`strMeasure${i}`];

                        return ingredient && ingredient.trim() ? (
                          <li key={i}>
                            {measure} {ingredient}
                          </li>
                        ) : null;
                      })}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

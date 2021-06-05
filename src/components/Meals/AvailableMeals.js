import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-complete-guide-3008c-default-rtdb.firebaseio.com/meals"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      const loadedMeals = Object.keys(responseData).map((key) => {
        return {
          ...responseData[key],
          id: key,
          price: +responseData[key].price,
        };
      });
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals()
      .then()
      .catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
    return () => {};
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

import { useEffect, useState } from 'react';
import styles from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItems/MealItem';



// This is a component which contains all the list of meals

const AvailableMeals = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [mealsArray, setMealsArray] = useState([]);
  const [isError, setIsError] = useState();


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fooddatabase-2b318-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');


      if (response.status !== 200) {
        throw new Error('Something might went wrong!!!');
      }

      const fetchDataJson = await response.json();
      const fetchMealsArray = [];
      for (const key in fetchDataJson) {
        fetchMealsArray.push({
          id: key,
          name: fetchDataJson[key].name,
          description: fetchDataJson[key].description,
          price: fetchDataJson[key].price
        });
      }

      setMealsArray(fetchMealsArray);
      setIsLoading(false);
    }

    fetchData().catch((error) => {
      setIsLoading(false);
      setIsError(error.message);
    });
  }, [])

  if (isLoading) {
    return (
      <section className={styles.mealLoader}>
        <p>
          Loading...
        </p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className={styles.mealError}>
        <p>
          {isError}
        </p>
      </section>
    );
  }
  const mealList = mealsArray.map((meal) =>
    <MealItem
      key={meal.id}
      id={meal.id}
      description={meal.description}
      name={meal.name}
      price={meal.price}
    >
    </MealItem>);
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {mealList}
        </ul>
      </Card>

    </section>
  );
};

export default AvailableMeals;
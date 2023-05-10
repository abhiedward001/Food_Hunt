import { useEffect,useState } from 'react';
import styles from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItems/MealItem';



// This is a component which contains all the list of meals

const AvailableMeals = () => {

  const [mealsArray,setMealsArray]=useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchData = await fetch('https://fooddatabase-2b318-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');
      const fetchDataJson = await fetchData.json();
      const fetchMealsArray=[];

      for (const key in fetchDataJson) {
        fetchMealsArray.push({
          id: key,
          name: fetchDataJson[key].name,
          description: fetchDataJson[key].description,
          price: fetchDataJson[key].price
        });
      }

      setMealsArray(fetchMealsArray);
    }

    fetchData();
  }, [])

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
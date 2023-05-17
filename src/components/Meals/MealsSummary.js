import classes from './MealsSummary.module.css';


// Component for the Meal summary

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2 className={classes.summaryTitle}>"FoodHunt - Your Ultimate Food Companion"</h2>
      <p>
        "Never run out of meal ideas again! Our food app brings you quick, easy and delicious recipes to satisfy every craving"
      </p>
      <p>
        "Delicious meals at your fingertips! Download our food app now and discover a world of flavor!"
      </p>
    </section>
  );
};

export default MealsSummary;
import styles from './Header.module.css';
import mealImage from '../../assets/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';
const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton></HeaderCartButton>
            </header>
            <div className={styles['main-image']}>
                <img src={mealImage} alt='This Image is background Image which is not rendering right now'></img>
            </div>
        </>
    );
};

export default Header;
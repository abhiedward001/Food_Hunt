import styles from './Header.module.css';
import mealImage from '../../assets/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';
// import Search from './Search';
// Component for Header

const Header = (props) => {
    return (
        <>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                {/* <Search data="search"></Search> */}

                {/* This is a header button component */}
                <HeaderCartButton onCLICK={props.onShowCart}></HeaderCartButton>

            </header>
            <div className={styles['main-image']}>
                <img src={mealImage} alt='This Image is background Image which is not rendering right now'></img>
            </div>
        </>
    );
};

export default Header;
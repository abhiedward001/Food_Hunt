import styles from './Header.module.css';
import mealImage from '../../assets/meals1.jpg';
import HeaderCartButton from './HeaderCartButton';
import headerIcon from '../../assets/food.png';
// import Search from './Search';
// Component for Header

const Header = (props) => {
    return (
        <>
            <header className={styles.header}>

                <div className={styles.headerLeft}>
                    <img src={headerIcon} className={styles.headerImg} alt="Icon"></img>
                    <h1 className={styles.title}>FoodHunt</h1>
                </div>
                <div>
                    <HeaderCartButton onCLICK={props.onShowCart} className={styles.headerRight}></HeaderCartButton>
                </div>

            </header>
            <div className={styles['main-image']}>
                <img src={mealImage} alt='This Image is background Image which is not rendering right now'></img>
            </div>
        </>
    );
};

export default Header;
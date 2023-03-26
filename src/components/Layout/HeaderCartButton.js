import CartIcon from "../Cart/CartIcon";
import styles from './HeaderCartButton.module.css';

//Component for the header button

const HeaderCartButton = () => {
    return (
        <>
            <button className={styles.button}>
                <span className={styles.icon}>

                    {/* This is a component which containts svg file content for cart icon */}
                    <CartIcon></CartIcon>
                </span>
                <span >
                    Your Cart
                </span>
                <span className={styles.badge}>
                    3
                </span>
            </button>
        </>
    )
}

export default HeaderCartButton;
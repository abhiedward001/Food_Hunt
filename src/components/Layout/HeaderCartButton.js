import CartIcon from "../Cart/CartIcon";
import styles from './HeaderCartButton.module.css';
import { useContext,useEffect,useState } from "react";
import CartContext from "../../Store/cart-context";
//Component for the header button

const HeaderCartButton = (props) => {

    const [buttonHighlighted,setButtonHighlighted]=useState(false);
    const cartCtx=useContext(CartContext);

    const{items}=cartCtx;
    const numberOfItems=items.reduce((curNumber,item)=>{
        console.log(`${curNumber}-----${item.amount}----${item}--- ${curNumber+item.amount}`);
        return curNumber+item.amount;
    },0);

    useEffect(()=>{
        if(items.length===0)return;
        setButtonHighlighted(true);

       const timerId= setTimeout(() => {
            setButtonHighlighted(false);
        }, 300);

        return()=>{
        clearTimeout(timerId);
        };
    }
    ,[items]);

   


    const classButton= `${styles.button} ${buttonHighlighted ? styles.bump : ''}`
    return (
        <>
            <button className={classButton} onClick={props.onCLICK}>
                <span className={styles.icon}>

                    {/* This is a component which containts svg file content for cart icon */}
                    <CartIcon></CartIcon>
                </span>
                <span >
                    Your Cart
                </span>
                <span className={styles.badge}>
                    {numberOfItems}
                </span>
            </button>
        </>
    )
}

export default HeaderCartButton;
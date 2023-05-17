import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../Store/cart-context';
import { useContext, useState } from 'react';
import CartItem from './CartItem';
import Checkout from './Checkout';


const Cart = (props) => {
    const cartCtx = useContext(CartContext);


    const totalAmount = `₹ ${cartCtx.totalAmount.toFixed(2)}`;
    const hasItem = cartCtx.items.length > 0;
    const [orderForm, setOrderForm] = useState(false);

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const orderButtonHandler = () => {
        setOrderForm(true);
    }
    
    const formSubmitHandler= async(userData)=>{
      const reponse= await fetch('https://fooddatabase-2b318-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json',
      {
        method:"POST",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body:JSON.stringify({
            user:userData,
            orderItems:cartCtx.items
        })
      });
    }

    const cartItems = (
        <ul className={styles['cart-items']}>
            {cartCtx.items.map((item) =>
            (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );
    const cartButtons = <div className={styles.actions}>
        <button className={styles['button--alt']}  onClick={props.onHideCart}>Close</button>
        {hasItem && (<button className={styles.button} onClick={orderButtonHandler}>Order</button>)}
    </div>

    return (
        <>
            <Modal onClose={props.onHideCart}>
                {cartItems}
                <div className={styles.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>

                {orderForm && <Checkout onFormSubmit={formSubmitHandler} onCancel={props.onHideCart} />}
                {!orderForm && cartButtons}
            </Modal>
        </>
    );
};

export default Cart;
import styles from './Checkout.module.css';
import { useRef,useState } from 'react';

const Checkout = (props) => {

    const [formInputValid,setFormInputValid]=useState({
    name:true,
    street:true,
    postal:true,
    city:true
    });


    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const isEmpty=(value)=>value.trim()==='';
    const isFiveChars=(value)=>value.trim().length===5;


    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
       
        const nameInputIsValid=!isEmpty(enteredName);
        const streetInputIsValid=!isEmpty(enteredStreet);
        const postalInputIsValid=isFiveChars(enteredPostal);
        const cityInputIsValid=!isEmpty(enteredCity);

        setFormInputValid({
        name:nameInputIsValid,
        street:streetInputIsValid,
        postal:postalInputIsValid,
        city:cityInputIsValid
        });

        const formIsValid= nameInputIsValid && streetInputIsValid && postalInputIsValid && cityInputIsValid;
        if(!formIsValid)return;
    }

    

    return (
        <form className={styles.form} onSubmit={confirmHandler}>
            <div className={styles.control}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
            </div>
            <div className={styles.control}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef} />
            </div>
            <div className={styles.control}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalInputRef} />
            </div>
            <div className={styles.control}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} />
            </div>
            <div className={styles.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={styles.submit}>Confirm</button>
            </div>
        </form>
    )
}

export default Checkout;
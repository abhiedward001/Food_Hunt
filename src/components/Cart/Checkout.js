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
    const isSixChars=(value)=>value.trim().length===6;


    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
       
        const nameInputIsValid=!isEmpty(enteredName);
        const streetInputIsValid=!isEmpty(enteredStreet);
        const postalInputIsValid=isSixChars(enteredPostal);
        const cityInputIsValid=!isEmpty(enteredCity);

        setFormInputValid({
        name:nameInputIsValid,
        street:streetInputIsValid,
        postal:postalInputIsValid,
        city:cityInputIsValid
        });

        const formIsValid= nameInputIsValid && streetInputIsValid && postalInputIsValid && cityInputIsValid;
        if(!formIsValid)return;
        
        const userData={
            name:enteredName,
            street:enteredStreet,
            postal:enteredPostal,
            city:enteredCity
        }
        props.onFormSubmit(userData);
        
        nameInputRef.current.value='';
        streetInputRef.current.value='';
        postalInputRef.current.value='';
        cityInputRef.current.value='';
       
    }

    const nameClass=`${styles.control} ${formInputValid.name ? '': styles.invalid}`;
    const streetClass=`${styles.control} ${formInputValid.street ? '': styles.invalid}`;
    const postalClass=`${styles.control} ${formInputValid.postal ? '': styles.invalid}`;
    const cityClass=`${styles.control} ${formInputValid.city ? '': styles.invalid}`;

    return (
        <div className={styles.formContainer}>
             <form className={styles.form} onSubmit={confirmHandler}>
            <div className={nameClass}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
                {!formInputValid.name && <p>Please Enter Your Name</p>}
            </div>
            <div className={streetClass}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef} />
                {!formInputValid.street && <p>Please Enter Your Street</p>}
            </div>
            <div className={postalClass}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalInputRef} />
                {!formInputValid.postal && <p>Please Enter Your Code</p>}
            </div>
            <div className={cityClass}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} />
                {!formInputValid.city && <p>Please Enter Your City</p>}
            </div>
            <div className={styles.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={styles.submit}>Confirm</button>
            </div>
        </form>
        </div>
       
    )
}

export default Checkout;
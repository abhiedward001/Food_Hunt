import styles from './MealItemForm.module.css';
import Input from './../../UI/Input';
import { useRef, useState } from 'react';

const MealItemForm = (props) => {


    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = +(amountInputRef.current.value);
    

        if (amountInputRef.current.value.trim().length === 0 || enteredAmount < 1 || enteredAmount > 5) {
            setAmountIsValid(false);
            return;
        }
        props.ondAddToCart(enteredAmount);
    };


    return (

        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: `Id${Math.random()}_${Math.random()}`,
                    type: 'number',
                    min: '1',
                    max: '10',
                    steps: '1',
                    defaultValue: '1'
                }}>

            </Input>
            <button>+ ADD</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5). </p>}
        </form>

    );
};

export default MealItemForm;
import styles from './MealItemForm.module.css';
import Input from './../../UI/Input';

const MealItemForm=(props)=>{
    return (
    
    <form className={styles.form}> 
        <Input
         label="Amount" 
         input={{
            id:`Id${Math.random()}_${Math.random()}`,
            type:'number',
            min:'1',
            max:'10',
            steps:'1',
            defaultValue:'1'
        }}>
        
        </Input>
        <button>+ ADD</button>
    </form>
 
    );
};

export default MealItemForm;
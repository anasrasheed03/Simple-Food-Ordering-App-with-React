import classes from './MealItemForm.module.css';
import Input from '../../UI/Input/Input';
import { useRef, useState } from 'react';

const MealItemForm = (props)=>{
    const amountInputRef = useRef();
    const [isFormValid, setIsFormValid] = useState(true)
    const onSubmitHandle=(event)=>{
        event.preventDefault();
        const enteredAmountValue = +amountInputRef.current.value;
        if(enteredAmountValue <  1 || enteredAmountValue >5){
            setIsFormValid(false);
            return
        }
        props.onAddCart(enteredAmountValue);
    }

    return(
        <form className={classes.form} onSubmit={onSubmitHandle}>
            <Input label="Amount"
             ref={amountInputRef}
             input={{
                type:"number",
                id:"amount_"+props.id,
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }}/>
            <button>+ Add</button>
            {!isFormValid && <p>Please entered a valid value (1-5).</p>}
        </form>
    );
}

export default MealItemForm;
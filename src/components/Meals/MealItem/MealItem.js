import classes from './MealItem.module.css';
import MealItemForm from '../MealItemForm/MealItemForm'
import { useContext } from 'react';
import CartContext from '../../../store/cart-context'
const MealItem = (props) => {

    const CartCtx = useContext(CartContext)

    const onAddCartItem =(enteredValue)=>{
        console.log(enteredValue)
        CartCtx.addItem({
            id:props.meal.id,
            price:props.meal.price,
            amount:enteredValue,
            name:props.meal.name
        })
    }
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.meal.name}</h3>
                <div className={classes.description}>{props.meal.description}</div>
                <div className={classes.price}>${props.meal.price}</div>
            </div>
            <div><MealItemForm onAddCart={onAddCartItem} id={props.meal.id}/></div>
        </li>
    )
}

export default MealItem;
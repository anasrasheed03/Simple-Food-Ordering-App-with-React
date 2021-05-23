
import classes from './Cart.module.css';
import Modal from '../../UI/Modal/Modal';
import CartItem from '../CartItem/CartItem';
import CartContext from '../../../store/cart-context';
import { useContext } from 'react';
const Cart =(props)=>{
    const CartCtx = useContext(CartContext)

    const removeItemHandler = id => {
        CartCtx.removeItem(id);
    }

    const addItemHandler = item=>{
        console.log(item)
        CartCtx.addItem({...item,amount:1})
    }

    var cartItem = <ul className={classes['cart-items']}>{
        CartCtx.items.map(
            (item)=>(
                <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} onAdd={addItemHandler.bind(null,item)} onRemove={removeItemHandler.bind(null,item.id)}></CartItem>
                )
        )
        }</ul>;
    return <Modal onClick={props.onClick}>
        {cartItem}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>$ {CartCtx.totalAmount.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClick}>close</button>
        <button className={classes.button}>Order</button>
        </div>
    </Modal>

}

export default Cart;
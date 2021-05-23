import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState= {
    items:[],
    totalAmount:0
}

const cartReducer = (state,action)=>{
    if(action.type==='ADD'){
        const existingCartItemIndex = state.items.findIndex(item=>item.id === action.item.id)
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedCartItem;
        if(existingCartItem){
            const updatedItem= {
                ...existingCartItem,
                amount:existingCartItem.amount + action.item.amount
            }
            updatedCartItem = [...state.items];
            updatedCartItem[existingCartItemIndex]= updatedItem;
        }else{
            updatedCartItem = state.items.concat(action.item);
        }
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        
        return {
            items:updatedCartItem,
            totalAmount: updatedTotalAmount
        }
    }
    if(action.type === 'REMOVE'){
        let updatedCartItem;
        const existingCartItemIndex = state.items.findIndex(item=>item.id === action.id)
        const exitingCartItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - exitingCartItem.price;
        if(exitingCartItem.amount === 1){
            updatedCartItem = state.items.filter(item => item.id !== action.id);
        }else{
            const updatedItem = {...exitingCartItem, amount:exitingCartItem.amount -1}
            updatedCartItem = [...state.items];
            updatedCartItem[existingCartItemIndex] = updatedItem;

        }
        return {
            items:updatedCartItem,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
}


const CartProvider = (props)=>{
    const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCartState)
    
    const addItemHandler=(item)=>{
        dispatchCartState({type:'ADD',item:item})
    }

    const removeItemHandler = (id)=>{
        dispatchCartState({type:'REMOVE',id:id})
    }
    
    const CartContextOb = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }

   return <CartContext.Provider value={CartContextOb}>
        {props.children}
        </CartContext.Provider>
}


export default CartProvider;
import React,{useState} from 'react';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals/Meals'
import Cart from './components/Cart/Cart/Cart';
import CartProvider from './store/cartProvider';
function App() {
  const [isCartShow, setIsCartShow] = useState(false);
  
  const cartHandler=()=>{
    setIsCartShow(!isCartShow);
  }
  return (
    <CartProvider>
      {isCartShow && <Cart onClick={cartHandler} />}
      {/* <h2>Let's get started!</h2> */}
      <Header onClick={cartHandler} />
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;

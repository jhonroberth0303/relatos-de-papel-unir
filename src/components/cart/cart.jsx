import './cart.css';
import {useEffect, useReducer, useState} from 'react';
import {booksInitialState, reducerCart} from "../../reducers/shoppingCart_reducer.jsx";
import ShoppingCart from "../shopping-cart/shopping-cart.jsx";

const Cart = () => {

    const [state, dispatch] = useReducer(reducerCart, booksInitialState);

    const [isCartVisible, setIsCartVisible] = useState(false);

    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
    };

    useEffect(() => {
        //dispatch({ type: TYPES.CALCULATE_TOTAL_BOOKS });
    }, [state]);

    return (
        <>
            <img className="item-shopping-cart" src="/img/shopping-and-commerce.png"
                 onClick={toggleCartVisibility} alt="#"/>
            {isCartVisible && <ShoppingCart/>}
            {state.numberBooks > 0 && <span className="cart-count">{state.numberBooks}</span>}
        </>
    )
}

export default Cart;
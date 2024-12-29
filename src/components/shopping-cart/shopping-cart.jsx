import {useReducer, useState} from 'react';
import './shopping-cart.css';
import {booksInitialState, reducerCart} from "../../reducers/shoppingCart_reducer.jsx";
import TYPES from "../../reducers/actionTypes.jsx";

const ShoppingCart = () => {

    const [state, dispatch] = useReducer(reducerCart, booksInitialState);

    const [isCheckout, setIsCheckout] = useState(true);

    const removeItem = (book) => {
        dispatch({ type: TYPES.DELETE_PRODUCT_FROM_CART, payload: book });
    };

    const updateBooksQuantity = (index, book, quantity) => {
        dispatch({ type: TYPES.ADD_TO_CART, payload: book });
        console.log("..................")
        console.log(state.cart)
    };

    const handleCheckout = () => {
        dispatch ({
            type: TYPES.CALCULATE_TOTAL_PRICE
        })
    };

    const clearCart = () => {
        state.cart.forEach((book) => removeItem(book));
    }

    const handleClose = () => {
        setIsCheckout(false);
    };

    return (
        <div  className={`shopping-cart ${isCheckout ? 'open' : ''}`}>
            <div className="shopping-cart-right">
                <button className="close-button" onClick={handleClose}>Close</button>
                <h2>Shopping Cart</h2>
                <ul>
                    {state.cart.map((book, index) => (
                        <li key={index}>{book.title} - ${book.price} x {book.quantity}
                            <button onClick={() => removeItem(book)}>Remove</button>
                            <input
                                type="number"
                                value={book.quantity}
                                onChange={(e) =>
                                    updateBooksQuantity(index, book, parseInt(e.target.value))}
                            />
                        </li>
                    ))}
                </ul>
                <button className="text-button" onClick={() => clearCart()}>Remove all</button>
                <h3>Total: ${state.totalPrice.toFixed(2)}</h3>
                <button className="buy" onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
    );
};

export default ShoppingCart;
import TYPES from "./actionTypes.jsx";

export const booksInitialState = {
    books: [],
    cart: [],
    totalPrice: 0,
}

export const reducerCart = (state, action) => {
    switch (action.type) {
        case TYPES.ADD_TO_CART:{
            let newBook= state.books.find((book) => book.ISBN === action.payload.ISBN)
            if((state.cart.find((book) => book.ISBN === action.payload.ISBN) === undefined)){
                newBook.quantity = 1;
                state.cart.push(newBook)
            } else {
                newBook.quantity = state.cart.find((book) =>
                    book.ISBN === action.payload.ISBN).quantity + 1;
            }

            return{
                ...state
            }
        }
        case TYPES.DELETE_ALL_FROM_CART:
            return booksInitialState;
        case TYPES.DELETE_PRODUCT_FROM_CART:{
            let newList = state.cart.filter((book) => book.ISBN !== action.payload.ISBN)
            return {
                ...state,
                cart: newList
            };
        }
        case TYPES.CALCULATE_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: state.cart.reduce((acc, book) => acc + (book.price * book.quantity), 0),
            };
        default:
            return state;
    }

}
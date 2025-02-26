import TYPES from "./actionTypes.jsx";

export const booksInitialState = {
    books: [],
    cart: [],
    totalPrice: 0,
    numberBooks: 0
}

export const reducerCart = (state, action) => {
    switch (action.type) {
        case TYPES.ADD_TO_CART:{
            let newBook= state.books.find((book) => book.isbn === action.payload.isbn)
            if((state.cart.find((book) => book.isbn === action.payload.isbn) === undefined)){
                newBook.quantity = 1;
                state.cart.push(newBook)
            } else {
                newBook.quantity = state.cart.find((book) =>
                    book.isbn === action.payload.isbn).quantity + 1;
            }

            state.numberBooks =  state.cart.reduce((acc, book) => acc + (book.quantity), 0)
            return{
                ...state,
                cart
            }
        }
        case TYPES.DELETE_ALL_FROM_CART:
            state = booksInitialState
            return {
                ...state
            };
        case TYPES.DELETE_PRODUCT_FROM_CART:{
            let newBook = state.cart.find((book) => book.isbn === action.payload.isbn)
            const index = state.cart.indexOf(newBook);
            if (index > -1) {
                state.cart.splice(index, 1);
                state.numberBooks = state.cart.reduce((acc, book) => acc + (book.quantity), 0)
            }
            return {
                ...state
            };
        }
        case TYPES.CALCULATE_TOTAL_PRICE:
            state.totalPrice = state.cart.reduce((acc, book) => acc + (book.price * book.quantity), 0)
            return {
                ...state
            };

        case TYPES.CALCULATE_TOTAL_BOOKS:
            state.numberBooks = state.cart.reduce((acc, book) => acc + (book.quantity), 0)
            return {
                ...state
            };
        default:
            return state;
    }

}
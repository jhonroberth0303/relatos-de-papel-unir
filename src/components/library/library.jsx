import {useEffect, useReducer, useState} from "react";
import "./library.css"
import Books from "../books/books.jsx";
import Detail from "../detail/detail.jsx";
import {booksInitialState, reducerCart} from "../../reducers/shoppingCart_reducer.jsx";
import TYPES from "../../reducers/actionTypes.jsx";
import Search from "../search/search.jsx";

const BASE_URL = "https://spring-cloud-gateway-production-e718.up.railway.app";
const API_URL = BASE_URL + "/microservice-two/v1/books/all";

function Library() {

    const [state, dispatch] = useReducer(reducerCart, booksInitialState);

    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState({});
    const [showDetail, setShowDetail] = useState(false);
    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setBooks(data);
                setFilteredBooks(data);
                state.books = data;
            });
    }, []);

    const handleClickBook = (detail) => {
        setSelectedBook(detail);
        setShowDetail(!showDetail);
    };

    const handleAddToShoppingCart = (book) => {
        dispatch({ type: TYPES.ADD_TO_CART, payload: book });
    }

    const handleSearch = (query) => {
        const filtered = books.filter((book) =>
            book.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredBooks(filtered);
    };

    return (
        <section className="main">
            <Search onSearch={handleSearch} />
            <section className="post">
                <article>
                    <div className="book-container">
                        {filteredBooks.length > 0 &&
                            filteredBooks.map((book) => (
                                <Books
                                    key={book.isbn}
                                    {...book}
                                    quantity={1}
                                    handleClickBook={handleClickBook}
                                    handleAddToShoppingCart={handleAddToShoppingCart}
                                />
                            ))}
                    </div>
                    <div className="modal-container">
                        {showDetail && <Detail key={selectedBook.isbn} book={selectedBook}/>}
                    </div>
                </article>
            </section>
        </section>
        );
}

Library.displayName = "Library";

export default Library;

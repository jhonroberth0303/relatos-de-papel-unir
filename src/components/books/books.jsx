import {func, number, shape, string} from "prop-types";
import "./books.css"

const IMG_URL = "/catalog";

function getColor(genre) {
    if (genre == "Ficción") {
        return "green";
    } else if (genre == "Distopía") {
        return "orange";
    } else {
        return "red";
    }
}

const Books = (book) => {

    return (
        <>
            <div className="book">
                <button className="add-to-cart" onClick={() =>
                    book.handleAddToShoppingCart({
                        quantity: 1,
                        price: book.price,
                        title: book.title,
                        author: book.author,
                        year: book.year,
                        genre: book.genre,
                        isbn: book.isbn,
                        image: book.image,
                        description: book.description
                    })
                }>Añadir al carrito
                </button>
                <div
                    className="book-modal-container"
                    onClick={() =>
                        book.handleClickBook({
                            quantity: 1,
                            price: book.price,
                            title: book.title,
                            author: book.author,
                            year: book.year,
                            genre: book.genre,
                            isbn: book.isbn,
                            image: book.image,
                            description: book.description
                        })
                    }
                >
                    <button id={`myBtn${book.isbn}`} className="myBtn">
                        <img src={IMG_URL + book.image} alt={book.title}/>
                        <div className="book-info">
                            <h3>{book.title}</h3>
                            <span className={getColor(book.genre)}>{book.genre}</span>
                        </div>
                        <div className="overview">
                            <div className="overview-header">
                                <h3>Overview</h3>
                                <div className="addBtn">
                                    <img src="/images/close.svg" alt="close"/>
                                </div>
                            </div>
                            <p>{book.description}</p>
                        </div>
                    </button>
                </div>
            </div>

        </>
    );
}

Books.propTypes = {
    book: shape({
        price: number.isRequired,
        title: string.isRequired,
        author: string.isRequired,
        year: number.isRequired,
        genre: string.isRequired,
        isbn: string.isRequired,
        image: string.isRequired,
        description: string.isRequired,
        handleClickBook: func,
        handleAddToShoppingCart: func
    })
};

Books.displayName = "Books";

export default Books;

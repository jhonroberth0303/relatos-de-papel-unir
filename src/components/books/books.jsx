import {func, number, shape, string} from "prop-types";
import "./books.css"

const IMG_URL = "/catalog/";

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
                        published: book.published,
                        genre: book.genre,
                        ISBN: book.ISBN,
                        image_path: book.image_path,
                        summary: book.summary
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
                            published: book.published,
                            genre: book.genre,
                            ISBN: book.ISBN,
                            image_path: book.image_path,
                            summary: book.summary
                        })
                    }
                >
                    <button id={`myBtn${book.ISBN}`} className="myBtn">
                        <img src={IMG_URL + book.image_path} alt={book.title}/>
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
                            <p>{book.summary}</p>
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
        published: number.isRequired,
        genre: string.isRequired,
        ISBN: string.isRequired,
        image_path: string.isRequired,
        summary: string.isRequired,
        handleClickBook: func,
        handleAddToShoppingCart: func
    })
};

Books.displayName = "Books";

export default Books;

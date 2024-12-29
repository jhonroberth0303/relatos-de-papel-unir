import {func, number, shape, string} from "prop-types";
import {useReducer, useState} from 'react';
import "./detail.css";
import {booksInitialState, reducerCart} from "../../reducers/shoppingCart_reducer.jsx";
import TYPES from "../../reducers/actionTypes.jsx";

const IMG_URL = "../src/catalog/";

const Detail = (props) => {

    const [isModalDetailOpen, setIsModalDetailOpen] = useState(true);
    const [state, dispatch] = useReducer(reducerCart, booksInitialState);

    const handleClose = () => {
        setIsModalDetailOpen(false);
    };

    const updateBooksQuantity = (book) => {
        dispatch({ type: TYPES.ADD_TO_CART, payload: book });
    };

    const detail = props.book;
    return (
        <div className={`modal ${isModalDetailOpen ? 'open' : ''}`} id={"myModal2" + detail.ISBN}>
            <div className="modal-content">
                <span id={"close" + detail.ISBN} onClick={handleClose}>
                    <img src="src/images/close.svg" alt="close"/>
                </span>
                <div className="modal-poster">
                    <img src={IMG_URL + detail.image_path} alt={detail.title}/>
                </div>
                <div className="modal-info">
                    <h2>{detail.title}</h2>
                    <span>{detail.author}</span>
                    <h3 className="releasedate">Género</h3>
                    <p>{detail.genre}</p>
                    <h3 className="releasedate">Año de publicación</h3>
                    <p>{detail.published}</p>
                    <h3>Resumen</h3>
                    <p className="modal-overview">{detail.summary}</p>
                    <button onClick={() => updateBooksQuantity(detail)} className="add-to-cart">Añadir al carito de compras</button>
                </div>
            </div>

        </div>
    );
};

Detail.propTypes = {
    book: shape({
        quantity: number.isRequired,
        price: number.isRequired,
        title: string.isRequired,
        author: string.isRequired,
        published: number.isRequired,
        genre: string.isRequired,
        ISBN: string.isRequired,
        image_path: string.isRequired,
        summary: string.isRequired,
        handleClickBook: func
    })
};

Detail.displayName = "Detail";

export default Detail;
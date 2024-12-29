import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';
import ShoppingCart from "../shopping-cart/shopping-cart.jsx";

const Navigation = () => {

    const [isCartVisible, setIsCartVisible] = useState(false);

    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
    };

    return (
        <header>
            <nav>
                <div className="left-section">
                    <img src="/img/icon.png" alt="#"/>
                    <h2>Relatos de Papel</h2>
                </div>
                <div className="search"/>
                <ul className="right-section">
                    <li><a className="item-text">Tiendas fisicas</a></li>
                    <li><a className="item-text">Eventos</a></li>
                    <li><a className="item-text"> Ayuda</a></li>
                    <img className="item-shopping-cart" src="/img/shopping-and-commerce.png"
                         onClick={toggleCartVisibility} alt="#"/>
                    {isCartVisible && <ShoppingCart/>}
                    <img to="/signup" className="item-shopping-cart" src="/img/usuario.png"/>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;
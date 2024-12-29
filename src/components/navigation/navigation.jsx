import './navigation.css';
import Cart from "../cart/cart.jsx";

const Navigation = () => {

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
                    <Cart/>
                    <img to="/signup" className="item-shopping-cart" src="/img/usuario.png"/>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;
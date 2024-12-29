import './navigation.css';
import Cart from "../cart/cart.jsx";
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <header>
            <nav>
                <div className="left-section">
                    <Link to="/">
                        <img src="/img/icon.png" alt="#"/>
                    </Link>

                    <h2>Relatos de Papel</h2>
                </div>
                <div className="search"/>
                <ul className="right-section">
                    <li><Link to="/physical-stores" className="item-text">Tiendas fisicas</Link></li>
                    <li><a className="item-text">Eventos</a></li>
                    <li><Link to="/about-us" className="item-text">Acerca de nosotros</Link></li>
                    <Cart/>
                    <Link to="/signup">
                        <img to="/signup" src="/img/usuario.png"/>
                    </Link>

                </ul>
            </nav>
        </header>
    );
};

export default Navigation;
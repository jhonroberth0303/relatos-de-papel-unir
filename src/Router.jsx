import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Library from './components/library/library.jsx';
import ShoppingCart from './components/shopping-cart/shopping-cart.jsx';
import SignUp from './components/signup/sign-up.jsx';
import Footer from './components/footer/footer.jsx';
import Navigation from './components/navigation/navigation.jsx';

const AppRouter = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Library />} />
                <Route path="/cart" element={<ShoppingCart />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default AppRouter;
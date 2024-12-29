import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Library from './components/library/library.jsx';
import SignUp from './components/signup/sign-up.jsx';
import Footer from './components/footer/footer.jsx';
import Navigation from './components/navigation/navigation.jsx';
import CarouselLibrary from "./components/carousel/carousel.jsx";
import React from "react";
import AboutUs from "./components/about-us/about-us.jsx";

const AppRouter = () => {
    return (
        <Router>
            <Navigation />
            <CarouselLibrary/>
            <Routes>
                <Route path="/" element={<Library/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/about-us" element={<AboutUs />} />
            </Routes>
            <Footer/>
        </Router>
    );
};

export default AppRouter;
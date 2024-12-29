import React, {useCallback} from 'react';
import './about-us.css';
import InactivityDetector from "../../utils/inactivity-detector.js";
import {useNavigate} from "react-router-dom";

const AboutUs = () => {

    const navigate = useNavigate();

    const handleInactivity = useCallback(() => {
        navigate('/');
    }, [navigate]);

    return (
        <div className="about-us">
            <InactivityDetector onInactivity={handleInactivity} />
            <h2>About Us</h2>
            <p>Welcome to Relatos de Papel! We are passionate about books and literature. Our mission is to bring the
                best stories to our readers.</p>
            <p>Our team is dedicated to providing excellent service and a wide selection of books. Thank you for
                visiting our site!</p>
            <p>Alert: esta pagina esta diseñada para efectos academicos, las imagenes tomadas de internet no pretenden ocacionar daños!</p>
        </div>
    );
};

export default AboutUs;
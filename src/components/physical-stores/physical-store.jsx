import React, {useCallback} from 'react';
import './physical-stores.css';
import {useNavigate} from "react-router-dom";
import InactivityDetector from "../../utils/inactivity-detector.js";

const PhysicalStores = () => {

    const navigate = useNavigate();

    const handleInactivity = useCallback(() => {
        navigate('/');
    }, [navigate]);


    return (
        <div className="physical-stores">
            <InactivityDetector onInactivity={handleInactivity} />
            <h2>Our Physical Stores</h2>
            <p>Visit our physical stores to explore a wide range of books and enjoy personalized service from our staff.</p>
            <ul>
                <li>Store 1: 123 Main St, City, Country</li>
                <li>Store 2: 456 Elm St, City, Country</li>
                <li>Store 3: 789 Oak St, City, Country</li>
            </ul>
        </div>
    );
};

export default PhysicalStores;
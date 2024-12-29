import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './search.css';

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className="search">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search for books..."
            />
        </div>
    );
};

Search.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default Search;
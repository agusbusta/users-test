// Button.js
import React from 'react';

const Button = ({ label, onClick }) => {
    return (
        <button onClick={onClick} className="btn btn-primary">
            {label}
        </button>
    );
};

export default Button;
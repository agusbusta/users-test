// TextInput.js
import React from 'react';

const TextInput = ({ label, value, onChange, placeholder }) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input 
                type="text" 
                value={value} 
                onChange={onChange} 
                placeholder={placeholder} 
                className="form-control" 
            />
        </div>
    );
};

export default TextInput;

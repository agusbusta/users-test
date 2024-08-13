// RadioButton.js
import React from 'react';

const RadioButton = ({ label, value, checked, onChange }) => {
    return (
        <div className="form-group">
            <label>
                <input 
                    type="radio" 
                    value={value} 
                    checked={checked} 
                    onChange={onChange} 
                />
                {label}
            </label>
        </div>
    );
};

export default RadioButton;

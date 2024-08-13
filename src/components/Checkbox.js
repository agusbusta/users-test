// Checkbox.js
import React from 'react';

const Checkbox = ({ label, checked, onChange }) => {
    return (
        <div className="form-group">
            <label>
                <input 
                    type="checkbox" 
                    checked={checked} 
                    onChange={onChange} 
                />
                {label}
            </label>
        </div>
    );
};

export default Checkbox;

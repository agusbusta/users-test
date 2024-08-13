// TextArea.js
import React from 'react';

const TextArea = ({ label, value, onChange }) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <textarea 
                value={value} 
                onChange={onChange} 
                className="form-control" 
            />
        </div>
    );
};

export default TextArea;

import React from 'react';

const Field = ({ label, name, type, value, onChange, error }) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
        />
        {error && <p className="error">{error}</p>}
    </div>
);

export default Field;

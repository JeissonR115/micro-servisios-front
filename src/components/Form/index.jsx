import React from 'react';
import Field from './Field';
import "./styles.css"
const Form = ({ inputFields, onSubmit, errors, onChange,nameButton }) => (
    <form className="form" onSubmit={onSubmit}>
        {inputFields.map(field => (
            <Field
                key={field.name}
                label={field.label}
                name={field.name}
                type={field.type}
                value={field.value}
                onChange={onChange}
                error={errors[field.name]}
            />
        ))}
        <button className="form-button" type="submit">{nameButton}</button>
    </form>
);

export default Form;

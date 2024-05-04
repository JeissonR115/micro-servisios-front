import React, { useState } from 'react';
import axios from 'axios';

const Insert = () => {
    const [userData, setUserData] = useState({
        Documento: '',
        Nombre1: '',
        Nombre2: '',
        Apellido1: '',
        Apellido2: '',
        Correo: '',
        Telefono: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({ ...prevState, [name]: value }));
        setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requiredFields = ['Documento', 'Nombre1', 'Apellido1', 'Correo', 'Telefono'];
        const formErrors = requiredFields.reduce((acc, field) => {
            if (!userData[field]) acc[field] = `Por favor, complete el campo ${field}.`;
            return acc;
        }, {});

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (userData.Correo && !emailPattern.test(userData.Correo)) {
            formErrors.Correo = 'Por favor, ingrese un correo electrónico válido.';
        }

        const phonePattern = /^\d{10}$/;
        if (userData.Telefono && !phonePattern.test(userData.Telefono)) {
            formErrors.Telefono = 'Por favor, ingrese un número de teléfono válido (10 dígitos).';
        }

        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            try {
                await axios.post('http://localhost:3001/api/insertar', userData);
                console.log('Usuario insertado exitosamente:', userData);
            } catch (error) {
                console.error('Error al registrar usuario:', error);
            }
        }
    };

    const renderInputField = ({ label, name, type, value, pattern }) => (
        <div key={name}>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
            />
            {errors[name] && <p className="error">{errors[name]}</p>}
        </div>
    );

    const inputFields = [
        { label: 'Documento', name: 'Documento', type: 'number', value: userData.Documento, pattern: "[0-9]{3,}" },
        { label: 'Nombre 1', name: 'Nombre1', type: 'text', value: userData.Nombre1, pattern: "[A-Za-z]+" },
        { label: 'Nombre 2', name: 'Nombre2', type: 'text', value: userData.Nombre2, pattern: "[A-Za-z]*" },
        { label: 'Apellido 1', name: 'Apellido1', type: 'text', value: userData.Apellido1, pattern: "[A-Za-z]+" },
        { label: 'Apellido 2', name: 'Apellido2', type: 'text', value: userData.Apellido2, pattern: "[A-Za-z]*" },
        { label: 'Correo', name: 'Correo', type: 'email', value: userData.Correo },
        { label: 'Teléfono', name: 'Telefono', type: 'text', value: userData.Telefono, pattern: "[0-9]{10}" }
    ];

    return (
        <form className="form" onSubmit={handleSubmit}>
            {inputFields.map(renderInputField)}
            <button className="form-button" type="submit">Registrar</button>
        </form>
    );
}

export default Insert;

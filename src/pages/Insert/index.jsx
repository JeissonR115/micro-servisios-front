import React, { useState } from 'react';
import axios from 'axios';
import Form from '../../components/Form';
import Header from '../../components/Header';

const Insert = ({ url }) => {
    const [userData, setUserData] = useState({
        name: '',
        age: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({ ...prevState, [name]: value }));
        setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requiredFields = ['name', 'age'];
        const formErrors = requiredFields.reduce((acc, field) => {
            if (!userData[field]) acc[field] = `Por favor, complete el campo ${field}.`;
            return acc;
        }, {});

        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            try {
                await axios.post(url, userData);
                alert('Datos enviados correctamente');
                setUserData({ name: '', age: '' }); // Limpiar los campos después de enviar los datos
            } catch (error) {
                console.error(`Error al usar ${url}`, error);
                alert('Error al enviar los datos');
            }
        }
    };

    const inputFields = [
        { label: 'Name', name: 'name', type: 'text', value: userData.name, pattern: "" },
        { label: 'Age', name: 'age', type: 'number', value: userData.age, pattern: "" },
    ];

    return (
        <>
            <Header />
            <Form
                inputFields={inputFields}
                onSubmit={handleSubmit}
                errors={errors}
                onChange={handleChange}
                nameButton={"Insertar"}
            />
        </>
    );
}

export default Insert;

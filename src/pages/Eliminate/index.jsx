import React, { useState } from 'react';
import axios from 'axios';
import Form from '../../components/Form';
import Header from '../../components/Header';


function Eliminate({ url }) {
    const [data, setData] = useState('');
    const [userDoc, setUserDoc] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setUserDoc(e.target.value);
    };

    const handleConsult = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.delete(`${url}`, { data: { id: userDoc } });
            setData(response.data);
            alert(`Usuario identificado con: ${userDoc} fue eliminado correctamente`);
        } catch (error) {
            setErrorMessage('Error al borrar los datos');
            console.error('Error en la solicitud')
        }
    };
    

    const inputFields = [{ label: 'Documento', name: 'Documento', type: 'number', value: userDoc }];

    return (
        <>
            < Header />
            <Form
                inputFields={inputFields}
                onSubmit={handleConsult}
                onChange={handleChange}
                errors={{}}
                nameButton={"Eliminar"}
            />
            {errorMessage && <div className='response response__consult'>{errorMessage}</div>}
        </>
    );
}

export default Eliminate;

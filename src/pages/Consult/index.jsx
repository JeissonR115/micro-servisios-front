import React, { useState } from 'react';
import axios from 'axios';
import Form from '../../components/Form';
import Header from '../../components/Header';
function Consult({ url }) {
    const [data, setData] = useState('');
    const [username, setUsername] = useState('');

    const handleChange = (e) => {
        setUsername(e.target.value);
    };
    const handleConsult = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`${url}${username}`);
            setData(response.data.data);
        } catch (error) {
            console.error('Error en la solicitud de inicio de sesión:', error);
        }
    };

    const inputFields = [{ label: 'Documento', name: 'Documento', type: 'number', value: username},];
    return (
        <>
            <Header />
            <Form
                inputFields={inputFields}
                onSubmit={handleConsult}
                errors={{}}
                onChange={handleChange}
                nameButton={'consultar'}
            />
            <div className='response response__consult'>
                {data != '' && data != undefined ? (
                    <div className="user-data">
                        <p><span>Documento: </span>{data.ID}</p>
                        <p><span>Nombre: </span>{data.Name}</p>
                        <p><span>Edad: </span>{data.Age}</p>
                    </div>
                ) : <p>No se encontraron datos </p>}
            </div>
        </>
    );
}

export default Consult;
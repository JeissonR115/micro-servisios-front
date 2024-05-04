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
            const response = await axios.post('http://localhost:3002/api/consultar', {
                Documento: username,
            });

            setData(response.data);
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
                {data != '' ? (
                    <div className="user-data">
                        <p><span>Documento: </span>{data.Documento}</p>
                        <p><span>Nombre: </span>{data.Nombre1}</p>
                        <p><span>Segundo Nombre: </span>{data.Nombre2}</p>
                        <p><span>Apellido: </span>{data.Apellido1}</p>
                        <p><span>Segundo Apellido: </span>{data.Apellido2}</p>
                        <p><span>Correo: </span>{data.Correo}</p>
                        <p><span>Teléfono: </span>{data.Telefono}</p>
                    </div>
                ) : <p>No se encontraron datos </p>}
            </div>
        </>
    );
}

export default Consult;
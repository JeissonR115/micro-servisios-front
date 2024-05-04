import React, { useState } from 'react';
import axios from 'axios';

function Consult() {
    const [data, setData] = useState('');
    const [username, setUsername] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleConsult = async () => {
        try {
            const response = await axios.post('http://localhost:3002/api/consultar', {
                Nombre1: username,
            });

            setData(response.data);
        } catch (error) {
            console.error('Error en la solicitud de inicio de sesión:', error);
        }
    };

    return (
        <>
            <form className="form">
                <label htmlFor="inputUserName"></label>
                <input id='inputUserName' type="text" value={username} placeholder="Username" onChange={handleUsernameChange} />
                <button className="form-button" type="button" onClick={handleConsult}>Consultar</button>
            </form>
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
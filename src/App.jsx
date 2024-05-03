import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [data, setData] = useState('');
    const [findData, setFindData] = useState(false);
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3002/api/consultar', {
                Nombre1: username,
            });

            setData(response.data);
            setFindData(data != '');
            setError('');
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setError('Credenciales inválidas');
            } else {
                console.error('Error en la solicitud de inicio de sesión:', error);
            }
        }
    };

    return (
        <div className="fondo">
            <div className="form-container">
                <h1 className="form-title">User consultar</h1>
                <form className="form">
                    <div className="input-group">
                        <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
                        <span className="input-icon"><i className="fas fa-user"></i></span>
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <button className="form-button" type="button" onClick={handleLogin}>Consultar</button>
                    
                    {/* Conditionally render user data */}
                    {findData? (
                        <div className="user-data">
                            <p><span>Documento: </span>{data.Documento}</p>
                            <p><span>Nombre: </span>{data.Nombre1}</p>
                            <p><span>Segundo Nombre: </span>{data.Nombre2}</p>
                            <p><span>Apellido: </span>{data.Apellido1}</p>
                            <p><span>Segundo Apellido: </span>{data.Apellido2}</p>
                            <p><span>Correo: </span>{data.Correo}</p>
                            <p><span>Teléfono: </span>{data.Telefono}</p>
                        </div>
                    ):<p>No se encontraron datos </p>}
                </form>
            </div>
        </div>
    );
}

export default App;

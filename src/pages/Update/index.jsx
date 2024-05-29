    import React, { useState } from 'react';
    import axios from 'axios';
    import Form from '../../components/Form';
    import Header from '../../components/Header';

    const Update = ({ url }) => {
        const [userData, setUserData] = useState({
            id: '',
            name: '',
            age:''
        });

        const [errors, setErrors] = useState({});

        const handleChange = (e) => {
            const { name, value } = e.target;
            setUserData(prevState => ({ ...prevState, [name]: value }));
            setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
        };

        const handleSubmit = async (e) => {
            e.preventDefault();

            const requiredFields = ['id', 'name','age'];
            const formErrors = requiredFields.reduce((acc, field) => {
                if (!userData[field]) acc[field] = `Por favor, complete el campo ${field}.`;
                return acc;
            }, {});

            setErrors(formErrors);

            if (Object.keys(formErrors).length === 0) {
                try {
                    const response = await axios.put(url, userData);
                    const responseData = response.data;
                    console.log(responseData)
                    // Verificar la respuesta del servidor
                    if (responseData.status === 'success') {
                        alert(responseData.message);
                    } else {
                        alert('Error al actualizar el usuario:'+  responseData.message);
                    }
                } catch (error) {
                    console.error(`Error al usar ${url}`, error);
                }
            }
        };
        

        const inputFields = [
            { label: 'id', name: 'id', type: 'number', value: userData.id, pattern: "" },
            { label: 'Nombre', name: 'name', type: 'text', value: userData.name, pattern: "[A-Za-z]+" },
            { label: 'Edad', name: 'age', type: 'number', value: userData.age, pattern: "" },
        ];

        return (<>
            <Header />
            <Form
                inputFields={inputFields}
                onSubmit={handleSubmit}
                errors={errors}
                onChange={handleChange}
                nameButton={"Actualizar"}
            />
        </>
        );
    }

    export default Update;

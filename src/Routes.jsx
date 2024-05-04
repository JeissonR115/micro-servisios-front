import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Consult from './pages/Consult';
import Insert from './pages/Insert';
// import Login from './login/';

const AppRoutes = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/*" element={<App />} />
                <Route path="/Insertar" element={<Insert />} />
                <Route path="/Consultar" element={<Consult />} />
                <Route path="/Eliminar" element={<App />} />
                <Route path="/Actualizar" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;

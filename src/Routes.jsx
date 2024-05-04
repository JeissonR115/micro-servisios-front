import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Consult from './pages/Consult';
import Insert from './pages/Insert';

const AppRoutes = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/*" element={<App />} />
                <Route path="/Insertar" element={<Insert url='http://localhost:3001/api/insertar' />} />
                <Route path="/Consultar" element={<Consult />} />
                <Route path="/Eliminar" element={<App />} />
                <Route path="/Actualizar" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;

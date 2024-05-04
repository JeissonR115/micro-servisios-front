import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Consult from './pages/Consult';
import Insert from './pages/Insert';
import Eliminate from './pages/Eliminate';

const AppRoutes = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/*" element={<App />} />
                <Route path="/Insertar" element={<Insert url='http://localhost:3001/api/insertar' />} />
                <Route path="/Consultar" element={<Consult url='http://localhost:3002/api/consultar'/>} />
                <Route path="/Eliminar" element={<Eliminate url='http://localhost:3003/api/eliminar'/>} />
                <Route path="/Actualizar" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;

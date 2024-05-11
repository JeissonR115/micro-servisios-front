import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Consult from './pages/Consult';
import Insert from './pages/Insert';
import Eliminate from './pages/Eliminate';
import Update from './pages/Update';
const AppRoutes = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/*" element={<App />} />
                <Route path="/Insertar" element={<Insert url='http://localhost:3000/insert' />} />
                <Route path="/Consultar" element={<Consult url='http://localhost:3020/query' />} />
                <Route path="/Eliminar" element={<Eliminate url='http://localhost:3010/delete' />} />
                <Route path="/Actualizar" element={<Update url='http://localhost:3030/update' />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;

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
                <Route path="/Insertar" element={<Insert url='https://wvl2d35h-3000.use2.devtunnels.ms/insert' />} />
                <Route path="/Consultar" element={<Consult url='https://wvl2d35h-3020.use2.devtunnels.ms/query' />} />
                <Route path="/Eliminar" element={<Eliminate url='http://localhost:3030/users/delete' />} />
                <Route path="/Actualizar" element={<Update url='http://localhost:3030/user/update' />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;

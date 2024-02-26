// App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import OrderDetailsPage from './component/OrderDetailsPage';
import AddOrderPage from './component/AddOrderPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddOrderPage />} />
        <Route path="/OrderDetailsPage" element={<OrderDetailsPage/>}/>
        <Route path="/AddOrderPage" element={<AddOrderPage/>}/>
      </Routes>
    </>
  );
}

export default App;

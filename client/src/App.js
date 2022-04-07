import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./views/Home";
import AddNewCard from "./views/AddNewCard";
import Header from "./components/Header";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/add-card" element={<AddNewCard />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
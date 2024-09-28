import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './pages/header/navBar';
import PainelTempoReal from './pages/painelTempoReal/painel';
import PainelHora from './pages/painelHora/PainelHora';
import PainelDia from './pages/painelDia/PainelDia';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
        <div className="App">
            <NavBar />
            <Routes >
                <Route path='/' element={ <PainelTempoReal /> } />
                <Route path='/hora' element={ <PainelHora /> } />
                <Route path='/dia' element={ <PainelDia /> } />
            </Routes>
        </div>
    );
}

export default App;

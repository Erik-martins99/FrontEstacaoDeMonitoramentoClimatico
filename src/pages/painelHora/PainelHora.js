import React from 'react';
import GraficoDeLuzHora from './GraficoLuzHora';
import GraficoDeTemperaturaHora from './GraficoTemperaturaHora';

const PainelHora = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '100px', width: "100%", flexDirection: "column" }}>
            <div style={{ width: '100%', height: '600px' }}>
                <GraficoDeTemperaturaHora />
            </div>
            <div style={{ width: '100%', height: '600px' }}>
                <GraficoDeLuzHora />
            </div>
        </div>
    );
};

export default PainelHora;
import React from 'react';
import GraficoDeLuzDia from './GraficoLuzDia';
import GraficoDeTemperaturaDia from './GraficoTemperaturaDia';

const PainelDia = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '100px', width: "100%", flexDirection: "column" }}>
            <div style={{ width: '100%', height: '600px' }}>
                <GraficoDeTemperaturaDia />
            </div>
            <div style={{ width: '100%', height: '600px' }}>
                <GraficoDeLuzDia />
            </div>
        </div>
    );
};

export default PainelDia;
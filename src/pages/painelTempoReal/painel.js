import React from 'react';
import GraficoDeLuz from './graficoLuz';
import GraficoDeTemperatura from './graficoTemperatura';

const PainelTempoReal = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '100px', width: "100%", flexDirection: "column" }}>
            <div style={{ width: '100%', height: '600px' }}>
                <GraficoDeTemperatura />
            </div>
            <div style={{ width: '100%', height: '600px' }}>
                <GraficoDeLuz />
            </div>
        </div>
    );
};

export default PainelTempoReal;
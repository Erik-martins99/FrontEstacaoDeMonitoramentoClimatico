import React from 'react';
import GraficoDeLuz from './graficoLuz';
import GraficoDeTemperatura from './graficoTemperatura';
import GraficoDeUmidade from './graficoUmidade';
import IndiceDeCalor from './indiceDeCalor';

const PainelTempoReal = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between',  width: "100%"}}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '100px', width: "80%", flexDirection: "column" }}>
                <div style={{ width: '100%', height: '600px' }}>
                    <GraficoDeTemperatura />
                </div>
                <div style={{ width: '100%', height: '600px' }}>
                    <GraficoDeLuz />
                </div>
                <div style={{ width: '100%', height: '600px' }}>
                    <GraficoDeUmidade />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '100px', width: "20%", flexDirection: "column" }}>
                <div style={{ width: '100%', height: '600px' }}>
                    <IndiceDeCalor />
                </div>
            </div>
        </div>
    );
};

export default PainelTempoReal;
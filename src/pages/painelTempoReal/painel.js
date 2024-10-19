import React from 'react';
import GraficoDeLuz from './graficoLuz';
import GraficoDeTemperatura from './graficoTemperatura';
import GraficoDeUmidade from './graficoUmidade';
import IndiceDeCalor from './indiceDeCalor';
import IndiceDeSom from './indeceDeSom';

const PainelTempoReal = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '100px', width: '80%' }}>
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

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '20%' }}>
                <div style={{ width: '100%', height: '300px' }}>
                <IndiceDeCalor />
                </div>
                <div style={{ width: '100%', height: '300px' }}>
                <IndiceDeSom />
                </div>
            </div>
            </div>
    );
};

export default PainelTempoReal;
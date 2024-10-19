import React from 'react';
import GraficoDeLuzDia from './GraficoLuzDia';
import GraficoDeTemperaturaDia from './GraficoTemperaturaDia';
import GraficoDeUmidadeDia from './GraficoUmidadeDia';
import IndiceDeCalorDia from './IndiceDeCalorDia';
import IndiceDeSomDia from './indeceDeSomDia';

const PainelDia = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '100px', width: '80%' }}>
                <div style={{ width: '100%', height: '600px' }}>
                <GraficoDeTemperaturaDia />
                </div>
                <div style={{ width: '100%', height: '600px' }}>
                <GraficoDeLuzDia />
                </div>
                <div style={{ width: '100%', height: '600px' }}>
                <GraficoDeUmidadeDia />
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '20%' }}>
                <div style={{ width: '100%', height: '300px' }}>
                <IndiceDeCalorDia />
                </div>
                <div style={{ width: '100%', height: '300px' }}>
                <IndiceDeSomDia />
                </div>
            </div>
            </div>
    );
};

export default PainelDia;
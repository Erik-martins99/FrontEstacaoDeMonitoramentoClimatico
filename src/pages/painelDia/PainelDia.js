import React from 'react';
import GraficoDeLuzDia from './GraficoLuzDia';
import GraficoDeTemperaturaDia from './GraficoTemperaturaDia';
import GraficoDeUmidadeDia from './GraficoUmidadeDia';
import IndiceDeCalorDia from './IndiceDeCalorDia';

const PainelDia = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between',  width: "100%"}}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '100px', width: "80%", flexDirection: "column" }}>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '100px', width: "20%", flexDirection: "column" }}>
                <div style={{ width: '100%', height: '600px' }}>
                    <IndiceDeCalorDia />
                </div>
            </div>
        </div>
    );
};

export default PainelDia;
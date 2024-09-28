import React from 'react';
import GraficoDeLuzHora from './GraficoLuzHora';
import GraficoDeTemperaturaHora from './GraficoTemperaturaHora';
import GraficoDeUmidadeHora from './GraficoUmidadeHora';
import IndiceDeCalorHora from './IndicdorDeCalorHora';

const PainelHora = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between',  width: "100%"}}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '100px', width: "80%", flexDirection: "column" }}>
                <div style={{ width: '100%', height: '600px' }}>
                    <GraficoDeTemperaturaHora />
                </div>
                <div style={{ width: '100%', height: '600px' }}>
                    <GraficoDeLuzHora />
                </div>
                <div style={{ width: '100%', height: '600px' }}>
                    <GraficoDeUmidadeHora />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '100px', width: "20%", flexDirection: "column" }}>
                <div style={{ width: '100%', height: '600px' }}>
                    <IndiceDeCalorHora />
                </div>
            </div>
        </div>
    );
};

export default PainelHora;
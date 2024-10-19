import React from 'react';
import GraficoDeLuzHora from './GraficoLuzHora';
import GraficoDeTemperaturaHora from './GraficoTemperaturaHora';
import GraficoDeUmidadeHora from './GraficoUmidadeHora';
import IndiceDeCalorHora from './IndicdorDeCalorHora';
import IndiceDeSomHora from './indeceDeSomHora';

const PainelHora = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '100px', width: '80%' }}>
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

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '20%' }}>
                <div style={{ width: '100%', height: '300px' }}>
                <IndiceDeCalorHora />
                </div>
                <div style={{ width: '100%', height: '300px' }}>
                <IndiceDeSomHora />
                </div>
            </div>
        </div>
    );
};

export default PainelHora;
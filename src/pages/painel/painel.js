import React from 'react';
import TemperatureChart from '../temperatura/graficoTemperatura';
import LuminosityChart from '../luz/graficoLuz';

const CombinedCharts = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '100px', width: "100%", flexDirection: "column" }}>
            <div style={{ width: '100%', height: '600px' }}>
                <TemperatureChart />
            </div>
            <div style={{ width: '100%', height: '600px' }}>
                <LuminosityChart />
            </div>
        </div>
    );
};

export default CombinedCharts;
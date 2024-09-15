import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnyChart from 'anychart-react';
import anychart from 'anychart';

const LuminosityChart = () => {
    const [luminosityData, setLuminosityData] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.0.18:8080/condicaoClimatica')
            .then(response => {
                const processedData = response.data.map(item => ({
                    x: item.data,
                    value: parseInt(item.luminosidade),
                }));
                setLuminosityData(processedData);
            })
            .catch(error => {
                console.error('Erro ao buscar dados de luminosidade:', error);
            });
    }, []);

    const chart = anychart.line();
    chart.data(luminosityData);
    chart.title("Luminosidade");
    chart.xAxis().title("Data");
    chart.yAxis().title("Luminosidade (%)");
    chart.tooltip().format('Data: {%x}\nLuminosidade: {%value}%');

    return (
        <div style={{ width: '100%', height: '700px' }}>
            <AnyChart instance={chart} type="line" width="100%" height="300px"/>
        </div>
    );
};

export default LuminosityChart;

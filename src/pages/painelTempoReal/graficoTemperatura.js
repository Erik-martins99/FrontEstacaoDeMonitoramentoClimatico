import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnyChart from 'anychart-react';
import anychart from 'anychart';

const GraficoDeTemperatura = () => {
    const [temperatureData, setTemperatureData] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.0.18:8080/condicaoClimatica')
            .then(response => {
                const processedData = response.data.map(item => ({
                    x: item.data,
                    value: parseFloat(item.temperatura),
                }));
                setTemperatureData(processedData);
            })
            .catch(error => {
                console.error('Erro ao buscar dados de temperatura:', error);
            });
    }, []);

    const chart = anychart.line();
    chart.data(temperatureData);
    chart.title("Temperatura");
    chart.xAxis().title("Data");
    chart.yAxis().title("Temperatura (°C)");
    chart.tooltip().format('Data: {%x}\nTemperatura: {%value} °C');

    return (
        <div style={{ width: '100%', height: '700px' }}>
            <AnyChart instance={chart} type="line" width="100%" height="300px"/>
        </div>
    );
};

export default GraficoDeTemperatura;


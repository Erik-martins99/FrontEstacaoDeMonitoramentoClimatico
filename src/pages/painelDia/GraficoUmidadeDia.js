import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnyChart from 'anychart-react';
import anychart from 'anychart';

const GraficoDeUmidadeDia = () => {
    const [humidityData, setHumidityData] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.0.223:8080/condicaoClimatica/dia')
            .then(response => {
                const processedData = response.data.map(item => ({
                    x: item.data,
                    value: parseFloat(item.umidade),
                }));
                setHumidityData(processedData);
            })
            .catch(error => {
                console.error('Erro ao buscar dados de umidade:', error);
            });
    }, []);

    const chart = anychart.line();
    chart.data(humidityData);
    chart.title("Umidade");
    chart.xAxis().title("Data");
    chart.yAxis().title("Umidade (%)");
    chart.tooltip().format('Data: {%x}\nUmidade: {%value} %');

    return (
        <div style={{ width: '100%', height: '700px' }}>
            <AnyChart instance={chart} type="line" width="100%" height="300px"/>
        </div>
    );
};

export default GraficoDeUmidadeDia;
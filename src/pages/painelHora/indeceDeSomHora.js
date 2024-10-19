import React, { useState, useEffect } from 'react';
import '../painelTempoReal/indiceDeCalor.css'; // Arquivo de estilos

const IndiceDeSomHora = () => {
    const [som, setSom] = useState(null);
    const [nivel, setNivel] = useState('');
  
    useEffect(() => {
      // Função para buscar dados da API
      const fetchDados = async () => {
        try {
          const response = await fetch('http://localhost:8080/condicaoClimatica/hora');
          const data = await response.json();
  
          if (data.length > 0) {
            // Pega o último objeto da lista e exibe o valor de 'som'
            const ultimoItem = data[data.length - 1];
            const valorSom = ultimoItem.som;
            setSom(valorSom);
  
            // Define o nível de som com base no valor 0 ou 1
            if (valorSom === 0) {
              setNivel('bom');
            } else if (valorSom === 1) {
              setNivel('ruim');
            }
          }
        } catch (error) {
          console.error('Erro ao buscar dados da API:', error);
        }
      };
  
      fetchDados();
    }, []);
  
    return (
      <div className="container">
        <div className="container__border">
          <h1 className="titulo">Nível de Barulho</h1>
          {som !== null ? (
            <div className={`indice ${nivel}`}>
              <p>
                {som === 0 ? 'Baixo' : 'Alto'} - <br />
                <span className="nivel">{som === 0 ? 'som abaixo de 30dB' : 'som acima de 30dB'}</span>
              </p>
            </div>
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      </div>
    );
  };
  

export default IndiceDeSomHora;

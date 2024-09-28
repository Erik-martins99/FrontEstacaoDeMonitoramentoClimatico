import React, { useState, useEffect } from 'react';
import './indiceDeCalor.css'; // Arquivo de estilos

const IndiceDeCalor = () => {
  const [indiceDeCalor, setIndiceDeCalor] = useState(null);
  const [nivel, setNivel] = useState('');

  useEffect(() => {
    // Função para buscar dados da API
    const fetchDados = async () => {
      try {
        const response = await fetch('http://localhost:8080/condicaoClimatica');
        const data = await response.json();

        if (data.length > 0) {
          // Pega o último objeto da lista e exibe o 'indiceDeCalor'
          const ultimoItem = data[data.length - 1];
          const calor = ultimoItem.indiceDeCalor;
          setIndiceDeCalor(calor);

          // Define o nível de calor com base no valor do índice
        if (calor <= 27.0) {
        setNivel('Normal');
        } else if (calor > 27.0 && calor <= 32.0) {
        setNivel('Cautela');
        } else if (calor > 32.0 && calor <= 41.0) {
        setNivel('Cautela extrema');
        } else if (calor > 41.0 && calor <= 54.0) {
        setNivel('Perigo');

        } else {
        setNivel('Perigo extremo');
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
        <div className='container__border'>
            <h1 className="titulo">Índice de Calor</h1>
            {indiceDeCalor !== null ? (
                <div className={`indice ${nivel.toLowerCase()}`}>
                <p>
                    {indiceDeCalor}°C -<br />
                     <span className="nivel">{nivel}</span>
                </p>
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    </div>
  );
};

export default IndiceDeCalor;

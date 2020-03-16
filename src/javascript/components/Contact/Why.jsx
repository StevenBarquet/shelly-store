import React from 'react';
import { List, Typography } from 'antd';

const Why = () => {
  const lista1 = [
    'Todo desde la comodidad de tu casa, con solo un click.',
    'Productos 100% de marca.',
    'Completamente Nuevos.',
    'Garantia de 30 días hasta 1 año.',
    'Orientacion para encontrar el equipo que mejor se acople a tus necesidades.',
    'Variedad en equipos, tanto de marca como de modelo',
    'Últimos lanzamientos al mercado',
    'Constante interacción y facil comunicación.'
  ];

  return (
    <div className="why">
      <div>¿PORQUE NOSOTROS?</div>
      <List
        bordered
        size="small"
        dataSource={lista1}
        renderItem={item => (
          <List.Item>
            <Typography.Text mark />
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Why;

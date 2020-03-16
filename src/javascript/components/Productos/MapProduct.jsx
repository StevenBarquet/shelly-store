import React from 'react';

// Other
import { Row, Col, Card, Button } from 'antd';

const MapProduct = props => {
  const { currentList } = props;
  return (
    <Row gutter={[25, 20]}>
      {currentList &&
        currentList.length > 0 &&
        currentList.map(element => {
          return (
            <Col key={element.id} align="middle" xl={8}>
              <Card
                cover={
                  <img src={element.url1} alt={element.nombre} width="320px" />
                }
                hoverable
                title={<div className="product-title">{element.nombre}</div>}
                style={{ width: 360 }}
              >
                <Card.Meta
                  title={<span className="precio">${element.costo}</span>}
                  description={
                    <span className="meses">
                      o en 12 mensuaidades de $
                      {((element.costo * 1.1) / 12).toFixed(2)}
                    </span>
                  }
                />
                <Button style={{ marginTop: '10px' }}>Comprar ahora</Button>
              </Card>
            </Col>
          );
        })}
    </Row>
  );
};

export default MapProduct;

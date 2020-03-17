import React from 'react';
import { Row, Col, Card } from 'antd';

// Comp
import ProductImages from 'Comp/ProductoComp/ProductImages';
import ProdDetails from 'Comp/ProductoComp/ProdDetails';
import ProdSpecs from 'Comp/ProductoComp/ProdSpecs';

// Mock data
import mock from 'Others/mockProduct.json';

const Producto = () => {
  const product = mock;

  return (
    <div className="product-container">
      <h4>
        {product.marca} <span>{product.modelo}</span>
      </h4>
      <Row>
        <Col xl={12} allign="middle">
          <ProductImages
            images={product.images}
            title={product.marca + ' ' + product.modelo}
          />
        </Col>
        <Col xl={12} allign="middle">
          <ProdDetails data={product} />
        </Col>
      </Row>
      <Row>
        <Card className="specs-card">
          <Row>
            <Col xl={11}>
              <ProdSpecs
                title="Características de rendimiento "
                tooltip="La velocidad y rendimiento de tu equipo depende de éstas características"
                text={product.rendimiento}
              />
            </Col>
            <Col xl={11}>
              <ProdSpecs
                title="Características generales"
                text={product.specs}
              />
            </Col>
            <Col xl={11}>
              <ProdSpecs title="Puertos" text={product.ports} />
            </Col>
            <Col xl={11}>
              {' '}
              {product.special && product.special !== '' && (
                <ProdSpecs
                  title="Características especiales"
                  tooltip="Algunas características sobresalientes acerca de éste equipo"
                  text={product.specs}
                />
              )}
            </Col>
          </Row>
          <Row>
            <br />
            <hr />
            <br />
            <p>
              ¿Tienes dudas o necesitas orientación? Mensaje{' '}
              <a href="https://www.facebook.com/">aquí :D</a>
            </p>
          </Row>
        </Card>
      </Row>
    </div>
  );
};

export default Producto;

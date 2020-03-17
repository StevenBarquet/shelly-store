import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

// CommonComps
import FitImg from 'CommonComps/FitImg';
// import ButtonMlg from 'CommonComps/ButtonMlg';

const MockProducts = () => {
  return (
    <Row gutter={[25, 20]}>
      <Col align="middle" sm={8}>
        <div className="search-item-container">
          <div className="search-item-header">
            Lenovo <span>T480</span>
          </div>
          <Row>
            <Col className="search-item-special" sm={10}>
              Small
            </Col>
            <Col className="search-item-price" sm={10}>
              $11,300
            </Col>
          </Row>
          <Link to="/producto">
            <FitImg
              srcImg="https://www.lenovo.com/medias/lenovo-laptop-thinkpad-t480-feature-03.jpg?context=bWFzdGVyfHJvb3R8NDk0OTN8aW1hZ2UvanBlZ3xoNDkvaDJiLzk2MTA3MDg3NzkwMzguanBnfDE5NzE4YzViY2MzMzYwMTExNmIwOTIxMjExYzYzMzViYjExNzlkMDk2N2ZhNGQ3ZjlkYjE1NzBlNTJhNzQyYmI&w=1920"
              estilo="search-item-img-container"
              alt="Lenovo T480"
            />
          </Link>
          <div className="search-item-belt">Intel core i5</div>
          <div className="search-item-left">
            Disponibles: <span>1</span>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default MockProducts;

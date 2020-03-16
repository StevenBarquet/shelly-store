import React from 'react';
import { Icon, Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';

const Footer = withRouter(props => {
  const current = props.location.pathname;

  if (current === '/master') {
    return (
      <div style={{ display: 'none' }}>
        <br />
      </div>
    );
  }
  return (
    <div className="footer-cont">
      <div className="footer-title">Contacto</div>
      <Row className="row-contacts">
        <Col className="contact" sm={6}>
          <Icon type="phone" />
          <span>5533700670</span>
        </Col>
        <Col className="contact" sm={6}>
          <a
            href="https://www.facebook.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon type="facebook" />
            <span>VMO movil</span>
          </a>
        </Col>
        <Col className="contact" sm={6}>
          <a
            href="https://www.instagram.com/?hl=en"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon type="instagram" />
            <span>VMO movil</span>
          </a>
        </Col>
        <Col className="contact" sm={6}>
          <Icon type="mail" />
          <span>VMOmovil1112@gmail.com</span>
        </Col>
      </Row>
      <div className="footer-logo">
        VMO <span>movil</span>
      </div>
      <div className="footer-rigths">
        © 2020 VMO movil, Inc. All Rights Reserved.
      </div>
    </div>
  );
});

export default Footer;

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
        <Col className="contact" sm={12}>
          <Icon type="phone" />
          <span>55 6982 5605</span>
        </Col>
        <Col className="contact" sm={12}>
          <a
            href="https://www.facebook.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon type="facebook" />
            <span>Shelly Store</span>
          </a>
        </Col>
      </Row>
      <div className="footer-logo">
        Shelly <span>Store</span>
      </div>
      <div className="footer-rigths">
        © 2020 Shelly Store, Inc. All Rights Reserved.
      </div>
    </div>
  );
});

export default Footer;

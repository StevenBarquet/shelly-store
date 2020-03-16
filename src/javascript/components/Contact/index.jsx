import React from 'react';

import Why from 'Comp/Contact/Why';
import Carrusel from 'Comp/Contact/Carrusel';

const Contact = () => {
  return (
    <React.Fragment>
      <div className="contact-text">
        <div>¿QUIENES SOMOS?</div>
        <p>
          Somos una empresa especializada en la distribucion de dispositivos
          moviles, buscando siempre el equipo que mejor se adapte a ti y a tus
          necesidades, al mismo tiempo que te ofrecemos los mejores precios en
          el mercado.
        </p>
      </div>
      <Carrusel />
      <Why />
      <div className="contact-text">
        <div>DISFRUTA DE LAS MEJORES EXPERIENCIAS...</div>
        <p>
          Captura cada momento, Juega, comunicate y ten siempre todo lo que
          necesitas al alcanze de la palma de tu mano.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Contact;

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Componentes
import Productos from 'Cont/Productos';
import Master from 'Cont/Master';
import Home from 'Comp/Home';
import Contact from 'Comp/Contact';
import NavBar from 'Comp/NavBar';
import Footer from 'Comp/Footer';
import ImageExample from 'Comp/ImageExample';

const AppContainer = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/shelly-store-PROTO" component={Home} />
      <Route exact path="/productos" component={Productos} />
      <Route exact path="/master" component={Master} />
      <Route exact path="/contacto" component={Contact} />
      <Route exact path="/img" component={ImageExample} />
      <Footer />
    </BrowserRouter>
  );
};

export default AppContainer;

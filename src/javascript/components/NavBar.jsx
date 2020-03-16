import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavBar = withRouter(props => {
  const current = props.location.pathname;
  if (current === '/master') {
    return (
      <div style={{ display: 'none' }}>
        <br />
      </div>
    );
  }
  return (
    <div className="nav-div">
      <Link to="/">
        <div className="to-home">
          Shelly <span>store</span>
        </div>
      </Link>
      <div className="nav-buttons">
        <Link to="/">
          <div className={current === '/' ? 'nav-btn nav-border' : 'nav-btn'}>
            Inicio
          </div>
        </Link>
        <Link to="/productos">
          <div
            className={
              current === '/productos' ? 'nav-btn nav-border' : 'nav-btn'
            }
          >
            Productos
          </div>
        </Link>
        <Link to="/rastreo">
          <div
            className={
              current === '/contacto' ? 'nav-btn nav-border' : 'nav-btn'
            }
          >
            Rastreo
          </div>
        </Link>
      </div>
    </div>
  );
});

export default NavBar;

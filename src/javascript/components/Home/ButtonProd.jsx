import React from 'react';

// Other
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

const ButtonProd = () => {
  return (
    <Link to="/productos">
      <div className="big-button">
        Ver catálogo ahora
        <span>
          <Icon type="shopping" />
        </span>
      </div>
    </Link>
  );
};

export default ButtonProd;

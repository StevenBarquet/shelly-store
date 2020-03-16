import React, { useState } from 'react';

// Components
import Login from 'Comp/Master/Login';
import MasterBar from 'Comp/Master/MasterBar';
import MasterProducts from 'Comp/Master/MasterProducts';

// Functions
import {
  insertProduct,
  getAllProducts,
  deleteProduct
} from 'Others/peticiones';
import servicesData from 'Others/servicesData.json';

const Master = () => {
  const [currentWindow, setCurrentWindow] = useState('products');
  const [currentList, setCurrentList] = useState([]);
  const [auth, setAuth] = useState(localStorage.getItem('auth'));
  const [form, setForm] = useState({});

  const updateForm = keyValue => {
    setForm({ ...form, ...keyValue });
  };

  const onLogin = () => {
    localStorage.setItem('auth', 'true');
    setAuth(localStorage.getItem('auth'));
  };
  const onLogout = () => {
    localStorage.clear();
    setAuth(localStorage.getItem('auth'));
  };
  const onMenuChange = cad => {
    setCurrentWindow(cad);
  };

  const onNewProduct = () => {
    return insertProduct(servicesData.url, form);
  };

  const onUpdateAll = () => {
    getAllProducts(servicesData.url).then(data => {
      setCurrentList(
        data.map(element => {
          return {
            key: element.id,
            ...element
          };
        })
      );
    });
  };

  const onDeleteP = idButton => {
    deleteProduct(servicesData.url, { id: idButton }).then(() => {
      onUpdateAll();
    });
  };

  if (auth !== 'true') {
    return (
      <React.Fragment>
        <Login onLogin={onLogin} />
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <MasterBar
        onLogout={onLogout}
        currentWindow={currentWindow}
        onMenuChange={onMenuChange}
      />
      <MasterProducts
        onNewProduct={onNewProduct}
        updateForm={updateForm}
        onUpdateAll={onUpdateAll}
        currentList={currentList}
        onDeleteP={onDeleteP}
      />
    </React.Fragment>
  );
};

export default Master;

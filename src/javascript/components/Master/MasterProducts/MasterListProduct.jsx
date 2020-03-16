import React, { useEffect } from 'react';

// Other
import { Button, Table } from 'antd';

const MasterListProduct = props => {
  const { onUpdateAll, currentList, onDeleteP } = props;
  const dataSource = currentList;

  useEffect(() => {
    onUpdateAll();
  });

  const clickTest = e => {
    console.log('delete test: ', e.target.value);
    onDeleteP(e.target.value);
  };

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre'
    },
    {
      title: 'Precio',
      dataIndex: 'costo',
      key: 'costo'
    },
    {
      title: 'Cantidad',
      dataIndex: 'cantidad',
      key: 'cantidad'
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'id',
      render: id => (
        <Button onClick={clickTest} value={id} type="danger">
          Borrar
        </Button>
      )
    },
    {
      title: 'Portada',
      dataIndex: 'url1',
      key: 'url1',
      render: url1 => (
        <span>
          <img src={url1} alt="vmo" width="40px" />
        </span>
      )
    }
  ];
  return (
    <React.Fragment>
      <Table dataSource={dataSource} columns={columns} />
    </React.Fragment>
  );
};

export default MasterListProduct;

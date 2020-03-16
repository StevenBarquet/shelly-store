import React, { useState, useEffect } from 'react';

// Other
import { Tabs, Icon } from 'antd';

// Components
import MapProduct from 'Comp/Productos/MapProduct';
import LoadProducts from 'Comp/Productos/LoadProducts';

// Functions
import { getAllProducts } from 'Others/peticiones';
import servicesData from 'Others/servicesData.json';

const { TabPane } = Tabs;

const Productos = () => {
  const [currentList, setCurrentList] = useState([]);
  const onClientGetAll = () => {
    getAllProducts(servicesData.url).then(data => {
      setCurrentList(data);
    });
  };

  useEffect(() => {
    onClientGetAll();
  });

  const callback = key => {
    console.log(key);
  };
  return (
    <div className="product-cont">
      <Tabs defaultActiveKey="2" onChange={callback}>
        {/* <TabPane
          tab={
            <span>
              <Icon type="apple" />
              Apple
            </span>
          }
          key="1"
        >
          <LoadProducts />
        </TabPane> */}
        <TabPane
          tab={
            <span>
              <Icon type="deployment-unit" />
              Todos
            </span>
          }
          key="2"
        >
          {currentList && currentList.length > 0 && (
            <MapProduct currentList={currentList} />
          )}
          {!currentList || (currentList.length === 0 && <LoadProducts />)}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Productos;

import React, { useState } from 'react';

// Other
import {
  Card,
  Row,
  Col,
  Form,
  Input,
  Select,
  InputNumber,
  Checkbox,
  Button
} from 'antd';

const NewProduct = Form.create({
  onValuesChange(props, values) {
    props.updateForm(values);
  }
})(props => {
  const { newP, onShowForm, form, onNewProduct, onUpdateAll } = props;
  const { getFieldDecorator } = form;
  const [disable, setDisable] = useState(false);

  // verifica que los campos "require" estén llenados
  const localSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll(err => {
      if (!err) {
        setDisable(true);
        // fecth req
        onNewProduct().then(data => {
          console.log('onNewProduct from component ', data);
          // close form, stop disabling, update table
          setDisable(false);
          onUpdateAll();
          onShowForm();
        });
      } else {
        console.log('submit bloqueado');
      }
    });
  };

  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 }
  };
  if (newP) {
    return (
      <div className="new-prod">
        <Card style={{ width: '800px' }} title="Producto nuevo">
          {/* ----------------------------form------------------------- */}
          <Form onSubmit={localSubmit}>
            <Form.Item {...formItemLayout} label="Nombre">
              {getFieldDecorator('nombre', {
                rules: [
                  {
                    required: true,
                    message: 'Por favor ingresa un nombre del producto',
                    whitespace: true
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Descripción">
              {getFieldDecorator('detalle', {
                rules: [
                  {
                    required: true,
                    message: 'Por favor ingresa una descripción',
                    whitespace: true
                  }
                ]
              })(<Input.TextArea />)}
            </Form.Item>
            <Row>
              <Col sm={13}>
                <Form.Item {...formItemLayout} label="Categoría">
                  {getFieldDecorator('categoria', {
                    rules: [
                      {
                        required: true,
                        message: 'Por favor ingresa una categoría'
                      }
                    ]
                  })(
                    <Select>
                      <Select.Option value="android">android</Select.Option>
                      <Select.Option value="ios">ios</Select.Option>
                      <Select.Option value="accesorio">accesorio</Select.Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col sm={9}>
                <Form.Item {...formItemLayout} label="Precio">
                  {getFieldDecorator('costo', {
                    rules: [
                      {
                        required: true,
                        message: 'Por favor ingresa un precio'
                      }
                    ]
                  })(<InputNumber size="large" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col offset={1} sm={12}>
                <Form.Item {...formItemLayout} label="Disponibles">
                  {getFieldDecorator('cantidad', {
                    rules: [
                      {
                        required: true,
                        message: 'Por favor ingresa una cantidad'
                      }
                    ]
                  })(<InputNumber min={1} />)}
                </Form.Item>
              </Col>
              <Col sm={7}>
                <Form.Item {...formItemLayout} label="Visible">
                  {getFieldDecorator('activo', {
                    valuePropName: 'checked',
                    rules: [
                      {
                        required: true,
                        message: 'Por favor haz visible tu producto'
                      }
                    ]
                  })(<Checkbox />)}
                </Form.Item>
              </Col>
            </Row>
            <Form.Item {...formItemLayout} label="url imagen portada">
              {getFieldDecorator('url1', {
                rules: [
                  {
                    required: true,
                    message: 'Por favor ingresa una url',
                    whitespace: true
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item {...formItemLayout} label="url imagen extra 1">
              {getFieldDecorator('url2', {
                rules: [
                  {
                    required: true,
                    message: 'Por favor ingresa una url',
                    whitespace: true
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item {...formItemLayout} label="url imagen extra 2">
              {getFieldDecorator('url3', {
                rules: [
                  {
                    required: true,
                    message: 'Por favor ingresa una url',
                    whitespace: true
                  }
                ]
              })(<Input />)}
            </Form.Item>
            {/* ----------------------------form------------------------- */}
            <Row>
              <Col sm={10}>
                <Button disabled={disable} type="danger" onClick={onShowForm}>
                  Cerrar
                </Button>
              </Col>
              <Col offset={4} sm={10}>
                <Button disabled={disable} htmlType="submit">
                  Subir
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </div>
    );
  }
  return null;
});

export default NewProduct;

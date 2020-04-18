import React from 'react';

// Other
import {
  Form,
  Checkbox,
  Input,
  Row,
  Col,
  Tooltip,
  Icon,
  Select,
  InputNumber
} from 'antd';
// CommonComps
import ButtonMlg from 'CommonComps/ButtonMlg';

const { Option } = Select;

const ShipmentForm = Form.create({})(props => {
  const { form } = props;
  const { getFieldDecorator } = form;

  // verifica que los campos "require" estén llenados
  const localSubmit = e => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, value) => {
      if (!err) {
        console.log('Form values: ', value);
      } else {
        console.log('submit bloqueado');
      }
    });
  };

  const mapOptions = options => {
    return options.map((element, i) => {
      return (
        <Option key={i} value={element.value}>
          {element.label}
        </Option>
      );
    });
  };

  const opciones = [
    {
      label: 'Domicilio particular',
      value: 'casa'
    },
    {
      label: 'Domicilio laboral',
      value: 'trabajo'
    }
  ];

  const shortLabelItem = {
    labelCol: {
      sm: { span: 24 },
      md: { span: 4 }
    },
    wrapperCol: {
      sm: { span: 24 },
      md: { span: 19 }
    }
  };
  const singleRowItem = {
    labelCol: { span: 24 },
    wrapperCol: { span: 23 }
  };

  const longLabelItem = {
    labelCol: {
      sm: { span: 24 },
      md: { span: 9 }
    },
    wrapperCol: {
      sm: { span: 24 },
      md: { span: 14 }
    }
  };

  return (
    <Form onSubmit={localSubmit}>
      <Row gutter={[0, 10]} className="cart-form">
        <Col md={15}>
          <Form.Item
            {...shortLabelItem}
            label={
              <span>
                Alias&nbsp;
                <Tooltip title="Nombre para identificar el domicilio en caso de que quieras guardarlo">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('alias', {
              rules: [
                {
                  required: true,
                  message: 'Please input your nickname!',
                  whitespace: true
                }
              ]
            })(<Input placeholder="Casa de mi ex :(" />)}
          </Form.Item>
        </Col>
        <Col md={9}>
          <Form.Item {...longLabelItem} label="Guardar">
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(<Checkbox />)}
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            {...shortLabelItem}
            label={
              <span>
                Nombre&nbsp;
                <Tooltip title="Persona responsable de recibir el pedido">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('nombre', {
              rules: [
                {
                  required: true,
                  message: 'Please input your nickname!',
                  whitespace: true
                }
              ]
            })(<Input />)}
          </Form.Item>
        </Col>
        <Col md={12}>
          <Form.Item {...longLabelItem} label="Código postal">
            {getFieldDecorator('cp', {
              rules: [
                {
                  required: true,
                  message: 'Please input your nickname!',
                  whitespace: true
                }
              ]
            })(<Input />)}
          </Form.Item>
        </Col>
        <Col md={12}>
          <Form.Item {...shortLabelItem} label="Estado">
            {getFieldDecorator('estado', {
              rules: [
                {
                  required: true,
                  message: 'Please input your nickname!',
                  whitespace: true
                }
              ]
            })(<Input />)}
          </Form.Item>
        </Col>
        <Col md={12}>
          <Form.Item {...longLabelItem} label="Municipio / Alcaldía">
            {getFieldDecorator('municipio', {
              rules: [
                {
                  required: true,
                  message: 'Please input your nickname!',
                  whitespace: true
                }
              ]
            })(<Input />)}
          </Form.Item>
        </Col>
        <Col md={12}>
          <Form.Item {...longLabelItem} label="Colonia / Asentamiento">
            {getFieldDecorator('colonia', {
              rules: [
                {
                  required: true,
                  message: 'Please input your nickname!',
                  whitespace: true
                }
              ]
            })(<Input />)}
          </Form.Item>
        </Col>
        <Col md={10}>
          <Form.Item {...shortLabelItem} label="Calle">
            {getFieldDecorator('calle', {
              rules: [
                {
                  required: true,
                  message: 'Please input your nickname!',
                  whitespace: true
                }
              ]
            })(<Input />)}
          </Form.Item>
        </Col>
        <Col md={7}>
          <Form.Item {...longLabelItem} label="Exterior">
            {getFieldDecorator('exterior', {
              rules: [
                {
                  required: true,
                  message: 'Please input your nickname!',
                  whitespace: true
                }
              ]
            })(<Input />)}
          </Form.Item>
        </Col>
        <Col md={7}>
          <Form.Item {...longLabelItem} label="Interior">
            {getFieldDecorator('interior')(<Input />)}
          </Form.Item>
        </Col>
        <Col offset={1} md={23}>
          <p>Entre calles (opcional)</p>
        </Col>
        <Col md={12}>
          <Form.Item {...shortLabelItem} label="Calle 1">
            {getFieldDecorator('entreC1')(<Input />)}
          </Form.Item>
        </Col>
        <Col md={12}>
          <Form.Item {...shortLabelItem} label="Calle 2">
            {getFieldDecorator('entreC2')(<Input />)}
          </Form.Item>
        </Col>
        <Col md={24}>
          <Form.Item
            {...singleRowItem}
            label={
              <span>
                Referencia&nbsp;
                <Tooltip title="Alguna indicación adicional para ubicar el domicilio">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('referencia', {
              rules: [
                {
                  required: true,
                  message: 'Please input your nickname!',
                  whitespace: true
                }
              ]
            })(
              <Input.TextArea placeholder="Ejemplo: Casa color gris, hay un oxxo a un lado" />
            )}
          </Form.Item>
        </Col>
        <Col md={12}>
          <Form.Item {...longLabelItem} label="Tipo de domicilio">
            {getFieldDecorator('domType', {
              rules: [
                {
                  required: true,
                  message: 'Please input your nickname!',
                  whitespace: true
                }
              ]
            })(<Select>{mapOptions(opciones)}</Select>)}
          </Form.Item>
        </Col>
        <Col md={12}>
          <Form.Item
            {...longLabelItem}
            label={
              <span>
                Número de contacto&nbsp;
                <Tooltip title="LLamarán a éste número en caso de que hubiera un problema con el envío">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('num', {
              rules: [
                {
                  required: true,
                  message: 'Please input your nickname!'
                }
              ]
            })(<InputNumber style={{ width: 150 }} />)}
          </Form.Item>
        </Col>
        <Col style={{ paddingLeft: 27 }} span={24}>
          <ButtonMlg
            variant="green"
            size="default"
            widthB="170px"
            htmlType="submit"
            label="Enviar"
            icon={<Icon type="logout" />}
          />
        </Col>
      </Row>
    </Form>
  );
});

export default ShipmentForm;

/** @format */
import { useState } from "react";
import {
  Col,
  Row,
  Typography,
  Table,
  Card,
  Button,
  Input,
  DatePicker,
  Radio,
  Modal,
  Form,
} from "antd";
import {
  CreditCardOutlined,
  IdcardOutlined,
  NumberOutlined,
  HeartTwoTone,
} from "@ant-design/icons";
import "../App.css";
import { useSelector } from "react-redux";

const { RangePicker } = DatePicker;
const addStyle = {
  justifyContent: "center",
  alignItems: "center",
  padding: "28px 88px",
};
const Checkout = () => {
  const state = useSelector((state) => state.item);
  const [value, setValue] = useState(1);

  const [loadings, setenterLoading] = useState(false);
  const [text, setText] = useState("Proceed");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const columns = [
    {
      title: "Product Image",
      dataIndex: "image",
      render: (image) => <img alt={image} src={image} height={200} />,
    },
    {
      title: "Product",
      dataIndex: "name",
    },
    {
      title: "Product Price",
      dataIndex: "price",
    },
  ];

  // for checkbox
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  // for loading state
  const enterLoading = () => {
    setenterLoading({ loadings: true });
    setText("Please Wait");

    setTimeout(() => {
      stateToogle();
    }, 5000);
  };
  const stateToogle = () => {
    setenterLoading(false);
    setText("Proceed");
    showModal();
  };

  // for dialogBox
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // payment form validation

  const onFinish = (values) => {
    console.log("Success:", values);
    enterLoading();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={addStyle} className="main_container handlePadding">
      <Typography.Title style={{ textAlign: "center", color: "white" }}>
        Checkout Portion
      </Typography.Title>

      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        gutter={[20, 16]}
        className="row"
      >
        <Col className="product_tabel">
          <Table
            columns={columns}
            dataSource={state && state.itemsList.data}
            pagination={false}
            size="small"
          ></Table>
        </Col>
        <Col className="payment_form">
          <Typography.Title level={5} className="typo">
            Proceed Payment Procedure
          </Typography.Title>
          <Card style={{ width: 250, padding: "4px 4px" }}>
            <Form
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Row>
                <Col>
                  <Form.Item
                    name="payment Method"
                    rules={[
                      {
                        required: true,
                        message: "Payment method Required!",
                      },
                    ]}
                  >
                    <Radio.Group onChange={onChange} value={value}>
                      <Radio value={1}>Visa Card</Radio>
                      <Radio value={2}>Master Card</Radio>
                      <Radio value={3}>Paypal</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item
                    name="Card "
                    rules={[
                      {
                        required: true,
                        message: "Credit Card Number Required!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Credit Card Number"
                      prefix={<CreditCardOutlined />}
                    />
                  </Form.Item>
                </Col>

                <Col>
                  <Form.Item
                    name="Card holder"
                    rules={[
                      {
                        required: true,
                        message: "Card Holder Name Required!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Card Holder Name"
                      prefix={<IdcardOutlined />}
                    />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item
                    name="Date"
                    rules={[
                      {
                        required: true,
                        message: "Date Required!",
                      },
                    ]}
                  >
                    <RangePicker
                      dateRender={(current) => {
                        const style = {};
                        if (current.date() === 1) {
                          style.border = "1px solid #1890ff";
                          style.borderRadius = "50%";
                        }
                        return (
                          <div className="ant-picker-cell-inner" style={style}>
                            {current.date()}
                          </div>
                        );
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item
                    name="CVC"
                    rules={[
                      {
                        required: true,
                        message: "CVC Number Required!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="CVC Number"
                      prefix={<NumberOutlined />}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item>
                <Button
                  type="primary"
                  loading={loadings}
                  style={{ marginTop: "8px", width: "100%" }}
                  htmlType="submit"
                  className="button"
                >
                  {text}
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
      {/* success message */}
      <Modal
        title="Confermation Message"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Typography.Title level={4}>
          Thank you <HeartTwoTone twoToneColor="#eb2f96" /> for using our
          services, you payment process is complete!
        </Typography.Title>
      </Modal>
    </div>
  );
};

export default Checkout;

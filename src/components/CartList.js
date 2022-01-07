/** @format */

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "antd/dist/antd.css";
import "../App.css";
import { Card, Col, Row, Typography, Table, Button, Popconfirm } from "antd";
import { addItems, deleteItems } from "../redux/action/itemAction";
import ShowPopup from "./ShowPopup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const { Meta } = Card;

const CartList = () => {
  const dispatch = useDispatch();
  const getItems = useSelector((state) => state.item);
  const [items, setSelectedItems] = useState([]);

  // react-tostify
  const deleteNotification = () =>
    toast("Your item successfully deleted", { autoClose: true });
  const addNotification = () =>
    toast("Your item successfully add to the list", { autoClose: true });

  const addStyle = {
    justifyContent: "center",
    alignItems: "center",
    padding: "24px 0px",
  };

  //   item list
  const list = [
    {
      id: uuidv4(),
      name: "Shirt",
      image: "/img.jpg",
      price: 229,
    },
    { id: uuidv4(), name: "Pant", image: "/pant.jpg", price: 350 },
    { id: uuidv4(), name: "Jacket", image: "/jacket.jpg", price: 1000 },
    { id: uuidv4(), name: "Jacket", image: "/image-1.jpg", price: 1030 },
    { id: uuidv4(), name: "Jacket", image: "/image-2.jpg", price: 1200 },
    {
      id: uuidv4(),
      name: "Cotton Trousers",
      image: "/Cotton-trousers.jpg",
      price: 600,
    },
    {
      id: uuidv4(),
      name: "Trowser",
      image: "/trowser-for-mens.jpg",
      price: 800,
    },
    { id: uuidv4(), name: "Jacket", image: "/jacket.jpg", price: 1000 },
    { id: uuidv4(), name: "Jacket", image: "/image-1.jpg", price: 1030 },
  ];

  // pick item from list, onclick insert into redux
  const handleAdd = (el) => {
    const data = list.filter((it) => it.id === el.id);
    dispatch(addItems({ data: [...items, el] }));
    setSelectedItems([...items, el]);
    console.log("id", el.id);

    setTimeout(() => {
      addNotification();
    }, 1000);

    console.log("getitems", getItems);
  };

  // handle delete item from redux
  const handleDelete = (id) => {
    let temp = getItems;
    let filteredItem = getItems.itemsList.data.filter(
      (item, index) => item.id !== id
    );
    temp.itemsList.data = filteredItem;
    dispatch(deleteItems({ data: [...filteredItem] }));
    setSelectedItems(filteredItem);
    setTimeout(() => {
      deleteNotification();
    }, 1000);
  };

  // table view
  const columns = [
    {
      title: "Product Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "View Details",
      dataIndex: "details",

      render: (_, record) => <ShowPopup items={items} />,
    },
    {
      title: "Action",
      dataIndex: "",
      render: (_, record) =>
        items.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button danger> Delete </Button>
          </Popconfirm>
        ) : null,
    },
  ];

  return (
    <div className="main_container">
      <Typography.Title style={{ textAlign: "center", color: "white" }}>
        Add to cart list
      </Typography.Title>
      <ToastContainer className="tostify" />

      <Row
        style={addStyle}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        gutter={[20, 16]}
      >
        {list.map((el) => (
          <Col key={el.key}>
            <Card
              hoverable
              style={{ width: 250, padding: "4px 4px" }}
              cover={<img alt="example" src={el.image} height={250} />}
            >
              <Button
                onClick={() => handleAdd(el)}
                type="primary"
                className="btn"
                style={{ width: "100%", marginBottom: "12px" }}
              >
                Add to list
              </Button>
              <Meta title={el.name} description={`Pkr.${el.price}`} />
            </Card>
          </Col>
        ))}
      </Row>

      {/* product table */}

      {items.length > 0 ? (
        <div>
          <Table
            columns={columns}
            dataSource={items}
            pagination={false}
            size="small"
          ></Table>
          <Link to="/checkout">
            <Button
              type="secondary"
              style={{ width: "100%", marginTop: "22px" }}
            >
              CheckOut
            </Button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default CartList;

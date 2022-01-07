/** @format */
import { Popover, Button, Typography } from "antd";

const ShowPopup = (props) => {
  const content = (
    <div>
      {props.items.map((el) => (
        <div>
          <img src={el.image} height={200} />

          <Typography>Product: {el.name} </Typography>
          <Typography>Price:{`${el.price}.pkr`} </Typography>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <Popover content={content} title="Selected Product Details">
        <Button type="primary">Hover to view details</Button>
      </Popover>
    </div>
  );
};

export default ShowPopup;

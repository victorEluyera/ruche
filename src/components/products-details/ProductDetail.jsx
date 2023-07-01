import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Rate, Typography } from "antd";
import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/rucheSlice";

const { Text } = Typography;

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const allColor = product?.colorsAvailable;
  const availableSize = product?.SizesAvailable;
  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const handleRatingChange = (value) => {
    setRating(value);
  };
  console.log(product);
  return (
    <div style={{ textAlign: "start", marginLeft: "80px" }}>
      <div>
        <Text style={{ fontSize: "30px", color: "#2A4468" }}>
          {product.Title}
        </Text>
        <div>
          <Rate allowHalf defaultValue={rating} onChange={handleRatingChange} />
          <Text
            type="secondary"
            style={{ fontSize: "20px", marginLeft: "14px" }}
          >
            24 review
          </Text>
        </div>
        <Text style={{ fontSize: "24px", fontWeight: "700", color: "#237216" }}>
          N {product.Price}
        </Text>
        <div style={{ marginBottom: "14px" }}>
          <Text style={{ fontSize: "24px", color: "#2A4468" }}>Colors</Text>
        </div>

        <div
          style={{
            display: "flex",
            width: "50%",
            gap: "15px",
            marginBottom: "23px",
          }}
        >
          {allColor?.map((color) => (
            <div
              style={{
                background: `${color}`,
                height: "44px",
                width: "44px",
                outline: "black 0.5px solid",
              }}
            ></div>
          ))}
        </div>

        <Text style={{ fontSize: "24px", color: "#2A4468" }}>Size</Text>
        <div
          style={{
            display: "flex",
            width: "50%",
            marginBottom: "23px",
            gap: "10px",
          }}
        >
          {availableSize?.map((size) => (
            <div
              style={{
                border: "1px solid #2A4468",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50px",
                width: "70px",
                color: "#2A4468",
              }}
            >
              {size}
            </div>
          ))}
        </div>
        <Text style={{ fontSize: "24px", color: "#2A4468" }}>Quantity</Text>
        <div style={{ display: "flex", marginBottom: "30px" }}>
          <Button
            style={{
              alignItems: "center",
              height: "50px",
              width: "50px",
              background: "#2A4468",
              borderRadius: "0px",
              color: "white",
            }}
            onClick={handleDecreaseQuantity}
            icon={<MinusOutlined />}
          />

          <div
            style={{
              border: "1px solid #2A4468",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "47px",
              width: "50px",
              color: "#2A4468",
            }}
          >
            {quantity}
          </div>
          <Button
            style={{
              alignItems: "center",
              height: "50px",
              width: "50px",
              background: "#2A4468",
              borderRadius: "0px",
              color: "white",
            }}
            onClick={handleIncreaseQuantity}
            icon={<PlusOutlined />}
          />
        </div>
        <Button
          onClick={() =>
            dispatch(addToCart({ ...product, quantity: quantity }))
          }
          style={{
            width: "419px",
            height: "69px",
            fontSize: "24px",
            background: "#2A4468",
            borderRadius: "0px",
            color: "white",
          }}
        >
          Add To Cart
        </Button>
        <Button
          style={{
            width: "419px",
            height: "69px",
            fontSize: "24px",
            color: "#2A4468",
            borderRadius: "0px",
          }}
        >
          Add To Wishlist
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;

import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Typography } from "antd";
import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  decreamentQuantity,
  deleteItem,
  increamentQuantity,
} from "../../redux/rucheSlice";
import styles from "./CartProducts.module.scss";

const { Text } = Typography;

function CartProducts() {
  const cartData = useSelector((state) => state.ruche.productData);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          margin: "auto",
          alignItems: "center",
        }}
      >
        <Text className={styles.cart}>
          Cart <span className={styles.cart_figure}>{cartData.length}</span>
        </Text>
        <Text className={styles.shipping_details}>
          Shipping Details <span className={styles.underline}></span>
        </Text>
      </div>
      <CartProductsCard cartData={cartData} />
    </div>
  );
}

export default CartProducts;

const CartProductsCard = ({ cartData }) => {
  const dispatch = useDispatch();
  console.log(cartData);
  return (
    <div>
      <div>
        <Text
          style={{
            fontSize: "30px",
            fontWeight: "500",
            color: "#2A4468",
            marginBottom: "0",
          }}
        >
          Products
        </Text>
        <Divider
          style={{
            height: "3px",
            marginTop: "0",
            background: "rgba(33, 68, 104, 0.5)",
          }}
        />
      </div>
      {cartData?.map((item) => (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "30px" }}>
              <img
                src={item.previewImage}
                width={"153px"}
                height={"122px"}
                style={{
                  borderRadius: "15px",
                  filter: "drop-shadow(1px 1px 30px rgba(196, 196, 196, 0.5))",
                  objectFit: "cover",
                }}
                alt="cartImg"
              />
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <Text className={styles.product_name}>{item.Title}</Text>
                <Text className={styles.product_price}>N {item.Price}</Text>
                <div style={{ display: "flex", gap: "30px" }}>
                  <span className={styles.product_size}>{item.Size}</span>
                  <span
                    style={{
                      background: `${item.Color}`,
                      width: "40px",
                      height: "40px",
                    }}
                  ></span>
                </div>
              </div>
            </div>
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
                onClick={() =>
                  dispatch(
                    decreamentQuantity({
                      ...item,
                      quantity: 1,
                    })
                  )
                }
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
                {item.quantity}
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
                onClick={() =>
                  dispatch(
                    increamentQuantity({
                      ...item,
                      quantity: 1,
                    })
                  )
                }
                icon={<PlusOutlined />}
              />
            </div>
            <div
              style={{ fontSize: "30px", color: "red" }}
              onClick={() => dispatch(deleteItem(item.Id))}
            >
              <MdOutlineDeleteForever />
            </div>
          </div>
          <Divider
            style={{ background: "rgba(33, 68, 104, 0.5)", height: "2px" }}
          />
        </div>
      ))}
      {/* anotther one */}
    </div>
  );
};

import { Collapse, Typography } from "antd";
import React from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { useSelector } from "react-redux";
import { SummaryComponent } from "../cart-summary/CartSummary";
import styles from "./CheckoutCartSummary.module.scss";

const { Panel } = Collapse;
const { Text } = Typography;

function CheckoutCartSummary() {
  const cartData = useSelector((state) => state.ruche.productData);
  return (
    <div>
      <Collapse className={styles.container} style={{ marginBottom: "20px" }}>
        <Panel
          showArrow={false}
          header={
            <p style={{ display: "flex", justifyContent: "space-between" }}>
              Your Cart
              <span>
                <BsChevronCompactDown />
              </span>
            </p>
          }
          key="1"
        >
          <div>
            {cartData.map((item) => (
              <div
                style={{
                  width: "95%",
                  background: "white",
                  padding: "15px",
                  margin: "10px auto",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", gap: "20px" }}>
                    <img
                      width={"75px"}
                      height={"60px"}
                      src={item.previewImage}
                      alt="cartPic"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text className={styles.card_title}>{item.Title}</Text>
                      <div style={{ display: "flex", gap: "40px" }}>
                        <div style={{ display: "flex", gap: "30px" }}>
                          <div className={styles.card_size}>{item.Size}</div>
                          <div
                            className={styles.card_color}
                            style={{ background: `${item.Color}` }}
                          ></div>
                        </div>
                        <Text className={styles.card_quantity}>1pc:</Text>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      textAlign: "end",
                      alignItems: "flex-end",
                    }}
                  >
                    <FiEdit style={{ color: "#2A4468" }} />
                    <Text className={styles.card_prize}>N {item.Price}</Text>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </Collapse>
      <SummaryComponent />
    </div>
  );
}

export default CheckoutCartSummary;

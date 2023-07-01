import { Collapse, Divider, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsChevronCompactDown } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./CartSummary.module.scss";

const { Panel } = Collapse;

const { Text } = Typography;

function CartSummary() {
  return (
    <div style={{ paddingTop: "70px" }}>
      <SummaryComponent />
      <div
        style={{
          padding: "20px 0",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Link to={"/address-info"} style={{ textDecoration: "none" }}>
          <div
            style={{
              background: "#2A4468",
              color: "#ffffff",
              border: "none",
              outline: "none",
              padding: "20px",
              fontSize: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ fontSize: "24px", color: "#ffffff" }}>
              Proceed to Checkout
            </Text>
            <span style={{ marginBottom: "-7px" }}>
              <AiOutlineArrowRight />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CartSummary;

export const SummaryComponent = () => {
  const cartData = useSelector((state) => state.ruche.productData);
  const [totalAmt, setTotalAmt] = useState("");

  useEffect(() => {
    let price = 0;
    cartData.map((item) => {
      price += item.Price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [cartData]);
  return (
    <div>
      <Collapse className={styles.container}>
        <Panel
          showArrow={false}
          header={
            <p style={{ display: "flex", justifyContent: "space-between" }}>
              Discount Code{" "}
              <span>
                <BsChevronCompactDown />
              </span>
            </p>
          }
          key="1"
        >
          <div
            style={{ textAlign: "center", color: "#2A4468", fontSize: "24px" }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#2A4468",
                fontSize: "20px",
              }}
            >
              No Discount Code Yet!!
            </Text>
          </div>
        </Panel>
      </Collapse>
      <Collapse className={styles.container} style={{ marginTop: "20px" }}>
        <Panel
          showArrow={false}
          header={
            <p style={{ display: "flex", justifyContent: "space-between" }}>
              Summary{" "}
              <span>
                <BsChevronCompactDown />
              </span>
            </p>
          }
          key="2"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text className={styles.details}>Value:</Text>
            <Text className={styles.price}>N{totalAmt}</Text>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {" "}
            <Text className={styles.details}>Delivery Cost:</Text>
            <Text className={styles.price}>N100.00</Text>
          </div>
          <Divider
            style={{ height: "2px", background: "rgba(42, 68, 104, 0.6)" }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {" "}
            <Text className={styles.details}>Total:</Text>
            <Text className={styles.price}>
              N{(Number(totalAmt) + 100).toFixed(2)}
            </Text>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

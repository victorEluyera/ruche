import { HeartOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { React } from "react";
import pic from "../../asset/print-boho-dress-ref7715-17-transformed.jpeg";
import styles from "./PotentialProducts.module.scss";

const { Text } = Typography;

function PotentialProducts() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Text className={styles.topic}>You May Also Like</Text>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          margin: "auto",
        }}
      >
        <div>
          <div className={styles.card_container}>
            <img
              width={"390px"}
              height={"500px"}
              src={pic}
              style={{ borderRadius: "20px", objectFit: "cover" }}
              alt="productsimg"
            />
            <div className={styles.like_button}>
              <HeartOutlined />
            </div>
            <div className={styles.view_button}>View</div>
          </div>
          <div className={styles.cards}>
            <Text className={styles.product_name}>Palazo</Text>
            <Text className={styles.product_price}>N 60,000</Text>
          </div>
        </div>

        <div>
          <div className={styles.card_container}>
            <img
              width={"390px"}
              height={"500px"}
              src={pic}
              style={{ borderRadius: "20px", objectFit: "cover" }}
              alt="productsimg"
            />
            <div className={styles.like_button}>
              <HeartOutlined />
            </div>
            <div className={styles.view_button}>View</div>
          </div>
          <div className={styles.cards}>
            <Text className={styles.product_name}>Palazo</Text>
            <Text className={styles.product_price}>N 60,000</Text>
          </div>
        </div>
        <div>
          <div className={styles.card_container}>
            <img
              width={"390px"}
              height={"500px"}
              src={pic}
              style={{ borderRadius: "20px", objectFit: "cover" }}
              alt="productsimg"
            />
            <div className={styles.like_button}>
              <HeartOutlined />
            </div>
            <div className={styles.view_button}>View</div>
          </div>
          <div className={styles.cards}>
            <Text className={styles.product_name}>Women Suit</Text>
            <Text className={styles.product_price}>N 60,000</Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PotentialProducts;

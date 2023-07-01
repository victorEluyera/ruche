import { Typography } from "antd";
import React from "react";
import pic from "../../asset/print-boho-dress-ref7715-17-transformed.jpeg";
import styles from "./RecentView.module.scss";

const { Text } = Typography;

function RecentView() {
  return (
    <div style={{ marginTop: "100px" }}>
      <div style={{ width: "95%", margin: "auto" }}>
        <Text className={styles.topic}>Recently Viewed </Text>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "95%",
          margin: "10px auto 70px",
        }}
      >
        <img
          src={pic}
          width={"290px"}
          height={"220px"}
          style={{
            borderRadius: "15px",
            filter: "drop-shadow(1px 1px 30px rgba(196, 196, 196, 0.5))",
            objectFit: "cover",
          }}
          alt="recenviewProducts"
        />
        <img
          src={pic}
          width={"290px"}
          height={"220px"}
          style={{
            borderRadius: "15px",
            filter: "drop-shadow(1px 1px 30px rgba(196, 196, 196, 0.5))",
            objectFit: "cover",
          }}
          alt="recenviewProducts"
        />
        <img
          src={pic}
          width={"290px"}
          height={"220px"}
          style={{
            borderRadius: "15px",
            filter: "drop-shadow(1px 1px 30px rgba(196, 196, 196, 0.5))",
            objectFit: "cover",
          }}
          alt="recenviewProducts"
        />
        <img
          src={pic}
          width={"290px"}
          height={"220px"}
          style={{
            borderRadius: "15px",
            filter: "drop-shadow(1px 1px 30px rgba(196, 196, 196, 0.5))",
            objectFit: "cover",
          }}
          alt="recenviewProducts"
        />
      </div>
    </div>
  );
}

export default RecentView;

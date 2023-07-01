import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Image, Typography } from "antd";
import React from "react";
import pic from "../../asset/Rectangle 24.png";
import styles from "./Testimony.module.scss";

const { Text } = Typography;

function Testimony() {
  return (
    <div className={styles.testimony_container}>
      <div className={styles.testimoniers}>
        <Text className={styles.topic}>Testimonials</Text>
        <Text className={styles.details}>
          “I love the selection of styles and colors{" "}
          <span>Ruche De La Mode</span> has to offer. All my outfits are
          gorgeous and they fit perfectly!”
        </Text>
        <Text className={styles.user}>CATHRINA BELLE</Text>
        <div className={styles.dots}>
          <div
            style={{
              background: "#2A4468",
            }}
            className={styles.testimony_dots}
          />

          <div
            style={{
              width: "12px",
              background: "rgba(42, 68, 104, 0.3)",
              height: "12px",
              borderRadius: "5px",
            }}
            className={styles.testimony_dots}
          />
          <div
            style={{
              width: "12px",
              background: "rgba(42, 68, 104, 0.3)",
              height: "12px",
              borderRadius: "5px",
            }}
            className={styles.testimony_dots}
          />
          <div
            style={{
              width: "12px",
              background: "rgba(42, 68, 104, 0.3)",
              height: "12px",
              borderRadius: "5px",
            }}
            className={styles.testimony_dots}
          />
        </div>
      </div>
      <div className={styles.picture_container}>
        <Button
          type="primary"
          shape="circle"
          icon={<LeftOutlined />}
          style={{ background: "#FFE3A9", width: "80px", height: "50px" }}
        />
        <Image src={pic} alt="pic" preview={false} />
        <Button
          type="primary"
          shape="circle"
          icon={<RightOutlined />}
          style={{ background: "#FFE3A9", width: "80px", height: "50px" }}
        />
      </div>
    </div>
  );
}

export default Testimony;

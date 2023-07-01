import { Image, Space, Typography } from "antd";
import React from "react";
import brig from "../../asset/Brigitte_Logo_PNG2 1.png";
import consmos from "../../asset/Cosmopolitan_logo_PNG2 1.png";
import elle from "../../asset/Elle_logo_PNG1 1.png";
import bazaar from "../../asset/Harpers_bazaar_logo_PNG1 1.png";
import claire from "../../asset/Marie_Claire_logo_PNG1 1.png";
import vector from "../../asset/Vector.png";
import styles from "./Feature.module.scss";

const { Text } = Typography;

function Feature() {
  return (
    <div className={styles.feature_container}>
      <Space direction="vertical" size={136}>
        <div className={styles.feature_header}>
          <Text className={styles.header_title}>Featured in </Text>
          <Text className={styles.header_description}>
            Some of the biggest fashion brands we’ve worked with.
          </Text>
        </div>
        <Space size={62}>
          <Image src={vector} preview={false} />
          <Image src={brig} preview={false} />
          <Image src={elle} preview={false} />
          <Image src={claire} preview={false} />
          <Image src={bazaar} preview={false} />
          <Image src={consmos} preview={false} />
        </Space>
      </Space>
    </div>
  );
}

export default Feature;

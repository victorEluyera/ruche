import { Button, Carousel, Space, Typography } from "antd";
import React from "react";
import styles from "./Hero.module.scss";

const { Text } = Typography;
function Hero() {
  return (
    <Carousel autoplay dots={false}>
      <div id={styles.first_hero}>
        <div className={styles.hero_content_container}>
          <div style={{ width: "80%", opacity: "1" }}>
            <Space direction="vertical">
              <Text className={styles.hero_content}>
                A Brand where Fashion meets Perfection
              </Text>
              <Button className={styles.hero_btn} size="large">
                Shop Now
              </Button>
            </Space>
          </div>
        </div>{" "}
      </div>
      <div id={styles.second_hero}>
        <div className={styles.hero_content_container}>
          <div style={{ width: "80%", opacity: "1" }}>
            <Space direction="vertical">
              <Text className={styles.hero_content}>
                A Brand where Fashion meets Perfection
              </Text>
              <Button className={styles.hero_btn} size="large">
                Shop Now
              </Button>{" "}
            </Space>
          </div>
        </div>
      </div>
      <div id={styles.third_hero}>
        <div className={styles.hero_content_container}>
          <div style={{ width: "80%", opacity: "1" }}>
            <Space direction="vertical">
              <Text className={styles.hero_content}>
                A Brand where Fashion meets Perfection
              </Text>
              <Button className={styles.hero_btn} size="large">
                Shop Now
              </Button>{" "}
            </Space>
          </div>
        </div>{" "}
      </div>
    </Carousel>
  );
}

export default Hero;

import { Button, Typography } from "antd";
import React from "react";
import styles from "./Bonus.module.scss";
const { Text } = Typography;

function Bonus() {
  return (
    <div className={styles.bonus_container}>
      <div className={styles.bonus_wrapper}>
        <Text className={styles.bonus_big_text}>
          Enjoy 15% Off Your First Order
        </Text>
        <Text className={styles.bonus_details}>
          Explore our collection for good deals, very beautiful, durable and
          affordable items in stock
        </Text>
        <Button className={styles.bonus_btn}>SHOP NOW</Button>
      </div>
    </div>
  );
}

export default Bonus;

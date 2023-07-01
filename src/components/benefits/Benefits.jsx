import { Typography } from "antd";
import React from "react";
import { RiShipLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import styles from "./Benefits.module.scss";

const { Text } = Typography;

function Benefits() {
  return (
    <div>
      <div style={{ margin: "70px auto" }}>
        <div style={{ textAlign: "center", margin: "80px auto" }}>
          <Text className={styles.benefit_topics}>
            Benefits of Choosing Our Services
          </Text>
        </div>
        <div style={{ display: "flex", width: "90%", margin: "auto" }}>
          <div className={styles.benefits_items}>
            <div className={styles.lines}>
              <div className={styles.big_line}></div>
              <div className={styles.small_line}></div>
              <div className={styles.small_line}></div>
            </div>
            <div className={styles.benefit_details}>
              <RiShipLine className={styles.icon} />
              <Text className={styles.benefit_title}>Long Waranty</Text>
              <Text className={styles.benefit_description}>
                Lorem ipsum dolor sit amet consectetur. Nunc pellentesque purus
                at eu eget. Semper morbi morbi ac quis ac pretium aliquam sit
                diam. Ege
              </Text>
            </div>
          </div>
          <div className={styles.benefits_items}>
            <div className={styles.lines}>
              <div className={styles.small_line}></div>
              <div className={styles.big_line}></div>
              <div className={styles.small_line}></div>
            </div>
            <div className={styles.benefit_details}>
              <VscWorkspaceTrusted className={styles.icon} />
              <Text className={styles.benefit_title}>Long Waranty</Text>
              <Text className={styles.benefit_description}>
                Lorem ipsum dolor sit amet consectetur. Nunc pellentesque purus
                at eu eget. Semper morbi morbi ac quis ac pretium aliquam sit
                diam. Ege
              </Text>
            </div>
          </div>
          <div className={styles.benefits_items}>
            <div className={styles.lines}>
              <div className={styles.small_line}></div>
              <div className={styles.small_line}></div>
              <div className={styles.big_line}></div>
            </div>
            <div className={styles.benefit_details}>
              <TbTruckDelivery className={styles.icon} />
              <Text className={styles.benefit_title}>Long Waranty</Text>
              <Text className={styles.benefit_description}>
                Lorem ipsum dolor sit amet consectetur. Nunc pellentesque purus
                at eu eget. Semper morbi morbi ac quis ac pretium aliquam sit
                diam. Ege
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;

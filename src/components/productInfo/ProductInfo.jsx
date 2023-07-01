import { Tabs } from "antd";
import React from "react";
import styles from "./ProductInfo.module.scss";

const { TabPane } = Tabs;

function ProductInfo() {
  return (
    <div className={styles.tabsContainer}>
      <Tabs defaultActiveKey="1" size="large">
        <TabPane tab="Description" key="1" className={styles.tabItem}>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            doloribus quis nisi, quasi aliquam quidem optio quibusdam
            consequuntur minus ullam incidunt assumenda aspernatur aliquid et
            nam maxime beatae quam distinctio.{" "}
          </span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            doloribus quis nisi, quasi aliquam quidem optio quibusdam
            consequuntur minus ullam incidunt assumenda aspernatur aliquid et
            nam maxime beatae quam distinctio.{" "}
          </p>
        </TabPane>
        <TabPane tab="Features" key="2" className={styles.tabItem}>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium, quia? Nesciunt tenetur similique voluptate distinctio
            quaerat optio omnis. Nobis quasi fugit voluptatibus quam
            perspiciatis, corrupti sint maxime exercitationem quia facilis!{" "}
          </span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium, quia? Nesciunt tenetur similique voluptate distinctio
            quaerat optio omnis. Nobis quasi fugit voluptatibus quam
            perspiciatis, corrupti sint maxime exercitationem quia facilis!{" "}
          </p>
        </TabPane>
        <TabPane tab="Shipping & returns" key="3" className={styles.tabItem}>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
            architecto velit, alias eaque dignissimos, unde laudantium ea earum
            reprehenderit iusto quidem quia asperiores, quisquam ipsam officiis.
            Nam fugit laudantium aspernatur.{" "}
          </span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
            architecto velit, alias eaque dignissimos, unde laudantium ea earum
            reprehenderit iusto quidem quia asperiores, quisquam ipsam officiis.
            Nam fugit laudantium aspernatur.{" "}
          </p>
        </TabPane>
        <TabPane tab="Reviews" key="4" className={styles.tabItem}>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            eaque tempora velit deleniti necessitatibus minima assumenda rem
            quam. Quisquam ipsum quae nam et aperiam eaque, ut esse provident
            laboriosam. Laboriosam.
          </span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
            architecto velit, alias eaque dignissimos, unde laudantium ea earum
            reprehenderit iusto quidem quia asperiores, quisquam ipsam officiis.
            Nam fugit laudantium aspernatur.{" "}
          </p>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default ProductInfo;

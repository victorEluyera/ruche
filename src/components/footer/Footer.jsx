import { MailOutlined } from "@ant-design/icons";
import { Image, Input, Typography } from "antd";
import React from "react";
import { FiFacebook } from "react-icons/fi";
import { ImPinterest2 } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";
import logo from "../../asset/footer_logo.png";
import styles from "./Footer.module.scss";

const { Text } = Typography;

function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_info}>
        <BoxOne />
        <BoxTwo />
        <BoxThree />
        <BoxFour />
        <BoxFive />
      </div>
      <div className={styles.footer_copy}>
        <Text className={styles.copy_text}>Copyright</Text>
      </div>
    </div>
  );
}
export default Footer;

function BoxOne() {
  return (
    <div className={styles.box_container}>
      <Image src={logo} preview={false} className={styles.logo_img} />
      <div>
        <Text className={styles.contact}>help@ruchedelamode</Text>
        <Text className={styles.contact}>+234 9069432335</Text>
        <div>
          <ImPinterest2 className={styles.icon} />
          <FiFacebook className={styles.icon} />
          <IoLogoInstagram className={styles.icon} />
        </div>
      </div>
    </div>
  );
}

function BoxTwo() {
  return (
    <div className={styles.box_container}>
      <Text className={styles.text}>FAQ</Text>
      <Text className={styles.text}>Shipping</Text>
      <Text className={styles.text}>Returns</Text>
      <Text className={styles.text}>Terms & Condition</Text>
    </div>
  );
}

function BoxThree() {
  return (
    <div className={styles.box_container}>
      <Text className={styles.text}>Home</Text>
      <Text className={styles.text}>Collections</Text>
      <Text className={styles.text}>Best Sellers</Text>
      <Text className={styles.text}>Our Brand</Text>
    </div>
  );
}

function BoxFour() {
  return (
    <div className={styles.box_container}>
      <Text className={styles.text}>Create Account</Text>
      <Text className={styles.text}>Accounts</Text>
      <Text className={styles.text}>Contact Us</Text>
    </div>
  );
}

function BoxFive() {
  return (
    <div className={styles.box_container}>
      <Text className={styles.text}>Sign Up & Save</Text>
      <Text className={styles.special_offer_description}>
        Subscribe to get special offers, free giveaways and once in a lifetime
        deals{" "}
      </Text>
      <Input
        placeholder="Enter Your Email"
        prefix={
          <MailOutlined color="#2A4468" style={{ marginRight: "10px" }} />
        }
        bordered={false}
        className={styles.input}
      />
    </div>
  );
}

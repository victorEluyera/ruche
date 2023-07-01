import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import React from "react";
import styles from "./NewsLetter.module.scss";

const { Text } = Typography;

function NewsLetter() {
  return (
    <div className={styles.newsletter_container}>
      <div className={styles.newsletter_wrapper}>
        <Text className={styles.topic}>Newsletter</Text>
        <Text className={styles.description}>
          Be the first to get style tips, new arrivals, and our best offers
          delivered directly to your mail.
        </Text>
        <Form className={styles.newsletter_forms}>
          <Input placeholder="Enter Your Email" bordered={false} />
          <Button shape="circle" type="submit" icon={<ArrowRightOutlined />} />
        </Form>
      </div>
    </div>
  );
}

export default NewsLetter;

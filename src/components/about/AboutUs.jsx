import { Carousel, Image, Typography } from "antd";
import React from "react";
import pic1 from "../../asset/Rectangle 18.png";
import pic2 from "../../asset/Rectangle 73.png";
import pic3 from "../../asset/Rectangle 74.png";
import pic4 from "../../asset/Rectangle 75.png";
import styles from "./About.module.scss";

const { Text } = Typography;

function AboutUs() {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_wrapper}>
        <div className={styles.carousel_container}>
          <Carousel autoplay dots={false} effect="fade">
            <div>
              <Image preview={false} src={pic1} />
            </div>
            <div>
              <Image preview={false} src={pic2} />
            </div>
            <div>
              <Image preview={false} src={pic3} />
            </div>
            <div>
              <Image preview={false} src={pic4} />
            </div>
          </Carousel>
        </div>
        <div className={styles.About_details}>
          <Text className={styles.details_title}>Our Brand</Text>
          <div className={styles.details_texts}>
            <Text>
              Making a luxurious lifestyle accessible for a generous group of
              bold and beautiful women is our daily drive, Our customers get the
              very best of experience while using our products.
            </Text>
            <Text>
              Read more about us <span className={styles.link}>here</span>{" "}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

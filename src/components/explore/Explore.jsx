import { Image, Typography } from "antd";
import React from "react";
import { ImPinterest2 } from "react-icons/im";
import { SlSocialInstagram } from "react-icons/sl";
import picture1 from "../../asset/Rectangle 19.png";
import picture2 from "../../asset/Rectangle 20.png";
import picture3 from "../../asset/Rectangle 21.png";
import picture4 from "../../asset/Rectangle 22.png";
import styles from "./Explore.module.scss";

const InstagramCustomPreview = () => {
  return (
    <div>
      <SlSocialInstagram />
    </div>
  );
};
const PintrestCustomPreview = () => {
  return (
    <div>
      <ImPinterest2 />
    </div>
  );
};

const { Text } = Typography;

function Explore() {
  return (
    <div className={styles.explore_container}>
      <div className={styles.explore_wrapper}>
        <Text className={styles.explore_topics}>Explore Our Socials</Text>
        <Text className={styles.explore_text}>
          Follow us <span id={styles.insta_name}>@RUCHEDELAMODE</span> and use{" "}
          <span id={styles.insta_tags}>#RuchedelaMode</span> to share the love.
        </Text>
        <div className={styles.images}>
          <Image
            src={picture1}
            preview={{
              mask: <InstagramCustomPreview />,
              visible: false,
              maskClassName: styles.mask,
            }}
          />

          <Image
            src={picture2}
            preview={{
              mask: <InstagramCustomPreview />,
              visible: false,
              maskClassName: styles.mask,
            }}
          />
          <Image
            src={picture3}
            preview={{
              mask: <PintrestCustomPreview />,
              visible: false,
              maskClassName: styles.mask,
            }}
          />
          <Image
            src={picture4}
            preview={{
              mask: <PintrestCustomPreview />,
              visible: false,
              maskClassName: styles.mask,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Explore;

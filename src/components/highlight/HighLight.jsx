import { HeartOutlined } from "@ant-design/icons";
import { Col, Image, Row, Spin, Typography } from "antd";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AllProductsContext } from "../../context/ProductContext";
import styles from "./HighLight.module.scss";
const HoverImage = ({ img }) => {
  return (
    <div>
      <Image
        src={img}
        preview={false}
        width={"250px"}
        height={"480px"}
        style={{ borderRadius: "20px", objectFit: "cover" }}
      />
    </div>
  );
};

const { Text } = Typography;

function HighLight() {
  const navigate = useNavigate();
  const { allProducts, isLoading } = useContext(AllProductsContext);
  const highLightProduct = allProducts.slice(0, 4);

  return (
    <div>
      <div className={styles.highlight_container}>
        <div className={styles.highlight_header_wrapper}>
          <Text className={styles.header_topic}>Collection Highlights</Text>
          <Text className={styles.view_all} onClick={() => navigate("/shop")}>
            View All
          </Text>
        </div>
        {isLoading ? (
          <div style={{ textAlign: "center" }}>
            <Spin size="large" />
          </div>
        ) : (
          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            {highLightProduct.map((product) => (
              <Col className="gutter-row" span={6} key={product.productId}>
                <ProductCard
                  img={product.previewImage}
                  hoverImg={product?.otherImages.at(0).url}
                  productName={product.Title}
                  productPrice={product.Price}
                  colors={product.colorsAvailable}
                  product={product}
                />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default HighLight;

export const ProductCard = ({
  img,
  productName,
  productPrice,
  colors,
  hoverImg,
  product,
}) => {
  const navigate = useNavigate();
  const id = String(productName).toLowerCase().split(" ").join("");
  const handleDetails = () => {
    navigate(`/brand/${id}`, {
      state: {
        product,
      },
    });
  };
  return (
    <div className={styles.card_container} onClick={handleDetails}>
      <Image
        width={"250px"}
        height={"480px"}
        src={img}
        style={{ borderRadius: "20px", objectFit: "cover" }}
        alt="products picture"
        preview={{
          mask: <HoverImage img={hoverImg} />,
          visible: false,
          maskClassName: styles.mask,
        }}
      />
      <div className={styles.like_button}>
        <HeartOutlined />
      </div>
      <div className={styles.cards}>
        <Text className={styles.product_name}>{productName}</Text>
        <Text className={styles.product_price}>{productPrice}</Text>
      </div>
      <div style={{ display: "flex" }}>
        {colors.map((color, index) => (
          <div
            key={index}
            className={styles.color}
            style={{
              background: color,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

import { Col, Row, Spin } from "antd";
import React, { useContext } from "react";
import { AllProductsContext } from "../../context/ProductContext";
import { ProductCard } from "../highlight/HighLight";
import styles from "./ProductList.module.scss";

function ProductList({ filtered, isFilter }) {
  const { allProducts, isLoading } = useContext(AllProductsContext);

  console.log(allProducts);
  return (
    <div className={styles.container}>
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
          {isFilter
            ? filtered?.map((product) => (
                <Col className="gutter-row" span={6} key={product.productId}>
                  <ProductCard
                    img={product?.previewImage}
                    hoverImg={product?.otherImages.at(0).url}
                    productName={product.Title}
                    productPrice={product?.Price}
                    colors={product?.colorsAvailable}
                    product={product}
                  />
                </Col>
              ))
            : allProducts?.map((product) => (
                <Col className="gutter-row" span={6} key={product.productId}>
                  <ProductCard
                    img={product.previewImage}
                    hoverImg={product?.otherImages.at(0).url}
                    productName={product?.Title}
                    productPrice={product.Price}
                    colors={product.colorsAvailable}
                    product={product}
                  />
                </Col>
              ))}
        </Row>
      )}
    </div>
  );
}

export default ProductList;

import React, { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import PotentialProducts from "../components/potentialProducts/PotentialProducts";
import { ImageGallary } from "../components/productImageGallery/ProductImage";
import ProductInfo from "../components/productInfo/ProductInfo";
import ProductDetail from "../components/products-details/ProductDetail";

function ProductsPage() {
  // const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  let [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const item = location.state.product;
  useEffect(() => {
    setProduct(item);
  }, [item]);
  return (
    <div style={{ marginTop: "150px" }}>
      <div
        style={{
          color: "#2A4468",
          fontSize: "24px",
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <span>Collection</span> <AiOutlineRight />
        <span>Product</span>
        <AiOutlineRight /> {product.Title}
      </div>
      <ProductDetailHead product={product} />
      <ProductInfo />
      <PotentialProducts />
    </div>
  );
}

export default ProductsPage;

const ProductDetailHead = ({ product }) => {
  const previewImage = product.previewImage;
  const otherImages = product.otherImages;
  return (
    <div
      style={{
        margin: "40px 0",
        display: "flex",
        justifyContent: "space-between",
        width: "70%",
      }}
    >
      <ImageGallary previewImage={previewImage} otherImages={otherImages} />
      <ProductDetail product={product} />
    </div>
  );
};

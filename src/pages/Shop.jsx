import { Button } from "antd";
import { get, ref } from "firebase/database";
import React, { useState } from "react";
import ProductList from "../components/productList/ProductList";
import ShopHead from "../components/shop_head/ShopHead";
import { db } from "../firebase";

function Shop() {
  const [filtered, setFiltered] = useState();
  const [isFilter, setIsFilter] = useState(false);
  const handleFilter = (color, size, style) => {
    const productsRef = ref(db, "ourproducts");

    get(productsRef).then((snapshot) => {
      const productsData = snapshot.val();

      const filteredProducts = Object.values(productsData).filter(
        (product) =>
          product.Color === color ||
          product.colorsAvailable?.includes(color) ||
          product.Size === size ||
          product.styles === style
      );

      setFiltered(filteredProducts);
    });
    setIsFilter(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <ShopHead handleFilter={handleFilter} setIsFilter={setIsFilter} />
      <ProductList filtered={filtered} isFilter={isFilter} />
      <Button
        type="primary"
        style={{ textAlign: "center", borderRadius: "0", marginBottom: "40px" }}
      >
        LOAD MORE
      </Button>
    </div>
  );
}

export default Shop;

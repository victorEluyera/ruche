import React from "react";
import CartSummary from "../components/cart-summary/CartSummary";
import CartProducts from "../components/cartproduct/CartProducts";
import RecentView from "../components/recent-view/RecentView";

function Carts() {
  return (
    <div style={{ marginTop: "150px" }}>
      <div
        style={{ display: "flex", width: "90%", margin: " auto", gap: "20px" }}
      >
        <div style={{ flex: 3 }}>
          <CartProducts />
        </div>
        <div style={{ flex: 2 }}>
          <CartSummary />
        </div>
      </div>
      <RecentView />
    </div>
  );
}

export default Carts;

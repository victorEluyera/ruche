import React from "react";
import CheckoutCartSummary from "../components/checkout-cart-summary/CheckoutCartSummary";
import CheckoutSummary from "../components/summary/CheckoutSummary";

function Summary() {
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            width: "90%",
            margin: " auto",
            gap: "70px",
          }}
        >
          <div style={{ flex: 2.5, paddingTop: "150PX" }}>
            <CheckoutSummary />
          </div>
          <div style={{ flex: 2, paddingTop: "150PX" }}>
            <CheckoutCartSummary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;

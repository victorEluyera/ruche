import React from "react";
import CheckoutCartSummary from "../components/checkout-cart-summary/CheckoutCartSummary";
import PaymentMethod from "../components/payment-method/PaymentMethod";

function PaymentPage() {
  return (
    <div>
      <div
        style={{ display: "flex", width: "90%", margin: " auto", gap: "70px" }}
      >
        <div style={{ flex: 2.5 }}>
          <PaymentMethod />
        </div>
        <div style={{ flex: 2, paddingTop: "150PX" }}>
          <CheckoutCartSummary />
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;

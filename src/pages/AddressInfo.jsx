import React from "react";
import AddressForm from "../components/address-form/AddressForm";
import CheckoutCartSummary from "../components/checkout-cart-summary/CheckoutCartSummary";

function AddressInfo() {
  return (
    <div>
      <div
        style={{ display: "flex", width: "90%", margin: " auto", gap: "50px" }}
      >
        <div style={{ flex: 3 }}>
          <AddressForm />
        </div>
        <div style={{ flex: 2, paddingTop: "150PX" }}>
          <CheckoutCartSummary />
        </div>
      </div>
    </div>
  );
}

export default AddressInfo;

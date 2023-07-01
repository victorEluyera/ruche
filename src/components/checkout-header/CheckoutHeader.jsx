import { Image, Steps } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../asset/RDM Logo (1)-1 1.png";
import styles from "./CheckoutHeader.module.scss";

const { Step } = Steps;

function CheckoutHeader() {
  const location = useLocation();

  const activePage = location.pathname;

  const steps = [
    {
      title: "Address Information",
      link: "/address-info",
    },
    {
      title: "Delivery & Payment",
      link: "/delivery-payment",
    },
    {
      title: "Summary",
      link: "/summary",
    },
  ];

  const currentStepIndex = steps.findIndex((step) => step.link === activePage);

  return (
    <div className={styles.container}>
      <Link to={"/"}>
        <div style={{ textAlign: "center" }}>
          <Image src={logo} alt="Ruche Logo" preview={false} />
        </div>
      </Link>
      <Steps
        current={currentStepIndex}
        style={{
          background: "#2A4468",
          width: "92%",
          margin: "auto",
          padding: "20px 30px",
        }}
      >
        {steps.map((step, index) => (
          <Step key={index} title={step.title} />
        ))}
      </Steps>
    </div>
  );
}

export default CheckoutHeader;

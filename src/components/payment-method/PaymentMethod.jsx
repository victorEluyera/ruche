import { Radio, Typography } from "antd";
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMethodsToCheckout } from "../../redux/rucheSlice";
import styles from "./PaymentMethod.module.scss";

const { Text } = Typography;

function PaymentMethod() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const info = useSelector((state) => state.ruche.checkout);
  const [delivery, setDelivery] = useState("");
  const [payment, setPayment] = useState(1);

  const handleDeliveryOnChange = (e) => {
    setDelivery(e.target.value);
    console.log(e.target.value);
  };

  const handlePaymentOnChange = (e) => {
    setPayment(e.target.value);
    console.log(e.target.value);
  };

  const handleAddMethod = () => {
    dispatch(
      addMethodsToCheckout({
        ...info,
        paymentway: payment,
        deliveryMethod: delivery,
      })
    );
    navigate("/summary");
  };
  return (
    <div style={{ width: "100%" }} className={styles.container}>
      <Text className={styles.title}>Delivery</Text>
      <Radio.Group
        onChange={handleDeliveryOnChange}
        value={delivery}
        style={{ margin: "30px auto" }}
      >
        <Radio
          value={"Polish Post"}
          className={styles.delivery_box}
          style={{ width: "100%" }}
        >
          <>
            <Text className={styles.text}> Polish Post</Text>
            <Text className={styles.prize}> N 3,000</Text>
          </>
        </Radio>
        <Radio value={"DHL Worldwide"} className={styles.delivery_box}>
          <>
            <Text className={styles.text}>DHL Worldwide</Text>
            <Text className={styles.prize}> N 2,000</Text>
          </>
        </Radio>
        <Radio value={"Fedex"} className={styles.delivery_box}>
          <>
            <Text className={styles.text}> Fedex</Text>
            <Text className={styles.prize}> N 3,000</Text>
          </>
        </Radio>
        <Radio value={"Personal Pickup"} className={styles.delivery_box}>
          <>
            <Text className={styles.text}> Personal Pickup</Text>
            <Text className={styles.prize}> N 1,000</Text>
          </>
        </Radio>
      </Radio.Group>
      <Text className={styles.title}>Payment</Text>

      <Radio.Group
        onChange={handlePaymentOnChange}
        value={payment}
        style={{ margin: "20px auto 30px" }}
      >
        <Radio value={"Online Payment"} className={styles.delivery_box}>
          <Text className={styles.text}> Online Payment</Text>
        </Radio>
        <Radio value={"Paypal"} className={styles.delivery_box}>
          <Text className={styles.text}> Paypal</Text>
        </Radio>
        <Radio value={"Bank Transfer"} className={styles.delivery_box}>
          <Text className={styles.text}> Bank Transfer</Text>
        </Radio>
        <Radio value={"Cash On Delivery"} className={styles.delivery_box}>
          <Text className={styles.text}> Cash On Delivery</Text>
        </Radio>
      </Radio.Group>
      <button type="submit" className={styles.btn} onClick={handleAddMethod}>
        <span>Next</span>
        <span>
          <AiOutlineArrowRight style={{ marginTop: "5px" }} />
        </span>
      </button>
    </div>
  );
}

export default PaymentMethod;

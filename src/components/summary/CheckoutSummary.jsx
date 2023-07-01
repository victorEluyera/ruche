import { Checkbox, Divider, Typography } from "antd";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./CheckoutSummary.module.scss";

const { Text } = Typography;

function CheckoutSummary() {
  const summary = useSelector((state) => state.ruche.checkout);
  return (
    <div>
      <div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                gap: "35px",
                width: "80%",
              }}
            >
              <Text className={styles.head_class}>Customer Information</Text>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {summary.firstName ||
                  (summary.lastName && (
                    <Text
                      className={styles.username}
                    >{`${summary.firstName} ${summary.lastName}  `}</Text>
                  ))}
                {summary.companyName && (
                  <Text className={styles.username}>{summary.companyName}</Text>
                )}
                <Text style={{ width: "90%" }} className={styles.normal_class}>
                  {summary.address}
                </Text>
                <Text className={styles.normal_class}>{summary.country}</Text>
              </div>
            </div>
            <Text className={styles.edit}>Edit</Text>
          </div>
          <Divider
            style={{
              height: "2px",
              background: "rgba(42, 68, 104, 0.6)",
            }}
          />
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                gap: "35px",
                width: "80%",
              }}
            >
              <Text className={styles.head_class}>Delivery Information</Text>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Text className={styles.normal_class}>
                  {summary.deliveryMethod}
                </Text>
                <Text className={styles.normal_class}>
                  {summary.deliveryMethod}
                </Text>
              </div>
            </div>
            <Text className={styles.edit}>Edit</Text>
          </div>
          <Divider
            style={{
              height: "2px",
              background: "rgba(42, 68, 104, 0.6)",
            }}
          />
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                gap: "35px",
              }}
            >
              <Text className={styles.head_class}>Contact Information</Text>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {summary.email && (
                  <Text className={styles.normal_class}>{summary.email} </Text>
                )}
                {summary.contactNum && (
                  <Text className={styles.normal_class}>
                    +{summary.contactNum}
                  </Text>
                )}
                {summary.companyEmail && (
                  <Text className={styles.normal_class}>
                    {summary.companyEmail}{" "}
                  </Text>
                )}
                {summary.companyContact && (
                  <Text className={styles.normal_class}>
                    +{summary.companyContact}
                  </Text>
                )}
              </div>
            </div>
            <Text className={styles.edit}>Edit</Text>
          </div>
          <Divider
            style={{
              height: "2px",
              background: "rgba(42, 68, 104, 0.6)",
            }}
          />
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                gap: "35px",
              }}
            >
              <Text className={styles.head_class}>Payment</Text>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Text className={styles.normal_class}>
                  {summary.paymentway}
                </Text>
              </div>
            </div>
            <Text className={styles.edit}>Edit</Text>
          </div>
          <Divider
            style={{
              height: "2px",
              background: "rgba(42, 68, 104, 0.6)",
            }}
          />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Text className={styles.consents}>Consents & Regulations</Text>
        <Checkbox className={styles.consents_checkbox}>
          I accept the shop rules & privacy policy
        </Checkbox>
        <Link to={"/summary"} style={{ textDecoration: "none" }}>
          <button type="submit" className={styles.btn}>
            <span>Confirm Payment</span>
            <span>
              <AiOutlineArrowRight style={{ marginTop: "5px" }} />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CheckoutSummary;

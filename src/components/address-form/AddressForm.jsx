import { InfoCircleOutlined } from "@ant-design/icons";
import { Input, Radio, Tooltip, Typography } from "antd";
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCheckOut } from "../../redux/rucheSlice";
import styles from "./AddresForm.module.scss";

const { Text } = Typography;
function AddressForm() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const [userFormData, setUserFormData] = useState({
    lastName: "",
    email: "",
    company: "",
    address: "",
    country: "",
    postalCode: "",
    city: "",
    contactNum: "",
    firstName: "",
    password: "",
    companyName: "",
    companyEmail: "",
    companyContact: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", userFormData);
    dispatch(addCheckOut({ ...userFormData }));
    navigate("/delivery-payment");
  };

  return (
    <div style={{ marginBottom: "100px" }}>
      <Radio.Group
        onChange={onChange}
        value={value}
        style={{ display: "flex", gap: "50px", margin: "40px 0" }}
      >
        <Radio value={1} className={styles.radiobtn}>
          Personal Order
        </Radio>
        <Radio value={2} className={styles.radiobtn}>
          Company Order
        </Radio>
      </Radio.Group>
      <form onSubmit={handleSubmit} style={{ position: "relative" }}>
        <div>
          <Text className={styles.formHeader}>Customer Information</Text>
          {value === 2 && (
            <div style={{ position: "relative" }}>
              <Input
                type="text"
                value={userFormData.companyName}
                name="companyName"
                onChange={handleChange}
                className={styles.input}
              />
              <label className={styles.label}>Company Name</label>
            </div>
          )}
          {value === 1 && (
            <div>
              <div style={{ position: "relative" }}>
                <Input
                  type="text"
                  value={userFormData.firstName}
                  name="firstName"
                  onChange={handleChange}
                  className={styles.input}
                />
                <label className={styles.label}>First Name</label>
              </div>

              <div style={{ position: "relative" }}>
                <Input
                  type="text"
                  value={userFormData.lastName}
                  name="lastName"
                  onChange={handleChange}
                  className={styles.input}
                />
                <label className={styles.label}>Last Name</label>
              </div>

              <div style={{ position: "relative" }}>
                <Input
                  type="text"
                  value={userFormData.company}
                  name="company"
                  onChange={handleChange}
                  placeholder="Optional"
                  className={styles.input}
                  suffix={
                    <Tooltip title="Company You are currently working for">
                      <InfoCircleOutlined
                        style={{
                          color: "rgba(0,0,0,.45)",
                        }}
                      />
                    </Tooltip>
                  }
                />
                <label
                  style={{
                    zIndex: "1",
                  }}
                  className={styles.label}
                >
                  Company
                </label>
              </div>
            </div>
          )}
          <div style={{ position: "relative" }}>
            <Input
              type="text"
              value={userFormData.address}
              name="address"
              onChange={handleChange}
              className={styles.input}
            />
            <label className={styles.label}>Address</label>
          </div>

          <div style={{ position: "relative" }}>
            <Input
              type="text"
              value={userFormData.country}
              name="country"
              onChange={handleChange}
              className={styles.input}
            />
            <label className={styles.label}>Country</label>
          </div>
          <div style={{ display: "flex", gap: "15px" }}>
            <div style={{ position: "relative", flex: "2" }}>
              <Input
                type="text"
                value={userFormData.postalCode}
                name="postalCode"
                onChange={handleChange}
                className={styles.input}
              />
              <label className={styles.label}>Postal Code</label>
            </div>

            <div style={{ position: "relative", flex: "3" }}>
              <Input
                type="text"
                value={userFormData.city}
                name="city"
                onChange={handleChange}
                className={styles.input}
              />
              <label className={styles.label}>City </label>
            </div>
          </div>

          <Text className={styles.formHeader}>Contact Information</Text>
          <div style={{ width: "60%" }}>
            {value === 1 && (
              <div>
                <div style={{ position: "relative" }}>
                  <Input
                    type="email"
                    value={userFormData.email}
                    name="email"
                    onChange={handleChange}
                    className={styles.input}
                  />
                  <label className={styles.label}>Your email</label>
                </div>

                <div style={{ position: "relative" }}>
                  <Input
                    type="number"
                    value={userFormData.contactNum}
                    name="contactNum"
                    onChange={handleChange}
                    className={styles.input}
                  />
                  <label className={styles.label}>Phone Number</label>
                </div>
              </div>
            )}
            {value === 2 && (
              <div>
                <div style={{ position: "relative" }}>
                  <Input
                    type="email"
                    value={userFormData.companyEmail}
                    name="companyEmail"
                    onChange={handleChange}
                    className={styles.input}
                  />
                  <label className={styles.label}>Company Email</label>
                </div>
                <div style={{ position: "relative" }}>
                  <Input
                    type="text"
                    value={userFormData.companyContact}
                    name="companyContact"
                    onChange={handleChange}
                    className={styles.input}
                  />
                  <label className={styles.label}>Company Phone Number</label>
                </div>
              </div>
            )}

            <Text className={styles.register}>Register</Text>
            <Text className={styles.regInfo}>
              All you need to do is enter your password after shopping. we will
              register an account for the email provided above.
            </Text>
            <div style={{ position: "relative" }}>
              <Input.Password
                value={userFormData.password}
                name="password"
                onChange={handleChange}
                className={styles.input}
              />
              <Text className={styles.passwordInfo}>
                Must contain a minimum of 8 characters
              </Text>
              <label
                style={{
                  zIndex: "1",
                  top: "25px",
                  height: "fit-content",
                }}
                className={styles.label}
              >
                Password{" "}
              </label>
            </div>
          </div>
        </div>

        <button type="submit" className={styles.btn}>
          <span>Next</span>
          <span>
            <AiOutlineArrowRight style={{ marginTop: "5px" }} />
          </span>
        </button>
      </form>
    </div>
  );
}

export default AddressForm;

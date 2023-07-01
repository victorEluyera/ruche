import { Badge, Image, Space } from "antd";
import React from "react";
import { BsPerson, BsSearch } from "react-icons/bs";
import { TbShoppingBag } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo from "../../asset/RDM Logo (1)-1 1.png";
import styles from "./NavBar.module.scss";

function NavBar() {
  const cartData = useSelector((state) => state.ruche.productData);
  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "#brand", label: "OUR BRAND" },
    { to: "/shop", label: "SHOP" },
  ];

  const linkStyles = {
    color: "#121212",
    opacity: "0.5",
  };

  const activeLinkStyles = {
    ...linkStyles,
    opacity: "1",
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar_wrapper}>
        <Link to={"/"}>
          <Image src={logo} alt="Ruche Logo" preview={false} />
        </Link>
        <Space size={83}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              style={({ isActive }) =>
                isActive ? activeLinkStyles : linkStyles
              }
              className={styles.navlink}
            >
              {link.label}
            </NavLink>
          ))}
        </Space>
        <Space size={50}>
          <BsSearch className={styles.nav_icon} />
          <BsPerson className={styles.nav_icon} />
          <Link to={"/carts"}>
            <Badge count={cartData.length} showZero>
              <TbShoppingBag className={styles.nav_icon} />
            </Badge>
          </Link>
        </Space>
      </div>
    </div>
  );
}

export default NavBar;

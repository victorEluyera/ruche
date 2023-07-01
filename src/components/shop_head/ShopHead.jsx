import { Button, Modal, Typography } from "antd";
import React, { useState } from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import useColorAlgorithmHooks from "../../hooks/useColorAlgorithmHooks";
import { FilterComponents } from "../filter/Filter";
import styles from "./ShopHead.module.scss";

const { Text } = Typography;

const allSize = [
  { id: 1, sizeName: "XS" },
  { id: 2, sizeName: "S" },
  { id: 3, sizeName: "M" },
  { id: 4, sizeName: "L" },
  { id: 5, sizeName: "XL" },
  { id: 6, sizeName: "2XL" },
  { id: 7, sizeName: "3XL" },
  { id: 8, sizeName: "4XL" },
];

const allStyles = [
  { id: 1, stylesName: "top" },
  { id: 2, stylesName: "bottom" },
  { id: 3, stylesName: "overall" },
  { id: 4, stylesName: "two-piece" },
];

function ShopHead({ handleFilter, setIsFilter }) {
  const popularColors = useColorAlgorithmHooks();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [btnSelected, setBtnSelected] = useState({
    color: {},
    size: {},
    style: {},
  });

  const handleSelectColor = (id) => {
    const findColor = popularColors.find((name) => name.id === id);
    setBtnSelected({ ...btnSelected, color: findColor });
  };

  const handleSelectSize = (id) => {
    const findSize = allSize.find((name) => name.id === id);
    setBtnSelected({ ...btnSelected, size: findSize });
  };

  const handleSelectStyles = (id) => {
    const findStyles = allStyles.find((name) => name.id === id);
    setBtnSelected({ ...btnSelected, style: findStyles });
  };

  const showModal = () => {
    setIsModalOpen(true);
    setIsFilter(false);
  };

  const handleOk = () => {
    handleFilter(
      btnSelected.color.colorName,
      btnSelected.size.sizeName,
      btnSelected.style.stylesName
    );
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className={styles.container}>
        <Text className={styles.text}>Our Collection</Text>
        <>
          <Button
            icon={<HiAdjustmentsHorizontal style={{ marginRight: "10px" }} />}
            size={"large"}
            onClick={showModal}
            type="text"
            className={styles.filter_btn}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Filter{" "}
          </Button>
          <Modal open={isModalOpen} onCancel={handleCancel} footer={""}>
            <FilterComponents
              allSize={allSize}
              allStyles={allStyles}
              onOk={handleOk}
              handleSelectColor={handleSelectColor}
              popularColors={popularColors}
              selectedbtn={btnSelected}
              handleSelectSize={handleSelectSize}
              handleSelectStyles={handleSelectStyles}
            />
          </Modal>
        </>
      </div>
    </div>
  );
}

export default ShopHead;

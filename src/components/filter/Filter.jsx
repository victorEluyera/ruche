import { Button, Typography } from "antd";
import React from "react";
import styles from "../shop_head/ShopHead.module.scss";

const { Text } = Typography;

export const FilterComponents = ({
  onOk,
  handleSelectColor,
  allSize,
  allStyles,
  popularColors,
  selectedbtn,
  handleSelectSize,
  handleSelectStyles,
}) => {
  return (
    <div>
      <div className={styles.filter_container}>
        <div className={styles.filter_selection}>
          <Text className={styles.selection_text}>
            <span>Style: </span>
            Top bottom overall two-piece
          </Text>
          <div>
            {allStyles.map((name) => (
              <Button
                key={name.id}
                className={styles.select_btn}
                style={{
                  border:
                    name?.id === selectedbtn.style.id
                      ? "1px solid #2a4468"
                      : "",
                }}
                onClick={() => handleSelectStyles(name.id)}
              >
                {name.stylesName}
              </Button>
            ))}
          </div>
        </div>
        <div className={styles.filter_selection}>
          <Text className={styles.selection_text}>
            <span>Colour: </span>
            Beige
          </Text>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "80%",
            }}
          >
            {popularColors.map((color) => (
              <span
                key={color.id}
                className={styles.color}
                style={{
                  background: color.colorName,
                  border:
                    selectedbtn?.color?.id === color.id
                      ? "4px solid white"
                      : "",
                  outline:
                    selectedbtn?.color?.id === color.id
                      ? "1px solid black"
                      : "",
                }}
                onClick={() => handleSelectColor(color.id)}
              ></span>
            ))}
          </div>
        </div>
        <div className={styles.filter_selection}>
          <div className={styles.size_selection}>
            <Text className={styles.size_selection_text}>
              <span>Colour: </span>
              Beige
            </Text>
            <Text className={styles.second_text}>Size guide</Text>
          </div>
          <div className={styles.btn_container}>
            {allSize.map((name) => (
              <Button
                key={name.id}
                className={styles.size_btn}
                style={{
                  outline:
                    selectedbtn?.size?.id === name?.id
                      ? "2px solid #2a4468"
                      : "",
                }}
                onClick={() => handleSelectSize(name.id)}
              >
                {name.sizeName}
              </Button>
            ))}
          </div>
        </div>
        <div className={styles.original_filter_btn}>
          <Button
            type="primary"
            onClick={onOk}
            style={{ background: "#2A4468" }}
          >
            FILTER
          </Button>
        </div>
      </div>
    </div>
  );
};

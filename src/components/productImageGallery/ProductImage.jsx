import { HeartOutlined } from "@ant-design/icons";
import { Image } from "antd";
import React, { useEffect, useState } from "react";

export const ImageGallary = ({ otherImages, previewImage }) => {
  const [preOtherImg, setPreOtherImg] = useState([]);

  useEffect(() => {
    if (otherImages && otherImages.length === 4) {
      setPreOtherImg(otherImages);
    } else {
      const filledArray = otherImages ? [...otherImages] : [];

      while (filledArray.length < 3) {
        filledArray.push({ index: 4, url: previewImage });
      }

      filledArray.push({ index: 4, url: previewImage }); // Add previewImage again to make it 4 elements

      setPreOtherImg(filledArray);
    }
  }, [otherImages, previewImage]);

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        {preOtherImg?.map((item, index) => (
          <div style={{ width: "158px" }} key={index}>
            <Image
              src={item?.url}
              style={{
                width: "100%",
                height: "152px",
                objectFit: "contain",
                borderRadius: "15px",
                filter: "drop-shadow(1px 1px 30px rgba(196, 196, 196, 0.5))",
              }}
            />
          </div>
        ))}
      </div>
      <div style={{ position: "relative" }}>
        <Image
          src={previewImage}
          style={{
            width: "400px",
            height: "650px",
            objectFit: "cover",
            borderRadius: "15px",
            filter: "drop-shadow(1px 1px 30px rgba(196, 196, 196, 0.5))",
          }}
          preview={false}
        />
        <div
          style={{
            position: "absolute",
            top: "4.87%",

            right: "7.64%",
          }}
        >
          <HeartOutlined size={21} />
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Image, Flex } from "antd";
import pupleBlock from "../../Assets/Images/pupleBlock.png";
import blueBlock from "../../Assets/Images/blueBlock.png";
import "./style.css";

const Footer = () => {
  return (
    <React.Fragment>
      <Flex justify="space-between" style={{ position: "relative" }}>
        <div style={{ position: "absolute", bottom: -100, left: 0 }}>
          <Image src={pupleBlock} preview={false} />
        </div>
        <div style={{ position: "absolute", bottom: -100, right: 0 }}>
          <Image src={blueBlock} preview={false} />
        </div>
      </Flex>
      
    </React.Fragment>
  );
};
export default Footer;

import React from "react";
import "./style.css";
import { Flex, Image, Typography, Grid } from "antd";
import Logo from "../../Assets/Icon/logo.svg";
import Images from "../../Assets/Images/loginImage.png";

const { Title } = Typography;
const { useBreakpoint } = Grid;

const Header = () => {
  const screens = useBreakpoint();
  const imageWidth = screens.xxl ? "42.3vmax" : "41vmax";
  const logoWidth = screens.xxl ? "15vmax" : "10vmax";
  return (
    <React.Fragment>
      <div style={{ width: "100%" }}>
        <div className="primary-gradient">
          <Flex
            align="center"
            justify="space-between"
            style={{ margin: "0 48px" }}
          >
            <div>
              <Image src={Logo} preview={false} width={logoWidth} />
              <Title
                style={{
                  display: "inline",
                  padding: "0 16px",
                  color: "white",
                  fontWeight: "bold",
                  letterSpacing: "8px",
                }}
              >
                Paper Translation
              </Title>
            </div>
            <div style={{ overflow: "hidden" }}>
              <Image src={Images} preview={false} width={imageWidth} />
            </div>
          </Flex>
        </div>
        <div className="secondary-gradient"></div>
      </div>
    </React.Fragment>
  );
};

export default Header;

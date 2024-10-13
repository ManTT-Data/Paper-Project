import React from "react";
import { Typography, Button, Flex, Input, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import "../style.css";

const { Title } = Typography;
const SignUp = () => {
  return (
    <React.Fragment>
      <Flex justify="center" align="center" vertical>
        <Title
          style={{ color: "#459aff", fontSize: "60px", fontWeight: "700" }}
        >
          Sign Up
        </Title>
        <Space
          direction="vertical"
          size={16}
          style={{ display: "flex", width: "35%" }}
        >
          <Input placeholder="User Name" className="inputBlock" size="large" />

          <Input placeholder="Email" className="inputBlock" size="large" />
          <Input.Password
            size="large"
            placeholder="Password"
            className="inputPassword"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          <Input.Password
            size="large"
            placeholder="Confirm Password"
            className="inputPassword"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          <Button
            type="primary"
            className="buttonBlock"
            style={{ width: "100%" }}
          >
            <label className="buttonTitle">Sign Up</label>
          </Button>
        </Space>
      </Flex>
    </React.Fragment>
  );
};

export default SignUp;

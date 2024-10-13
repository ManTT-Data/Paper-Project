import { Flex, Typography, Input, Space, Button, Divider } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import GoogleButton from "../googleButton";
import FacebookButton from "../facebookButtuon";
import Forgotpassword from "./forgotPassword";
import SignUp from "./signUpWays";
import React from "react";
import "../style.css";

const { Title } = Typography;
const Login = () => {
  return (
    <React.Fragment>
      <Flex justify="center" align="center" vertical>
        <Title
          style={{ color: "#459aff", fontSize: "60px", fontWeight: "700" }}
        >
          Login
        </Title>
        <Space
          direction="vertical"
          size={16}
          style={{ display: "flex", width: "35%" }}
        >
          <Input placeholder="Email" size="large" className="inputBlock" />
          <Input.Password
            className="inputPassword"
            placeholder="Password"
            size="large"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          <Button
            type="primary"
            className="buttonBlock"
            style={{ width: "100%" }}
          >
            <label className="buttonTitle">Login</label>
          </Button>
        </Space>
        <div style={{ width: "35%" }}>
          <Flex justify="space-between" align="start">
            <Forgotpassword />
            <SignUp />
          </Flex>
        </div>
        <Divider
          style={{
            borderColor: "#AFAFAF",
            fontSize: "18px",
            width: "35%",
            minWidth: "35%",
          }}
        >
          Or
        </Divider>
        <Space direction="vertical" size={16}>
          <GoogleButton />

          <FacebookButton />
        </Space>
      </Flex>
    </React.Fragment>
  );
};
export default Login;

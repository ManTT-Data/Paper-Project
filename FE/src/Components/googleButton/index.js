import React from "react";
import Google from "../../Assets/Icon/google.svg";
import { Button, Avatar } from "antd";

const GoogleButton = () => {
  return (
    <React.Fragment>
      <Button
        size="large"
        style={{
          width: "500px",
          height: "69px",
          borderRadius: "30px",
        }}
      >
        <Avatar src={Google} size={"large"}></Avatar>
        Continue with Google
      </Button>
    </React.Fragment>
  );
};

export default GoogleButton;

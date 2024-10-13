import React from "react";
import Facebook from "../../Assets/Icon/facebook.svg";
import { Button, Avatar } from "antd";

const FacebookButton = () => {
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
        <Avatar src={Facebook} size={"large"}></Avatar>
        Continue with Facebook
      </Button>
    </React.Fragment>
  );
};
export default FacebookButton;

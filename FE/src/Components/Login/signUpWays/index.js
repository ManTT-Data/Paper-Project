import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <React.Fragment>
      <Link to={"/signup"}>
        <Button type="link" style={{ fontSize: "20px" }}>
          Sign up?
        </Button>
      </Link>
    </React.Fragment>
  );
};

export default SignUp;

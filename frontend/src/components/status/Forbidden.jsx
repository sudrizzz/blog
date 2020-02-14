import React from "react";
import { Link } from "react-router-dom";

import { Result, Button } from "antd";

const Forbidden = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button type="primary" size="large">
          <Link to="/login">登录</Link>
        </Button>
      }
    />
  );
};

export default Forbidden;

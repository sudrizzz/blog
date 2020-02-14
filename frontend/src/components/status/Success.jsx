import React from "react";
import { Link } from "react-router-dom";
import { Result, Button } from "antd";

const Success = () => {
  return (
    <Result
      status="success"
      title="保存成功"
      extra={[
        <Button type="primary" key="console">
          <Link to="/homepage">返回首页</Link>
        </Button>
      ]}
    />
  );
};

export default Success;

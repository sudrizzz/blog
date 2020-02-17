import React, { Component } from "react";
import { Table, Button, message, Modal } from "antd";

const { confirm } = Modal;

class RecycleArticle extends Component {
  state = {
    data: [],
    current: 1,
    selectedRowKeys: "",
    hasSelected: false
  };

  columns = [
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
      ellipsis: "true",
      width: "20%"
    },
    {
      title: "正文",
      dataIndex: "content",
      key: "content",
      ellipsis: "true",
      width: "30%"
    },
    {
      title: "查看",
      dataIndex: "viewNum",
      key: "viewNum",
      width: "5%",
      sorter: (a, b) => a.viewNum - b.viewNum
    },
    {
      title: "点赞",
      dataIndex: "likeNum",
      key: "likeNum",
      width: "5%",
      sorter: (a, b) => a.likeNum - b.likeNum
    },
    { title: "类别", dataIndex: "categories", key: "categories", width: "5%" },
    {
      title: "创建日期",
      dataIndex: "createTime",
      key: "createTime",
      sorter: (a, b) => a.articleId - b.articleId,
      width: "10%"
    },
    {
      title: "更新日期",
      dataIndex: "titlastEditTimele",
      key: "lastEditTime",
      width: "10%"
    },
    {
      title: "操作",
      dataIndex: "",
      key: "x",
      render: record => (
        <div className="operation">
          <Button
            type="primary"
            onClick={e => this.showRecycleConfirm(e, record.articleId)}
          >
            恢复
          </Button>
        </div>
      )
    }
  ];

  rowSelection = {
    onChange: selectedRowKeys => {
      this.setState({
        selectedRowKeys,
        hasSelected: selectedRowKeys.length > 0
      });
    }
  };

  componentDidMount = async () => {
    const res = await fetch(`/articles/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        auth: "Bearer " + localStorage.getItem("token")
      }
    });
    const json = await res.json();
    const data = json.filter(item => item.isDeleted === 1);
    this.setState({ data });
  };

  showRecycleConfirm = (e, key) => {
    e.persist();
    confirm({
      title: "确定要恢复吗？",
      okText: "确定",
      okType: "primary",
      cancelText: "取消",
      onOk: () => {
        key === undefined
          ? this.onRecycleByBatchIds(e)
          : this.onRecycle(e, key);
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };

  onRecycle = async (e, key) => {
    e.preventDefault();
    const res = await fetch(`/articles/recycle/${key}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        auth: "Bearer " + localStorage.getItem("token")
      }
    });
    const json = await res.json();
    if (json.code === "200") {
      const data = this.state.data.filter(item => item.articleId !== key);
      this.setState({ data });
      message.success("恢复成功");
    } else {
      message.error("恢复失败");
    }
  };

  onRecycleByBatchIds = async e => {
    e.preventDefault();
    let ids = this.state.selectedRowKeys;
    let data = { ids };
    const res = await fetch(`/articles/recycle/batch`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        auth: "Bearer " + localStorage.getItem("token")
      },
      body: JSON.stringify(data)
    });
    const json = await res.json();
    if (json.code === "200") {
      const data = this.state.data.filter(
        item => !ids.includes(item.articleId)
      );
      this.setState({
        data,
        selectedRowKeys: "",
        hasSelected: false
      });
      message.success("批量恢复成功");
    } else {
      message.error("批量恢复失败");
    }
  };

  render() {
    const { selectedRowKeys, hasSelected, data } = this.state;
    return (
      <div
        className="container"
        style={{
          textAlign: "left",
          padding: 24
        }}
      >
        <div className="table">
          <div style={{ marginBottom: 16 }}>
            <Button
              type="primary"
              disabled={!hasSelected}
              onClick={e => this.showRecycleConfirm(e)}
            >
              恢复
            </Button>
            <span style={{ marginLeft: 8 }}>
              {hasSelected ? `选中 ${selectedRowKeys.length} 项` : ""}
            </span>
          </div>
          <Table
            bordered={true}
            columns={this.columns}
            dataSource={data}
            rowKey="articleId"
            rowSelection={this.rowSelection}
          />
        </div>
      </div>
    );
  }
}

export default RecycleArticle;

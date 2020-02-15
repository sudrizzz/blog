import React, { Component } from "react";
import { Table, Button, message, Modal } from "antd";

const { confirm } = Modal;

class ArticleManagement extends Component {
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
            onClick={e => this.onUpdate(e, record.articleId)}
          >
            更新
          </Button>
          &nbsp;&nbsp;
          <Button
            type="danger"
            onClick={e => this.showDeleteConfirm(e, record.articleId)}
          >
            删除
          </Button>
        </div>
      )
    }
  ];

  rowSelection = {
    onChange: selectedRowKeys => {
      this.setState({
        selectedRowKeys: selectedRowKeys,
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
    const data = await res.json();
    this.setState({ data: data });
  };

  showDeleteConfirm = (e, key) => {
    e.persist();
    confirm({
      title: "确定要删除吗？",
      okText: "确定",
      okType: "danger",
      cancelText: "取消",
      onOk: () => {
        key === undefined ? this.onDeleteByBatch(e) : this.onDelete(e, key);
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };

  onDelete = async (e, key) => {
    e.preventDefault();
    const res = await fetch(`/articles/delete/${key}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        auth: "Bearer " + localStorage.getItem("token")
      }
    });
    const json = await res.json();
    if (json.code === "200") {
      const data = this.state.data.filter(item => item.articleId !== key);
      this.setState({
        data: data
      });
      message.success("删除成功");
    } else {
      message.error("删除失败");
    }
  };

  onDeleteByBatch = async e => {
    e.preventDefault();
    let ids = this.state.selectedRowKeys;
    let data = { ids: ids };
    const res = await fetch(`/articles/delete/batch`, {
      method: "DELETE",
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
        data: data,
        selectedRowKeys: "",
        hasSelected: false
      });
      message.success("批量删除成功！");
    } else {
      message.error("批量删除失败！");
    }
  };

  onUpdate = () => {};

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
              type="danger"
              disabled={!hasSelected}
              onClick={e => this.showDeleteConfirm(e)}
            >
              删除
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

export default ArticleManagement;

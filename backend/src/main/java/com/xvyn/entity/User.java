package com.xvyn.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("user")
public class User{

    @TableId(value = "user_id", type = IdType.AUTO)
    private int userId;

    @TableField("user_name")
    private String userName;

    private String password;

    @TableField("user_type")
    private int userType;

    @TableField("create_time")
    private String createTime;

    @TableField("update_time")
    private String updateTime;

    // 1 - deleted
    @TableField("is_deleted")
    private int isDeleted;
}

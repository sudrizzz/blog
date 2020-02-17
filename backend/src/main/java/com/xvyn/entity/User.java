package com.xvyn.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.io.Serializable;

@Data
@TableName("user")
public class User implements Serializable {

    private static final long serialVersionUID = 488486104573869689L;

    @TableId(value = "user_id", type = IdType.AUTO)
    private int userId;

    @TableField("user_name")
    private String userName;

    private String password;

    @TableField("update_time")
    private String updateTime;
}

package com.xvyn.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("menu")
public class Menu {

    @TableId(value = "menu_id", type = IdType.AUTO)
    private int menuId;

    private String name;
}

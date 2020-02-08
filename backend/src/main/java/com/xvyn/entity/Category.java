package com.xvyn.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@TableName("category")
public class Category {

    @TableId(value = "category_id", type = IdType.AUTO)
    private int categoryId;

    private String name;

    @TableField("article_counts")
    private int articleCounts;

    private List<Long> articles = new ArrayList<>();
}

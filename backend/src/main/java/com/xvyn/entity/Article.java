package com.xvyn.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.io.Serializable;

@Data
@TableName("article")
public class Article implements Serializable {

    private static final long serialVersionUID = 4259038306662184701L;

    @TableId(value = "article_id", type = IdType.AUTO)
    private int articleId;

    private String title;

    private String url;

    @TableField("view_num")
    private Long viewNum;

    private String content;

    @TableField("like_num")
    private Long likeNum;

    @TableField("img_url")
    private String imgUrl;

    @TableField("create_time")
    private String createTime;

    @TableField("last_edit_time")
    private String lastEditTime;

    @TableField("is_deleted")
    private Integer isDeleted;

    private String categories;

    public Article(String title, String content, String imgUrl, String categories) {
        this.title = title;
        this.content = content;
        this.imgUrl = imgUrl;
        this.categories = categories;
    }
}

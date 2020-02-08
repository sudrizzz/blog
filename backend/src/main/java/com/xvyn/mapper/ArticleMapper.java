package com.xvyn.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.xvyn.entity.Article;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

@Mapper
@Component("ArticleMapper")
public interface ArticleMapper extends BaseMapper<Article> {
}

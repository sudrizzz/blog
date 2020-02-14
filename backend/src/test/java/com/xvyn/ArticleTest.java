package com.xvyn;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.xvyn.entity.Article;
import com.xvyn.mapper.ArticleMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ArticleTest {

    @Autowired
    private ArticleMapper articleMapper;

    @Test
    public void select() {
        QueryWrapper<Article> queryWrapper = new QueryWrapper<>();
        queryWrapper.select("article_id").orderByDesc("article_id").last("limit 1");
        int articleId = articleMapper.selectOne(queryWrapper).getArticleId();
        System.out.println(articleId);
    }
}

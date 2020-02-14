package com.xvyn.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.xvyn.entity.Article;
import com.xvyn.mapper.ArticleMapper;
import com.xvyn.service.ArticleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class ArticleServiceImpl extends ServiceImpl<ArticleMapper, Article> implements ArticleService {

    private static Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    private ArticleMapper articleMapper;

    public ArticleServiceImpl(ArticleMapper articleMapper) {
        this.articleMapper = articleMapper;
    }

    @Override
    public IPage<Article> getAllArticle(int pageNo, int pageSize) {
        IPage<Article> page = new Page<>(pageNo, pageSize);
        QueryWrapper<Article> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("is_deleted", 0);
        return articleMapper.selectPage(page, queryWrapper);
    }

    @Override
    @Transactional
    public Article getArticle(int articleId) {
        Article article = articleMapper.selectById(articleId);
        if (article != null) {
            article.setViewNum(article.getViewNum() + 1);
            updateArticle(article);
        }
        return article;
    }

    @Override
    @Transactional
    public Integer updateArticle(Article article) {
        logger.debug("update success");
        return articleMapper.updateById(article);
    }

    @Override
    @Transactional
    public Integer saveArticle(Article article) {
        article.setUrl("");
        int status = articleMapper.insert(article);
        if (1 != status) {
            logger.error("insertion failed");
            return 0;
        }
        QueryWrapper<Article> queryWrapper = new QueryWrapper<>();
        queryWrapper.orderByDesc("article_id").last("limit 1");
        int articleId = articleMapper.selectOne(queryWrapper).getArticleId();
        logger.debug("update success");
        article.setUrl("/a/" + articleId);
        updateArticle(article);
        return articleId;
    }

    @Override
    @Transactional
    public Integer deleteArticle(int articleId) {
        Article article = getArticle(articleId);
        article.setIsDeleted(1);
        return updateArticle(article);
    }

    @Override
    @Transactional
    public Integer recoverArticle(int articleId) {
        Article article = getArticle(articleId);
        article.setIsDeleted(0);
        return updateArticle(article);
    }
}

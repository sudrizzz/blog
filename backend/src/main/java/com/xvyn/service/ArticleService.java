package com.xvyn.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.xvyn.entity.Article;
import org.springframework.stereotype.Service;

@Service
public interface ArticleService extends IService<Article> {

    /**
     * 获取文章对象
     * @param articleId
     * @return
     */
    Article getArticle(int articleId);

    /**
     * 更新文章信息
     * @param article
     * @return
     */
    Integer updateArticle(Article article);

    /**
     * 保存文章
     * @param article
     * @return
     */
    Integer saveArticle(Article article);

    /**
     * 删除文章
     * @param articleId
     * @return
     */
    Integer deleteArticle(int articleId);

    /**
     * 恢复被删除的文章
     * @param articleId
     * @return
     */
    Integer recoverArticle(int articleId);
}

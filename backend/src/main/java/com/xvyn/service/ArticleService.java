package com.xvyn.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.IService;
import com.xvyn.entity.Article;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ArticleService extends IService<Article> {

    /**
     * 获取全部文章
     * @return
     */
    List<Article> getAllArticles();

    /**
     * 分页获取全部文章
     * @return
     */
    IPage<Article> getAllArticles(int pageNo);

    /**
     * 获取文章总数
     * @return
     */
    Integer getArticleCounts();

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
     * 批量删除文章
     * @param ids
     * @return
     */
    Integer deleteArticleByBatchIds(Integer[] ids);

    /**
     * 恢复被删除的文章
     * @param articleId
     * @return
     */
    Integer recycleArticle(int articleId);

    /**
     * 批量恢复被删除的文章
     * @param ids
     * @return
     */
    Integer recycleArticleByBatchIds(Integer[] ids);
}

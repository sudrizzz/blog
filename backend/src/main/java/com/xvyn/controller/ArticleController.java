package com.xvyn.controller;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.xvyn.entity.Article;
import com.xvyn.service.ArticleService;
import com.xvyn.util.Response;
import com.xvyn.util.Time;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Api(tags = "文章管理")
@RestController
@RequestMapping("articles")
public class ArticleController {

    private ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @ApiOperation("文章分页查询")
    @GetMapping(value = "/")
    @ResponseBody
    public IPage<Article> getAllArticle(@RequestParam(defaultValue = "1") int pageNo) {
        return articleService.getAllArticle(pageNo);
    }

    @ApiOperation("获取所有文章")
    @GetMapping(value = "/all")
    @ResponseBody
    public List<Article> getAllArticle() {
        return articleService.getAllArticle();
    }

    @ApiOperation("文章查询")
    @GetMapping(value = "{id}")
    @ResponseBody
    public Article getArticle(@PathVariable int id) {
        return articleService.getArticle(id);
    }

    @ApiOperation("文章标题查询")
    @GetMapping(value = "{id}/title")
    public Map<Integer, Object> getTitle(@PathVariable int id) {
        String title = articleService.getArticle(id).getTitle();
        HashMap<Integer, Object> map = new HashMap<>();
        map.put(id, title);
        return map;
    }

    @ApiOperation("文章正文查询")
    @GetMapping(value = "{id}/content")
    public Map<Integer, Object> getContent(@PathVariable int id) {
        String content = articleService.getArticle(id).getContent();
        HashMap<Integer, Object> map = new HashMap<>();
        map.put(id, content);
        return map;
    }

    @ApiOperation("文章更新")
    @PostMapping(value = "update/{id}")
    public Map<String, Object> updateArticle(@PathVariable int id,
                                             @RequestParam(required = false) String title,
                                             @RequestParam(required = false) String content,
                                             @RequestParam(required = false) String imgUrl,
                                             @RequestParam(required = false) String categories) {
        Article article = this.getArticle(id);
        if (!"".equals(title)) article.setTitle(title);
        if (!"".equals(content)) article.setContent(content);
        if (!"".equals(imgUrl)) article.setImgUrl(imgUrl);
        if (!"".equals(categories)) article.setCategories(categories);
        article.setLastEditTime(Time.getFormattedDateTime());
        int status = this.articleService.updateArticle(article);
        return Response.build(status);
    }

    @ApiOperation("删除文章")
    @DeleteMapping(value = "delete/{id}")
    public Map<String, Object> deleteArticle(@PathVariable int id) {
        int status = articleService.deleteArticle(id);
        return Response.build(status);
    }

    @ApiOperation("批量删除文章")
    @DeleteMapping(value = "delete/batch")
    public Map<String, Object> deleteArticleByBatchIds(@RequestBody Map<String, Integer[]> data) {
        int status = articleService.deleteArticleByBatchIds(data.get("ids"));
        return Response.build(status);
    }

    @ApiOperation("保存文章")
    @PostMapping(value = "save")
    public Map<String, Object> saveArticle(@RequestBody Map<String, String> data) {
        String title = data.get("title");
        String content = data.get("content");
        String imgUrl = data.get("imgUrl");
        String categories = data.get("categories");
        Article article = new Article(title, content, imgUrl, categories);
        article.setCreateTime(Time.getFormattedDateTime());
        int articleId = this.articleService.saveArticle(article);
        HashMap<String, Object> map = new HashMap<>();
        map.put("articleId", articleId);
        return map;
    }

    @ApiOperation("回收文章")
    @GetMapping(value = "recover/{id}")
    public Map<String, Object> recoverArticle(@PathVariable int id) {
        int status = articleService.recoverArticle(id);
        return Response.build(status);
    }
}

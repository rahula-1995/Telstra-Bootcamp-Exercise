"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleController = void 0;
const mongoose = require("mongoose");
const crmModel_1 = require("../models/crmModel");
const Article = mongoose.model('Article', crmModel_1.ArticleSchema);
class ArticleController {
    getArticles(req, res) {
        Article.find({}, (err, article) => {
            if (err) {
                res.send(err);
            }
            //res.json(article);
            res.render('product', {
                "articles": article
            });
        });
    }
    addNewArticle(req, res) {
        let newArticle = new Article(req.body);
        newArticle.save((err, article) => {
            if (err) {
                res.send(err);
            }
            res.json(article);
        });
    }
    getArticleWithID(req, res) {
        Article.findById(req.params.articleId, (err, article) => {
            if (err) {
                res.send(err);
            }
            res.json(article);
        });
    }
    updateArticle(req, res) {
        Article.findOneAndUpdate({ _id: req.params.articleId }, req.body, { new: true }, (err, article) => {
            if (err) {
                res.send(err);
            }
            res.json(article);
        });
    }
    deleteArticle(req, res) {
        Article.remove({ _id: req.params.articleId }, (err, article) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!' });
        });
    }
    postcomment(req, res) {
        Article.findOneAndUpdate({ _id: req.params.articleId }, req.body, { new: true }, (err, article) => {
            if (err) {
                res.send(err);
            }
            res.json(article);
        });
    }
    getArticlescomment(req, res) {
        Article.find({}, (err, article) => {
            if (err) {
                res.send(err);
            }
            res.json(article);
        });
    }
}
exports.ArticleController = ArticleController;
//# sourceMappingURL=crmController.js.map
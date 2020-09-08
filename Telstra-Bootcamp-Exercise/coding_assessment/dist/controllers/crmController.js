"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactController = exports.ProductController = exports.ArticleController = void 0;
const mongoose = require("mongoose");
const crmModel_1 = require("../models/crmModel");
const crmModel_2 = require("../models/crmModel");
const crmModel_3 = require("../models/crmModel");
const Contact = mongoose.model('Contact', crmModel_1.ContactSchema);
const Product = mongoose.model('Product', crmModel_2.ProductSchema);
const Article = mongoose.model('Article', crmModel_3.ArticleSchema);
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
        Article.findOneAndUpdate({ _id: req.params.articleId }, req.body, { new: true }, (err, article) => {
            if (err) {
                res.send(err);
            }
            res.json(article);
        });
    }
}
exports.ArticleController = ArticleController;
class ProductController {
    getProducts(req, res) {
        Product.find({}, (err, contact) => {
            if (err) {
                res.send(err);
            }
            //res.json(contact);
            res.render('product', {
                "userlist": contact
            });
        });
    }
    addNewProduct(req, res) {
        let newProduct = new Product(req.body);
        newProduct.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
}
exports.ProductController = ProductController;
class ContactController {
    getContacts(req, res) {
        Contact.find({}, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    addNewContact(req, res) {
        let newContact = new Contact(req.body);
        newContact.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    getContactWithID(req, res) {
        Contact.findById(req.params.contactId, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    updateContact(req, res) {
        Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    deleteContact(req, res) {
        Contact.remove({ _id: req.params.contactId }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!' });
        });
    }
}
exports.ContactController = ContactController;
//# sourceMappingURL=crmController.js.map
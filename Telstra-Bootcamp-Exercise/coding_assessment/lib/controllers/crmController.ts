import * as mongoose from 'mongoose';

import { ArticleSchema } from '../models/crmModel';
import { Request, Response } from 'express';

const Article=mongoose.model('Article',ArticleSchema);

export class ArticleController{
    public getArticles (req: Request, res: Response) {           
        Article.find({}, (err, article) => {
            if(err){
                res.send(err);
            }
            //res.json(article);
            res.render('product', {
                "articles" : article})
        });
    }

public addNewArticle (req: Request, res: Response) {                
        let newArticle = new Article(req.body);
    
        newArticle.save((err, article) => {
            if(err){
                res.send(err);
            }    
            res.json(article);
        });
    }
    public getArticleWithID (req: Request, res: Response) {           
        Article.findById(req.params.articleId, (err, article) => {
            if(err){
                res.send(err);
            }
            res.json(article);
        });
    }
    public updateArticle (req: Request, res: Response) {           
        Article.findOneAndUpdate({ _id: req.params.articleId }, req.body, { new: true }, (err, article) => {
            if(err){
                res.send(err);
            }
            res.json(article);
        });
    }
    public deleteArticle (req: Request, res: Response) {           
        Article.remove({ _id: req.params.articleId }, (err, article) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!'});
        });
    }
    public postcomment (req: Request, res: Response) {           
        Article.findOneAndUpdate({ _id: req.params.articleId }, req.body, { new: true }, (err, article) => {
            if(err){
                res.send(err);
            }
            res.json(article);
        });
    }
    public getArticlescomment (req: Request, res: Response) {           
        Article.find({}, (err, article) => {
            if(err){
                res.send(err);
            }
            res.json(article);
            
        });
    }
}


import {Request, Response} from "express";
import { ArticleController } from "../controllers/crmController"; 
const path = require( 'path' );

export class Routes {  

    public articleController: ArticleController = new ArticleController();
    public routes(app): void 
    {   
        
        app.route('/')
        .get((req: Request, res: Response) => 
        {            
            res.render('home')
            
            })
        
        app.route('/articles') 
        // GET endpoint 
        .get(this.articleController.getArticles)    
        // POST endpoint
        .post(this.articleController.addNewArticle);
        // Carticles detail
        app.route('/articles/:articleId')
        // get specific articles
        .get(this.articleController.getArticleWithID)
        .patch(this.articleController.updateArticle)
        .delete(this.articleController.deleteArticle)
        app.route('/articles/:articleId/comments')
        
        .post(this.articleController.postcomment)
        app.route('/articles?include=comments')
        .get(this.articleController.getArticlescomment)



        
    }
}
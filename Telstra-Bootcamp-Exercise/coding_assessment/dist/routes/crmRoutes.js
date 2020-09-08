"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const crmController_1 = require("../controllers/crmController");
const path = require('path');
class Routes {
    constructor() {
        this.articleController = new crmController_1.ArticleController();
    }
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.render('home');
        });
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
            .delete(this.articleController.deleteArticle);
        app.route('/articles/:articleId/comments')
            .post(this.articleController.postcomment);
        app.route('/articles?include=comments')
            .get(this.articleController.getArticlescomment);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map
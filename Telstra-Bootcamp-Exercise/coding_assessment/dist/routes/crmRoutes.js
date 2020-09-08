"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const crmController_1 = require("../controllers/crmController");
const crmController_2 = require("../controllers/crmController");
const crmController_3 = require("../controllers/crmController");
const path = require('path');
class Routes {
    constructor() {
        this.contactController = new crmController_1.ContactController();
        this.productController = new crmController_2.ProductController();
        this.articleController = new crmController_3.ArticleController();
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
        // Contact detail
        app.route('/articles/:articleId')
            // get specific contact
            .get(this.articleController.getArticleWithID)
            .patch(this.articleController.updateArticle)
            .delete(this.articleController.deleteArticle);
        app.route('/articles/:articleId/comments')
            .post(this.articleController.postcomment);
        app.route('/articles?include=comments')
            .get(this.articleController.getArticlescomment);
        app.route('/product')
            .get(this.productController.getProducts)
            .post(this.productController.addNewProduct);
        // Contact 
        app.route('/contact')
            // GET endpoint 
            .get(this.contactController.getContacts)
            // POST endpoint
            .post(this.contactController.addNewContact);
        // Contact detail
        app.route('/contact/:contactId')
            // get specific contact
            .get(this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map
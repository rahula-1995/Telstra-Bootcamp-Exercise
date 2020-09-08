"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const crmRoutes_1 = require("./routes/crmRoutes");
const mongoose = require("mongoose");
class App {
    constructor() {
        this.mongoUrl = 'mongodb://localhost/CRMdb';
        this.routePrv = new crmRoutes_1.Routes();
        this.mongoSetup();
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }
    mongoSetup() {
        //mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
    //5f564b9948158f81d0e76079
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        //this.app.use( express.static( path.join( __dirname, 'public' )));
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', 'ejs');
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map
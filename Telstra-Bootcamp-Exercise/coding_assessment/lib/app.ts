import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";
import { Routes } from "./routes/crmRoutes";

import * as mongoose from "mongoose";



class App {
    public mongoUrl: string = 'mongodb://localhost/CRMdb';
    public app: express.Application;
    public routePrv: Routes = new Routes();
    

    constructor() {
        this.mongoSetup();
        this.app = express();
        this.config(); 
        this.routePrv.routes(this.app);       
    }
    private mongoSetup(): void{
        //mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);    
    }
    //5f564b9948158f81d0e76079

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        //this.app.use( express.static( path.join( __dirname, 'public' )));
        this.app.set( 'views', path.join( __dirname, 'views' ) );
        this.app.set( 'view engine', 'ejs' ); 
        
    }

}

export default new App().app;
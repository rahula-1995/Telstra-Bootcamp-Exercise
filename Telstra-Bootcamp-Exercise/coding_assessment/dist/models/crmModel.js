"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var ObjectIdSchema = Schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;
const CommentSchema = {
    commenter: {
        type: String,
        required: 'Enter commenter name'
    },
    title: {
        type: String,
        required: 'Enter title'
    },
    comment: {
        type: String,
        required: 'Enter comment'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
};
exports.ArticleSchema = new Schema({
    author: {
        type: String,
        required: 'Enter author name'
    },
    title: {
        type: String,
        required: 'Enter  title'
    },
    abstract: {
        type: String,
        required: 'Enter abstract'
    },
    body: {
        type: String,
        required: 'Enter body'
    },
    imageUrl: {
        type: String,
        required: 'Enter location of image',
        created_date: {
            type: Date,
            default: Date.now
        }
    },
    comments: [CommentSchema]
});
//# sourceMappingURL=crmModel.js.map
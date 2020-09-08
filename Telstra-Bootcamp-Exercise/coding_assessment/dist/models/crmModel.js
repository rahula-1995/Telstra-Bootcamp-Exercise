"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = exports.ContactSchema = exports.ArticleSchema = void 0;
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
exports.ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
const ReviewsSchema = new Schema({ reviewer: { type: String, required: 'enter the name' } }, { ratings: { type: Number, required: 'enter the rating' } }, { title: { type: String } }, { text: { type: String, required: 'enter something' } }, { created_date: {
        type: Date,
        default: Date.now
    } });
exports.ProductSchema = new Schema({
    name: {
        type: String,
        required: 'Enter your name'
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: 'Enter the price'
    },
    rating: {
        type: Number
    },
    urls: {
        type: [String]
    },
    reviews: { _id: { type: ObjectIdSchema, default: function () { return new ObjectId(); } }, reviewer: { type: String, required: 'enter the name' },
        ratings: { type: Number, required: 'enter the rating' },
        title: { type: String }, text: { type: String, required: 'enter something' },
        created_date: {
            type: Date,
            default: Date.now
        } }
});
//# sourceMappingURL=crmModel.js.map
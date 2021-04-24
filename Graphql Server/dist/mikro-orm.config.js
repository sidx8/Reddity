"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const constant_1 = require("./constant");
const post_1 = require("./entities/post");
const User_1 = require("./entities/User");
console.log(__dirname);
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    password: 'sidhu321',
    entities: [post_1.Post, User_1.User],
    dbName: 'redditclone',
    type: 'postgresql',
    debug: !constant_1._prod_,
};
//# sourceMappingURL=mikro-orm.config.js.map
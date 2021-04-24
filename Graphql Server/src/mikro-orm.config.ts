import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { _prod_ } from "./constant";
import { Post } from "./entities/post";
import { User } from "./entities/User";

console.log(__dirname);
export default {
    migrations: {
    path:  path.join(__dirname,'./migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    password: 'sidhu321',
    entities: [Post, User],
    dbName: 'redditclone',
    type: 'postgresql',
    debug: !_prod_,
} as Parameters<typeof MikroORM.init>[0];
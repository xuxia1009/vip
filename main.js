const mysql = require("mysql");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
//模板引擎
app.set("views", path.join(process.cwd(), 'views'));
app.set("view engine", "ejs");
//内置
app.use(express.static(path.join(process.cwd(), 'static', 'javascript')));
app.use(express.static(path.join(process.cwd(), 'static', 'style')));
app.use(express.static(path.join(process.cwd(), 'static')));
//post 请求方式
const encoded = bodyParser.urlencoded({ extended: false });
require("./config/configRouter.js")(app);
app.listen(8080)
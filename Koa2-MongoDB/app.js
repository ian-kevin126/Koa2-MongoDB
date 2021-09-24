const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const MongoConnect = require("./db");
const cors = require("koa2-cors");
const koajwt = require("koa-jwt");

const index = require("./routes/index");
const users = require("./routes/users");
const upload = require("./routes/upload");
const article = require("./routes/article");

// 连接数据库
MongoConnect();

// error handler
onerror(app);

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

// 解决跨域问题，一定要在路由中间件签名
app.use(cors());

app.use(
  views(__dirname + "/views", {
    extension: "pug",
  })
);

// jwt身份认证
app.use(
  koajwt({
    secret: "KOA-MONGODB-JWT",
  }).unless({
    path: [/^\/users\/login/, /^\/users\/reg/],
  })
);

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
app.use(upload.routes(), upload.allowedMethods());
app.use(article.routes(), article.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;

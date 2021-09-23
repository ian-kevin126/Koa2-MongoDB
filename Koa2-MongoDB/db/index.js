const mongoose = require("mongoose");

module.exports = () => {
  // 使用 mongodb 协议
  mongoose
    .connect("mongodb://localhost:27017/koa2-mongoDB", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("数据库连接成功");
    })
    .catch((err) => {
      console.error("数据库连接失败", err);
    });
};

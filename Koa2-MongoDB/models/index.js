const mongoose = require("mongoose");

// 创建字段
const userSchema = new mongoose.Schema({
  username: String,
  pwd: String,
});

//系统用户模型对象
const User = mongoose.model("users", userSchema);

module.exports = {
  User,
};

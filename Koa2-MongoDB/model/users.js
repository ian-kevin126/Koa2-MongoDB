let mongoose = require("mongoose");

//用户对象
let schema = new mongoose.Schema({
  username: String,
  pwd: {
    type: String,
    select: false, // 隐藏状态
  },
  avatar: {
    type: String,
    default: "",
  },
  sex: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
});

let Users = mongoose.model("users", schema);

module.exports = Users;

const router = require("koa-router")();
const {
  userAdd,
  userDel,
  userUpdate,
  userFind,
  userFindOne,
} = require("../controller/user");

router.prefix("/users");

// 新增系统用户
router.post("/add", userAdd);

// 更新系统用户
router.post("/update", userUpdate);

// 删除系统用户
router.post("/del", userDel);

// 查询所有系统用户
router.get("/find", userFind);

// 查询单个系统用户
router.get("/find/:id", userFindOne);

module.exports = router;

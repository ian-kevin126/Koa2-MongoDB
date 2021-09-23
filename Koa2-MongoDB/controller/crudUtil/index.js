/**
 * 用于添加数据的公用方法
 * @param {*} model
 * @param {*} params
 * @param {*} ctx
 */
const add = (model, params, ctx) =>
  model
    .create(params)
    .then((rel) => {
      if (rel) {
        ctx.body = {
          code: 200,
          msg: "添加成功",
          data: rel,
        };
      } else {
        ctx.body = {
          code: 300,
          msg: "添加失败",
        };
      }
    })
    .catch((err) => {
      ctx.body = {
        code: 400,
        msg: "添加时出现异常",
      };
      console.log(err);
    });

/**
 * 公共的更新数据的方法
 * @param {*} model
 * @param {*} where
 * @param {*} params
 * @param {*} ctx
 */
const update = (model, where, params, ctx) =>
  model
    .updateOne(where, params)
    .then((rel) => {
      ctx.body = {
        result: rel,
      };
    })
    .catch((err) => {
      ctx.body = {
        code: 400,
        msg: "修改时出现异常",
      };
      console.log(err);
    });

const del = (model, where, ctx) =>
  model
    .findOneAndDelete(where)
    .then((rel) => {
      ctx.body = {
        result: rel,
      };
    })
    .catch((err) => {
      ctx.body = {
        code: 400,
        msg: "删除时出现异常",
      };
      console.log(err);
    });

/**
 *
 * @param {*} model
 * @param {*} where
 * @param {*} ctx
 */
const find = (model, where, ctx) =>
  model
    .find(where)
    .then((rel) => {
      ctx.body = {
        result: rel,
      };
    })
    .catch((err) => {
      ctx.body = {
        code: 400,
        msg: "查询时出现异常",
      };
      console.log(err);
    });

/**
 * 查找单个数据
 * @param {*} model
 * @param {*} where
 * @param {*} ctx
 */
const findOne = (model, where, ctx) =>
  model
    .findOne(where)
    .then((rel) => {
      ctx.body = {
        result: rel,
      };
    })
    .catch((err) => {
      ctx.body = {
        code: 400,
        msg: "查询时出现异常",
      };
      console.log(err);
    });

module.exports = {
  add,
  update,
  del,
  find,
  findOne,
};

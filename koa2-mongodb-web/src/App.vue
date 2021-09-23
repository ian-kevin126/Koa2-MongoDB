<template>
  <div>
    hello web
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$axios
      .get("http://localhost:3000/users/find")
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  },
};
</script>

<style></style>

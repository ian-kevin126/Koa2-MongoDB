<template>
  <router-view></router-view>
</template>

<script>
export default {
  created() {
    this.$http({
      path: "https://cnodejs.org/api/v1/topics",
      method: "get",
      params: {},
    })
      .then((res) => {
        console.log("res11111", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  },
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>

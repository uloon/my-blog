<template>
  <div id="app">
    <BlogLeader />
    <keep-alive :include="['AddBlog']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import BlogLeader from "./components/BlogLeader";

export default {
  name: "App",
  components: { BlogLeader },
};
</script>
<style>
/* 解决页面出现滚动条，页面抖动问题 */
html {
  overflow-x: hidden;
  overflow-y: auto;
}
body {
  margin: 0;
  width: 100vw;
  overflow: hidden;
  padding-right: calc(100vw - 100%);
}
</style>
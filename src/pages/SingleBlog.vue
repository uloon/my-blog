<template>
  <div id="single-blog" v-if="ifShow">
    <h1>{{ blog.title }}</h1>
    <article style="white-space: pre-line">{{ blog.content }}</article>
    <p>分类：</p>
    <ul>
      <li v-for="catagories in blog.catagories" :key="catagories">
        {{ catagories }}
      </li>
    </ul>
    <p>by:{{ blog.author }}</p>
    <button @click="editBlog">编辑</button>
    <button @click="deleteBlog">删除</button>
  </div>
</template>

<script>
export default {
  name: "SingleBlog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
      ifShow: false,
    };
  },
  created() {
    this.axios
      .get(
        "https://my-blog-da1bd-default-rtdb.firebaseio.com/posts/" +
          this.id +
          ".json"
      )
      .then(
        (response) => {
          this.blog = response.data;
          this.ifShow = true;
        },
        (error) => {
          console.log("请求失败：" + error.message);
        }
      );
  },
  methods: {
    deleteBlog() {
      if (confirm("确定删除吗")) {
        this.axios
          .delete(
            "https://my-blog-da1bd-default-rtdb.firebaseio.com/posts/" +
              this.id +
              ".json"
          )
          .then(
            () => {
              this.$router.push({ path: "/" });
            },
            (error) => {
              alert("删除失败：" + error.message);
            }
          );
      }
    },
    editBlog() {
      this.$router.push({
        name: "editBlog",
        params: {
          blog: this.blog,
          id: this.id,
        },
      });
    },
  },
};
</script>

<style scoped>
#single-blog {
  background-color: #eee;
  width: 600px;
  margin: 0 auto;
  padding: 20px;
}
#single-blog * {
  margin-top: 30px;
}
button {
  display: inline-block;
  margin: 20px 10px;
  background: rgb(214, 98, 98);
  color: white;
  border: 0px;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 2px 2px 1px #888888;
  cursor: pointer;
}
</style>
<template>
  <div id="show-blogs" v-if="ifShow">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索" />
    <div v-for="blog in filteredBlogs" :key="blog.id" id="single-blog">
      <router-link
        :to="{
          name: 'singleBlog', //注：想传递params参数，若使用to的对象写法，则不能使用path配置项，只能使用name配置项
          params: {
            id: blog.id,
          },
        }"
      >
        <h2>{{ blog.title }}</h2>
        <article style="white-space: pre-line">
          {{ blog.content.substr(0, 15) + "..." }}
        </article>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowBlogs",
  data() {
    return {
      blogs: [],
      search: "",
      ifShow: false,
    };
  },
  computed: {
    filteredBlogs() {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    },
  },
  created() {
    this.axios
      .get("https://my-blog-da1bd-default-rtdb.firebaseio.com/posts.json")
      .then(
        (respons) => {
          var blogArray = [];
          for (let key in respons.data) {
            respons.data[key].id = key;
            blogArray.push(respons.data[key]);
          }
          this.blogs = blogArray;
          this.ifShow = true;
        },
        (error) => {
          console.log("请求失败：" + error.message);
        }
      );
  },
};
</script>

<style scoped>
#show-blogs {
  max-width: 600px;
  margin: 0 auto;
}

#single-blog {
  padding: 20px;
  margin: 20px 0;
  background-color: #ccc;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #444;
}

input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
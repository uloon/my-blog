<template>
  <div id="add-blog">
    <h2 v-if="!submmited">添加博客</h2>
    <form v-if="!submmited">
      <label>博客标题：</label>
      <input type="text" v-model="blog.title" />

      <label>博客内容：</label>
      <textarea v-model="blog.content" @keydown.tab="textareaTab"></textarea>

      <div class="checkboxes">
        <label> <input type="checkbox" value="vue.js" v-model="blog.catagories" />Vue.js </label>
        <label> <input type="checkbox" value="node.js" v-model="blog.catagories"/>Node.js </label>
        <label> <input type="checkbox" value="react.js" v-model="blog.catagories"/>React.js </label>
        <label> <input type="checkbox" value="Angular4" v-model="blog.catagories"/>Angular4 </label>
        <label> <input type="checkbox" value="markdown" v-model="blog.catagories"/>markdown </label>
      </div>

      <label>作者：</label>
      <select v-model="blog.author">
        <option v-for="author in authors" :key="author" >{{author}}</option>
      </select>

      <button @click.prevent="post" >添加博客</button>
    </form>

    <div>
      <h3 v-if="submmited">您的博客发布成功!</h3>
    </div>

    <div class="preview" v-if="submmited">
      <h3>博客总览</h3>
      <p>博客标题：{{ blog.title }}</p>
      <p>博客内容：{{ blog.content }}</p>
      <p>博客类型：
        <ul>
          <li v-for="catagorie in blog.catagories" :key='catagorie' >{{catagorie}}</li>
        </ul>
      </p>
      <p>作者:{{blog.author}}</p>
      <button @click="goBack">返回</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddBlog",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        catagories: [],
        author: "",
      },
      authors: ["Loon", "Mike", "User"],
      submmited: false,
    };
  },
  methods: {
    post() {
      if (this.blog.title === "") {
        alert("标题不能为空");
      } else if (this.blog.catagories.length === 0) {
        alert("类型不能为空");
      } else if (this.blog.author === "") {
        alert("作者不能为空");
      } else {
        this.axios
          .post(
            "https://my-blog-da1bd-default-rtdb.firebaseio.com/posts.json",
            this.blog
          )
          .then(
            () => {
              console.log("发布成功");
              this.submmited = true;
            },
            (error) => {
              console.log("发布失败,原因为：" + error.message);
            }
          );
      }
    },
    // 解决博客内容输入框按tab键失去焦点的问题
    textareaTab(e) {
      e.preventDefault();
      e.target.value += "\t";
    },
    goBack() {
      this.blog = {
        title: "",
        content: "",
        catagories: [],
        author: "",
      };
      this.submmited = false;
    },
  },
};
</script>

<style scoped>
#add-blog * {
  box-sizing: border-box;
}

#add-blog {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
  border: dotted 1px;
}

label {
  display: block;
  margin: 40px 0px 5px;
}

input[type="text"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 2px;
}

textarea {
  height: 150px;
}

.checkboxes label {
  display: inline-block;
  margin: 0px 20px 0px 0px;
}

button {
  display: block;
  margin: 20px auto;
  background: rgb(214, 98, 98);
  color: white;
  border: 0px;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 2px 2px 1px #888888;
  cursor: pointer;
}

.preview {
  padding: 10px;
  border: 1px dotted rgb(136, 136, 136);
  margin: 30px 0;
}

h3 {
  margin-top: 10px;
}
</style>
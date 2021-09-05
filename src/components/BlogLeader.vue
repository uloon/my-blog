<template>
  <div id="blog-leader">
    <nav id="navigation">
      <ul>
        <li>
          <router-link to="/" exact>博客</router-link>
        </li>
        <li>
          <router-link to="/addblog" exact>写博客</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "BlogLeader",
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0 auto;
  text-align: center;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  text-decoration: none;
  outline: none;
  color: white;
  padding: 5px;
  border-radius: 5px;
}
nav {
  background: brown;
  padding: 30px 0;
}
.router-link-active {
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
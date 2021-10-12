<template>
  <div>
    <div v-theme:column="'narrow'" id="show-blogs">
      <h1>List Blog Title</h1>
      <input  type="text" v-model="search" placeholder="Search....">
      <div v-for="blog in filteredBlogs" class="single-blog">
        <h3 v-rainbow>{{ blog.title | toUpperCase }}</h3>
       
      </div>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/search'



export default {
  data() {
    return {
      blogs: [],
      search :''
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function(data) {
        console.log(data);
        this.blogs = data.body.slice(0, 10);
      });
  },

mixins:[searchMixin],

 
  filters:{
    toUppercase(value){
      return value.toUpperCase()
    }
  },
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>

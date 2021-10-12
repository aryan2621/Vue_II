<template>
  <div id="add-blog">
    <h2>Add a new Blog</h2>
    <form action="" v-if="!submitted">
      <label for="">Blog Title</label>
      <input type="text" required v-model.lazy="blog.title" />
      <label for="">Blog Content</label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        v-model.lazy="blog.content"
      ></textarea>
      <div id="checkboxes">
        <label for="">Ninjas</label>
        <input
          type="checkbox"
          name=""
          value="ninja"
          v-model="blog.categories"
        />
        <label for="">Wizards</label>
        <input
          type="checkbox"
          name=""
          value="hattori"
          v-model="blog.categories"
        />
        <label for="gharpe">Mario</label>
        <input type="checkbox" name="" value="hiii" v-model="blog.categories" />
        <label for="">Chesse</label>
        <input
          type="checkbox"
          name=""
          value="ayega"
          v-model="blog.categories"
        />
      </div>
      <label>Author</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{ author }}</option>
      </select>
      <br>
<button v-on:click.prevent="post">Add Blog</button>

    </form>
<div v-if="submitted">
    <h3>Thnaks for adding Posts</h3>
</div>


    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{ blog.title }}</p>
      <p>Blog Content</p>
      <p>{{ blog.content }}</p>
      <p>Blog categories</p>
      <ul>
        <li v-for="category in blog.categories">
          {{ category }}
        </li>
      </ul>
      <p>Author:{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "",
        
      },
      authors: ["The Net Ninja", "The avengers Author", "Big Brothers"],
      submitted :false
    };
  },
  methods: {
      post:function(){
          this.$http.post('https://jsonplaceholder.typicode.com/posts',{
              title:this.blog.title,
              body:this.blog.content,
              userid :1
          }).then(function(data){
              console.log(data)
              this.submitted =true
          })
      }
  }
};
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}

#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>

<template>
 <div>
  <!-- <add-blog></add-blog> -->
  <router-view></router-view>
<!-- 

<show-blog></show-blog>
<list-blogs></list-blogs> -->
 </div>
</template>

<script>
import addBlog from './components/addBlog'
import showBlogs from './components/showBlogs'
import listBlogs from './components/Listblogs'



export default{
  components:{
'add-blog':addBlog,
'show-blog':showBlogs,
'list-blogs':listBlogs


    
  },
    data(){
        return{

        }
    },methods:{
        
    }
}
</script>

<style>

</style>

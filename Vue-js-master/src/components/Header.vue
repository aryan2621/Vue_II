<template>
  <nav>
    <ul>
      <li><router-link to></router-link></li>
      <li><router-link></router-link></li>

    </ul>
  </nav>
</template>

<script>

import {bus} from '../main';

export default{
  props:{
title:{
  type:String
}
  },

  data(){
    return {
        title:'Vue Ninja'
      
    }
  },methods:{
    changeTitle:function(){
      this.title ="Vue Wizards"
      bus.$emit('titleChanged','Vue Wizards')
      // this.$emit('changeTitle','Vue Wizards')
    }
  }
 
  }
</script>

<style scoped>
header{
    background: lightgreen;
    padding: 10px;
}
h1{
    color: #222;
    text-align: center;
}

</style>

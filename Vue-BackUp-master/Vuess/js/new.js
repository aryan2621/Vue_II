
Vue.component("greeting", {
  template: `<h1>Hello World {{name}} <button v-on:click="changeName">Change Name</button></h1>
   
    `,
  data: function () {
    return {
      name: "rishabh",
    };
  },
  methods: {
    changeName: function () {
      this.name = "mario";
    }
  },
});

var one = new Vue({
  el: "#vue-app-one",
  data: {
    title: "hiin baba",
    output:'your fav'
  },
  methods:{
    
    readrefs :function(){
      console.log(this.$refs.test.innerText)
      this.output =this.$refs.input.value

    }
  },
  computed: {
    greet: function () {
      return "one hello";
    },
  },
});

var two = new Vue({
  el: "#vue-app-two",
  data: {
    title: "hiii bababab",
  },
  methods: {
    changeTitle: function () {
      one.title = "change baba";
    },
    
    readrefs :function(){
      consol.log(this.$refs)

    }
  },
  computed: {
    greet: function () {
      return "two hello";
    },
  },
});

new Vue({
    el:"#vue-app",
    data:{
        error:false,
        success:false,
       
       age:24,
       a:0,
       b:0,
       available:true,
       nearby:false,
       characters:['rishabh','verma','naitik','vermaaa'],
       ninjas:[
           {name:'Ryu',age:22},
           {name:'rushabh',age:33},
           {name:'shubham',age:88}

       ]
    },
    methods:{
    },
    computed:{
        addToA:function(){
            console.log('a')
            return this.a+this.age
        }
        ,
        addToB:function(){
            console.log('b')
            return this.b+this.age
        },
        compClasses:function(){
            return {
                available:this.available,
                nearby :this.nearby
            }
        }
    }


})

var app=new Vue({
    el:"#app",
    data:{
        chinese:90,
        math:98,
        english:88,
    },
    computed : {
        sum:function(){
            return parseFloat(this.math)+parseFloat(this.chinese)+parseFloat(this.english)
        },
        average:function(){
            return Math.round(this.sum/3)
        }
        
    },
})
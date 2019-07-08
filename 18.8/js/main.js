// Vue.component('touer',{
//     template:'<button v-on:click="on_click">点点点</button>',
//     methods: {
//         on_click:function(){
//             alert("红红火火恍恍惚惚")
//         }
//     },
// })
var touer_component={
    template:'<button v-on:click="on_click">点点点</button>',
methods: {
on_click:function(){
    alert("红红火火恍恍惚惚")
}
}
}
new Vue({
    el:'#app',
    components:{
        touer:touer_component,
}
})

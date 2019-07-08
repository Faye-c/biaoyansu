Vue.component('user',{
    template:'<a v-bind:href="\'user\'+username">{{username}}</a>',
    props:['username']
})
new Vue({
    el:'#app',

})
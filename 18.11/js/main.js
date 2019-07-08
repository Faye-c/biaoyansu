Vue.component('balance',{
    template:`
    <div>
    <show v-on:show_balance="show_money"></show>
    <div v-if="flag">
    您的余额为1001000元
    </div>
    </div>
    `,
    methods:{
        show_money:function(data){
            this.flag=true;
            console.log('data:',data)
        }
    },
    data:function(){
        return{
            flag:false
        }
    }
})
Vue.component('show',{
    template:'<button @click="on_click">显示余额</button>',
    methods: {
        // on_click:function(){
        //     return this.$emit('show_balance',{a:1,b:2})
        // }
        on_click(){
            return this.$emit('show_balance',{a:1,b:2})
        }
    },
})
new Vue({
    el:'#app',
    data:{

    }
})
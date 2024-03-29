var Event=new Vue({

})
Vue.component('huahua',{
    template:`<div>
    我说<input type="text" v-on:keyup="on_change" v-model="i_said"/>{{i_said}}
    </div>
    `,
    methods: {
        on_change:function () {
            Event.$emit('huahua_said_something',this.i_said)
          }
        
    },
    data:function(){
        return{
            i_said:''
        }
    }
})
Vue.component('shuandan',{
    template:`
    <div>
    花花说：{{huahua_said}}
    </div>
    `,
    data:function(){
        return{
            huahua_said:''
        }
    },
    mounted:function(){
        console.log(this)
        var me=this
        console.log(me)
        Event.$on('huahua_said_something',function(data){
            me.huahua_said=data
        })
    }
})
new Vue({
    el:'#app',
    data:{

    }
})
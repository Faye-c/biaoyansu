var base = {
    methods: {
        hide: function () {
            this.visible = false;
        },
        show: function () {
            this.visible = true;
        },
        on_change: function () {
            this.visible = !this.visible;
        }

    },
    data: function () {
        return {
            visible: false,
        }
    },



}
Vue.component('tooltip', {
    template: `
    <div>
    <span @mouseenter="show" @mouseleave="hide">bys</span>
    <div v-if="visible">白岩松</div>
    </div>
    `,
mixins:[base],
// data:function(){
//     return{
//         visible:true,
//     }
// }
})
Vue.component('popup', {
    template: `
    <div>

    <button @click="on_change">显示/隐藏</button>
    <div v-if="visible">
    <h1>title</h1>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt sit rem, inventore aperiam fuga dolore id ex? Doloremque dignissimos, facilis velit, eligendi quae tempore excepturi quis aspernatur provident quas asperiores!
    </div>
    </div>
    `,
    mixins:[base]

   
})

var app = new Vue({
    el: '#app'
})
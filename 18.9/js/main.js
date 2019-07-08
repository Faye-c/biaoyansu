Vue.component('like', {
    template: '#like_component_tpl',
    data: function () {
        return {
            like_count: 10,
            liked: false,
        }
    },
    methods: {
        add_like: function () {
            if (!this.liked) {
                this.like_count++;
            } else {
                this.like_count--;

            }
            this.liked = !this.liked;

        }
    }
})
var app = new Vue({
    el: '#app',
    data: {

    },
    methods: {

    },
})
var app=new Vue({
    el:'#app',
    data:{
        // foodList:['葱','姜','蒜']
        foodList:[
            {
                name:'葱',
                price:18,
                discount:.5,
            },
            {
                name:'蒜',
                price:10,
                discount:.9,
            },
            {
                name:'葱',
                price:20,
                // discount:.5,
            },
        ]
    }
})
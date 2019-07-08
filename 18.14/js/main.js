Vue.directive('pin', function (el, binding) {
    // console.log(binding.value);
    // console.log(binding.rawName)
    // console.log(binding.name)
    // console.log(binding.modifiers)
    var pinned = binding.value;
    var position = binding.modifiers;
    var warning=binding.arg;
    console.log('warning',warning)
    console.log('position',position)
   
    if (pinned) {
        el.style.position='fixed';
        for (var key in position) {
            console.log('key',position[key])
            if (position[key]) {
                el.style[key] = '10px';
            }
        }
        if(warning==='true')
        {
            el.style.background='yellow';
        }
    } else
        el.style.position = "static"
})

var app = new Vue({
    el: '#app',
    data: {
        card1: {
            pinned: false,
        },
        card2: {
            pinned: false,
        }
    }

})
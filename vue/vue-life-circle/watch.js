var app = new Vue({
    el: '#app',
    data() {
        return {
            temperature: 17,
            suggest: 'Tshirt'
        }
    },
    methods: {
        addBtn() {
            this.temperature += 5;
        },
        reduceBtn() {
            this.temperature -= 5;
        }
    }
})
app.$watch('temperature', function(newVal, oldVal) {
    // temperature变化即触发
    console.log(oldVal + "    " + newVal)
    if (newVal >= 26) {
        this.suggest = '短袖'
    } else if (newVal > 0) {
        this.suggest = '夹克  长裙'
    } else {
        this.suggest = '棉袄'
    }
})
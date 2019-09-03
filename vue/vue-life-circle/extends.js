var ext = {
    created() {
        console.log('拓展的created')
    },
    methods: {
        add() {
            console.log('我是拓展的方法')
        }
    }
}
var app = new Vue({
    el: '#app',
    data() {
        return {
            message: 'hello'
        }
    },
    created() {
        console.log('原生 created')
    },
    methods: {
        add() {
            console.log('我是原生的方法')
        }
    },
    extends: ext,
    delimiters: ['${', '}']
})
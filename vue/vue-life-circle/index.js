var app = new Vue({
    el: '#app',
    data() {
        return {
            message: 'hello'
        }
    },
    beforeCreate() {
        console.log('before created')

    },
    created() {
        console.log('created')
    },
    beforeUpdate() {
        console.log('before update')
    },
    updated() {
        console.log('updated')
    },
    beforeMounted() {
        console.log('before mounted')
    },
    mounted() {
        console.log('mounted')
    },
    beforeDestroy() {
        console.log('before destory')
    },
    destroyed() {
        console.log('destoryed')
    }
})
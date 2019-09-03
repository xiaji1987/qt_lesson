var app = new Vue({
    el: '#app',
    data() {
        return {
            num: 1,
            price: 10,
            newsList: [
                { title: '全国各地的梯子遭到我国长城防火墙的禁用', date: '2019/5/31' },
                { title: '韩国瑜：准备承担2020年重担，让鬼混的民进党下台', date: '2019/6/1' },
                { title: '冠心病“救命药”单片涨价近11倍 药企：换了包装', date: '2019/6/2' },
                { title: '长春一天集齐雷电冰雹暴雨：有路段积水漂车，部分航班取消', date: '2019/6/3' }
            ]
        }
    },
    computed: {
        totalPrice() {
            return this.num * this.price;
        },
        reverseNews() {
            return this.newsList.reverse()
        }
    }
})
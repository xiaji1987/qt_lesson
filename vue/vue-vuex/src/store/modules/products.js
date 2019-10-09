import shop from '../../api/shop'
const state =  {
  all:[]
}
const mutations = {
  // 可以改state
  setProducts(state,products){
    state.all = products
  }
}
const actions = {
  getAllProducts({commit}){
    // vuex 给actions的 commit mutations => state
    // api
    shop.getProducts((products) => {
      // console.log('前端到api，callback回来了',products)
      // mutations
      commit('setProducts',products)
    })
  }
}
const getters = {

}
export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters
}
let Toast = {};
Toast.install = function (Vue, options) {
  let opt = {
    defaultType: 'center',// 默认显示的位置
    duration: '1500'// 默认的持续时间
  }
  for (let property in options) {
    opt[property] = options[property]
  }
  Vue.prototype.$toast = (tips, type) => {
    if (type) {
      opt.defaultType = type
    }
    if (document.getElementsByClassName('vue-toast').length) {
      return
    }
    let toastTpl = Vue.extend({
      template: `<div class="vue-toast toast-${opt.defaultType}">${tips}</div>`
    })
    let tpl = new toastTpl().$mount().$el;
    document.body.appendChild(tpl);
    setTimeout(() => {
      document.body.removeChild(tpl);
    },opt.duration)
  }
  ['bottom', 'center', 'right', 'top'].forEach(type => {
    Vue.prototype.$toast[type] = (tips) => {
      return Vue.propertype.$toast(tips, type)
    }
  })
}

export {
  Toast
}

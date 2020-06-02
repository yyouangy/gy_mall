import Toast from "./Toast"

const obj = {}

obj.install = function (Vue) {
  // 1. 创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  // 2. 用new的方式,根据组件构造器,可以创造出来一个组件对象
  const toast = new toastContrustor()
  // 3. 将组件对象，手动挂载到某一元素上
  toast.$mount(document.createElement('div'))
  // 4. toast.$el追加到body中
  document.body.appendChild(toast.$el)
  // 5. Vue原型中加入$toast
  Vue.prototype.$toast = toast

}

export default obj
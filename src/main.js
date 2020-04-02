import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入全局样式表
import './assets/css/global.css'
// 引入整个Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入Ueditor
import VueUeditorWrap from 'vue-ueditor-wrap'
// 全局注册Ueditor
Vue.component('vue-ueditor-wrap', VueUeditorWrap)

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import vueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'
Vue.config.productionTip = false


Vue.prototype.$bus = new Vue();

Vue.use(toast);

Vue.use(vueLazyLoad, {
  loading: require('assets/img/home/lazy.png')
  // src\components\content\goods\GoodsListItem.vue
})
// 使用这个回到是refresh太过频繁（防抖作用因不断加载，作用不明显）
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

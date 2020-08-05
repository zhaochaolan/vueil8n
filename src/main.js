import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
Vue.config.productionTip = false
import il8n from './il8n/index'

 new Vue({
  router,
  il8n,
  render: h => h(App)
}).$mount('#app')

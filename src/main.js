import Vue from 'vue'
import { Button, Header, Swipe, SwipeItem, Spinner, Field } from 'mint-ui'
import VueAnalytics from 'vue-analytics'
import App from './App'
import router from './router'
import './assets/scss/framework.scss'
import './assets/scss/nayou.scss'

Vue.component(Button.name, Button)
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Spinner.name, Spinner)
Vue.component(Field.name, Field)

Vue.use(VueAnalytics, {
  id: 'UA-XXX-X',
  router
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

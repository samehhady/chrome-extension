import Vue from 'vue'
import 'bulma-fluent/bulma.sass'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueCryptojs from 'vue-cryptojs'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.use(VueCryptojs)

// eslint-disable-next-line
new Vue({
  el: '#app',
  render: h => h(App),
})

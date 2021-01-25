import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

axios
  .get('http://127.0.0.1:8000/api/brands')
  .then(response => (this.name = response.data.bpi))
  .catch(error => console.log(error))


// Import Bootstrap an BootstrapVue CSS files (order is important)


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)






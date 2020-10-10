import Vue from 'vue'
import App from './App.vue'
import Menu from './Menu.vue'
import Content from './Content.vue'
import Resume from './Resume.vue'
import Portfolio from './Portfolio.vue'
import Contact from './Contact.vue'

Vue.component('app-menu', Menu);
Vue.component('app-content', Content);
Vue.component('app-resume', Resume);
Vue.component('app-contact', Contact);
Vue.component('app-portfolio', Portfolio);

new Vue({
  el: '#app',
  render: h => h(App)
})

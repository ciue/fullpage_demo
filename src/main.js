// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
import fullpage from '@/components/fullpage.vue';
import page1 from '@/components/page1.vue'

new Vue({
  el: '#app',
  data: {
    bgColor: ["red", "blue", "pink", "green"],
    pages: 5,
  },
  components: {
    fullpage,
    page1
  }
})

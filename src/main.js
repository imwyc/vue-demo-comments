import Vue from 'vue'
// import Vue from 'vue/dist/vue.esm.js'
import App from '@/App'

// new Vue({
//   el: '#app',
//   components: {
//     App
//   },
//   template: '<App />'
// })

new Vue({
  // el: '#app',
  render: h => h(App)
}).$mount('#app')

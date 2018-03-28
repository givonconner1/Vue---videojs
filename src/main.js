import Vue from 'vue'
import App from './App.vue'
import Vidplayer from './Videoplayer.vue'

Vue.component('vid-player', Vidplayer);

new Vue({
  el: '#app',
  render: h => h(App)
})

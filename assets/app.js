/** app.js
  *
  * Entry for bundling by webpack.
  * for example, if you have your own script, or plguin,
  * you can import that.
  * ex) import "./bower_components/animate.css/animate.min.css"
  *
  * you are able to include js, css
  * if you want to contain other scripts like .ts, .less, .sass,
  * set the loaders in tidory.config.js
  *
  * after import assets it will be contained in app.js
  */

import Vue from 'vue'
import InfiniteScroll from 'vue-infinite-scroll'

import ScrollSpy from './components/ScrollSpy.vue'
import Readmore from './components/Readmore.vue'

Vue.use(InfiniteScroll)

Vue.component('Scrollspy', ScrollSpy)
Vue.component('Readmore', Readmore)

new Vue({ el: '#app' })

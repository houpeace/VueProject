import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './router/index.js'
import ElementUI from 'element-ui'

import axios from 'src/config/ajax.js'

import jqMixin from './config/mixin.js'
import jqDirective from './config/directive.js'
import LazyRender from 'vue-lazy-render'
import './config/constant.js'
import './config/ajax.js'
 import '../element-ui/index.css'
//import 'element-ui/lib/theme-chalk/index.css' //element-ui默认主题UI 


import '../font-awesome/css/font-awesome.min.css' //font-awesome字体插件： http://fontawesome.io/icons/
import './assets/ui.scss'
Vue.config.devtools = true;
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

Vue.use(ElementUI)
Vue.use(jqMixin)
Vue.use(jqDirective)
Vue.use(LazyRender)
new Vue({
    el: '#app',
    store: store,
    router: router.router,
    render: h => h(App),
})
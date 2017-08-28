// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./config/rem"
import FastClick from 'fastclick'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Utile from './lib/utils'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Utile)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
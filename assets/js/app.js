import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import transFilter from 'vue-trans';

// use
Vue.use(VueRouter);
Vue.use(transFilter);
Vue.use(require('vue-moment'));

// make axios able to reach from all components
Vue.prototype.$http = axios;

// SCSS (+Bootstrap)
require('../css/app.scss');

// global jQuery
const $ = require('jquery');

// bootstrap JS
require('bootstrap-sass');

//import javascript
import main from './main';

import myVue from './components/myVue';

// vue
var vue = new Vue({
    el: '#app',
    components: {
        myVue,
    },
});
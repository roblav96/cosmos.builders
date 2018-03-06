// 

import '@/styles/variables.scss'
// import 'buefy/lib/buefy.css'
// import 'mdi/css/materialdesignicons.css'

import * as Vts from 'vue-property-decorator'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Buefy from 'buefy'

Vue.config.devtools = false
Vue.config.productionTip = false
Vue.config.performance = false

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Buefy, {
	defaultSnackbarDuration: 3000,
	defaultToastDuration: 3000,
	defaultInputAutocomplete: 'off',
	defaultNoticeQueue: false,
})

// Vts.Component.registerHooks(['beforeRouteEnter', 'beforeRouteLeave', 'beforeRouteUpdate'])

require('@/router')



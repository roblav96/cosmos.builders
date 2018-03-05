// 

import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './app/app'
// import Home from './routes/home'



export const routes = [

	{
		name: 'home',
		path: '/',
		// component: Home,
		component: () => import('./routes/home'),
	},

	{
		path: '*',
		redirect: { name: 'home' },
	},

] as Array<VueRouteConfig>

export const router = new VueRouter({
	mode: 'history',
	routes: routes,
})

export const app = new App({ router }).$mount('#app')



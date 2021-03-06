// 

import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '@/services/store'
import App from '@/app/app'



export const routes = [

	{
		name: 'home', path: '/', component: () => import('@/routes/home/home'),
	},

	{
		name: 'testnets', path: '/testnets', component: () => import('@/routes/testnets/testnets'),
	},

	{
		path: '*', redirect: { name: 'home' },
	},

] as Array<RouteConfig>

export const router = new VueRouter({
	mode: 'history', routes,
})

export const app = new App({ router, store }).$mount('#app')



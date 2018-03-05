// 

import Vue, { ComponentOptions, WatchOptions, FunctionalComponentOptions } from 'vue'
import * as VueRouter from 'vue-router'
import * as Vuex from 'vuex'
import * as Vts from 'vue-property-decorator'
import * as Avts from 'av-ts'



declare global {
	interface VueComponent extends ComponentOptions<Vue> { }
	interface VueLocation extends VueRouter.Location { }
	interface VueRoute extends VueRouter.Route { }
	interface VueRouteConfig extends VueRouter.RouteConfig { }
	type VueRouteNext = (to?: VueRouter.RawLocation | false | ((vm: Vue) => any) | void) => void
}

declare module '*.vue' {
	export default Vue
}

declare module 'vue/types/vue' {
	interface VueConstructor {
		options: ComponentOptions<Vue>
	}
}

declare module 'vue-property-decorator' {
	function Watch(path: string, options?: WatchOptions): MethodDecorator & PropertyDecorator
}



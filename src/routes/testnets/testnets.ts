// 

import * as Vts from 'vue-property-decorator'
import Vue from 'vue'
import _ from 'lodash'
import got from 'got'



@Vts.Component({
	name: 'Testnets',
})
export default class Testnets extends Vue {
	
	created() {
		got('https://api.github.com/search/code?q=genesis+in:path+repo:tendermint/testnets').then(function(response) {
			// console.log('response.body', response.body)
			console.log('typeof response.bodsdssy', typeof response.body)
		}).catch(function(error) {
			console.error('search > error', error)
		})
	}

	mounted() {

	}

	beforeDestroy() {

	}

}



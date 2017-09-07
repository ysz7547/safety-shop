import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './views/index.vue'
import classify from './views/classify.vue'
import shopcar from './views/shopcar.vue'
import my from './views/my.vue'
import search from './views/search.vue'
import goodslist from './views/goodslist.vue'
import add from './views/add.vue'
import address from './views/address.vue'
Vue.use(VueRouter)

const routes=[
	{
		path:'/',
		redirect:'/index'
	},
	{
		name:'index',
		path:'/index',
		component:index
	},
	{
		name:'classify',
		path:'/classify',
		component:classify
	},
	{
		name:'shopcar',
		path:'/shopcar',
		component:shopcar
	},
	{
		name:'my',
		path:'/my',
		component:my
	},
	{
		name:'search',
		path:'/search',
		component:search
	},
	{
		name:'goodslist',
		path:'/goodslist',
		component:goodslist
	},
	{
		name:'add',
		path:'/add',
		component:add
	},
	{
		name:'address',
		path:'/address',
		component:address
	}
]

let router=new VueRouter({routes:routes})

export default router

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store={
	state:{
		goods_info:[
			{
				id:'',
				price:''
			}
		],
		list:[],
		shopCar:[],
		price_sum:0,
		isselect:false
	},
	getters:{
		
	},
	mutations:{
		add_goods:function(state,goods){
			state.goods_info.push(goods)
		},
		goods_add:function(state,goods){
			state.shopCar.push(goods)
		},
		price_sum:function(state,sum){
			state.price_sum+=sum
			console.log(state.price_sum)
		}
	},
	
	
	
	actions:{
		add_goods:function(context,goods){
			context.commit('add_goods',goods)
		},
		goods_add:function(context,goods){
			context.commit('goods_add',goods)
		},
		price_sum:function(context,sum){
			context.commit('price_sum',sum)
		}
	}
}

export default new Vuex.Store(store)

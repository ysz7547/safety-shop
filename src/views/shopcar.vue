<template>
  	<div class="shopping-car">
  		<div class="shoppinghead-wrap">
  			<header class="shopping-head">
	  			购物车
	  			<span class="compile" @click="compile">编辑</span>
	  		</header>
  		</div>
  
  		
  		<shoppingcar  v-for="i in $store.state.shopCar" :i="i" :selectAll="selectAll"></shoppingcar>
  		<div class="hot-recommend">
			<h4>
				<img class="hot-left" src="../images/hot-left2.png" alt="" />
					热门推荐
				<img class="hot-right" src="../images/hot-right2.png" alt="" />
			</h4>
			<div class="recommend-goods">
				<goods :info="goods_info"></goods>
			</div>
		</div>
		
		<!--<div class="shopping-foot">
			<label class="track">
				<input class="check" type="checkbox">
				<span class="icon" ></span>
			</label>
		</div>-->
		<div class="totle_price">
			<label class='off'>
				<input type="checkbox" v-model="selectAll"/>
				<span class='choice po'></span>
			</label>
			
			<span class="heji">合计:￥<b style="color:#FB4141">{{price_sum}}</b></span>
			<span class='settlement'>结算</span>
		</div>

		<FooterNav></FooterNav>
  	</div>
</template>

<script>
import goods from '../component/goods.vue'
import FooterNav from '../component/footer.vue'
import shoppingcar from '../component/shoppingcar.vue'
export default{
	data(){
		return{
			title:'这是购物车页',
			goods_info:[],
      		count:1,
      		goods:[],
      		selectAll:false
		}
	},
	components:{
		goods,
		FooterNav,
		shoppingcar
	},
	created:function(){
	  	this.$http.get('../src/mock/home1.json').then((res)=>{
	  		//console.log(res.data.data.data);
	  		this.goods_info=res.data.data.data;
	  		this.$store.state.list=res.data.data.data;
	  	})
	  	console.log(this.$store.state.shopCar)
	},
	computed:{
		price_sum:function(){
			return parseFloat(this.$store.state.price_sum.toFixed(2))
		}
	},
	watch:{
		selectAll(data){
			if(data){
				
			}else{
				
			}
		}
	},
	methods:{
		compile:function(){
			
		}
	}
  
}


</script>

<style>
.shopping-car{
	width: 100%;
	height: 100%;
	flex: 1;
	overflow-y: scroll;
	padding-top: 45px;
}
.shoppinghead-wrap{
	width: 100%;
	position: fixed;
	top:0;
	z-index: 999;
}
.shopping-head{
	width: 100%;
	height:45px;
	line-height: 45px;
	font-size: 16px;
	text-align: center;
	background: #fff;
	border-bottom: 1px #eee solid;
	position: relative;
}
.shopping-head .compile{
	position: absolute;
	right:10px;
	font-size: 14px;
}

.shopping-list li{
	display: flex;
	background: #fff;
	margin-bottom: 5px;
}
.shopping-list li dl{
	width: 88%;
	padding: 8px;
	display: flex;
}
.shopping-list li dl dt{
	width:20%;
	max-width:75px;
	height:65px;
	padding: 5px;
	border: 1px solid #eee;
}
.shopping-list li dl dt img{
	width: 100%;
	height: 100%;
}
.shopping-list li dl dd{
	width: 80%;
	margin-left: 5px;
}
.shopping-list li dl dd .shopping-goods{
	
	font-size: 12px;
}
.goods-count{
	margin-top: 20px;
	position: relative;
}
.goods-count .goods-price{
	color:#FC4141;
	font-weight: 600;
}
.goods-count .ctrl-count{
	border: 1px solid #ccc;
	position: absolute;
	right: 5px;
	top:5px;
}
.goods-count .ctrl-count input{
	width: 30px;
	height: 20px;
	border: none;
	text-align: center;
	border-right:1px solid #ccc ;
	border-left:1px solid #ccc ;
}
.goods-count .ctrl-count span{
	display: inline-block;
	width: 20px;
	height:20px;
	line-height: 20px;
	text-align: center;
}

.toggle-checkbox .track{
	margin-top: 35px;
	margin-left: 10px;
}
.hot-recommend{
	margin-top:5px;
	padding-bottom: 85px;
}
.hot-recommend h4{
	height:40px;
	line-height: 40px;
	background: #fff;
	font-weight: normal;
	text-align: center;
	font-size: 14px;
}
.hot-recommend h4 img{
	width: 15px;
	height: 15px;
}
.recommend-goods{
	border-top:5px solid #F1F1F1;
	padding: 5px 0;
}

.totle_price{
		width: 100%;
		position: fixed;
		bottom: .5rem;
		height: .4rem;
		line-height: .4rem;
		background: #fff;
		padding-left: 40px;
		box-sizing: border-box;
	}
	.settlement{
		float: right;
		width: 30%;
		text-align: center;
		font-size: .16rem;
		background: #fc4141;
		color: white;
	}
	.po{
		position: absolute;
		left: 10px;
		top: .1rem;
	}
	.heji{
		position: absolute;
		right: 1.2rem;
	}

.off input{
		display: none;
	}
	.off input:checked + .choice{
		background: #fb4141;
		border: none;
	}
	.off input:checked + .choice::after{
		content: "";
		display: block;
		width: 12px;
		height: 6px;
		border-left: 2px solid #fff;
		border-bottom: 2px solid #fff;
		transform: translateX(3px) translateY(3px) rotate(-45deg);
		
	}
	.choice{
		display: inline-block;
		width: 16px;
		height: 16px;
		border-radius: 100%;
		border: 1px solid #ccc;
		flex-shrink: 0;
	}


.toggle-checkbox input[type=checkbox]{
	display:none;
}
.toggle-checkbox input:checked + .icon
 {  display: block; }
.toggle-checkbox .track{
  width: 18px;
  height: 18px;
  display: block;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius:50%; }
.toggle-checkbox .track .icon{
  width: 8px;
  height: 5px;
  margin-left: 3px;
  margin-top: 3px;
  display: none;
  border-left: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  transform: rotate(-45deg); }
</style>

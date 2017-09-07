<template>
	<div class="home-goods">
		<dl v-for="(x,index) in info" >
	       	<dt><img :src="'http://www.lb717.com'+x.obj_data" alt="" @click="to_goodslist(x.goods_id)"/></dt>
	        <dd>
	        	<p>{{x.goods_name}}</p>
		        <p>
		            <span class="goods-price">￥{{x.discount_price}}</span>
		            <img v-on:click="add_car(x.goods_id)" src="../images/car.png" alt="" />
		        </p>
	        </dd>
	    </dl>
   </div>
</template>

<script>
import store from '../store/store'
	export default{
		name:'goods',
		data(){
			return{
				
			}
		},
		props:{
			info:{
				required:true
			}
		},
		mounted(){
			
		},
		methods:{
			add_car:function(id){
				this.$http.get('../src/mock/addcar.json').then((data)=>{
					if(data.data.code==1){
						this.$store.dispatch('add_goods',{
							id:this.info.id,
							price:this.info.price
						})
					}
				})
				for(var i=0;i<this.$store.state.list.length;i++){
					if(this.$store.state.list[i].goods_id==id){
						this.goods_car=this.$store.state.list[i];
						console.log(this.goods_car)
						this.$store.dispatch('goods_add',this.goods_car)
					}
				}
				console.log(id)
				console.log(this.$store.state.shopCar)
			},
			to_goodslist:function(id){
				console.log(id)
				this.$router.push({path:"/goodslist/?id="+id})
			}
		}
	}
</script>

<style>
.home-goods{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.home-goods dl{
	width:49.5%;
	background: #fff;
	margin-top: 5px;
}
.home-goods dl dt{
	width: 100%;
}
.home-goods dl dt img{
	width: 100%;
}
.home-goods dl dd{
	margin-top: 5px;
}
.home-goods dl dd p:nth-child(1){
	height: 30px;
	overflow: hidden;
	text-overflow: ellipsis;
	padding: 0 2px;
	margin-bottom: 5px;
}
.home-goods dl dd p:nth-child(2) .goods-price{
	color:#FC4141;
	font-size: 14px;
	font-weight: 600;
}
.home-goods dl dd p:nth-child(2) img{
	width: 25px;
	height: 20px;
	float: right;
	padding: 0 3px;
	margin-bottom: 3px;
}
</style>
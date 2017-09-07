<template>
	<ul class="shopping-list">
  			<li class="toggle-checkbox">
  				<label class="track">
					<input class="check" type="checkbox" v-model="select">
					<span class="icon" ></span>
				</label>
  				<dl>
  					<dt><img :src="'http://www.lb717.com'+i.obj_data" alt="" /></dt>
  					<dd>
  						<p class="shopping-goods">
  							{{i.goods_name}}
  						</p>
  						<div class="goods-count">
  							<p class="count">×{{count}}</p>
  							<p class="goods-price">￥{{i.discount_price}}</p>
  							<p class="ctrl-count">
  								<span class="minus" @click="minus(i.discount_price)">-</span>
  								<input type="text" value="1" v-model="count"/>
  								<span class="add" @click="add(i.discount_price)">+</span>
  							</p>
  						</div>
  					</dd>
  				</dl>
  			</li>
  		</ul>
</template>

<script>
import store from '../store/store'
	export default{
		name:"shoppingcar",
	data(){
		return{
			count:1,
			select:false
		}
	},
		props:["i","i.discount_price","selectAll"],
	methods:{
		minus:function(){
			if(this.count<=1){
				this.count=1;
				return false;
			}else{
				this.count--;
			}
			if(this.select){
				this.$store.dispatch('price_sum',-this.i.discount_price)
			}
		},
		add:function(){
			this.count++;
			if(this.select){
				this.$store.dispatch('price_sum',this.i.discount_price*1)
			}
		}
	},
	watch:{
        select:function(data){	
            if(data){
                this.$store.dispatch('price_sum',this.i.discount_price*this.count)
            }else{
                this.$store.dispatch('price_sum',-this.i.discount_price*this.count)
            }
        },
        selectAll(data){
        	if(data){
        		this.select=true;
        	}else{
        		this.select=false;
        	}
        }
    }
}
</script>

<style>
	
</style>
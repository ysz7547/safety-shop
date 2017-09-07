<template>
	<div id="apq">
	<div class="heade-wrap">
		<div class="heade">
			<i class="fa fa-cog dribbble"></i>
			我的717商城
		</div>
	</div>
	
	<div class="myhead">
		<dl>
			<dt><img src="../images/组-26@2x.png" alt="" /></dt>
			<dd>71712419209</dd>
		</dl>
	</div>
	<div class="family">
		<dl>
			<dt><img src="../images/shop_img_03.png" alt=""  /></dt>
			<dd>我的店铺</dd>			
		</dl>
		<i class="fa fa-angle-right rig fa-2x"></i>
	</div>
	<div class="tuwen">
		<dl>
			<dt>
				<img src="../images/cv.png" alt="" />
			</dt>
			<dd>待付款</dd>
		</dl>
		<dl>
			<dt>
				<img src="../images/op.png" alt="" />
			</dt>
			<dd>待发货</dd>
		</dl>
		<dl>
			<dt>
				<img src="../images/zxc.png" alt="" />
			</dt>
			<dd>待收货</dd>
		</dl>
		<dl>
			<dt>
				<img src="../images/sh.png" alt="" />
			</dt>
			<dd>售后</dd>
		</dl>
		<dl>
			<dt>
				<img src="../images/qw.png" alt="" />
			</dt>
			<dd>我的订单</dd>
		</dl>
	</div>
	<div class="select-list">
		<dl>
			<dt><img src="../images/opi.png" alt="" /></dt>
			<dd>
				我的社区
			    <i class="fa fa-angle-right righ fa-2x"></i>
			</dd>
		</dl>
			<dl>
			<dt><img src="../images/uio.png" alt="" /></dt>
			<dd>
				账户余额
			    <i class="fa fa-angle-right righ fa-2x"></i>
			</dd>
		</dl>	<dl>
			<dt><img src="../images/pi.png" alt="" /></dt>
			
			<dd @click="address">
				地址管理
			    <i class="fa fa-angle-right righ fa-2x"></i>
			</dd>
		</dl>
	</div><div class="clear"></div>
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
	<FooterNav></FooterNav>
</div>
</template>


<script>
import FooterNav from '../component/footer.vue'
import goods from '../component/goods.vue'
export default{
	data(){
		return{
			title:'这是我的页',
			goods_info:[]
		}
	},
	components:{
		goods,
		FooterNav
	},
  created:function(){
  	this.$http.get('../src/mock/home1.json').then((res)=>{
  		//console.log(res.data.data.data);
  		this.goods_info=res.data.data.data;
  		this.$store.state.list=res.data.data.data;
  	})
  },
  methods:{
  	address:function(){
  		this.$router.push({'path':'/address'})
  	}
  }
  
}


</script>

<style>
.heade{
		height:45px;
		width:100%;
		text-align:center;
		line-height:45px;
		background: #fff;
		font-size: 16px;
		position: relative;
	}
	.dribbble{
		position: absolute;
		left:10px;
		top:15px;
		font-size: 16px;
	}
	.myhead{
		width:100%;
		height:90px;
		background:#FC4141;
		}
	.myhead dl{
			width:30%;
			height:100%;
			margin: 0 auto;
			
	}
	.myhead dl dt{
		width:100%;
		height:80%;
		text-align: center;
	}
	.myhead dl dt img{
		height:68px;
		
	}
	.myhead dl dd{
		width:100%;
		height:20%;
		color:#fff;
		text-align:center;
		color:#fff;
	}
	.family{
		width:100%;
		height:50px;
		position:relative;
		background: #fff;
		padding: 0 10px;
		box-sizing: border-box;
	}
	.family dl{
		width:30%;
		height:100%;
		
	}
	.family dl dt{
		width:30%;
		height:100%;
		float:left;	
	}
	.family dl dd{
		width:70%;
		height:100%;
		float:left;
		text-indent: 5px;
		line-height: 50px;
		color:red;			
	}
	.family dl dt img{
		height:25px;
		margin-top: 11px;
	}
	.rig{
		position:absolute;
		right:0;
		top:10px;
		margin-right: 10px;
		color:red;
	}
  .tuwen{
  	width:100%;
  	height:50px;
  	display:flex;
  	background: #fff;
  	margin-top: 3px;
  	}
  	.tuwen dl{
  		flex-grow:1;
  		
  	}
  	.tuwen dl dt{
  		height:60%;
  		text-align: center;
  	
  	}
  	.tuwen dl dt img{
  		height:20px;
  		margin-top: 5px;
  			
  	}
  		.tuwen dl dd{
  			height:40%;
  			text-align: center;
  		}
.select-list{
	width:100%;
	height:45px;
	margin-top: 3px;
	background: #fff;
	margin-top: 10px;
	
}
.select-list dl{
	width:100%;
	height:45px;
	background: #fff;
	margin-top: 5px;
	
}
.select-list dl dt{
	width:10%;
	height:100%;
	float:left;
	text-align: right;
}
.select-list dl dt img{
	height:20px;
	margin-top: 10px;
}
.select-list dl dd{
	float:left;
	width:90%;
	height:100%;
	line-height: 45px;
	text-indent: 5px;
	
}
.clear{
	clear: both;
}
.righ{
	float:right;
	margin-right: 10px;
	margin-top: 10px;
}
.hot-recommend{
	margin-top:5px;
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
</style>

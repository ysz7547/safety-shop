<template>
  	<div class="container">
        <div class="head">
        	<header class="header">
	            <img class="logo" src="../images/logo_03.png" alt="">
	            <div class="search">
	                <input type="text" @focus="onfocu" placeholder="请输入您要购买的商品">
	                <i class="fa fa-search"></i>
	            </div>
	            <dl class="shop">
	                <dt><img src="../images/shop_img_03.png" alt=""></dt>
	                <dd>我的店铺</dd>
	            </dl>
	            <dl class="mess">
	                <dt><img src="../images/message_03.png" alt=""></dt>
	                <dd>消息</dd>
	            </dl>
	    	</header>
        </div>
        <section class="section">
            <swiper :options="swiperOption" ref="mySwiperA">
				  
				  <swiper-slide>
				  	<div class="banner">
						<img src="../images/双店铺banner2.png" alt="" />
					</div>
				  </swiper-slide>
				  <swiper-slide>
				  	<div class="banner">
						<img src="../images/双店铺banner2.png" alt="" />
					</div>
				  </swiper-slide>
				  
				  <div class="swiper-pagination" slot="pagination"></div>
			</swiper>
           
            
            <div class="sub_list">
            	<dl>
            		<dt><img src="../images/homedown_03.png" alt="" /></dt>
            		<dd>家乡味道</dd>
            	</dl>
            	<dl>
            		<dt><img src="../images/foods_03.png" alt="" /></dt>
            		<dd>进口食品</dd>
            	</dl>
            	<dl>
            		<dt><img src="../images/milk_03.png" alt="" /></dt>
            		<dd>牛奶乳品</dd>
            	</dl>
            	<dl>
            		<dt><img src="../images/tea_03.png" alt="" /></dt>
            		<dd>茶果冲饮</dd>
            	</dl>
            	<dl>
            		<dt><img src="../images/goodfood_03.png" alt="" /></dt>
            		<dd>休闲零食</dd>
            	</dl>
            	<dl>
            		<dt><img src="../images/livefood_03.png" alt="" /></dt>
            		<dd>米面粮油</dd>
            	</dl>
            	<dl>
            		<dt><img src="../images/smell_03.png" alt="" /></dt>
            		<dd>调味调料</dd>
            	</dl>
            	<dl>
            		<dt><img src="../images/drink_03.png" alt="" /></dt>
            		<dd>酒水饮料</dd>
            	</dl>
            	
            	<div class="dynamic">
            		<span>商城动态</span>
            		<p>绿色无公害 无污染 无添加 天然有机蔬菜源头吃的放心,健康 第一，安全保证，确保蔬菜新鲜。</p>
            		<!--<swiper :options="swiperO" ref="mySwiperA">
						  <swiper-slide>
						  	
						  </swiper-slide>
						  <swiper-slide>
						  	<p>绿色无公害 无污染 无添加 天然有机蔬菜源头吃的放心,健康 第一，安全保证，确保蔬菜新鲜。</p>
						  </swiper-slide>
					</swiper>-->
            	</div>
            </div>
            
            <div class="everyday">
            	 <span class="every">天天特惠</span> 每天都有惊喜<span class="more">更多 <i class="fa fa-angle-right"></i></span>
            </div>
            
            <div class="beauty">
            	<div class="beauty-left">
            		<img src="../images/left.png" alt="" />
            	</div>
            	<div class="beauty-right">
            		<div class="up">
						<img src="../images/right1.png" alt="" />
            		</div>
            		<div class="down">
						<img src="../images/right2.png" alt="" />
            		</div>
            	</div>
            </div>
            
            <div class="homedown">
            	<h4>
            		家乡味道 <span>更多<i class="fa fa-angle-right"></i></span>
            	</h4>
            	
            	<goods :info="goods_info"></goods>
            	
            </div>
        </section>
        <FooterNav></FooterNav>
    </div>
</template>

<script>
import goods from '../component/goods.vue'
import FooterNav from '../component/footer.vue'
export default{
	name: 'index',
    data(){
      return {
      	goods_info:[],
        swiperOption: {
          autoplay: 1000,
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
          onTransitionStart(swiper){
           //console.log(swiper)
          }
      	}/*,
      	swiperO:{
      		autoplay: 1000,
      	}*/
    }
  },
  components:{
  	goods,
  	FooterNav
  },
  methods:{
  	onfocu:function(){
  		this.$router.push({path:'/search'})
  	}
  },
  created:function(){
  	this.$http.get('../src/mock/home1.json').then((res)=>{
  		//console.log(res.data.data.data);
  		this.goods_info=res.data.data.data;
  		this.$store.state.list=res.data.data.data;
  	})
  }
}


</script>

<style>

.head{
	width: 100%;
	position: fixed;
	top:0;
	left:0;
	z-index: 999;
}
.header {
    width: 100%;
    height: 45px;
    background: #fff;
    display: flex;
    padding: 0 10px;
    box-sizing: border-box;}
.header .logo {
      width: 50px;
      height: 20px;
      margin-top: 12px; }
.header .search {
      width: 40%;
      height: 30px;
      margin-left: 5px;
      margin-top: 8px;
      position: relative; }
.header .search input {
        width: 100%;
        height: 28px;
        border: none;
        background: #f5f5f5;
        border-radius: 5px;
        padding-left: 30px;
        font-size: 12px; }
.header .search i {
        font-size: 16px;
        color: #ccc;
        position: absolute;
        left: 5px;
        top: 6px; }
.header .shop,.header .mess{
      width: 50px;
      text-align: center;
      position: absolute; }
.header dl dt {
        width: 22px;
        margin: 0 auto;
        height: 22px; }
.header dl dt img {
          width: 100%; }
.header dl dd{
		color:#fc4141
}
.header .shop {
      top: 5px;
      right: 45px; }
.header .mess {
      top: 5px;
      right: 0; }
.section {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    flex: 1; 
    padding-top:45px;
    padding-bottom: 45px;}
.section .banner {
      width: 100%; }

.section .banner img {
          width: 100%;
          height: auto; }
 .section .sub_list{
 	display: flex;
 	flex-wrap: wrap;
 	padding-bottom: 10px;
 	background: #fff;
 	margin-top: 3px;
 }   
  .section .sub_list dl {
  	width: 25%;
  	text-align: center;	
  	margin-top: 10px;
  }      
 .sub_list dl dt{
  	width: 45px;
  	margin: 0 auto;
  	height: 45px;
 }        
 .sub_list dl dt img{
  	width: 100%;
  	height: 100%;
 }
  .sub_list dl dd{
  	margin-top: 5px;
  }
.sub_list .dynamic{
	margin-top: 5px;
	padding: 0 10px;
	display: flex;
}
.sub_list .dynamic span{
	display: block;
	font-size: 14px;
	color:#ff6d00;
	height: 40px;
}
.sub_list .dynamic p {
	height:40px;
	border: 1px solid #ccc;
	border-radius: 5px;
	margin-left: 3px;
	padding: 0 3px;
	
}
.everyday{
	width: 100%;
	height: 40px;
	line-height: 40px;
	background: #fff;
	margin-top: 5px;
	padding:0 10px;
	box-sizing: border-box;
	color:#FF6D00;
}
.everyday .every{
	display: inline-block;
	height: 40px;
	background: url('../images/everyday_03.png') no-repeat left center;
	background-size: 28px 28px;
	padding-left: 32px;
	font-size: 14px;
}
.everyday .more{
	float: right;
	color: #2C3E50;
}
.everyday .more i{
	font-size: 16px;
}
.beauty {
	width:100%;
	display: flex;
	margin-top: 5px;
}
.beauty .beauty-left,.beauty-right{
	width: 50%;
}
.beauty img{
	width: 100%;
}
.beauty-left{
	padding-right: 2px;
}
.beauty-right{
	padding-left: 2px;
}
.beauty-right .down{
	margin-top: 2px;
}

.homedown h4{
	width: 100%;
	height:40px;
	line-height: 40px;
	background: #fff;
	text-align: center;
	font-size: 14px;
	color:#FF6D00;
	font-weight: normal;
	position: relative;
	margin-top: 3px;
}
.homedown h4 span{
	position: absolute;
	right: 10px;
	font-size: 12px;
	color: #2C3E50;
}

</style>

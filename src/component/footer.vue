<template>
	<footer class="footer">
		<router-link  v-for="(i,index) in navList" :to="i.path">
			<p :class="{'hide':i.text!='购物车'}">
				<span class='num'>{{count}}</span>
			</p>
			<p :class="i.cls">
				<img :src="i.src" alt=""/>
			</p>
			<p @click = "click(index)">{{i.text}}</p>
		</router-link>
	</footer>
</template>

<script>
	import logoSrc1 from '../images/index2.png'
	import logoSrc2 from '../images/fenlei.png'
	import logoSrc3 from '../images/shequ.png'
	import logoSrc4 from '../images/shopcar.png'
	import logoSrc5 from '../images/my.png'
	export default {
		name: 'FooterNav',
		data() {
			return {
				navList: [{
						id: 0,
						icon: '',
						text: '首页',
						path: '/index',
						src: logoSrc1,
						cls: 'img'
					},
					{
						id: 1,
						icon: '',
						text: '分类',
						path: '/classify',
						src: logoSrc2,
						cls: 'img img2'
					},
					{
						id:2,
						icon: '',
						text: '',
						path: '',
						src: logoSrc3,
						cls: 'img img1'
					},
					{
						id: 3,
						icon: '',
						text: '购物车',
						path: '/shopcar',
						src: logoSrc4,
						cls: 'img'
					},
					{
						id: 4,
						icon: '',
						text: '我的',
						path: '/my',
						src: logoSrc5,
						cls: 'img img2'
					}
				],
				cls:0
			}
		},
		methods:{
			click(i){
				this.cls = i 
			}
		},
		computed:{
		  	count:function(){
		  		return this.$store.state.goods_info.length-1
		  	}
  		}
	}
</script>

<style>
	/*footer*/
	
	.footer {
		width: 100%;
		height: .5rem;
		display: flex;
		background: #fff;
		padding: 2px;
		box-sizing: border-box;
		position: fixed;
		bottom: 0;
	}
	
	.footer a {
		flex: 1;
		display: block;
		text-align: center;
	}
	
	.footer .img {
		width: .25rem;
		height: .25rem;
		margin: 0 auto;
		padding-top: .05rem;
	}
	
	.footer .img img {
		width: 100%;
		height: auto;
	}
	
	.footer .img1 {
		padding-top: .01rem;
		width: .45rem;
		flex: 1;
	}
	
	.footer .img1 img {
		width: 100%;
	}
	
	.footer .img2 {
		width: .2rem;
		padding-top: .05rem;
	}
	
	.mark {
		color: #fc4141;
	}
	.footer a{
		position: relative;
	}
	.num{
		display: inline-block;
		width: .15rem;
		height: .15rem;
		line-height: .15rem;
		text-align: center;
		border-radius: 100%;
		position: absolute;
		background: red;
		color: white;
		right: 20%;
	}
	.hide{
		display: none;
	}
</style>
<template>
  <div id="app">
    <router-view></router-view>
    <!--<footer class="footer">
    	<router-link to="index" class="link">
    		<dl>
					<dt><img src="./images/index.png" alt="" /></dt>
					<dd>首页</dd>
				</dl>
    	</router-link>
			<router-link to="classify" class="link">
    		<dl>
					<dt><img src="./images/fenlei.png" alt="" /></dt>
					<dd>分类</dd>
				</dl>
    	</router-link>
			<router-link to="shopcar" class="link">
    		<dl>
					<dt><img src="./images/shopcar.png" alt="" /><span>{{count}}</span></dt>
					<dd>购物车</dd>
				</dl>
    	</router-link>
			<router-link to="my" class="link">
    		<dl>
					<dt><img src="./images/my.png" alt="" /></dt>
					<dd>我的</dd>
				</dl>
    	</router-link>
    </footer>-->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },
  computed:{
  	count:function(){
  		return this.$store.state.goods_info.length
  	}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  font-size: 12px;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background: #f6f5f5;
  display: -webkit-flex;
  -webkit-flex-direction: column;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
}

a {
  color: #42b983;
}
.footer {
	width: 100%;
	height: 45px;
	display: flex;
	background: #fff;
	border-top:1px solid #eee;
	position: fixed;
	bottom:0;
}
.footer .link{
	width: 25%; 
	text-align: center;
	margin-top: 3px;
}
.footer dl dt {
	width: 20px;
	margin: 0 auto;
	position: relative;
}
.footer dl dt span{
	position: absolute;
	width:12px;
	height: 12px;
	background: #FC4141;
	border-radius: 50%;
	color:#fff;
}
.footer dl dt img{
	width: 100%;
}
.footer dl dd {
	color:#2C3E50
}
</style>

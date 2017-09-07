<template>
	<div class="search">
		<header class="header2">
			<i class="fa fa-search"></i>
			<input type="text" placeholder="请输入您要购买的商品" v-model.trim="search_value"/>
			<span @click="search">搜索</span>
		</header>
		<div class="recently">
			<h4 class="recent-search">
				<span>最近搜索</span>
				<img src="../images/rubbish.png" alt="" />
			</h4>
			<div class="record">
				<span v-if="!search_memory">暂无搜索记录...</span>
				<ul v-else>
					<li v-for="x in local_history">{{x}}</li>
				</ul>
			</div>
			<div class="men_search">
				大家都在搜
				<ul>
					<li>粽子</li>
					<li>锅巴</li>
					<li>干果</li>
					<li>小吃</li>
					<li>酱</li>
					<li>特产</li>
					<li>零食</li>
					<li>大米</li>
					<li>面粉</li>
				</ul>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				title:'这是搜索页',
				search_value:'',
				local_history:[],
				search_memory:false
			}
		},
		created:function(){
			let vm=this;
			let ls=localStorage;
			if(ls.getItem('search-history')){
				vm.local_history=JSON.parse(ls.getItem('search-history'))
				vm.search_memory=true
			}
		},
		methods:{
			search(){
				let vm=this;
				let ls=localStorage;
				if(vm.search_value){
					vm.local_history.push(vm.search_value)
					ls.setItem("search-history",JSON.stringify(vm.local_history))
				}
			}
		}
	}
</script>

<style>
.search{
	width: 100%;
	height: 100%;
	background: #fff;
} 
.search .header2 {
	width:100%;
	height:45px;
	line-height: 45px;
	border-bottom: 1px solid #CCCCCC;
	padding: 0 10px;
	position: relative;
	box-sizing: border-box;
}
.search .header2 i{
	font-size: 14px;
	color:#ccc;
	position: absolute;
	left:20px;
	top:17px
}
.search .header2 input{
	width:80%;
	height:30px;
	border: none;
	border-radius: 8px;
	background: #F5F5F5;
	padding-left: 30px;
	box-sizing: border-box;
}
 .search .header2 span{
	font-size: 14px;
	margin-left: 15px;
}
.recently{
	width:100%;
	padding:0 10px;
	box-sizing: border-box;
}
.recently .recent-search{
	height: 40px;
	line-height: 40px;
	font-size: 14px;
	font-weight: normal;
}
.recent-search img {
	width: 14px;
	height:14px;
	float: right;
	margin-top: 12px;
}
.record{
	width: 100%;
	min-height:100px;
	font-size: 14px;
}
.men_search{
	width: 100%;
	font-size: 14px;
}
.record ul li{
	float: left;
	padding: 5px 7px;
	border:1px #ccc solid;
	margin:5px 10px;
	border-radius: 5px;
}
.men_search ul li{
	float: left;
	padding: 5px 7px;
	border:1px #ccc solid;
	margin:5px 10px;
	border-radius: 5px;
}
.men_search :after{
	clear: both;
	content: "";
	display: block;
}
</style>
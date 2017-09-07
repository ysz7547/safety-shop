<template>
	<div class="sort">
		<div class='ipt'>
			<i class="fa fa-search"></i>
			<input type="text" placeholder="请输入你要购买的商品" class='input' />
		</div>
		<div class="bottom">
		<div class="mold_list">
			<ul>
				<li v-for='(item,index) in List' :class="{'bg':flag==index}" @click="ask(index,item.cate_id)">{{item.cate_name}}</li>		
			</ul>
		</div>
		<div class='mold_content'>
			<dl v-for='x in arr'>
				<dt><img :src="'http://www.lb717.com/'+x.cate_icon" alt="" /></dt>
				<dd>{{x.cate_name}}</dd>
			</dl>
		</div>
		</div>
		<FooterNav></FooterNav>
	</div>
</template>

<script>
import FooterNav from '../component/footer.vue'
export default{
	data(){
		return{
			List:[],
			classList:[],
			arr:[],
			flag:0
		}
	},
	components:{
  	FooterNav
 },
 methods:{
 	ask(index,cate_id){
		this.flag=index;
		this.arr=[];
		this.$http.get('../src/mock/foodList.json').then((res)=>{
			this.classList=res.data.foodList;
			this.classList.forEach((val,ind)=>{
				var ID=val.parent_id;
				if(cate_id==ID){
					this.classList=val;
					this.arr.push(this.classList);
				}
			})
		})
	}

 },
 mounted(){
	this.$http.get('../src/mock/list.json').then((res)=>{
		this.List=res.data.foodList;
	})
}
}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
	.ipt{
		height: 45px;
		line-height: 45px;
		background: #fff;
		border-bottom: 1px solid #ccc;
		position: relative;
	}
	.ipt i{
		position: absolute;
		left: 20%;
		top: 33%;
		width: .15rem;
		color:#ccc;
	}
	.ipt i img{
		width: 100%;
		margin-left: 20%;
	}
	.input{
		width: 70%;
		margin-left: 15%;
		height: .3rem;
		line-height: .3em;
		border-radius: .15rem;
		text-indent: 50px;
		border: none;
		background: #f1f1f1;
	}
	.bottom{
		display: flex;
		background: #fff;
	}
	.mold_list{
		width: 30%;
		font-size: .16rem;
		margin-right: .05rem;
	}
	.mold_list li{
		font-size: 12px;
		text-align: center;
		height: 40px;
		line-height: 40px;
		background: #f0eced;
	}
	.mold_content{
		flex: 1;
	}
	.mold_content dl{
		margin-bottom: 5px;
		float: left;
		width: 30%;
		text-align: center;
		margin-right: 5px;
		background: #f7f7f7;
		height: 100px;
	}
	.mold_content dl dt{
		width: 80%;
		margin: 0 auto
	}
	.mold_content dl dt img{
		width: 100%;
		height: auto;
	}
	.bg{
		border-left: 1px  solid red;
		background: #fff !important;
	}
</style>
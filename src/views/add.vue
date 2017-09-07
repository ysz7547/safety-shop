<template>
	<div class="addBox">
		<div class="addHead">
			<i class='fa fa-angle-left' @click="back"></i>
			<span>收货人</span>
		</div>
		<div class="addcont">
			<input type="text" placeholder="收货人姓名" class='name' />
			<input type="text" placeholder="手机号" class='tel'/>
			<div class="menu">
				<div class="two">
					<select name="" id="" @change="select_province" v-model="province">
						<option value="">请选择省</option>
						<option :value="p.name"  v-for="p in province_list">{{p.name}}</option>
					</select>
					<select name="" id="" @change="select_city" v-model="cityname">
						<option value="">请选择市</option>
						<option :value="c.name"  v-for="c in city_list">{{c.name}}</option>
					</select>
				</div>
				<select name="" id="">
					<option value="">请选择区</option>
					<option :value="c" v-for="c in area_list">{{c}}</option>
				</select>
			</div>
			<input type="text" placeholder="详细地址" class='address' />
			<div class="mo">
				<label class='off'>
					<input type="checkbox" />
					<span></span>
				</label>
				设为默认地址
			</div>
			<button class='save'>保存</button>
		</div>
	</div>

</template>
<script>
	export default{
		data(){
			return{
				province_list:[],
				province:'',
				city_list:[],
				cityname:"",
				area_list:[],
				hxy:""
			}
		},
		methods:{
			back:function(){
                this.$router.go(-1)
           	},
           	select_province(){
           		this.province_list.forEach((v,i)=>{
           			if(v.name==this.province){
           				this.city_list = v.city;
           			}
           		})
           	},
       		select_city(){
	       		this.city_list.forEach((v,i)=>{
//	       			console.log(v.area)
	       			console.log(v.name);
	       			console.log(this.cityname)
	       			if(v.name==this.cityname){
	       				this.area_list = v.area;
	       			}
	       		})
           	}
		},
		created:function(){
			this.$http.get('../src/mock/data1.json').then((res)=>{
				console.log(res.data.data)
				this.province_list=res.data.data
			})
		}
	}
</script>
<style lang='scss' scoped>
	.addBox{
		width: 100%;
		position: absolute;
		top:0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		background: #eee;
		.addHead{
			height: 44px;
			line-height: 44px;
			background: #fafafb;
			text-align: center;
			font-size:14px;
			i{
				position: absolute;
				top: 13px;
				left: 10px;
				font-size: 20px;
			}
		}
		.addcont{
			flex: 1;
			padding: 0 10px;
			.name,.tel,.address{
				width: 100%;
				height: 40px;
				line-height: 40px;
				background: #fff;
				border: none;
				margin: 0 auto;
				padding: 0 10px;
				box-sizing: border-box;
				margin-top: 20px;
			}
			.menu{
				height: auto;
				select{
					width: 100%;
					height: 40px;
					line-height: 40px;
					background: #fff;
					border: none;
					padding-left: 10px;
					margin-top:20px;
					outline: none;
				}
				.two{
					display: flex;
					justify-content: space-between;
					select{
						width: 44%;
					}
				}
				
			}
			.mo{
				margin-top: 20px;
				line-height: 20px;
				.off input{
					display: none;
				}
				.off input:checked + span{
					background: #fb4141;
					border: 1px solid #fb4141;
				}
				.off input:checked + span::after{
					content: "";
					display: block;
					width: 12px;
					height: 6px;
					border-left: 2px solid #fff;
					border-bottom: 2px solid #fff;
					transform: translateX(2px) translateY(2px) rotate(-45deg);	
				}
				span{
					display: inline-block;
					width: 18px;
					height: 18px;
					border-radius: 100%;
					border: 1px solid #ccc;
					flex-shrink: 0;
					float: left;
					margin-right: 5px;
				}
			}
			.save{
				width: 60%;
				height: 40px;
				line-height: 40px;
				color: #fff;
				background: #FB4141;
				border: none;
				border-radius: 25px;
				display: block;
				margin: 0 auto;
				margin-top: 20px;
			}
		}
	}
</style>
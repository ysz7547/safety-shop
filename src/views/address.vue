<template>
    <div class="coent">
        <header>
            <i class="fa fa-angle-left" @click="back"></i>
            <h3>收货地址</h3>
            <span class="fa fa-user-o"></span>
        </header>
        
        <ul class="address_list">
            <li>
                <div class="address_mess">
                    <p>
                        <span class="name">ysz</span>
                        <span class="phone">18518592594</span>
                    </p>
                    <p>
                        <span class="province">北京</span>
                        <span class="city">北京</span>
                        <span class="area">haidian</span>
                        <span class="location">jsfns</span>
                    </p>
                </div>
                <div class="ctrl toggle-checkbox">
                    <label class="track">
					    <input class="check" type="checkbox">
					    <span class="icon" ></span>
				    </label>
                    <div class="delt">
                        <img src="../images/delt.png" alt=""/>
                        删除
                    </div>
                    <div class="edit">
                        <img src="../images/edit.png" alt=""/>
                        编辑
                    </div>
                   
                </div>
            </li>
            
        </ul>
	    
        <div class="main" @click="toadd">
            <div class="counter">
                <p>+　新增加地址</p>
            </div>
        </div>

     
    </div>
</template>
<script>
    export default{
        methods:{
            back:function(){
                this.$router.go(-1)
            },
            toadd:function(){
            	this.$router.push({'path':'/add'})
            }
        }
    }
</script>
<style lang="scss" scoped>

.coent{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction:column;
    background: #eee;
}
    header{
       background:#fff;
        height: 44px;
        position: relative;
        text-align: center;
        line-height: 44px;
        border-bottom:1px solid #ccc;

        i{
            position: absolute;
            left: 8px;
            top: 15px;
        }

        span{
            position: absolute;
            right: 8px;
            top: 15px;
            font-size: 12px;
        }
    }

    .main{
        width: 100%;
        overflow: auto;
        -webkit-flex: 1;
    }

    .counter{
        height: 100px;
        width: 100%;
        position: relative;
        p{
            font-family: PingFangSC-Regular, sans-serif;
            background: #fc4141;
            width: 2.22rem;
            height: 0.4rem;
            text-align: center;
            line-height: .4rem;
            border-radius: 0.6rem;
            color: #fff;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -1.11rem;
            margin-top: -0.25rem;

        }
    }
    


.address_list li{
    background: #fff;
    margin-bottom: 8px;
    border-bottom: 1px solid #ccc;
    .address_mess{
        padding: 10px;
        border-bottom: 1px #ccc solid;
        p .phone{
            margin-left: 10px;
        }
        p:nth-child(2){
            margin-top: 15px;
        }
    }
    .ctrl{
        height: 35px;
        line-height: 35px;
        label{
            float: left;
            margin-left: 10px;
            margin-top: 8px;
        }
        .edit,.delt{
            float: right;
            margin-right: 10px;
            img{
                width:14px;
                height: 14px;
            }
        }
    }
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
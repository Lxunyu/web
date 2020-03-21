<template>
  <div id="app">
    <div class="top">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">您好，请登陆</b-nav-item>
            <b-nav-item href="#">免费注册</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="我的彩虹管家" right>
              <b-dropdown-item href="#">我的收藏</b-dropdown-item>
              <b-dropdown-item href="#">我的优惠券</b-dropdown-item>
              <b-dropdown-item href="#">常用信息</b-dropdown-item>
              <b-dropdown-item href="#">我的钱包</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="我的订单" right>
              <b-dropdown-item href="#">机票+相关订单</b-dropdown-item>
              <b-dropdown-item href="#"> 全部订单</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <div class="theme">
        <div class="logo">
          <a href="#"><img src="./assets/imgs/logo.png" class="pic_logo"></a>
        </div>
        <el-input  class="inquery" v-model="input" placeholder="搜索旅行地/酒店/旅游/景点门票/交通"></el-input>
        <el-button class="inquery_button"><svg-icon name="inquery"></svg-icon></el-button>
      </div>
      <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
      </div>

    </div>
    <div class="content">
      <div class="block">
        <el-carousel trigger="click">
          <el-carousel-item v-for="(item,itemIndex) in pics" :key="itemIndex" >
            <img class="img_style" :src="item.url">
          </el-carousel-item>
        </el-carousel>
          <air-tickets class="air"></air-tickets>

      </div>

      
     
    </div>
    
    

    
  </div>
</template>

<script>
import AirTickets from "./components/AirTickets.vue";
export default {
  name: "app",
  components: {
    AirTickets
  },
  data(){
    return {
      pics:[],

    };
  },
  methods:{
    loadAll(){
      this.pics = [
        {
          url:require('./assets/imgs/pic1.jpg')
        },
        {
          url:require('./assets/imgs/pic2.jpg')
        }
      ]
    }
   
  },
  computed: {

  },
  mounted(){
    this.loadAll()
    

  }
};



</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-tabs__content {
  padding-top: 15px;
}
.el-tabs__header {
  margin-bottom: 0px !important;
}
.is-top {
  font-size: 13px;
  padding-left: 5px !important;
  padding-right: 10px !important;
}
.el-icon-date:before {
  content: none !important;
}
.el-input__inner{
  padding-left: 15px !important;
}
.navbar{
background-color:whitesmoke !important;
height: 35px;
}
.nav-link,.dropdown-item{
  font-size: 12px;
  color: rgb(61, 60, 60) !important;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
.top{
  width: 100%;
  height: 270px;
  background-color:pink;
}
.logo{
  width: 100px;
  height: 40px;
}
.theme{
  width: 100%;
  height: 100px;
  background-color:green;

}
.img_style{
  display: inline-block;
  height: 380px;
  max-width: 100%;
  position: relative;
  /* background-size: 100%; */
}
.content{
  width: 100%;
  height: 500px;
}
.pic_logo{
  display: inline-block;
  height: 69px;
  width: 163px;
  margin: 10px 30px;
  line-height: 100px;
  /* max-width: 100%; */
}
.inquery .el-input__inner{
  position: absolute;
  top: -30px;
  left: 260px;
  width: 330px !important;
  height: 35px;
  padding: 0px 40px 0px 5px !important;
  margin: 0px !important;
  border:1px solid skyblue ;
}
.inquery_button{
  position: absolute;
  top: 63px;
  left: 549px;
  padding: 0px !important;
  width: 40px;
  height: 33.5px ;
  background-color:skyblue !important;
}
.nav{
  width: 100%;
  height: 130px;
  background-color:skyblue;
}

</style>

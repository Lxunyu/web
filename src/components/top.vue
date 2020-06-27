<template>
    <div class=""> 
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item  @click="login" >您好，请登陆</b-nav-item>
                <b-nav-item href="http://localhost:8080/HelloWorld.vue">免费注册</b-nav-item>
                <!-- <router-link tag="a" target="_blank" :to="'/World/'+UserId">ceshi</router-link>  -->
                <router-view></router-view>
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
                <b-dropdown-item href="#">全部订单</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
            </b-navbar>
        <div class="theme">
            <div class="logo">
            <a href="#">
                <img src="./../assets/imgs/logo.png" class="pic_logo" />
            </a>
            </div>
            <div class="inquery">
            <el-input v-model="input" placeholder="搜索旅行地/酒店/旅游/景点门票/交通"></el-input>
            <el-button class="inquery_button">
            <svg-icon name="inquery"></svg-icon>
            </el-button>
            </div>
        </div>
         <div>
            <el-menu
            :default-active="activeIndex"
            v-model="index"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#4169E1"
            text-color="#fff"
            active-text-color="#ffd04b"
            >
            <el-menu-item class="home" index="1">首页</el-menu-item>
            <el-submenu index="2">
                <template slot="title">酒店</template>
                <el-menu-item class="hotel_item" index="2-1">
                <ul class="hotel_ul">
                    <li>
                    <a
                        href="#"
                        class="hotel_a"
                        v-for="(hotel,hotelIndex) in hotels"
                        :key="hotelIndex"
                    >{{hotel}}</a>
                    <span class="hotel_span">
                        <svg-icon name="hotel"></svg-icon>酒店订单>
                    </span>
                    </li>
                </ul>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">旅游</template>
                <el-menu-item index="3-1">
                <ul class="hotel_ul">
                    <li>
                    <a
                        href="#"
                        class="hotel_a"
                        v-for="(travel,travelIndex) in travels"
                        :key="travelIndex"
                    >{{travel}}</a>
                    <span class="hotel_span">
                        <svg-icon name="travel"></svg-icon>旅游订单>
                    </span>
                    </li>
                </ul>
                </el-menu-item>
            </el-submenu>
            <el-menu-item class="hh" index="4">跟团游</el-menu-item>
            <el-menu-item class="hh" index="5">自由行</el-menu-item>
            <el-submenu index="6">
                <template slot="title">机票</template>
                <el-menu-item index="6-1">
                <ul class="hotel_ul">
                    <li>
                    <a
                        href="#"
                        class="hotel_a"
                        v-for="(airTicket,airTicketIndex) in airTickets"
                        :key="airTicketIndex"
                    >{{airTicket}}</a>
                    <span class="hotel_span">
                        <svg-icon name="plane"></svg-icon>机票订单>
                    </span>
                    </li>
                </ul>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="7">
                <template slot="title">用车</template>
                <el-menu-item index="7-1">
                <ul class="hotel_ul">
                    <li>
                    <a href="#" class="hotel_a" v-for="(car,carIndex) in cars" :key="carIndex">{{car}}</a>
                    <span class="hotel_span">
                        <svg-icon name="car"></svg-icon>用车订单>
                    </span>
                    </li>
                </ul>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="8">
                <template slot="title">门票</template>
                <el-menu-item index="8-1">
                <ul class="hotel_ul">
                    <li>
                    <a
                        href="#"
                        class="hotel_a"
                        v-for="(ticket,ticketIndex) in tickets"
                        :key="ticketIndex"
                    >{{ticket}}</a>
                    <span class="hotel_span">
                        <svg-icon name="ticket"></svg-icon>门票订单>
                    </span>
                    </li>
                </ul>
                </el-menu-item>
            </el-submenu>
            <el-menu-item class="hh" index="9">攻略</el-menu-item>
            <el-submenu index="10">
                <template slot="title">全球购</template>
                <el-menu-item index="10-1">
                <ul class="hotel_ul">
                    <li>
                    <a
                        href="#"
                        class="hotel_a"
                        v-for="(globalPurchase,globalPurchaseIndex) in globalPurchases"
                        :key="globalPurchaseIndex"
                    >{{globalPurchase}}</a>
                    </li>
                </ul>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="11">
                <template slot="title">礼品卡</template>
                <el-menu-item index="11-1">
                <ul class="hotel_ul">
                    <li>
                    <a
                        href="#"
                        class="hotel_a"
                        v-for="(giftCard,giftCardIndex) in giftCards"
                        :key="giftCardIndex"
                    >{{giftCard}}</a>
                    <span class="hotel_span">
                        <svg-icon name="giftCard"></svg-icon>礼品卡订单>
                    </span>
                    </li>
                </ul>
                </el-menu-item>
            </el-submenu>
            <el-menu-item class="hh" index="12">邮轮</el-menu-item>
            <el-menu-item class="hh" index="13">目的地</el-menu-item>
            <el-menu-item class="hh" index="14">金融</el-menu-item>
            <el-submenu index="15">
                <template slot="title">更多</template>
                <el-menu-item index="15-1">
                <ul class="hotel_ul">
                    <li>
                    <a
                        href="#"
                        class="hotel_a"
                        v-for="(added,addeddIndex) in addeds"
                        :key="addeddIndex"
                    >{{added}}</a>
                    </li>
                </ul>
                </el-menu-item>
            </el-submenu>
            </el-menu>
         </div>
         <div class="theme_icon">
            <span class="overseas"><svg-icon class="icon_overseas" name="境外"></svg-icon></span>
            <span  v-for="(icon,iconIndex) in icons" :key="iconIndex" class="theme_icon_span">
            <svg-icon :name="icon.icon"></svg-icon>
            <a href="#" class="theme_icon_a">{{icon.name}}</a>
            </span>
        </div>
        

    </div>
  
  

  
</template>

<script>

export default {
  name: 'top',
  components:{
  },
  
   data() {
    return {
      pics: [],
      icons:[],
      input: "",
      activeIndex: "1",
      index:"",
      hotels: [],
      travels: [],
      airTickets: [],
      cars: [],
      tickets: [],
      globalPurchases: [],
      giftCards: [],
      addeds: [],
      $router:'',
      UserId:'test'
      // path:this.$router.currentRoute.path

    };
  },
  methods:{
      loadAall(){
        (this.hotels = [
        "国内酒店",
        "国外酒店",
        "民俗客栈",
        "海外民宿",
        "团购",
        "国外酒店",
        "酒店+景点",
        "团队房间•长住房",
        "会议"
        ]),
        (this.travels = [
          "旅游首页",
          "周末游",
          "跟团游",
          "自由行",
          "私家团",
          "邮轮",
          "酒店+景点",
          "门票•玩乐",
          "主体游",
          "定制旅行",
          "游学",
          "签证",
          "企业会奖",
          "高端游",
          "爱玩户外",
          "保险",
          "特卖会"
        ]),
        (this.airTickets = [
          "国内机票",
          "国际•港澳台机票",
          "特价机票",
          "机+酒",
          "航班动态",
          "值机选座",
          "退票改签",
          "机场攻略",
          "定制包机"
        ]),
        (this.cars = [
          "用车首页",
          "境外租车",
          "境外接送机",
          "境外包车",
          "国内租车",
          "国内接送机",
          "国内包车"
        ]),
        (this.tickets = ["门票•玩乐", "处境WiFi•电话卡", "周末游"]),
        (this.globalPurchases = [
          "名店购",
          "旅游购物商城",
          "退税",
          "银联特惠",
          "万千赏",
          "外币兑换"
        ]),
        (this.giftCards = [
          "礼品卡首页",
          "节日/主题购卡",
          "礼品卡福袋",
          "企业采购",
          "兑换券",
          "外币兑换"
        ]),
        (this.addeds = ["优品商城", "超级会员", "团购", "合作卡"]);
        this.icons = [
          {
            icon:"hotel",
            name:"海外酒店"
         },
         {
           icon:"plane",
           name:"国际•港澳台机票"
         },
          {
           icon:"car",
           name:"境外租车"
         },
          {
           icon:"overseasTravel",
           name:"出境游"
         },
           {
           icon:"diamond",
           name:"高端游"
         },
          {
           icon:"ticket",
           name:"门票•玩乐"
         },
          {
           icon:"visa",
           name:"签证"
         },
          {
           icon:"insurance",
           name:"保险"
         },
          {
           icon:"wifi",
           name:"WiFi•电话卡"
         },
          {
           icon:"overseasTransfer",
           name:"境外接送机"
         },
          {
           icon:"foreignExchange",
           name:"外币兑换"
         }
        ]  
      },
      login(){
          let routeUrl = this.$router.resolve({
            name:'Login',
            path:'/Login/UserId'
          })
           window.open(routeUrl .href, '_blank');
         

      }
  },
  mounted(){
      this.loadAall();
      this.login()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.el-input__inner {
  padding-left: 15px !important;
}
.navbar {
  background-color: whitesmoke !important;
  height: 35px;
}
.nav-link,
.dropdown-item {
  font-size: 12px;
  color: rgb(61, 60, 60) !important;
}
.top {
  width: 100%;
  height: 221px;
}
.logo {
  width: 100px;
  height: 40px;
}
.theme {
  width: 100%;
  height: 100px;
}
.el-carousel__container {
  height: 380px !important;
}
.el-input__inner {
  position: absolute;
  top: -30px;
  left: 260px;
  width: 330px !important;
  height: 35px;
  padding: 0px 40px 0px 5px !important;
  margin: 0px !important;
  border: 1px solid skyblue;
}
.inquery{
  position: relative;
}
.inquery_button {
  position: absolute;
  top: -12px;
  left: 551px;
  padding: 0px !important;
  width: 40px;
  height: 33.5px;
  background-color: skyblue !important;
}
.nav {
  width: 100%;
  height: 130px;
}
.el-menu-demo {
  height: 40px;
}
/* .el-menu-item,
.el-submenu__title {
  height: 40px !important;
  line-height: 40px !important;
  padding: 0px 10px !important;
}
.el-submenu__title {
  width: 80px !important;
} */
.hotel_item {
  padding: 0px !important;
}
.hotel_ul {
  width: 1240px;
  height: 45px;
  list-style: none;
  background-color: white;
}
.hotel_a {
  padding-right: 10px;
  color: black;
  /* color: black; */
  text-decoration: none !important;
}
.hotel_a:hover {
  color: blue !important;
}
.home {
  width: 80px !important;
  margin-left: 20px !important;
}
.hh {
  width: 80px !important;
}
.hotel_span {
  display: block;
  float: right;
  color: black;
}
/* .el-menu,
.el-menu-item {
  padding: 0px !important;
} */
.theme_icon{
  width: 100%;
  height: 45px;
}
.overseas{
  display: block;
  width: 100px;
  height: 40px;
  line-height: 45px;
  padding-left: 25px;
  margin-right: 20px;
  float: left;
}
.icon_overseas{
  width: 100px !important;
  height: 40px !important;
}
.theme_icon_span{
  display: block;  
  line-height: 45px;
  padding-right: 17px;
  float: left;
}
.theme_icon_a{
  text-decoration: none !important;
  font-size: 13px;
  color: black;
}

</style>

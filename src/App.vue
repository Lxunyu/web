<template>
  <div id="app">
    <div class="top">
      <top></top>
    </div>
    <Center></Center>
    <Ticket></Ticket>
  </div>
</template>

<script>
import top from "./components/top.vue";
import Center from "./components/Center.vue";
import Ticket from "./components/Ticket.vue";



export default {
  name: "app",
  components: {
    top,
    Center,
    Ticket
  },
  data() {
    return {
      pics: [],
      icons:[],
      shu: {}
    };
  },
  methods: {
    loadAll() {
      // this.pics = [
      //   {
      //     url: require("./assets/imgs/pic1.jpg")
      //   },
      //   {
      //     url: require("./assets/imgs/pic2.jpg")
      //   }
      // ];
    },
    // handleSelect(key, keyPath) {
    //   console.log(key, keyPath);
    // }
  },
  computed: {},
  mounted() {
    this.loadAll();
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
.el-input__inner {
  padding-left: 15px !important;
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

/* .img_style {
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
  height: 380px;
  /* position: relative; */
  /* background-size: 100%; */
/* } */
 /* .content {
  width: 100%;
  height: 500px;
} */
.pic_logo {
  display: inline-block;
  height: 69px;
  width: 163px;
  margin: 10px 30px;
  line-height: 100px;
  /* max-width: 100%; */
} 
.el-carousel__container {
  height: 380px !important;
}
.inquery  .el-input__inner {
  position: absolute;
  top: -30px;
  left: 260px;
  width: 330px !important;
  height: 35px;
  padding: 0px 40px 0px 5px !important;
  margin: 0px !important;
  border: 1px solid skyblue;
}
.el-menu-item,
.el-submenu__title {
  height: 40px !important;
  line-height: 40px !important;
  padding: 0px 10px !important;
}
.el-submenu__title {
  width: 80px !important;
}
.el-menu,
.el-menu-item {
  padding: 0px !important;
}

/* Cneter中的oversea顶部 */
/* .el-tabs__content{
  padding-top: 15px !important;
} */

/*cneter中周边的el-select  */
.select_city .el-input--mini{
  width: 67px !important; 
}
.select_city .el-input__inner{
  padding-right: 0 !important;
}

/* Ticket/Center中的citySelect */
.city_select>.el-input{
  width: 65px;
  height: 20px;
  line-height: 20px;
}
.city_select>.el-input>.el-input__inner{
  border: 0;
  padding-right: 10px;
  padding-left: 0px !important;
  width: 45px;
  height: 20px;
}
.city_select>.el-input>.el-input__suffix{
  height: 20px;
  line-height: 20px;
}
.el-input__icon{
line-height: 20px !important;
}
/* .el-select-dropdown{
  visibility: hidden;
}
#tab-2 .el-select-dropdown{
  visibility: visible !important;
} */
</style>

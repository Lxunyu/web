<template>
 <div>
  <!-- 门票开始 -->
  <el-tab-pane label="门票" name="third1">
    <el-container>
      <el-aside class="content_aside">
        <div id="aa">
          <dt class="sale_dt">热门主题游</dt>
          <dd class="scene_dd" @click="ticketHot" ref="ticketHot" v-for="(ticketThemePlay,ticketThemePlayIndex) in ticketThemePlays" :key="ticketThemePlayIndex"><a href="#" class="find_a">{{ticketThemePlay.name}}</a></dd>
        </div>
        <div class="find">
          <dt  class="sale_dt">热门目的地</dt>
          <dd class="scene_dd" v-for="(ticketDestination,ticketDestinationIndex) in ticketDestinations" :key="ticketDestinationIndex"><a class="find_a" href="#">{{ticketDestination.name}}</a></dd> 
        </div>
      </el-aside>
    </el-container>
  </el-tab-pane>
  <!-- 门票结束 -->
  <!-- 出境游开始 -->
  <el-tab-pane label="出境游" name="fourth1">
    <el-container>
        <el-aside class="content_aside"  >
        <div id="aside-width"  >
          <dt class="sale_dt">热门主题游</dt>
          <dd class="scene_dd"  @click="autoBorder"  ref="exitHot" v-for="(themePlay,themePlayIndex) in themePlays" :key="themePlayIndex"><a href="#" class="find_a">{{themePlay.name}}</a></dd>
        </div>
        <div class="homestay">
          <dt  class="sale_dt">热门目的地</dt>
          <dd class="scene_dd" @click="exitDestination" ref="exitDestination" v-for="(exitDestination,exitDestinationIndex) in exitCityTitles.slice(1)" :key="exitDestinationIndex"><a class="find_a" href="#">{{exitDestination.name}}</a></dd> 
        </div>
      </el-aside>
    </el-container>
   </el-tab-pane>
  </div>
</template>

<script>
export default {
  name: 'question',
  props: {
    msg: String
  },
  data(){
    return {
      ticketThemePlays:[],
      themePlays:[],

    }
  },
  methods:{
    loadAll(){
      this.themePlays = [
        {
          name:"海岛"
        },
        {
          name:"古镇"
        },
        {
          name:"蜜月"
        },
        {
          name:"亲子"
        },
        {
          name:"爸妈游"
        },
        {
          name:"美食"
        },

      ],
      this.ticketThemePlays = [
        {
          name:"门票9元起"
        },
        {
          name:"当季热卖"
        },
        {
          name:"全球乐园"
        },
        {
          name:"长隆龙秀"
        },
      ]
    },
     ticketHot(){
      let max  = document.getElementById("aside-width").clientWidth;
      let len = 0;
      let arr = this.$refs.ticketHot
      this.$refs.ticketHot.forEach((i,index)=>{
        len += i.clientWidth;
        console.log(i.clientWidth);
        if(len > max){
          arr[index-1].style.borderRight = 'none';
          len = i.clientWidth;
        }
      })
      arr[arr.length-1].style.borderRight = 'none';
    },
    
     autoBorder () {
      let max  = document.getElementById("aside-width").clientWidth;
      let len = 0;
      let arr = this.$refs.exitHot;
      this.$refs.exitHot.forEach((i,index)=>{
        len += i.clientWidth;
        console.log(i.clientWidth);
        if(len > max){
          arr[index-1].style.borderRight = 'none';
          len = i.clientWidth;
        }
      }) 
      arr[arr.length-1].style.borderRight = 'none';
    },
  },
  mounted(){
    this.loadAll();
    this.$nextTick(()=>{this.ticketHot()});
    this.$nextTick(()=>{this.autoBorder()});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

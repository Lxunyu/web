<template>
<div >
    <div class="sale_dt" id="width">
        <slot name="hot-name"></slot>
        <div ref="aa" id="aaa" class="scene_dd" v-for="navName in navs" :key="navName.id" >
            <a href="#" class="find_a">
                <slot :navName="navName"></slot>
            </a>
        </div>
    </div>     
 <!-- <el-container>
    <el-aside class="content_aside">
        <div id="per-width">
        <dt class="sale_dt">热门主题游</dt>
        <dd class="scene_dd" ref="perHot" v-for="(themePlay,themePlayIndex) in themePlays" :key="themePlayIndex"><a href="#" class="find_a">{{themePlay.name}}</a></dd>
        </div>
        <div class="homestay">
        <dt  class="sale_dt">热门目的地</dt>
        <dd class="scene_dd" ref="perDestination" v-for="(hotDestination,hotDestinationIndex) in perCityTitles.slice(1)" :key="hotDestinationIndex"><a class="find_a" href="#" >{{hotDestination.name}}</a></dd> 
        </div>
    </el-aside>
    <el-main>
        <ul class="main_ul">
        <li class="main_li" v-for="(perCityTitle,perCityTitleIndex) in perCityTitles.slice(0,8)" :key="perCityTitleIndex">
            <button class="city_button" :class="isColor==perCityTitleIndex?'btnColor':'' "  @click="perImageTab(perCityTitle.py,perCityTitleIndex,testIndex)">{{perCityTitle.name}}</button>
        </li>
        <el-select v-model="selectValue" round size="mini" class="main_button select_city" @change="cityChange">
            <el-option 
                v-for="(selectTitle,selectTitleIndex) in perCityTitles.slice(8)" :key="selectTitleIndex"
                :value="selectTitle.name">
            </el-option>
            </el-select> 
        <span class="main_a"><a href="javascript:void(0);" v-for="(perSign,perSigntIndex) in perSigns" :key="perSigntIndex">{{perSign}}</a></span>
        </ul> 
        <div class="periphery_pic">
            <div v-for="(pic,peripheryIndex) in peripheryPic" :key="peripheryIndex" >
                <div class="hot_pic_box domestic_box"  :title="pic.alt" >
                    <a href="javascript:void(0);"><el-image  class="domestic_pic_item" :src="pic.src"></el-image></a>
                    <p class="domestic_p">{{pic.alt}}</p>
                    <p class="domestic_p"></p>
                    <p class="domestic_p">
                    <span class="domestic_span"><span  class="circle_money">{{pic.money}}</span>起</span>
                    <svg-icon class="black_money" name="blackMoney"></svg-icon>
                    </p>
                </div>
            </div>
         </div>
    </el-main>
</el-container> -->
    
   
</div>
  

  
</template>

<script>
export default {
  name: 'travalItem',
  props: ['navs'],
  data(){
      return { 
          
      }
  },

  methods:{
      autoBorder(){
      }
      
  },
  mounted(){
     setTimeout(() => this.autoBorder(), 3000);

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sale_dt{
  color: black;
  font-size: 13px;
  overflow: hidden;
  margin-bottom: 20px;
}
.scene_dd{
  display: block;
  float: left;
  margin-bottom: 5px;
}
.find_a{
  text-decoration: none !important;
  color: gray;
  font-size: 12px;
  border-right: 1px solid gray;
  padding-right: 8px;
  margin-right: 8px;
}
.find_a:hover{
  color: rgb(18, 120, 204);
}


</style>

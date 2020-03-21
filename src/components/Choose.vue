<template >
     <div>
   <div>
         <!-- 选择行程 -->
         <div class="choose_style">
            <div class="choose_style_left">
               <span>航程类型</span>
                <el-radio-group v-model="radio" @change="singleWay"  >
                  <el-radio  label="1">单程</el-radio>
                  <el-radio  label="2">往返</el-radio>
                  <el-radio  label="3">多程(含缺口程)</el-radio>\
                </el-radio-group>
            </div>
            <div class="choose_style_right">
              <el-popover placement="right-start" trigger="hover" width="300px">
                <div slot="reference">
                  <a><svg-icon name="caution"></svg-icon></a>
                </div>
                <div class="scenes">
                  <p class="scenes_p">国内机票多程适用于以下场景：</p>
                  <li>前往多个目的地</li>
                  <div class="scenes_style">
                    <p>去程：上海-<span>北京</span></p>
                    <p>返程：<span>天津</span>-上海</p>
                  </div>
                  <li>出发地和返回地不同</li>
                  <div class="scenes_style">
                    <p>去程：<span>上海</span>-北京</p>
                    <p>返程：北京-<span>杭州</span></p>
                  </div>
                  <div class="scenes_div_hidden" v-show="scenesVisible">
                    <li>多段行程自由搜</li>
                    <div class="scenes_hidden">
                        <p>第 1 程：上海 - 东京</p>
                        <p>第 2 程：东京 - 普吉岛</p>
                        <p>第 3 程：普吉岛 - 上海</p>
                    </div>
                  </div>
                </div>
              </el-popover>
            </div>
          </div>
          <!-- 选择城市与日期 -->
          <div class="choose">
            <div class="choose_start">
              <div class="input_one" id="city1">
                <a class="exchangeIcon" href="#" @click="exchange"><svg-icon name="exchange"></svg-icon></a>
                  <div class="city">
                    <span>出发城市</span>
                    <el-popover class="input_one_style" trigger="focus" placement="bottom">
                      <div slot="reference">
                        <el-input @click="cityDisplay" class="input-style"  v-model="inputCity" placeholder="请选择城市"></el-input>
                      </div>
                      <ChooseCity  @changeCity="updateCity" ref="goDisplay" class="tag_width"></ChooseCity>
                    </el-popover>
                  </div>
                <div class="time">
                  <span class="start_date">出发日期</span>
                  <div class="block">
                    <el-date-picker
                      class="date_style"
                      v-model="startDate"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </div>
                </div>
              </div>
              <div class="input_one" id="city2">
                <div class="city">
                  <span>到达城市</span>
                  <el-popover class="input_one_style" trigger="focus" placement="bottom">
                    <div slot="reference">
                      <el-input class="input-style"  @click="cityDisplay"  v-model="inputCity1" placeholder="请选择城市"></el-input>
                    </div>
                    <ChooseCity @changeCity="updateCity1"  ref="arriveDisplay" class="tag_width"></ChooseCity>
                  </el-popover>
                </div>
                <div class="time" >
                  <span class="start_date arrive_date" id="span" >返回日期</span>
                  <div class="block">
                    <span class="demonstration"></span>
                    <el-date-picker
                      class="date_style"
                      v-model="arriveDate"
                      type="date"
                      placeholder="选择日期"
                      @change="changeArrive"
                    ></el-date-picker>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
   
   
  
  </div>
</template>

<script>
import ChooseCity from "./ChooseCity.vue";

export default {
    name: 'Choose',
    components:{
        ChooseCity
    },
    watch:{
        cityMsg(newV,oldV){
        this.inputCity = oldV;
        console.log(oldV);
        }
    },
    data(){
        return {
            inputCity: "",
            inputCity1: "",
            radio: "1",
            startDate: "",
            arriveDate: "",
            label:"",
            scenesVisible:false
        };
    },
    methods:{
        updateCity(text){
            this.inputCity = text;
        },
        updateCity1(text){
            this.inputCity1 = text;
        },
        exchange(){
            let el = this.inputCity;
            this.inputCity = this.inputCity1;
            this.inputCity1 = el;
        },
        singleWay(label) {
            if(label ==="1"){
                document.getElementById("span").style.color = 'gray';
                this.arriveDate = "";
            }
            else{
                document.getElementById("span").style.color = 'black';
                
            }  
        },
        changeArrive(){
            document.getElementById("span").style.color = 'black';
            this.radio = "2";
        },
        cityDisplay(){
          this.$refs.goDisplay.InternationalTabs.length = 0;
          this.$refs.arriveDisplay.InternationalTabs.length = 0;

        }
      
    },
   mounted(){
     this.cityDisplay();
   }
}
</script>

<style scoped>
.tag_width{
  width: 400px;
}
.choose_style {
  width: 410px;
  height: 40px;
  font-size: 16px;
  line-height: 40px;
}
.scenes{
  width: 250px;
  height: auto;
  text-align: left;
  font-size: 14px;
}
.scenes p{
  padding-top: 5px;
  margin-top: 0px;
  margin-bottom: 0px;
  
}
.scenes li{
  font-weight: bold;
  margin-top: 5px;
}
.scenes span{
  color: rgb(240, 173, 50);
}
.scenes_style{
  height: 60px;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: rgb(241, 229, 229);
  padding-left: 20px;
}
.scenes_hidden{
  height: 80px;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: rgb(241, 229, 229);
  padding-left: 20px;
}
.choose_style_left{
  float: left;
}
.choose_style_right{
  float: left;
}
.el-radio-group{
  padding-left: 10px;  
  line-height: 10px !important;
}
.el-radio__label{
  color: black;
}
.el-radio__inner{
  margin-left: 15px !important;
}
.choose {
  width: 550px;
  height: 100px;
}
.city {
  width: 275px;
  height: 100px;
  float: left;
}
.input-style {
  width: 150px !important;
}
.city span {
  float: left;
  line-height: 50px;
}

.input_one {
  width: 550px;
  height: 50px;
  float: left;
  position: relative;
}
.input_one a{
  position: absolute;
  right: 300px;
  top: 40px;
  text-decoration: none;
  color: gray;
}
.time {
  width: 275px;
  height: 100px;
  float: right;
}
.start_date {
  float: left;
  line-height: 50px;
}
.arrive_date{
  color: gray;
}
.input_one_style {
  float: left;
  margin-left: 10px !important;
  margin-right: 30px !important;
}
.date_style {
  width: 170px !important;
  line-height: 50px;
}



</style>

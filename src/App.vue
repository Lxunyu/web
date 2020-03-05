<template>
  <div id="app">
    <!-- 机票查询 -->
    <div class="box">
      <el-tabs v-model="navName">
        <!-- 国内机票 -->
        <el-tab-pane label="国内机票" name="first1">
          <Choose></Choose>
          <div class="choose_kid">
            <el-checkbox >带儿童</el-checkbox>
            <el-checkbox >带婴儿</el-checkbox>
            <div class="seat_style">
              <span class="start_date">舱位等级</span>
              <el-select v-model="seat_level" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <el-popover placement="bottom-end" trigger="hover" >
             <div slot="reference">
              <a class="precautions" href="#">儿童婴儿预定说明<svg-icon name="caution"></svg-icon></a>
             </div>
             <div class="kid_style">
                <div class="sum_table">
                  <table class="table_style">
                    <caption class="caption_style"><svg-icon name="kid"></svg-icon>儿童票</caption>
                    <template v-for="(kid,kidIndex) in kids">
                      <div v-bind:key="kidIndex">
                        <th class="table_th_style">{{kid.title}}</th>
                        <td class="table_td_style">{{kid.content}}</td>
                      </div>
                    </template>
                  </table>
                  <table class="table_style2">
                    <caption class="caption_style"><svg-icon name="baby"></svg-icon>婴儿票</caption>
                    <template v-for="(baby,babyIndex) in babies">
                      <div v-bind:key="babyIndex">
                        <th class="table_th_style">{{baby.title}}</th>
                        <td class="table_td_style">{{baby.content}}</td>
                      </div>
                    </template>
                  </table>
                </div>
                <p><span class="caption_style"><svg-icon name="question"></svg-icon>常见问题</span></p>
                <div class="question">
                  <div class="problemIconOne">
                    <div class="problemIconLeft"><svg-icon name="Q"></svg-icon></div>
                    <div class="problemIconRight">
                      不满14天的新生儿能乘机吗？
                    </div>
                  </div>
                  <div class="problemIconTwo">
                    <div class="problemIconLeft"><svg-icon name="A"></svg-icon></div>
                    <div class="problemIconRight">
                      新生婴儿抵抗力差，呼吸功能不完善，飞机起飞、降落时气压变化大，易对其造成伤害。因此航空公司规定出生不足14天的新生婴儿和
                      出生不足90天的早产婴儿不能乘机出行。若仍需携带新生婴儿乘机，请联系航空公司。
                    </div>
                  </div>
                </div>
                <div class="question2">
                  <div class="problemIconOne">
                    <div class="problemIconLeft"><svg-icon name="Q"></svg-icon></div>
                    <div class="problemIconRight">
                      如何预定更优惠？
                    </div>
                  </div>
                  <div class="problemIconTwo">
                    <div class="problemIconLeft"><svg-icon name="A"></svg-icon></div>
                    <div class="problemIconRight">
                      对于国内航班，儿童、婴儿也可购买部分价格的成人票。由于部分成人票的折扣比儿童票、婴儿票的折扣更低，因此为儿童、婴儿
                  购买此类折扣成人片可能更加优惠，携程会只能为您推荐更优惠的购买方案。
                    </div>
                  </div>
                </div>
             </div>
           </el-popover>
          </div>
          <div class="search">
          <el-button class="search_button">搜索机票</el-button>
          <el-checkbox class="checkbox_style_two">同时搜索酒店</el-checkbox>
          <svg-icon class="icon_discount" name="discount"></svg-icon>
          </div>
        </el-tab-pane>
        <!-- 国际.港澳台机票 -->
        <el-tab-pane label="国际•港澳台机票" name="second">
          <choose></choose>
          <div class="passengerType">
            乘客类型
              <el-select class="passenger_style" v-model="adult"  placeholder="请选择">
                <el-option
                  @click="adultMethod"
                  v-for="(adult,adultIndex) in adultArray" v-bind:key="adultIndex" 
                  :label="adult + adultIndex"
                  :value="adultIndex">
                </el-option>     
              </el-select>
              <el-select class="passenger_style" v-model="child"  placeholder="请选择">
                <el-option
                  @click="childMethod"
                  v-for="(child,childIndex) in childArray" v-bind:key="childIndex" 
                  :label="child + childIndex"
                  :value="childIndex">
                </el-option>     
              </el-select>
              <el-select class="passenger_style" v-model="toddler"  placeholder="请选择">
                <el-option
                  @click="toddlerMethod"
                  v-for="(toddler,toddlerIndex) in toddlerArray" v-bind:key="toddlerIndex" 
                  :label="toddler + toddlerIndex"
                  :value="toddlerIndex">
                </el-option>     
              </el-select>
          </div>
          <div class="level">
            <div class="level_choose">
              舱位等级
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="level in levels"
                  :key="level.value"
                  :label="level.label"
                  :value="level.value">
                </el-option>
              </el-select>
            </div>
            <div class="level_check">
              <el-checkbox v-model="checked">仅查看直飞</el-checkbox>
            </div>
          </div>
          <div class="search_style">
            <el-button class="search_button">搜索机票</el-button>
            <el-checkbox class="checkbox_style_two">同时搜索酒店</el-checkbox>
            <svg-icon class="icon_discount" name="discount"></svg-icon>
          </div>
        </el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
    
      
  </div>
</template>

<script>
import Choose from './components/Choose.vue';

export default {
  name: "app",
  components: {
    Choose
  },
  watch:{
    cityMsg(newV,oldV){
      this.inputCity = oldV;
      console.log(oldV);
    }

  },
  data() {
    return {
      navName: "second",
      options: [],
      seat_level: "",
      kids:[],
      babies:[],
      adults:[],
      adult:"",
      adultArray:[],
      child:"",
      childArray:[],
      toddler:"",
      toddlerArray:[],
      levels:[],
      checked:""
    };
  },
  methods: {
     adultMethod(){   
      for(let i=0;i<=9;i++){
        let el = this.adults.label;
        this.adultArray.push(el);   
       }
      return this.adultArray;
    },
     childMethod(){
       for(let i=0;i<=9;i++){
        let el = this.childs.label;
        this.childArray.push(el);   
       }
      return this.childArray;
     },
      toddlerMethod(){
       for(let i=0;i<=9;i++){
        let el = this.toddlers.label;
        this.toddlerArray.push(el);   
       }
      return this.todderArray;
     },
    
    selectOption() {
      this.options = [
        {
          value: "选项1",
          label: "经济舱"
        },
        {
          value: "选项2",
          label: "公务/头等舱"
        }
      ];
      this.adults = {
        value:"1",
        label:"成人"
        },
      this.childs = {
        value:"1",
        label:"儿童"
      },
      this.toddlers = {
        value:"1",
        label:"婴儿"
      },
      this.levels = [
        {
          value:"1",
          label:"经济/超级经济舱"
        },
        {
          value:"2",
          label:"公务/头等舱"
        }
      ]
      
    },
    kid_precautions(){
      this.kids = [
        {
          title:'年龄规定',
          content:'2岁(含)~12岁(不含)'
        },
        {
          title:'票价',
          content:'成人普通票价的50%;免机场管理建设费，燃油费为成人的50%'
        },
        {
          title:'证件',
          content:'身份证、护照、户口簿'
        },
        {
          title:'注意事项',
          content:'每位成人旅客(满18周岁)最多携带两名儿童;儿童旅客必须有同舱位成人(满18周岁)陪伴乘机，无成人陪伴儿童请提前联系航空公司进行预定。'
        },
      ],
      this.babies = [
        {
          title:'年龄规定',
          content:'14天(含)~2岁(不含)'
        },
        {
          title:'票价',
          content:'成人普通票价的10%;免机场管理建设费，燃油费;'
        },
        {
          title:'证件',
          content:'身份证、护照、户口簿、出生证明'
        },
        {
          title:'注意事项',
          content:'每位成人旅客最多携带一名婴儿;婴儿票不提供座位，如需单独使用座位，可为婴儿购买儿童票;'
        },
      ]
    },
   
  },
  computed:{
    
  },
  mounted() {
    this.selectOption();
    this.kid_precautions();
    this.adultMethod();
    this.childMethod();
    this.toddlerMethod();
   
  },
 
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
.box {
  width: 550px;
  height: 350px;
  border: 1px solid pink;
}


.choose_kid {
  width: 550px;
  height: 70px;
  background-color: orange;
  text-align: left;
}
.el-checkbox {
  line-height: 50px;
  font-size: 15px !important;
  float: left;
}
.seat_style{
  width: 275px;
  height: 50px;
  float: right;
}
/* .el-input--suffix {
  width: 170px !important;
  line-height: 50px;
} */
.precautions{
  text-decoration: none;
  float: left;
  padding-bottom: 5px;
}

.kid_style{
  width: 870px;
  height: 450px;
  border: 1px solid black;
  font-size: 14px;
}
.sum_table{
  width: 870px;
  height: 250px;
}
.table_style{
  width: 400px;
  height: 100px;
  border-collapse: collapse;
  border: 1px solid gray; 
  float: left;
  margin-left: 20px;
}
.caption_style{
  padding: 10px 0;
  font-weight: bold;
  text-align: left;
}
.table_th_style{
  width: 80px;
  border: 1px solid gray;
  vertical-align:middle;
  padding:8px;
  margin-top: 100px;
  text-align: center;
}
.table_td_style{
  width: 430px;
  border: 1px solid gray;
  text-align: left;
  padding: 8px;
}
.table_style2{
  width: 400px;
  height: 100px;
  border-collapse: collapse;
  border: 1px solid gray;
  float: right;
  margin-right: 20px;
}
.kid_style p{
  text-align: left;
  margin-left: 20px;
}
.question{
  width: 400px;
  height: 130px;
  float: left;
  margin-left: 20px;
  border: 1px solid gray;
}
.problemIconOne{
  width: 400px;
  height: 30px;
}
.problemIconTwo{
  width: 400px;
  height:100px;
}
.question2{
  width: 400px;
  height: 130px;
  float: right;
  text-align: left;
  margin-right: 20px;
  border: 1px solid gray;
}
.problemIconLeft{
  float: left;
 ;
}
.problemIconRight{
  float: left;
  width: 370px;
}
.exchangeIcon:hover{
 background-color:skyblue;
}
.el-button{
  width: 160px;
  height: 50px;
  float: right;
  font-size: 18px !important;
  margin: 22px 20px !important;
  background-color: rgb(168, 228, 252) !important;
}
.search{
  width: 330px;
  height: auto;
  line-height: 100px;
  margin-top: 20px;
  float: right;
}
.el-icon-date:before {
    content: none !important;
}
.passengerType{
  width: 550px;
  height: 50px;
  line-height: 50px;
  background-color: orange;
  text-align: left;
}
.passenger_style input{
  width: 150px !important;
  margin-left: 5px;
  margin-right: 5px;
}
.level{
  height: 50px;
  background-color: pink;
  line-height: 50px;
  text-align: left;
}
.level_choose{
  width: 300px;
  height: 50px;
  background-color: red;
  float: left;
}
.level_check{
  width: 220px;
  height: 50px;
  float: right;
}
.search_style{
  width: 330px;
  height: 50px;
  float: right;
}
.search_button{
  margin: 8px !important;
  width: 150px !important;
  height: 40px !important;
}
.checkbox_style_two{
  line-height: 50px;
  position: relative;
}
.icon_discount{
  width: 50px !important;
  height: 50px !important;
  position: absolute;
  right: 177px;
}
</style>

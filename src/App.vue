<template>
  <div id="app">
    <HelloWorld msg />
    <div class="box">
      <el-tabs v-model="navName">
        <el-tab-pane label="国内机票" name="first1">
          <div class="choose_style">
            <span>航程类型</span>
            <el-radio v-model="radio" label="1">单程</el-radio>
            <el-radio v-model="radio" label="2">往返</el-radio>
            <el-radio v-model="radio" label="3">多程</el-radio>
          </div>
          <div class="choose">
            <div class="choose_start">
              <div class="input_one">
                <ChooseCity></ChooseCity>
                <div class="time">
                  <span class="start_date">出发日期</span>
                  <div class="block">
                    <span class="demonstration"></span>
                    <el-date-picker
                      class="date_style"
                      v-model="startDate"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </div>
                </div>
              </div>
              <div class="input_one">
                <ChooseCity></ChooseCity>
                <div class="time">
                  <span class="start_date">返回日期</span>
                  <div class="block">
                    <span class="demonstration"></span>
                    <el-date-picker
                      class="date_style"
                      v-model="arriveDate"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="choose_kid">
            <el-checkbox v-model="checked">带儿童</el-checkbox>
            <el-checkbox v-model="checked">带婴儿</el-checkbox>
            <div class="seat_style">
              <span class="start_date">舱位等级</span>
              <el-select v-model="seat_level" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.seat_level"
                  :label="item.label"
                  :seat_level="item.seat_level"
                ></el-option>
              </el-select>
            </div>

          </div>
          <a class="precautions" href="#">儿童婴儿预定说明</a>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
    <div class="kid_style">
      <div class="sum_table">
        <table class="table_style">
          <caption class="caption_style"><i class=""></i>儿童票</caption>
          <template v-for="(kid,kidIndex) in kids">
            <div v-bind:key="kidIndex">
              <th class="table_th_style">{{kid.title}}</th>
              <td class="table_td_style">{{kid.content}}</td>
            </div>
          </template>
        </table>
        <table class="table_style2">
          <caption class="caption_style">婴儿票</caption>
          <template v-for="(baby,babyIndex) in babies">
            <div v-bind:key="babyIndex">
              <th class="table_th_style">{{baby.title}}</th>
              <td class="table_td_style">{{baby.content}}</td>
            </div>
          </template>
        </table>
      </div>
      <p><span class="caption_style">常见问题</span></p>
      <div class="question">
        <p><span class="caption_style">不满14天的新生儿能乘机吗？</span></p>
        <p>新生婴儿抵抗力差，呼吸功能不完善，飞机起飞、降落时气压变化大，易对其造成伤害。因此航空公司规定出生不足14天的新生婴儿和
          出生不足90天的早产婴儿不能乘机出行。若仍需携带新生婴儿乘机，请联系航空公司。
        </p>
      </div>
      <div class="question2">
        <p><span class="caption_style">如何预定更优惠？</span></p>
        <p>对于国内航班，儿童、婴儿也可购买部分价格的成人票。由于部分成人票的折扣比儿童票、婴儿票的折扣更低，因此为儿童、婴儿
        购买此类折扣成人片可能更加优惠，携程会只能为您推荐更优惠的购买方案。</p>
      </div>
    </div>
      
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ChooseCity from "./components/ChooseCity.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    ChooseCity
  },

  data() {
    return {
      activeName: "first",
      navName: "first1",
      hotTab: {},
      mainTabs: [],
      hotTab1: {},
      inputCity: "",
      inputCity1: "",
      visible: "",
      radio: "1",
      startDate: "",
      arriveDate: "",
      options: [],
      seat_level: "",
      kids:[],
      babies:[]
    };
  },
  methods: {
    selectOption() {
      this.options = [
        {
          seat_level: "选项1",
          label: "经济舱"
        },
        {
          seat_level: "选项2",
          label: "公务/头等舱"
        }
      ];
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
    }
  },
  mounted() {
    this.selectOption();
    this.kid_precautions();
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
  height: 300px;
  border: 1px solid pink;
}
.choose_style {
  width: 350px;
  height: 30px;
  font-size: 15px;
  font-family: "宋体";
  background-color: red;
}
.choose {
  width: 550px;
  height: 100px;
  background-color: pink;
}

.input_one {
  width: 550px;
  height: 50px;
  float: left;
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
.input_one_style {
  float: left;
  margin-left: 10px !important;
  margin-right: 30px !important;
}
.date_style {
  width: 170px !important;
  line-height: 50px;
}
.el-icon-date:before {
  content: none !important;
}
.el-input__inner {
  padding-left: 15px !important;
}
.choose_kid {
  width: 550px;
  height: 50px;
  background-color: orange;
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
.el-input--suffix {
  width: 170px !important;
  line-height: 50px;
}
.precautions{
  text-decoration: none;
  float: left;
}
.kid_style{
  width: 870px;
  height: 450px;
  border: 1px solid pink;
  font-size: 14px;
}
.sum_table{
  width: 870px;
  height: 250px;
  border: 1px solid rebeccapurple;
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
  height: 120px;
  float: left;
  text-align: left;
  margin-left: 20px;
  border: 1px solid red;
}
.question2{
  width: 400px;
  height: 120px;
  float: right;
  text-align: left;
  margin-right: 20px;
  border: 1px solid pink;
}
</style>

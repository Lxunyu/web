<template>
    <!-- 机票查询 -->
    <div class="box">
      <el-tabs class="asd" v-model="navName">
        <!-- 国内机票 -->
        <el-tab-pane label="国内机票" name="first1">
          <Choose></Choose>
          <div class="choose_kid">
            <el-checkbox>带儿童</el-checkbox>
            <el-checkbox>带婴儿</el-checkbox>
            <div class="seat_style">
              <span class="start_date">舱位等级</span>
              <el-select class="level_style" v-model="seat_level" >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
              <el-popover placement="bottom-end" trigger="hover">
                <div slot="reference">
                  <a class="precautions" href="#">
                    儿童婴儿预定说明
                    <svg-icon name="caution"></svg-icon>
                  </a>
                </div>
                <div class="kid_style">
                  <div class="sum_table">
                    <div class="table_left">
                      <p class="caption_style">
                        <svg-icon name="kid"></svg-icon>儿童票
                      </p>
                      <table class="table_style">
                        <template v-for="(kid,kidIndex) in kids">
                          <div v-bind:key="kidIndex">
                            <th class="table_th_style">{{kid.title}}</th>
                            <td class="table_td_style">{{kid.content}}</td>
                          </div>
                        </template>
                      </table>
                    </div>
                    <div class="table_right">
                      <p class="caption_style caption_baby">
                        <svg-icon name="baby"></svg-icon>婴儿票
                      </p>
                      <table class="table_style2">
                        <template v-for="(baby,babyIndex) in babies">
                          <div v-bind:key="babyIndex">
                            <th class="table_th_style">{{baby.title}}</th>
                            <td class="table_td_style">{{baby.content}}</td>
                          </div>
                        </template>
                      </table>
                      </div>
                  </div>
                  <p>
                    <span class="caption_style">
                      <svg-icon name="question"></svg-icon>常见问题
                    </span>
                  </p>
                  <div class="question">
                    <div class="problemIconOne">
                      <div class="problemIconLeft">
                        <svg-icon name="Q"></svg-icon>
                      </div>
                      <div class="problemIconRight">不满14天的新生儿能乘机吗？</div>
                    </div>
                    <div class="problemIconTwo">
                      <div class="problemIconLeft">
                        <svg-icon name="A"></svg-icon>
                      </div>
                      <div class="problemIconRight">
                        新生婴儿抵抗力差，呼吸功能不完善，飞机起飞、降落时气压变化大，易对其造成伤害。因此航空公司规定出生不足14天的新生婴儿和
                        出生不足90天的早产婴儿不能乘机出行。若仍需携带新生婴儿乘机，请联系航空公司。
                      </div>
                    </div>
                  </div>
                  <div class="question2">
                    <div class="problemIconOne">
                      <div class="problemIconLeft">
                        <svg-icon name="Q"></svg-icon>
                      </div>
                      <div class="problemIconRight">如何预定更优惠？</div>
                    </div>
                    <div class="problemIconTwo">
                      <div class="problemIconLeft">
                        <svg-icon name="A"></svg-icon>
                      </div>
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
          <choose ref="scenesDisplay"></choose>
          <div class="passengerType">
            乘客类型
            <el-select class="passenger_style" v-model="adult" placeholder="请选择">
              <el-option
                @click="adultMethod"
                v-for="(adult,adultIndex) in adultArray"
                v-bind:key="adultIndex"
                :label="adult + adultIndex"
                :value="adultIndex"
              ></el-option>
            </el-select>
            <el-select class="passenger_style" v-model="child" placeholder="请选择">
              <el-option
                @click="childMethod"
                v-for="(child,childIndex) in childArray"
                v-bind:key="childIndex"
                :label="child + childIndex"
                :value="childIndex"
              ></el-option>
            </el-select>
            <el-select class="passenger_style" v-model="toddler" placeholder="请选择">
              <el-option
                @click="toddlerMethod"
                v-for="(toddler,toddlerIndex) in toddlerArray"
                v-bind:key="toddlerIndex"
                :label="toddler + toddlerIndex"
                :value="toddlerIndex"
              ></el-option>
            </el-select>
          </div>
          <div class="level">
            <div class="level_choose">
              舱位等级
              <el-select v-model="level" placeholder="请选择">
                <el-option
                  v-for="level in levels"
                  :key="level.value"
                  :label="level.label"
                  :value="level.value"
                ></el-option>
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
        <!-- 发现低价 -->
        <el-tab-pane label="发现低价" name="third">
          <svg-icon class="icon_new" name="new"></svg-icon>
          <div class="lowPrice_top">
            <div>
              <span class="low_price_span">大家都在搜：</span>
              <div class="lowPrice_top_div">
                <a
                  class="a_style"
                  v-for="(label,labelIndex) in aChoose"
                  v-bind:key="labelIndex"
                  href="#"
                >{{label}}</a>
              </div>
            </div>
          </div>
          <div class="lowPrice_content">
            <span>出发地</span>
            <el-popover trigger="focus">
              <chooseCity @changeCity="updateCity"></chooseCity>
              <div slot="reference">
                <el-input class="input_style" v-model="inputCity" placeholder="上海"></el-input>
              </div>
            </el-popover>
          </div>
          <div class="lowPrice_content">
            <span>目的地</span>
            <el-popover>
              <div class="internationalChoose">
                <p class="internationalP">
                  <span class="low_price_span internationalSpan">热门主题</span>
                  <a
                    @click="get"
                    class="a_style a_weight"
                    v-for="(label,labelIndex) in aChoose"
                    v-bind:key="labelIndex"
                    href="#"
                  >{{label}}</a>
                </p>
                <hr class="hr" />
                <p class="internationalP">
                  <span class="low_price_span internationalSpan">国际地区</span>
                  <a
                    @click="get"
                    class="a_style"
                    v-for="(label,labelIndex) in internationaArea"
                    v-bind:key="labelIndex"
                    href="#"
                  >{{label}}</a>
                </p>
                <hr class="hr" />
                <p class="internationalP">
                  <span class="low_price_span internationalSpan">国内地区</span>
                  <a
                    @click="get"
                    class="a_style"
                    v-for="(label,labelIndex) in domesticArea"
                    v-bind:key="labelIndex"
                    href="#"
                  >{{label}}</a>
                </p>
                <hr class="hr" />
                <p class="internationalP">
                  <span class="low_price_span internationalSpan">热门城市</span>
                  <a
                    @click="get"
                    class="a_style"
                    v-for="(label,labelIndex) in hotCity"
                    v-bind:key="labelIndex"
                    href="#"
                  >{{label}}</a>
                </p>
                <hr class="hr" />
              </div>
              <el-input
                slot="reference"
                class="input_style"
                v-model="inputArrive"
                placeholder="全世界"
              ></el-input>
            </el-popover>
          </div>
          <div class="lowPrice_content">
            <span>出发时间</span>
            <el-date-picker class="input_style" v-model="inputDate" type="date" placeholder="选择日期"></el-date-picker>
          </div>
          <div class="lowPrice_bottom">
            <el-button class="search_button">搜索</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
                
      
    </div>
</template>

<script>
import Choose from "./Choose.vue";
import ChooseCity from "./ChooseCity.vue";

export default {
  name: "AirTickets",
  components: {
    Choose,
    ChooseCity
  },
  // watch:{
  //   cityMsg(newV,oldV){
  //     this.inputCity = oldV;
  //     console.log(oldV);
  //   },

  // },
  data() {
    return {
      navName: "third",
      options: [],
      seat_level: "经济舱",
      kids: [],
      babies: [],
      adults: [],
      adult: "",
      adultArray: [],
      child: "",
      childArray: [],
      toddler: "",
      toddlerArray: [],
      levels: [],
      checked: "",
      level: "",
      aChoose: [],
      internationaArea: [],
      domesticArea: [],
      hotCity: [],
      inputCity: "",
      inputArrive: "",
      inputDate: "",
      date: ""
    };
  },
  methods: {
    updateCity(text) {
      this.inputCity = text;
    },
    get: function(event) {
      var el = event.currentTarget;
      var text = el.innerText;
      this.inputArrive = text;
    },
    adultMethod() {
      for (let i = 0; i <= 9; i++) {
        let el = this.adults.label;
        this.adultArray.push(el);
      }
      return this.adultArray;
    },
    childMethod() {
      for (let i = 0; i <= 9; i++) {
        let el = this.childs.label;
        this.childArray.push(el);
      }
      return this.childArray;
    },
    toddlerMethod() {
      for (let i = 0; i <= 9; i++) {
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
      (this.adults = {
        value: "1",
        label: "成人"
      }),
        (this.childs = {
          value: "1",
          label: "儿童"
        }),
        (this.toddlers = {
          value: "1",
          label: "婴儿"
        }),
        (this.levels = [
          {
            value: "1",
            label: "经济/超级经济舱"
          },
          {
            value: "2",
            label: "公务/头等舱"
          }
        ]);
      (this.aChoose = [
        "免签/落地签",
        "海岛沙滩",
        "第一次出境",
        "学生党",
        "疯狂血拼",
        "饕客盛宴",
        "历史文化",
        "名山草原",
        "家庭亲子"
      ]),
        (this.internationaArea = [
          "日韩",
          "东南亚",
          "澳新南太",
          "中东非",
          "欧洲",
          "美洲"
        ]),
        (this.domesticArea = [
          "港澳台",
          "华东",
          "华北",
          "华南",
          "西北",
          "西南",
          "东北",
          "华中"
        ]);
      this.hotCity = [
        "曼谷",
        "首尔",
        "新加坡",
        "香港",
        "大阪",
        "东京",
        "北京",
        "上海",
        "成都",
        "广州",
        "青岛",
        "西安"
      ];
    },
    kid_precautions() {
      (this.kids = [
        {
          title: "年龄规定",
          content: "2岁(含)~12岁(不含)"
        },
        {
          title: "票价",
          content: "成人普通票价的50%;免机场管理建设费，燃油费为成人的50%"
        },
        {
          title: "证件",
          content: "身份证、护照、户口簿"
        },
        {
          title: "注意事项",
          content:
            "每位成人旅客(满18周岁)最多携带两名儿童;儿童旅客必须有同舱位成人(满18周岁)陪伴乘机，无成人陪伴儿童请提前联系航空公司进行预定。"
        }
      ]),
        (this.babies = [
          {
            title: "年龄规定",
            content: "14天(含)~2岁(不含)"
          },
          {
            title: "票价",
            content: "成人普通票价的10%;免机场管理建设费，燃油费;"
          },
          {
            title: "证件",
            content: "身份证、护照、户口簿、出生证明"
          },
          {
            title: "注意事项",
            content:
              "每位成人旅客最多携带一名婴儿;婴儿票不提供座位，如需单独使用座位，可为婴儿购买儿童票;"
          }
        ]);
    },
    scenescontrol() {
      this.$refs.scenesDisplay.scenesVisible = true;
    }
  },
  mounted() {
    this.selectOption();
    this.kid_precautions();
    this.adultMethod();
    this.childMethod();
    this.toddlerMethod();
    this.scenescontrol();
  }
};
</script>

<style scoped>

.box {
  width: 550px;
  height: 350px;
  border: 1px solid pink;
  background-color: white;
  position: absolute;
  z-index: 3;
}
/* .el-tabs__nav-scroll{
  position: relative !important;

}
.icon_new{
  width: 100px !important;
  height: 30px !important;
  position: absolute;

} */

.choose_kid {
  position: relative;
  width: 550px;
  height: 70px;
  text-align: left;   
}
.el-checkbox {
  line-height: 50px;
  font-size: 15px !important;
  float: left;
}
.seat_style {
  width: 275px;
  height: 50px;
  float: right;
}
/* .el-input--suffix {
  width: 170px !important;
  line-height: 50px;
} */
.precautions {
  text-decoration: none;
  position: absolute;
  left: 0px;
  bottom: 0;
}

.kid_style {
  width: 870px;
  height: 480px;
  border: 1px solid black;
  font-size: 14px;
}
.sum_table {
  width: 870px;
  height: 280px;
}
.table_left{ 
  float: left;
}
.table_style {
  width: 400px;
  height: 10px;
  border-collapse: collapse;
  border: 1px solid gray;
  margin-left: 20px;
}
.caption_style {
  padding: 10px 0;
  margin-bottom: 0;
  padding: 10px 0;
  font-weight: bold;
}
.caption_baby{
  margin-left: 0 !important;
}
.table_th_style {
  width: 100px;
  border: 1px solid gray;
  vertical-align: middle;
  padding: 8px;
  margin-top: 100px;
  text-align: center;
}
.table_td_style {
  width: 430px;
  border: 1px solid gray;
  text-align: left;
  padding: 8px;
}
.table_right{
  float: right;
  margin-right: 20px;
}
.table_style2 {
  width: 400px;
  height: 10px;
  border-collapse: collapse;
  border: 1px solid gray;
}
.kid_style p {
  text-align: left;
  margin-left: 20px;
}
.question {
  width: 400px;
  height: 130px;
  float: left;
  text-align: left;
  margin-left: 20px;
  border: 1px solid gray;
}
.problemIconOne {
  width: 400px;
  height: 30px;
}
.problemIconTwo {
  width: 400px;
  height: 100px;
}
.question2 {
  width: 400px;
  height: 130px;
  float: right;
  text-align: left;
  margin-right: 20px;
  border: 1px solid gray;
}
.problemIconLeft {
  float: left;
}
.problemIconRight {
  float: left;
  width: 370px;
}
.exchangeIcon:hover {
  background-color: skyblue;
}
.el-button {
  width: 160px;
  height: 50px;
  float: right;
  font-size: 18px !important;
  margin: 22px 20px !important;
  background-color: rgb(168, 228, 252) !important;
}
.search {
  width: 330px;
  height: auto;
  line-height: 100px;
  margin-top: 20px;
  float: right;
}

.passengerType {
  width: 550px;
  height: 50px;
  line-height: 50px;
  text-align: left;
}
.passenger_style  {
  width: 150px !important;
  height: 50px;
  margin-left: 5px;
  margin-right: 5px;
}

.level {
  height: 50px;
  line-height: 50px;
  text-align: left;
}
.level_choose {
  width: 300px;
  height: 50px;
  float: left;
}
.level_check {
  width: 220px;
  height: 50px;
  float: right;
}
.search_style {
  width: 330px;
  height: 50px;
  float: right;
}
.search_button {
  margin: 8px !important;
  width: 150px !important;
  height: 40px !important;
}
.checkbox_style_two {
  line-height: 50px;
  position: relative;
}
.icon_discount {
  width: 50px !important;
  height: 50px !important;
  position: absolute;
  right: 177px;
}
.lowPrice_top {
  width: 550px;
  height: 50px;
}
.lowPrice_top p {
  margin-top: 0px;
}
.lowPrice_top_div {
  width: 450px;
  float: right;
  text-align: left;
}
.low_price_span {
  width: 100px;
  height: 30px;
  display: block;
  float: left;
}
.a_style {
  width: 100px;
  margin-right: 10px;
  text-decoration: none;
  color: rgb(16, 52, 119);
}

.lowPrice_content {
  width: 550px;
  height: 50px;
  line-height: 50px;
  text-align: left;
  margin-bottom: 10px;
}
.input_style {
  width: 400px !important;
  height: 40px;
  margin-left: 10px;
}
.lowPrice_content span {
  width: 65px;
  height: 40px;
  display: inline-block;
}
.internationalChoose {
  width: 650px;
  height: 220px;
}
.internationalP {
  width: 640px;
  height: 30px;
  padding-top: 10px;
  text-align: left;
  font-size: 13px;
  margin: 0px;
}
.internationalSpan {
  margin-left: 20px;
}
.a_weight {
  font-weight: bold;
}
.hr {
  border: 1px dashed gainsboro;
}
.lowPrice_bottom {
  width: 550px;
  height: 50px;
}
.level_style {
  width: 170px !important;
  padding: 0px !important;
  margin-left: 20px !important;
}
</style>
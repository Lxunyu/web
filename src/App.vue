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
                <div class="city">
                  <span>出发城市</span>
                  <el-popover class="input_one_style" trigger="focus" placement="bottom">
                    <div slot="reference">
                      <el-input class="input-style" v-model="inputCity" placeholder="请选择城市"></el-input>
                    </div>
                    <div class="tag1">
                      <el-tabs v-model="activeName">
                        <el-tab-pane :label="hotTab.tabName" name="first">
                          <template v-for="(city,cityIndex) in hotTab.cities">
                            <a @click="get" class="a_style" href="#" v-bind:key="cityIndex">{{city}}</a>
                          </template>
                        </el-tab-pane>
                        <template v-for="(tab,tabIndex) in mainTabs ">
                          <el-tab-pane
                            :label="tab.tabName"
                            :name="tab.tabName"
                            v-bind:key="tabIndex"
                          >
                            <template v-for="(group,groupIndex) in tab.groups">
                              <div class="top_outer" v-bind:key="groupIndex">
                                <div class="top_left" id="left">
                                  <div>
                                    <ul>
                                      <li>{{group.start}}</li>
                                    </ul>
                                  </div>
                                </div>
                                <div class="top_right">
                                  <template v-for="(city,cityIndex) in group.cities">
                                    <a
                                      @click="get"
                                      class="a_style"
                                      href="#"
                                      v-bind:key="cityIndex"
                                    >{{city}}</a>
                                  </template>
                                </div>
                              </div>
                            </template>
                          </el-tab-pane>
                        </template>
                      </el-tabs>
                    </div>
                  </el-popover>
                </div>
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
                <div class="city">
                  <span>到达城市</span>
                  <el-popover class="input_one_style" trigger="focus" placement="bottom">
                    <div slot="reference">
                      <el-input class="input-style" v-model="inputCity1" placeholder="请选择城市"></el-input>
                    </div>
                    <div class="tag1">
                      <el-tabs v-model="activeName">
                        <el-tab-pane :label="hotTab.tabName" name="first">
                          <template v-for="(city,cityIndex) in hotTab.cities">
                            <a
                              @click="get1"
                              @onmousedown="mDown"
                              @onmouseup="mUp"
                              class="a_style"
                              href="#"
                              v-bind:key="cityIndex"
                            >{{city}}</a>
                          </template>
                        </el-tab-pane>
                        <template v-for="(tab,tabIndex) in mainTabs ">
                          <el-tab-pane
                            :label="tab.tabName"
                            :name="tab.tabName"
                            v-bind:key="tabIndex"
                          >
                            <template v-for="(group,groupIndex) in tab.groups">
                              <div class="top_outer" v-bind:key="groupIndex">
                                <div class="top_left" id="left">
                                  <div>
                                    <ul>
                                      <li>{{group.start}}</li>
                                    </ul>
                                  </div>
                                </div>
                                <div class="top_right">
                                  <template v-for="(city,cityIndex) in group.cities">
                                    <a
                                      @click="get1"
                                      class="a_style"
                                      href="#"
                                      v-bind:key="cityIndex"
                                    >{{city}}</a>
                                  </template>
                                </div>
                              </div>
                            </template>
                          </el-tab-pane>
                        </template>
                      </el-tabs>
                    </div>
                  </el-popover>
                </div>
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
      <table class="table_style">
        <caption class="caption_style">儿童票</caption>
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
      
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
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
    loadAll() {
      this.hotTab = {
        tabName: "热门",
        cities: [
          "红原",
          "海口",
          "河池",
          "邯郸",
          "黑河",
          "呼和浩特",
          "合肥",
          "杭州",
          "淮安",
          "怀化",
          "海拉尔",
          "哈密",
          "衡阳",
          "哈尔滨",
          "和田",
          "花土沟",
          "花莲",
          "霍林郭勒",
          "惠阳",
          "惠州",
          "汉中",
          "黄山",
          "呼伦贝尔"
        ]
      };
      this.mainTabs = [
        {
          tabName: "ABCDEEF",
          groups: [
            {
              start: "A",
              cities: [
                "阿泰勒",
                "阿克苏",
                "鞍山",
                "安庆",
                "安顺",
                "阿拉善左",
                "澳门",
                "阿里",
                "阿拉善右",
                "阿尔山"
              ]
            },
            {
              start: "B",
              cities: [
                "巴中",
                "百色",
                "包头",
                "毕节",
                "北海",
                "北京(大兴国际机场)",
                "北京(首都国际机场)",
                "博乐",
                "保山",
                "白城",
                "布尔津",
                "白山",
                "巴彦淖尔"
              ]
            },
            {
              start: "C",
              cities: [
                "昌都",
                "承德",
                "常德",
                "长春",
                "朝阳",
                "赤峰",
                "长治",
                "重庆",
                "长沙",
                "成都",
                "沧源",
                "常州",
                "池州",
                "潮州",
                "潮汕"
              ]
            },
            {
              start: "D",
              cities: [
                "大同",
                "达县",
                "达州",
                "稻城",
                "丹东",
                "迪庆",
                "大连",
                "大理",
                "敦煌",
                "东营",
                "大庆",
                "德令哈",
                "德宏"
              ]
            },
            {
              start: "E",
              cities: ["鄂尔多斯", "额济纳旗", "恩施", "二连浩特"]
            },
            {
              start: "F",
              cities: ["福州", "阜阳", "抚远", "富蕴"]
            }
          ]
        },
        {
          tabName: "GHIJ",
          groups: [
            {
              start: "G",
              cities: [
                "广州",
                "果洛",
                "格尔木",
                "广元",
                "固原",
                "高雄",
                "赣州",
                "贵阳",
                "桂林"
              ]
            },
            {
              start: "H",
              cities: [
                "红原",
                "海口",
                "河池",
                "邯郸",
                "黑河",
                "呼和浩特",
                "合肥",
                "杭州",
                "淮安",
                "怀化",
                "海拉尔",
                "哈密",
                "衡阳",
                "哈尔滨",
                "和田",
                "花土沟",
                "花莲",
                "霍林郭勒",
                "惠阳",
                "惠州",
                "汉中",
                "黄山",
                "呼伦贝尔"
              ]
            },
            {
              start: "J",
              cities: [
                "嘉义",
                "景德镇",
                "加格达奇",
                "嘉峪关",
                "井冈山",
                "景洪",
                "金昌",
                "九江",
                "晋江",
                "荆门",
                "佳木斯",
                "济宁",
                "锦州",
                "建三江",
                "鸡西",
                "九寨沟",
                "金门",
                "揭阳",
                "济南"
              ]
            }
          ]
        },
        {
          tabName: "KLMN",
          groups: [
            {
              start: " K",
              cities: [
                "库车",
                "康定",
                "喀什",
                "凯里",
                "昆明",
                "库尔勒",
                "克拉玛依"
              ]
            },
            {
              start: "L",
              cities: [
                "黎平",
                "澜沧",
                "连城",
                "龙岩",
                "临汾",
                "兰州",
                "丽江",
                "荔波",
                "吕梁",
                "临沧",
                "陇南",
                "六盘水",
                "拉萨",
                "洛阳",
                "连云港",
                "临沂",
                "柳州",
                "泸州",
                "林芝"
              ]
            },
            {
              start: "M",
              cities: [
                "芒市",
                "牡丹江",
                "马祖",
                "绵阳",
                "梅县",
                "梅州",
                "中国马工",
                "满洲里",
                "漠河"
              ]
            },
            {
              start: "N",
              cities: [
                "南昌",
                "南竿",
                "南充",
                "宁波",
                "南京",
                "宁蒗",
                "南宁",
                "南阳",
                "南通"
              ]
            }
          ]
        },
        {
          tabName: "PQRSTUVW",
          groups: [
            {
              start: "P",
              cities: ["澎湖列岛", "攀枝花", "普洱"]
            },
            {
              start: "Q",
              cities: [
                "琼海",
                "秦皇岛",
                "祁连",
                "且末",
                "庆阳",
                "黔江",
                "泉州",
                "衢州",
                "齐齐哈尔",
                "青岛"
              ]
            },
            {
              start: "R",
              cities: ["日照", "日喀则", "若羌"]
            },
            {
              start: "S",
              cities: [
                "神农架",
                "石狮",
                "莎车",
                "上海",
                "上海(浦东国际机场)",
                "上海(虹桥国际机场)",
                "沈阳",
                "石河子",
                "石家庄",
                "上饶",
                "三明",
                "汕头",
                "三亚",
                "深圳",
                "十堰",
                "邵阳",
                "松原"
              ]
            },
            {
              start: "T",
              cities: [
                "台州",
                "台中",
                "塔城",
                "腾冲",
                "铜仁",
                "通辽",
                "天水",
                "吐鲁番",
                "通化",
                "台南",
                "台北",
                "天津",
                "台东",
                "唐山",
                "太原",
                "泰州"
              ]
            },
            {
              start: "W",
              cities: [
                "五大连地",
                "乌兰浩特",
                "乌兰察布",
                "乌鲁木齐",
                "潍坊",
                "威海",
                "文山",
                "温州",
                "乌海",
                "武汉",
                "武夷山",
                "无锡",
                "梧州",
                "万州",
                "乌拉特中",
                "巫山"
              ]
            }
          ]
        },
        {
          tabName: "XYZ",
          groups: [
            {
              start: "X",
              cities: [
                "兴义",
                "香格里拉",
                "夏河",
                "香港",
                "西双版纳",
                "新源",
                "西安",
                "咸阳",
                "忻州",
                "信阳",
                "襄阳",
                "西昌",
                "锡林浩特",
                "厦门",
                "西宁",
                "徐州"
              ]
            },
            {
              start: "Y",
              cities: [
                "延安",
                "银川",
                "伊春",
                "永州",
                "榆林",
                "宜宾",
                "运城",
                "宜春",
                "宜昌",
                "伊犁",
                "伊宁",
                "义务",
                "营口",
                "延吉",
                "烟台",
                "盐城",
                "扬州",
                "玉树",
                "岳阳"
              ]
            },
            {
              start: "Z",
              cities: [
                "郑州",
                "张家界",
                "芷江",
                "舟山",
                "扎兰屯",
                "张掖",
                "昭通",
                "湛江",
                "中卫",
                "张家口",
                "珠海",
                "遵义"
              ]
            }
          ]
        }
      ];
      this.hotTab1 = this.hotTab;
    },

    get: function(event) {
      var el = event.currentTarget;
      var text = el.innerText;
      this.inputCity = text;
    },
    get1: function(event) {
      var el = event.currentTarget;
      var text = el.innerText;
      this.inputCity1 = text;
    },
    mDown: function() {
      this.visible = true;
    },
    mUp: function() {
      this.visible = false;
    },
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
    this.loadAll();
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

.tag1 {
  border: 1px solid rebeccapurple !important;
  width: 400px;
  margin: 10, 0;
}
.el-tabs__content {
  padding-top: 15px;
}
.top_outer {
  overflow: hidden;
  margin: 10px, auto;
}
.top_left {
  width: 40px;
  height: auto;
  float: left;
}

.top_left ul {
  display: inline-block;
  width: 13px;
  height: 19px;
  padding-left: 30px;
  margin-top: 0px;
}
.top_left li {
  list-style: none;
  width: 10px;
  color: red;
  margin-top: 0px;
}

.top_right {
  width: 80%;
  float: right;
  height: auto;
}

.a_style {
  font-size: 13px;
  width: 60px;
  height: 20px;
  float: left;
  text-decoration: none;
  overflow: hidden;
}
a:hover {
  background-color: skyblue;
}
.el-tabs__header {
  margin-bottom: 0px !important;
}
.is-top {
  font-size: 13px;
  padding-left: 5px !important;
  padding-right: 10px !important;
}
.input-style {
  width: 150px !important;
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
.city {
  width: 275px;
  height: 100px;
  float: left;
}
.time {
  width: 275px;
  height: 100px;
  float: right;
}
.city span {
  float: left;
  line-height: 50px;
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
  height: 300px;
  border: 1px solid pink;
  font-size: 14px;
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
</style>

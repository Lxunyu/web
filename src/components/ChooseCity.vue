<template>
  <div class="tag1">
    <el-tabs v-model="activeName">
      <el-tab-pane :label="hotTab.tabName" name="hotTab">
        <template v-for="(city,cityIndex) in hotTab.cities">
          <a @click="get" class="a_style" href="#" v-bind:key="cityIndex">{{city}}</a>
        </template>
      </el-tab-pane>
      <template v-for="(tab,tabIndex) in mainTabs ">
        <el-tab-pane :label="tab.tabName" :name="tab.tabName" v-bind:key="tabIndex">
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
                  <a @click="get" class="a_style" href="#" v-bind:key="cityIndex">{{city}}</a>
                </template>
              </div>
            </div>
          </template>
        </el-tab-pane>
      </template>
    </el-tabs>
  </div>
</template>
   

<script>
export default {
  name: "ChooseCity",
  props:['city'],
 
 
  data(){
    return {
    hotTab: {},
    activeName:"hotTab",
    mainTabs: [],
    visible: "",
    
};
  },
  methods:{
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
      
    },
      get: function(event) {
      var el = event.currentTarget;
      var text = el.innerText;
      this.$emit("changeCity",text);
      
     
      // this.inputCity = text;
      
      // this.inputCity1 = text;
    },
    
  
  },
  mounted(){
      this.loadAll();
      
  },
 
};
</script>

<style scoped>


.tag1 {
  border: 1px solid rebeccapurple !important;
  width: 400px;
  margin: 10, 0;
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



</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
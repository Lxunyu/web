<template>
    <div>
         <!-- 特价机票开始 -->
      <div class="ticketBlock">
        <div class="test">
            
         </div>
        <el-tabs v-model="activeTicket" >
          <!--国际•港澳台特价机票开始-->
          <el-tab-pane label="国际•港澳台特价机票" name="ticket1">
             <el-container>
               <el-header>
                <ul class="main_ul">
                  <li class="main_li"  v-for="(cheapInternationalTitle,cheapInternationalTitleIndex) in cheapInternationalTitles" :key="cheapInternationalTitleIndex">
                      <button class="city_button" :class="cheapInternationalTitleIndex==isColor? 'btnColor' : ''" @click="cheapInterImageTab(cheapInternationalTitle.py,cheapInternationalTitleIndex)">{{cheapInternationalTitle.name}}</button>
                  </li>
                  <span class="main_a"><a href="javascript:void(0);" class="ticket_a">更多国际•港澳台特价机票</a></span>
                </ul>
                </el-header>
                <el-main class="el_main">
                  <div v-for="(cheapInterPic,cheapInterPicIndex) in cheapInterPic" :key="cheapInterPicIndex">
                    <div class="ticket_card">
                      <a href="javascriot:0" class="ticket_a">
                        <p class="ticket_name">{{cheapInterPic.start}}<svg-icon name="doubleTrip"></svg-icon>{{cheapInterPic.arrive}}</p>
                        <p class="ticket_date">{{cheapInterPic.date}}</p>
                        <p class="ticket_money">
                          <span class="price"><svg-icon name="ticketMoney" class="moeny_icon"></svg-icon>{{cheapInterPic.money}}<span class="money_up">起</span></span>
                          <span class="button">立抢</span>
                        </p>
                      </a>
                    </div>
                  </div>
                </el-main>
             </el-container>
          </el-tab-pane>
          <!--国际•港澳台特价机票开始-->
          <!--国内特价机票开始-->
          <el-tab-pane label="国内特价机票" name="ticket2">
            <el-container>
               <el-header>
                <ul class="main_ul">
                  <li class="main_li"  v-for="(cheapDomesticTitle,cheapDomesticTitleIndex) in cheapDomesticTitles" :key="cheapDomesticTitleIndex">
                      <button class="city_button cheap_button" :class="cheapDomesticTitleIndex==isColor? 'btnColor' : ''" @click="cheapDomesticImageTab(cheapDomesticTitle.py,cheapDomesticTitleIndex)">{{cheapDomesticTitle.name}}</button>
                  </li>
                  <span class="main_a"><a href="javascript:void(0);" class="ticket_a">更多国内特价机票</a></span>
                </ul>
                </el-header>
                <el-main class="el_main">
                  <div v-for="(cheapDomesticPic,cheapDomesticPicIndex) in cheapDomesticPic" :key="cheapDomesticPicIndex">
                    <div class="ticket_card">
                      <a href="javascriot:0" class="ticket_a">
                        <p class="ticket_name">{{cheapDomesticPic.start}}<svg-icon name="doubleTrip"></svg-icon>{{cheapDomesticPic.arrive}}</p>
                        <p class="ticket_date">{{cheapDomesticPic.date}}</p>
                        <p class="ticket_money">
                          <span class="price"><svg-icon name="ticketMoney" class="moeny_icon"></svg-icon>{{cheapDomesticPic.money}}<span class="money_up">起</span></span>
                          <span class="button">立抢</span>
                        </p>
                      </a>
                    </div>
                  </div>
                </el-main>
             </el-container>
          </el-tab-pane>
          <!--国内特价机票结束-->
          <el-tab-pane class="tab_right">
            <span slot="label">
            <el-select v-model="citySelect" placeholder="上海" class="city_select">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            </span>
          </el-tab-pane>
          
         
        </el-tabs>
         
      </div>
      <!-- 特价机票结束 -->
    </div>
</template>

<script>
export default {
  name: 'Ticket',
  props: {
    msg: String
  },
  data(){
    return {
       activeTicket:"ticket2",
       cheapInternationalTitles:[],
       cheapInterPic:[],
       cheapInterPics:{},
       isColor:0,
       cheapDomesticTitles:[],
       cheapDomesticPic:[],
       cheapDomesticPics:{},
       options:[],
       citySelect:"上海"

    };
  },
  methods:{
      load(){
          this.cheapInternationalTitles = [
              {
                  name:"热门往返",
                  py:"reMenWangFan",
                  index:0
              },
              {
                  name:"亚洲",
                  py:"yaZhou",
                  index:1
              },
              {
                  name:"欧洲",
                  py:"ouZhou",
                  index:2
              },
              {
                  name:"美洲",
                  py:"meiZhou",
                  index:3
              },
              {
                  name:"非洲",
                  py:"feiZhou",
                  index:4
              },
          ],
          this.cheapInterPics = {
            "reMenWangFan":[
             {
               start:"上海",
               arrive:"沈阳",
               date:"5月11日",
               money:"99"
             },
             {
               start:"上海",
               arrive:"重庆",
               date:"5月10日",
               money:"100"
             },
             {
               start:"上海",
               arrive:"青岛",
               date:"5月24日",
               money:"120"
             },
             {
               start:"上海",
               arrive:"厦门",
               date:"5月15日",
               money:"130"
             },
             {
               start:"上海",
               arrive:"宁波",
               date:"6月13日",
               money:"140"
             },
             {
               start:"上海",
               arrive:"天津",
               date:"5月13日",
               money:"160"
             },
             {
               start:"上海",
               arrive:"昆明",
               date:"5月17日",
               money:"160"
             },
             {
               start:"上海",
               arrive:"南京",
               date:"6月16日",
               money:"170"
             },
             {
               start:"上海",
               arrive:"西安",
               date:"5月11日",
               money:"190"
             },
             {
               start:"上海",
               arrive:"三亚",
               date:"5月10日",
               money:"250"
             },
             {
               start:"上海",
               arrive:"福州",
               date:"5月16日",
               money:"260"
             },
             {
               start:"上海",
               arrive:"北京",
               date:"5月20日",
               money:"274"
             },
            ],
            "yaZhou":[
              {
                start:"上海",
                arrive:"高雄",
                date:"5月10日-5月17日",
                money:"3709"
              },
              {
                start:"上海",
                arrive:"高雄",
                date:"5月15日-5月22日",
                money:"3709"
              },
              {
                start:"上海",
                arrive:"澳门",
                date:"5月14日-5月21日",
                money:"4827"
              },
            ],
            "ouZhou":[

            ],
            "美洲":[
              
            ]
          },
          this.cheapDomesticTitles = [
            {
              name:"国内热门",
              py:"guoNeiReMen",
              index:0
            },
            {
              name:"西北/东北",
              py:"xiBei/dongBei",
              index:1
            },
            {
              name:"华中/华北",
              py:"huaZhong/huaBei",
              index:2
            },
            {
              name:"华南/西南",
              py:"huaNan/xiNan",
              index:3
            },
          ],
          this.cheapDomesticPics = {
            "guoNeiReMen":[
              {
                start:"上海",
                arrive:"青岛",
                date:"5月24日",
                money:"120"
              },
              {
                start:"上海",
                arrive:"沈阳",
                date:"5月11日",
                money:"100"
              },
              {
                start:"上海",
                arrive:"重庆",
                date:"5月10日",
                money:"125"
              },
              {
                start:"上海",
                arrive:"厦门",
                date:"5月15日",
                money:"130"
              },
              {
                start:"上海",
                arrive:"宁波",
                date:"6月13日",
                money:"140"
              },
              {
                start:"上海",
                arrive:"南京",
                date:"6月16日",
                money:"170"
              },
              {
                start:"上海",
                arrive:"昆明",
                date:"5月16日",
                money:"178"
              },
              {
                start:"上海",
                arrive:"西安",
                date:"5月11日",
                money:"190"
              },
              {
                start:"上海",
                arrive:"天津",
                date:"5月19日",
                money:"200"
              },
              {
                start:"上海",
                arrive:"福州",
                date:"5月16日",
                money:"260"
              },
              {
                start:"上海",
                arrive:"广州",
                date:"10月10日",
                money:"290"
              },
              {
                start:"上海",
                arrive:"北京",
                date:"5月25日",
                money:"298"
              }
            ],
            "xiBei/dongBei":[
              {
                start:"上海",
                arrive:"哈尔滨",
                date:"5月15日",
                money:"75"
              },
              {
                start:"上海",
                arrive:"沈阳",
                date:"5月11日",
                money:"100"
              },
              {
                start:"上海",
                arrive:"西安",
                date:"5月11日",
                money:"190"
              },
              {
                start:"上海",
                arrive:"银川",
                date:"5月10日",
                money:"200"
              },
              {
                start:"上海",
                arrive:"中卫",
                date:"6月04日",
                money:"210"
              },
              {
                start:"上海",
                arrive:"兰州",
                date:"5月12日",
                money:"220"
              },
              {
                start:"上海",
                arrive:"长春",
                date:"9月12日",
                money:"220"
              },
              {
                start:"上海",
                arrive:"榆林",
                date:"5月14日",
                money:"280"
              },
              {
                start:"上海",
                arrive:"大连",
                date:"11月01日",
                money:"300"
              },
              {
                start:"上海",
                arrive:"白山",
                date:"6月03日",
                money:"390"
              },
              {
                start:"上海",
                arrive:"西宁",
                date:"5月14日",
                money:"480"
              },
              {
                start:"上海",
                arrive:"延吉",
                date:"6月11日",
                money:"515"
              },
            ],
            "huaZhong/huaBei":[
              {
                start:"上海",
                arrive:"长沙",
                date:"5月8日",
                money:"120"
              },
              {
                start:"上海",
                arrive:"石家庄",
                date:"5月10日",
                money:"150"
              },
              {
                start:"上海",
                arrive:"天津",
                date:"5月13日",
                money:"160"
              },
              {
                start:"上海",
                arrive:"张家界",
                date:"5月28日",
                money:"180"
              },
              {
                start:"上海",
                arrive:"呼和浩特",
                date:"5月20日",
                money:"180"
              },
              {
                start:"上海",
                arrive:"太原",
                date:"5月12日",
                money:"210"
              },
              {
                start:"上海",
                arrive:"南昌",
                date:"5月11日",
                money:"215"
              },
              {
                start:"上海",
                arrive:"常德",
                date:"5月31日",
                money:"250"
              },
              {
                start:"上海",
                arrive:"宜昌",
                date:"5月22人",
                money:"285"
              },
              {
                start:"上海",
                arrive:"邯郸",
                date:"5月17日",
                money:"285"
              },
              {
                start:"上海",
                arrive:"北京",
                date:"11月01日",
                money:"300"
              },
              {
                start:"上海",
                arrive:"张家口",
                date:"6月06日",
                money:"300"
              },
            ],
            "huaNan/xiNan":[
              {
                start:"上海",
                arrive:"重庆",
                date:"5月17日",
                money:"120"
              },
              {
                start:"上海",
                arrive:"抓hi",
                date:"5月18日",
                money:"150"
              },
              {
                start:"上海",
                arrive:"揭阳",
                date:"5月10日",
                money:"150"
              },
              {
                start:"上海",
                arrive:"昆明",
                date:"5月17日",
                money:"160"
              },
              {
                start:"上海",
                arrive:"桂林",
                date:"5月10日",
                money:"200"
              },
              
              {
                start:"上海",
                arrive:"遵义",
                date:"5月10日",
                money:"200"
              },
              {
                start:"上海",
                arrive:"绵阳",
                date:"5月21日",
                money:"230"
              },
              {
                start:"上海",
                arrive:"南宁",
                date:"5月19日",
                money:"240"
              },
              {
                start:"上海",
                arrive:"三亚",
                date:"5月10日",
                money:"250"
              },

              {
                start:"上海",
                arrive:"广州",
                date:"10月10日",
                money:"290"
              },
              {
                start:"上海",
                arrive:"北海",
                date:"5月18日",
                money:"350"
              },
              {
                start:"上海",
                arrive:"海口",
                date:"5月11日",
                money:"365"
              },
            ]
          },
          this.options =  [
            {
              value: '选项1',
              label: '北京'
              }, 
              {
                value: '选项2',
                label: '上海'
              }, 
              {
                value: '选项3',
                label: '广州'
              }, 
              {
                value: '选项4',
                label: '深圳'
              }, 
              {
                value: '选项5',
                label: '杭州'
            }
          ];
      },
      cheapInterImageTab(py,index){
        this.cheapInterPic = this.cheapInterPics[py];
        this.isColor = index;
      },
      cheapDomesticImageTab(py,index){
        this.cheapDomesticPic = this.cheapDomesticPics[py];
        this.isColor = index;
      }
  },
  mounted(){
      this.load();
      this.cheapInterPic = this.cheapInterPics[this.cheapInternationalTitles[0].py];
      this.cheapDomesticPic = this.cheapDomesticPics[this.cheapDomesticTitles[0].py];
  }
}
</script>

<style scoped>
.ticketBlock{
  padding: 0 30px;
  height: 500px;
}
.city_button{
  width: 50px;
  height: 25px;
  line-height: 25px;
  padding: 0px;
  margin-right: 20px;
  border: 0;
  font-size: 12px;
  border-radius: 15%;
  margin-top: 10px;
  color: black;
}
.cheap_button{
  width: 65px !important;
}
.city_button:hover{
  background-color:rgb(18, 120, 204);
  color: white;
}
.main_li{
  list-style: none;
  float: left;
  line-height: 30px;
}
.main_ul{
  width: 1155px;
  height: 30px;
  padding-left: 0;
  position: relative;
}
.main_a{
  height: 25px;
  text-decoration: none;
  color: rgb(18, 120, 204);
  padding-bottom: 10px;
  line-height: 25px;
  float: right;
}
.main_a:hover{
  border: 1px solid rgb(18, 120, 204);
  text-decoration: none;

}
.el_main{
  width: 1250px;
  padding-top: 0;
}
.ticket_a{
  text-decoration: none;
  color: rgb(18, 120, 204);
}
.ticket_card{
  width: 220px;
  height: 106px;
  background-color:#f8f8f8;
  float: left;
  padding: 15px 12px;
  margin-right: 20px;
  margin-bottom: 10px;

}
.ticket_card:hover{
  border-right: 1px solid #f8f8f8;
  border-bottom: 3px solid rgb(216, 213, 213);
}
.ticket_card:hover .button{
  background-color:hsla(46, 90%, 51%, 0.904);
}
.ticket_name{
  padding:0 5px;
  margin-bottom: 3px;
  height: 20px;
  line-height: 20px;
  text-align: left;
  color: #333333;
  font:14px/1.5 "Microsoft yahei", arial, Simsun, sans-serif !important;
}
.ticket_date{
  height: 27px;
  font-size: 12px;
  color:#999999;
  padding: 0 0 0 5px;;
  margin: 0;
  text-align: left;
}
.ticket_money{
  height: 27px;
  text-align: left;
}
.moeny_icon{
  vertical-align: 5px;
  width: 14px !important;
  height: 14px !important;
  
}
.money_up{
  font-size: 14px;
  color: #333333;
  margin-left: 3px;
}
.price{
  font: 22px/1.5 tahoma;
  color: #f60;
}
.button{
  float: right;
  background-color: #ffb000;
  color: white;
  border-radius: 3px;
  padding: 0 15px;
  height: 27px;
  margin-top: 3px;
}
.btnColor{
  background-color: rgb(18, 120, 204);
  color: white;
}
.ticketBlock{
  position: relative;
}
.city_select{
  left: 865px;
  top: 5px;
  height: 20px;
  line-height: 20px;
}
/* .el-input__inner{
  border: 0 !important;
  width: 25px !important;
  height: 20px !important;
} */

</style>


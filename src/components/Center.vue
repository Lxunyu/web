<template>
     <div class="content">
         <!-- 轮播图+查询机票开始 -->
      <div>
        <el-carousel trigger="click">
          <el-carousel-item v-for="(item,itemIndex) in pics" :key="itemIndex">
            <img class="img_style" :src="item.url" />
          </el-carousel-item>
        </el-carousel>
        <air-tickets class="air"></air-tickets>
      </div>
         <!-- 轮播图+查询机票结束 -->
         <!-- 酒店开始 -->
      <div  class="block">
        <el-tabs v-model="activeName" >
            <!-- 海外酒店开始 -->
            <el-tab-pane label="海外酒店" name="first">
                <el-container>
                    <el-aside class="content_aside">
                      <div>
                        <dt class="sale_dt">促销</dt>
                        <dd class="find_dd" v-for="(sale,saleIndex) in sales" :key="saleIndex"><a href="#" class="find_a">{{sale}}</a></dd>
                      </div>
                      <div class="find">
                        <dt  class="sale_dt">发现酒店</dt>
                        <dd class="find_dd" v-for="(find,findIndex) in finds" :key="findIndex+sales.length"><a class="find_a" href="#">{{find}}</a></dd> 
                      </div>
                    </el-aside>
                    <el-main>
                      <div >
                        <ul class="main_ul">
                            <li class="main_li"  v-for="(image,imageIndex) in images" :key="imageIndex">
                                <el-button :class="{active:(imageIndex==num)}" @click="imageTab(imageIndex)" class="main_button" >{{image.title}}</el-button>
                            </li>
                            <a class="main_a" href="javascript:void(0);">更多海外酒店></a>
                        </ul>
                        <a href="javascript:void(0);">
                          <div class="overseas_pic">
                            <div  v-for="(image,imageIndex) in images" :key="imageIndex">
                              <div class="pic_box" :title='pic.alt' v-for="(pic,picIndex) in image.contents" :key="picIndex" v-show="image.index==num">
                                  <el-image  class="pic_item" :src="pic.src" :alt="image.alt" ></el-image>
                                  <div class="circle">
                                    <p class="circle_alt">{{pic.alt}}</p>
                                    <hr class="cicle_hr">
                                    <p class="circle_num">{{pic.num}}</p>
                                    <p class="circle_num"><svg-icon class="icon_money" name="money"></svg-icon><span class="circle_money">{{pic.money}}</span>起</p>
                                  </div>
                              </div>
                            </div>
                           </div>
                          <a href="#" title="泰国免落地签证费啦!">
                              <div class="main_right">
                                <el-image class="main_right_image" src="https://pages.c-ctrip.com/hotel/201805/thailand/220330.jpg"></el-image>
                                <div class="rectangle">
                                  <p class="rectangle_text">泰国免落地签证费啦!</p>
                                </div>
                              </div>
                            </a>  
                        </a>
                      </div>
                       
                    </el-main>
                </el-container>
            </el-tab-pane>
            <!-- 海外酒店结束 -->
            <!-- 海外民俗+短租开始 -->
            <el-tab-pane label="海外民俗+短租" name="second">
              <ul>
                <li class="oversea_li">
                  <a class="main_a" href="javascript:void(0);">更多海外民宿></a>
                </li>
              </ul>
              <div class="oversea">
                <div class="oversea_left"> 
                  <div  v-for="(image,imageIndex) in overseaImageLeft" :key="imageIndex">
                    <div class="oversea_box">
                      <a href="javascript:void(0);">
                        <el-image class="oversea_pic" :src="image.src"></el-image>
                      </a>
                      <div class="oversea_title" >
                        <p class="oversea_p">{{image.title}}</p>
                        <p class="oversea_p">{{image.content}}</p>
                      </div>
                      <div class="oversea_circle">
                        <p class="oversea_circle_p">{{image.num}}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="oversea_right">
                  <div  v-for="(image,imageIndex) in overseaImageRight" :key="imageIndex">
                    <div class="oversea_right_box">
                      <a href="javascript:void(0);">
                       <el-image class="oversea_pic" :src="image.src"></el-image>
                      </a>
                        <div class="oversea_title" :class="overseaTitle(imageIndex)">
                          <p class="oversea_p">{{image.title}}</p>
                          <p class="oversea_p">{{image.content}}</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <!-- 海外民俗+短租结束 -->
            <!-- 国内酒店开始 -->
            <el-tab-pane label="国内酒店" name="third">
              <el-container>
                <el-aside class="content_aside">
                  <div>
                    <dt class="sale_dt">热门地标周边酒店</dt>
                    <dd class="find_dd"><a href="#" class="find_a">还没想好周末去哪玩？</a></dd>
                  </div>
                  <div class="find">
                    <dt  class="sale_dt">促销</dt>
                    <dd class="find_dd" v-for="(sale,saleIndex) in domesticSales" :key="saleIndex"><a class="find_a" href="#">{{sale}}</a></dd> 
                  </div>
                </el-aside>
                <el-main>
                  <ul class="main_ul">
                    <li class="main_li"  v-for="(button,buttonIndex) in buttonImages" :key="buttonIndex">
                        <el-button  class="main_button" :class="{active:(buttonIndex==num)}" @click="imageTab(buttonIndex)">{{button.title}}</el-button>
                    </li>
                    <a class="main_a" href="javascript:void(0);">更多国内酒店></a>
                  </ul>
                  <div class="overseas_pic">
                    <div v-for="(button,buttonIndex) in buttonImages" :key="buttonIndex">
                      <div class="pic_box domestic_box" :title="pic.alt" v-for="(pic,picIndex) in button.contents" :key="picIndex" v-show="button.index==num">
                          <a href="#"><el-image  class="domestic_pic_item" :src="pic.src"></el-image></a>
                          <p class="domestic_p">{{pic.alt}}</p>
                          <p class="domestic_p"></p>
                          <p class="domestic_p">
                            <span class="domestic_pic_span">{{pic.name}}</span>
                            <span class="domestic_span"><span  class="circle_money">{{pic.money}}</span>起</span>
                            <svg-icon class="black_money" name="blackMoney"></svg-icon>
                            </p>

                      </div>
                    </div>
                  </div>
                  <a href="#" title="南靖静心山居客栈">
                    <div class="main_right">
                      <el-image class="demostic_right_image" src="https://dimg11.c-ctrip.com/images/26091b000001bkl7lF333.jpg"></el-image>
                      <div class="rectangle">
                        <p class="rectangle_text">南靖静心山居客栈</p>
                      </div>
                    </div>
                  </a>  
                </el-main>
              </el-container>
            </el-tab-pane>
            <!-- 酒店+景点开始 -->
            <el-tab-pane label="酒店+景点" name="fourth">
              <el-container>
                 <el-aside class="content_aside">
                  <div>
                    <dt class="sale_dt">热门主题</dt>
                    <dd class="scene_dd" v-for="(hotTheme,hotThemeIndex) in hotThemes" :key="hotThemeIndex"><a href="#" class="find_a">{{hotTheme.name}}</a>  |</dd>
                  </div>
                  <div class="scene">
                    <dt  class="sale_dt">促销</dt>
                    <dd class="find_dd"><a class="find_a" href="#">春季赏花</a></dd> 
                    <dd class="find_dd"><a class="find_a" href="#">万人自驾</a></dd> 
                  </div>
                </el-aside>
                <el-main>
                  <ul class="main_ul">
                    <li class="main_li"  v-for="(scene,sceneIndex) in sceneImages" :key="sceneIndex">
                        <el-button  class="main_button" :class="{active:(buttonIndex==num)}" @click="imageTab(sceneIndex)">{{scene.title}}</el-button>
                    </li>
                    <a class="main_a" href="javascript:void(0);">更多套餐></a>
                  </ul>
                  <div class="overseas_pic">
                    <div v-for="(scene,sceneIndex) in sceneImages" :key="sceneIndex">
                      <div class="pic_box domestic_box" :title="pic.alt" v-for="(pic,picIndex) in scene.contents" :key="picIndex" v-show="scene.index==num">
                          <a href="#"><el-image  class="scene_pic_item" :src="pic.src"></el-image></a>
                          <p class="domestic_p scene_P">{{pic.alt}}</p>
                          <p class="domestic_p">
                            <span class="domestic_span"><span  class="circle_money">{{pic.money}}</span>起</span>
                            <svg-icon class="black_money" name="blackMoney"></svg-icon>
                            </p>

                      </div>
                    </div>
                  </div>
                  <a href="#" title="银行卡立减">
                    <div class="main_right">
                      <el-image class="main_right_image" src="https://images3.c-ctrip.com/dj/201806/yhkhj_220x300.jpg"></el-image>
                      <div class="rectangle">
                        <p class="rectangle_text">银行卡立减</p>
                      </div>
                    </div>
                  </a>  
                </el-main>
              </el-container>
            </el-tab-pane>
            <!-- 酒店+景点结束 -->
            <!-- 客栈民宿开始 -->
            <el-tab-pane label="客栈民宿" name="fifth">
              <el-container>
                 <el-aside class="content_aside">
                  <div>
                    <dt class="sale_dt">游山玩水</dt>
                    <dd class="scene_dd" v-for="(play,playIndex) in plays" :key="playIndex"><a href="#" class="find_a">{{play.name}}</a>  |</dd>
                  </div>
                  <div class="homestay">
                    <dt  class="sale_dt">民俗艺术</dt>
                    <dd class="scene_dd" v-for="(art,artIndex) in arts" :key="artIndex"><a class="find_a" href="#">{{art.name}}</a>   |</dd> 
                  </div>
                </el-aside>
                <el-main>
                  <ul class="main_ul">
                    <li class="main_li"  v-for="(homestay,homestayIndex) in homestaies" :key="homestayIndex">
                        <el-button  class="main_button" :class="{active:(homestayIndex==num)}" @click="imageTab(homestayIndex)">{{homestay.title}}</el-button>
                    </li>
                    <a class="main_a" href="javascript:void(0);">更多客栈></a>
                  </ul>
                  <div class="overseas_pic">
                    <div v-for="(homestay,homestayIndex) in homestaies" :key="homestayIndex">
                      <div class="pic_box domestic_box" :title="pic.alt" v-for="(pic,picIndex) in homestay.contents" :key="picIndex" v-show="homestay.index==num">
                          <a href="#"><el-image  class="domestic_pic_item" :src="pic.src"></el-image></a>
                          <p class="domestic_p">{{pic.alt}}</p>
                          <p class="domestic_p"></p>
                          <p class="domestic_p">
                            <span class="domestic_pic_span">{{pic.name}}</span>
                            <span class="domestic_span"><span  class="circle_money">{{pic.money}}</span>起</span>
                            <svg-icon class="black_money" name="blackMoney"></svg-icon>
                            </p>
                      </div>
                    </div>
                  </div>
                  <a href="#" title="南靖静心山居客栈">
                    <div class="main_right">
                      <el-image class="demostic_right_image" src="https://dimg11.c-ctrip.com/images/26091b000001bkl7lF333.jpg"></el-image>
                      <div class="rectangle">
                        <p class="rectangle_text">南靖静心山居客栈</p>
                      </div>
                    </div>
                  </a>  
                </el-main>
              </el-container>
            </el-tab-pane>
            <!-- 客栈民宿开始 -->
            <!-- 团购开始 -->
            <el-tab-pane label="团购" name="six">
              <el-container>
                 <el-aside class="content_aside">
                  <div>
                    <dt class="sale_dt">热门团购</dt>
                    <dd class="scene_dd" v-for="(hotGroup,hotGroupIndex) in hotGroups" :key="hotGroupIndex"><a href="#" class="find_a">{{hotGroup.name}}</a>  |</dd>
                  </div>
                  <div class="group_select">
                    <dt  class="sale_dt">团购精选</dt>
                    <dd class="sale_dd" v-for="(groupSelected,groupSelectedIndex) in groupSelecteds" :key="groupSelectedIndex"><a class="find_a" href="#">{{groupSelected.name}}</a></dd> 
                  </div>
                </el-aside>
                <el-main>
                  <ul class="main_ul">
                    <li class="main_li" v-for="(group,groupIndex) in groups" :key="groupIndex">
                        <el-button  class="main_button" :class="{active:(groupIndex==num)}" @click="imageTab(groupIndex)">{{group.title}}</el-button>
                    </li>
                    <a class="main_a" href="javascript:void(0);">更多团购产品></a>
                  </ul>
                  <div class="overseas_pic">
                    <div v-for="(group,groupIndex) in groups" :key="groupIndex">
                      <div class="pic_box domestic_box" :title="pic.alt" v-for="(pic,picIndex) in group.contents" :key="picIndex" v-show="group.index==num">
                          <a href="#"><el-image  class="domestic_pic_item" :src="pic.src"></el-image></a>
                          <p class="domestic_p">{{pic.alt}}</p>
                          <p class="domestic_p"></p>
                          <p class="domestic_p">
                            <span class="domestic_pic_span">{{pic.name}}</span>
                            <span class="domestic_span"><span  class="circle_money">{{pic.money}}</span>起</span>
                            <svg-icon class="black_money" name="blackMoney"></svg-icon>
                          </p>
                      </div>
                    </div>
                  </div>
                  <a href="#" title="好吃的在这里，吃货们看过来!">
                    <div class="main_right">
                      <el-image class="main_right_image" src="https://pages.ctrip.com/commerce/promote/20170720/yydzx/img/msbkf_220_330.jpg"></el-image>
                      <div class="rectangle">
                        <p class="rectangle_text">好吃的在这里，吃货们看过来!</p>
                      </div>
                    </div>
                  </a>  
                </el-main>
              </el-container>
            </el-tab-pane>
            <!-- 团购结束 -->

        </el-tabs>
      </div>
    </div>
</template>

<script>
import AirTickets from "./AirTickets.vue";
export default {
  name: "Center",
  components: {
    AirTickets
  },
  data() { 
    return {
      pics: [],
      activeName: 'six',
      active:"first1",
      sales:[],
      finds:[],
      titles:[],
      images:[],
      contents:[],
      num:0,
      overseaImageLeft:[],
      overseaImageRight:[],
      domesticSales:[],
      buttonImages:[],
      buttonIndex:"",
      hotThemes:[],
      sceneImages:[],
      plays:[],
      arts:[],
      homestaies:[],
      hotGroups:[],
      groupSelecteds:[],
      groups:[],
    };
  },
  methods: {
    loadAll() {
      this.pics = [
        {
          url: require("./../assets/imgs/pic1.jpg")
        },
        {
          url: require("./../assets/imgs/pic2.jpg")
        }
      ];
      this.sales = [
          "睡遍全世界——新加坡国家馆",
          "睡遍全世界——日本国家馆",
          "睡遍全世界——澳大利亚站",
          "睡遍全世界——马来西亚国家馆",
          "睡遍全世界——新加坡国家馆",
          "睡遍全世界——泰国国家馆",
      ],
      this.finds = [
          "流行与复古结合的热门人气地——首尔仁寺洞钟路",
          "特别的旅行，美味的餐食，绝美的夜景，这次冬季旅行就去釜山吧",
          "孟加拉国吉大港酒店推荐",
          "最受国人欢迎的伦敦酒店"
      ],
      this.titles = [
          "热门城市",
          "都市购物",
          "海岛休闲",
          "旅游胜地"
      ],
      this.images = [
        {
          title:"热门城市",
          contents:[
            {
              src:"https://images3.c-ctrip.com/overseas/city/singapore256-256.jpg",
              alt:"新加坡",
              num:"715家酒店",
              money:"70"
            },
            {
              src:"https://images3.c-ctrip.com/overseas/city/bangkok256-256.jpg",
              alt:"曼谷",
              num:"3948家酒店",
              money:"18"
            },
            {
              src:"https://images3.c-ctrip.com/overseas/city/tokyo256-256.jpg",
              alt:"东京",
              num:"3993家酒店",
              money:"121"
            },
            {
              src:"https://images3.c-ctrip.com/overseas/city/kualalumpur256-256.jpg",
              alt:"吉隆坡",
              num:"2534家酒店",
              money:"27"
            },
            {
              src:"https://images3.c-ctrip.com/overseas/city/osaka256-256.jpg",
              alt:"大阪",
              num:"4089家酒店",
              money:"44"
            },
            {
              src:"https://images3.c-ctrip.com/ad/apph5/2017/phuket_256_256_01.jpg",
              alt:"普吉岛",
              num:"5093店",
              money:"41"
            },
          ],
          index:0
        },
        {
          title:"都市购物",
          contents:[
            {
              src:"https://images3.c-ctrip.com/overseas/city/singapore256-256.jpg",
              alt:"新加坡",
              num:"715家酒店",
              money:"70"
            },
            {
              src:"https://images3.c-ctrip.com/overseas/city/bangkok256-256.jpg",
              alt:"曼谷",
              num:"3948家酒店",
              money:"18"
            },
            {
              src:"https://images3.c-ctrip.com/overseas/city/tokyo256-256.jpg",
              alt:"东京",
              num:"3493店",
              money:"121"
            },
            {
              src:"https://images3.c-ctrip.com/overseas/city/kualalumpur256-256.jpg",
              alt:"吉隆坡",
              num:"2534家酒店",
              money:"27"
            },
            {
              src:"https://images3.c-ctrip.com/overseas/city/paris256-256.jpg",
              alt:"巴黎",
              num:"3124家酒店",
              money:"237"
            },
            {
              src:"https://images3.c-ctrip.com/overseas/city/london256-256.jpg",
              alt:"伦敦",
              num:"5298家酒店",
              money:"87"
            },
          ],
          index:1
        },
        {
          title:"海岛休闲",
          contents:[
            {
              src:"https://images3.c-ctrip.com/ad/apph5/2017/phuket_256_256_01.jpg",
              alt:"普吉岛",
              num:"5093家酒店",
              money:"41"
            },
            {
              src:"https://images3.c-ctrip.com/overseas/city/bali256-256.jpg",
              alt:"巴厘岛",
              num:"10274家酒店",
              money:"53"
            },
            {
              src:"https://images3.c-ctrip.com/overseas/city/kotakinabalu256-256.jpg",
              alt:"哥打京那巴鲁",
              num:"649店",
              money:"35"
            },
            {
              src:"https://images3.c-ctrip.com/ad/bigbutton/promotion/201703/Santorini_256_256.jpg",
              alt:"圣托里尼",
              num:"1292家酒店",
              money:"157"
            },
            {
              src:"https://images3.c-ctrip.com/overseas/city/langkawi256-256.jpg",
              alt:"兰卡威",
              num:"518家酒店",
              money:"49"
            },
            {
              src:"https://images3.c-ctrip.com/overseas/city/Pattaya256-256.jpg",
              alt:"芭提雅",
              num:"3160家酒店",
              money:"48"
            },
          ],
          index:2
        },
        {
          title:"旅游胜地",
          contents:[
            {
              src:"https://images3.c-ctrip.com/overseas/city/chiangmai256-256.jpg",
              alt:"清迈",
              num:"2576家酒店",
              money:"18"
            },
            {
              src:"https://images3.c-ctrip.com/overseas/city/bali256-256.jpg",
              alt:"胡志明市",
              num:"2942家酒店",
              money:"27"
            },
            {
              src:"https://images3.c-ctrip.com/overseas/city/siemreap256-256.jpg",
              alt:"暹粒",
              num:"941店",
              money:"15"
            },
            {
              src:"https://images3.c-ctrip.com/overseas/city/kyoto256-256.jpg",
              alt:"京都",
              num:"3277家酒店",
              money:"99"
            },
            {
              src:"https://images3.c-ctrip.com/overseas/city/melbourne256-256.jpg",
              alt:"墨尔本",
              num:"925家酒店",
              money:"137"
            },
            {
              src:"https://images3.c-ctrip.com/overseas/city/Moscow256-256.jpg",
              alt:"莫斯科",
              num:"3163家酒店",
              money:"67"
            },
          ],
          index:3
        },
      
      ],
      this.overseaImageLeft = [
        {
          src:"https://pic.c-ctrip.com/htlpic/inn/pic/ctriphome/pic_220_160_1.jpg",
          title:"曼谷",
          content:"寻求心灵的净化",
          num:"433家住宿"
        },
        {
          src:"https://pic.c-ctrip.com/htlpic/inn/pic/ctriphome/pic_220_160_2.jpg",
          title:"博福特楼公寓酒店",
          content:"4.6/5分",
          num:"5038起"
        },
        {
          src:"https://pic.c-ctrip.com/htlpic/inn/pic/ctriphome/pic_220_160_3.jpg",
          title:"京都",
          content:"清水寺前小径斜",
          num:"200家住宿"
        },
        {
          src:"https://pic.c-ctrip.com/htlpic/inn/pic/ctriphome/pic_220_160_4.jpg",
          title:"东京考山武士胶囊旅社",
          content:"0/5分",
          num:"实时计价"
        }, 
        {
          src:"https://pic.c-ctrip.com/htlpic/inn/pic/ctriphome/pic_220_160_5.jpg",
          title:"清迈",
          content:"时间凝固在有故事的城",
          num:"343家住宿"
        },
        {
          src:"https://pic.c-ctrip.com/htlpic/inn/pic/ctriphome/pic_220_160_6.jpg",
          title:"Dfeel Hostel Phuket",
          content:"3.4/5分",
          num:"123起"
        },
      
      ],
      this.overseaImageRight = [
        {
          src:"https://pic.c-ctrip.com/htlpic/inn/pic/pic_rec09_ctriphome.jpg",
          title:"游新加坡感受古典和现代",
          content:"距离牛水车步行可达"

        },
        {
          src:"https://pic.c-ctrip.com/htlpic/inn/pic/ctriphome/pic_220_160_7.jpg",
          title:"是个造型独特的旅客"
        },
        {
          src:"https://pic.c-ctrip.com/htlpic/inn/pic/ctriphome/pic_220_160_8.jpg",
          title:"泰国典型别墅"
        }

      ],
      this.domesticSales = [
        "高星酒店限时抢，最低3折",
        "周末休闲游人气酒店99元起",
        "精品酒店"
      ],
      this.buttonImages = [
        {
          title:"北京",
          contents:[
            {
              src:"https://dimg11.c-ctrip.com/images/fd/hotel/g5/M08/8C/C1/CggYsFcrF_GAZHusAEAz_YYcL3E922_R_300_120.jpg",
              alt:"桔子酒店精选(北京亚运会店)",
              name:"亚运村/奥体中心地区",
              money:"246"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/hotel/8000/7075/704692b242c84b0d8a075b60015e4e0b_R_300_120.jpg",
              alt:"北京亚奥国际酒店",
              name:"亚运村/奥体中心地区",
              money:"552 "
            },
            {
              src:"https://dimg11.c-ctrip.com/images/20061600000102pt73EDD_R_300_120.jpg",
              alt:"北京香格里拉饭店",
              name:"西直门/北京展览馆地区",
              money:"1210"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/20081b000001by2jc2FF2_R_300_120.jpg",
              alt:"北京悦尚舟客古北简家别墅",
              name:"古北小镇",
              money:"235"
            },
          ],
          index:0
        },
       {
          title:"上海",
          contents:[
            {
              src:"https://dimg11.c-ctrip.com/images/hotel/53000/52741/941abc93388f496cb660691cf8b48bde_R_300_120.jpg",
              alt:"上海南泉大酒店",
              name:"浦东陆家嘴金融贸易区",
              money:"266"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/fd/hotel/g2/M04/C4/B1/Cghzf1VT-zeAZAmWABMwhdrIgQQ637_R_300_120.jpg",
              alt:"上海沪纺大厦",
              name:"静安寺/南京西路",
              money:"206"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/200q05000000129evB165_R_300_120.jpg",
              alt:"上海衡山宾馆",
              name:"徐家汇地区",
              money:"638"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/200c0a0000004logfBCBF_R_300_120.jpg",
              alt:"上海如果遇见你小墅",
              name:"朱家角/东方绿舟",
              money:"380"
            },
          ],
          index:1
        },
       {
          title:"天津",
          contents:[
            {
              src:"https://dimg11.c-ctrip.com/images/200c170000012pz9y778F_R_300_120.jpg",
              alt:"天津今晚大酒店",
              name:"天津大学/南开大学",
              money:"506"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/fd/hotel/g3/M08/A7/46/CggYGlXsIyqAbznVAAe7eIwEZlQ142_R_300_120.jpg",
              alt:"桔子水晶天津津湾广场酒店",
              name:"天津站/古文化街",
              money:"381"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/200i15000000xf551234C_R_300_120.jpg",
              alt:"天津东丽湖恒大酒店",
              name:"东丽湖/欢乐谷度假区",
              money:"999"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/200m0g00000087c9k2AE0_R_300_120.jpg",
              alt:"如家酒店(天津海河解放南路刘庄桥店)",
              name:"滨江道/小白楼",
              money:"127"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/20081e000001ex22f6C2F_R_300_120.jpg",
              alt:"天津四季酒店",
              name:"滨江道/小白楼",
              money:"1039"
            },

          ],
          index:2
        },
        {
          title:"重庆",
          contents:[
            {
              src:"https://dimg11.c-ctrip.com/images/20030h0000009134gF550_R_300_120.jpg",
              alt:"重庆宝柏精品酒店",
              name:"大坪/时代天街",
              money:"296"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/20030y000000m1bp56770_R_300_120.jpg",
              alt:"柏联汇公馆(重庆解放碑店)",
              name:"解放碑/洪崖洞",
              money:"139"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/200d0s000000hsrk6A36D_R_300_120.jpg",
              alt:"重庆航瑞酒店",
              name:"江北国际机场地区",
              money:"134"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/hotel/428000/427449/e152eef7da804f6eb42588000b7644f1_R_300_120.jpg",
              alt:"重庆融汇丽笙酒店",
              name:"沙坪坝站/三峡广场",
              money:"769"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/200j1e000001ett9m9DB2_R_300_120.jpg",
              alt:"浅时光主题酒店(重庆沙坪坝三峡广场店)",
              name:"沙坪坝站/三峡广场",
              money:"256"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/200k15000000xtmkzDF86_R_300_120.jpg",
              alt:"重庆雅蔓酒店式公寓解放碑店",
              name:"解放碑/洪崖洞",
              money:"199"
            },
          ],
          index:3
        },
        {
          title:"哈尔滨",
          contents:[
            {
              src:"https://dimg11.c-ctrip.com/images/200n0n000000efhcf83DF_R_300_120.jpg",
              alt:"22°精品主题酒店",
              name:"群里外滩休闲文化区",
              money:"338"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/20090g0000008oey974B0_R_300_120.jpg",
              alt:"哈尔滨华特酒店",
              name:"中央大街步行街/松江花畔",
              money:"598"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/200s0i0000009lhq47465_R_300_120.jpg",
              alt:"哈尔滨香格里拉大酒店",
              name:"中央大街步行街/松江花畔",
              money:"700"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/200u0y000000mauvd1668_R_300_120.jpg",
              alt:"哈尔滨精途酒店",
              name:"中央大街步行街/松江花畔",
              money:"88"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/200a0h0000008vip09564_R_300_120.jpg",
              alt:"哈尔滨中央大街友谊路亚朵酒店",
              name:"中央大街步行街/松江花畔",
              money:"284"
            },
          ],
          index:4 
        },
        {
          title:"大连",
          contents:[
            {
              src:"https://dimg11.c-ctrip.com/images/200i14000000wocht905F_R_300_120.jpg",
              alt:"大连富丽华大酒店",
              name:"中山广场/人民路东港商务区",
              money:"619"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/200h13000000tn3paF0CE_R_300_120.jpg",
              alt:"和颐酒店(大连西安路店)",
              name:"西安路商圈",
              money:"135"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/200h0t000000iehgcC097_R_300_120.jpg",
              alt:"红熙缘酒店公寓(大连万达广场店)",
              name:"高新万达广场/软件园",
              money:"79"
            },
          ],
          index:5
        },
        {
          title:"南京",
          contents:[
            {
              src:"https://dimg11.c-ctrip.com/images/200i0800000031v2f52A1_R_300_120.jpg",
              alt:"港际宾馆(南京夫子庙店)",
              name:"明故宫/南京博物院地区",
              money:"199"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/hotel/523000/522052/c7c28a9587e74550bfef6536d4b53d05_R_300_120.jpg",
              alt:"南京涵田城市酒店",
              name:"夫子庙地区",
              money:"249"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/200e0k000000c7imw4FCD_R_300_120.jpg",
              alt:"南京中心大酒店",
              name:"新街口地区/市中心",
              money:"498"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/200l0s000000hn6vk4168_R_300_120.jpg",
              alt:"南京新街口苏宁诺富特酒店",
              name:"新街口地区/市中心",
              money:"466"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/hotel/100000/99250/3DB5BD80-2115-40C0-9E16-7DD7C3DBD1DE_R_300_120.jpg",
              alt:"桔子酒店(南京博物馆酒店)",
              name:"明故宫/南京博物院地区",
              money:"194"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/fd/hotel/g3/M05/F3/36/CggYGlbiPG6ABx16AAKISR58JC8611_R_300_120.jpg",
              alt:"桔子酒店精选(南京安德门店)",
              name:"雨花台南京南站地区",
              money:"273"
            },
          ],
          index:6
        },
      ],
      this.hotThemes = [
        {
          name:"自然景观"
        },
        {
          name:"主题公园"
        },
        {
          name:"度假村"
        },
        {
          name:"亲子"
        },
        {
          name:"亲水"
        },
        {
          name:"海滨"
        },
        {
          name:"漂流"
        },
        {
          name:"古镇"
        },
        {
          name:"看动物"
        },
        {
          name:"新体验"
        },
        {
          name:"祈福"
        },
        {
          name:"游山"
        },
        {
          name:"避暑"
        },
        {
          name:"情侣最爱"
        },
        {
          name:"含餐特惠"
        },
      ]
      this.sceneImages = [
        {
          title:"精选",
          contents:[
            {
              src:"https://dimg03.c-ctrip.com/images/20080q000000g0yetF854_C_640_320.jpg",
              alt:"【三人动物园】广州长隆熊猫酒店1晚+动物世界2日无限次票+儿童自助餐1份•【亲子游】",
              money:"1776"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/hotel/8000/7075/704692b242c84b0d8a075b60015e4e0b_R_300_120.jpg",
              alt:"「2大1小」迪士尼探索家度假酒店+乐园2日门票+赠商品券+优先入场证(节省轮候时间)•【立减50元/单!】",
              money:"实时计价 "
            },
            {
              src:"https://dimg03.c-ctrip.com/images/100h0t000000ii50e7B6E_C_640_320.jpg",
              alt:"锦竹花宿精品民俗1晚(九龙滑草场区内)+双早+滑雪场套票2张(含四轮滑草车+履带滑草+旋转咖啡机+弹跳飞人)•【亲子踏青】",
              money:"346"
            },
            {
              src:"https://images4.c-ctrip.com/target/200i1d000001e531m300D_C_640_320.jpg",
              alt:"随州碧桂园凤凰酒店1晚+可加购女儿国温泉/西游戏公园•【依山傍水，欧陆风情】",
              money:"360"
            },
            {
              src:"https://images4.c-ctrip.com/target/20070o000000f4b6v5F9B_C_640_320.jpg",
              alt:"常州香格里拉大酒店1-3晚+淹城野生动物世界门票+中西自助早餐+泳池、健身房、儿童乐园•【全家亲子游】",
              money:"918"
            },
            {
              src:"https://images4.c-ctrip.com/target/200i1d000001e531m300D_C_640_320.jpg",
              alt:"随州碧桂园凤凰酒店1晚+可加购女儿国温泉/西游戏公园•【依山傍水，欧陆风情】",
              money:"360"
            }
          ],
          index:0
        },
        {
          title:"常州",
          contents:[
            {
              src:"https://dimg03.c-ctrip.com/images/2007070000002edc21333_C_640_320.jpg",
              alt:"溧阳涵田度假村酒店+涵田半山温泉门票+双人早餐+欢迎水果+畅想酒店儿童乐园【春季踏青赏花】【自驾游拳头产品，天目湖打卡之气】",
              money:"589"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200l0c0000006762r896A_C_640_320.jpg",
              alt:"环球恐龙城恐龙主题度假村1-3晚+中华恐龙园门票•【亲子出游】",
              money:"874"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/100w0a0000004e73k50A0_C_640_320.jpg",
              alt:"天目湖御水温泉度假酒店+双人早餐+自选南山竹海套餐/御水温泉套餐/山水园套餐+儿童乐园+周末亲子活动【踏青赏花】【亲子度假】",
              money:"667"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/2004070000002kptiE6C4_C_640_320.jpg",
              alt:"溧阳天目湖维景国际温泉酒店+天目湖天沐温泉门票+双人自助早餐•【园林度假酒店，泡错峰温泉，亲子游】",
              money:"479"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200l0c0000006762r896A_C_640_320.jpg",
              alt:"常州环球恐龙城恐龙主题度假村1-3晚+恐龙谷温泉门票2张+自助早餐+可加购恐龙园•【2月1日温泉重新起航！】",
              money:"实时计价"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200h0a00000054sau63B2_C_640_320.jpg",
              alt:"常州环球恐龙城维景国际大酒店1-3晚+中华恐龙园门票、健身房•【酒店位置靠近恐龙园新大门】",
              money:"1000"
            },

          ],
          index:1
        },
        {
          title:"天津",
          contents:[
            {
              src:"https://dimg03.c-ctrip.com/images/200n0w000000keumjFC07_C_640_320.jpg",
              alt:"天津滨海喜来登酒店1-3晚+【海昌海洋公园/方特门票】2选1+亲子营养早餐+泳池健身房使用•【亲子/情侣游园之旅】",
              money:"实时计价"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200b0900000044jxh7A1D_C_640_320.jpg",
              alt:"天津东丽湖恒大酒店+房内私汤温泉畅泡+2大1小营养早餐•【静谧休闲，春日享悦私汤，五一预售】",
              money:"769"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/220f180000014yt5h4376_C_640_320.jpg",
              alt:"天津万丽泰达酒店1-3晚+2大1小营养早餐+任选午/晚套餐+恒温泳池+健身房+儿童娱乐设施畅玩•【亲子/情侣欢乐游】",
              money:"实时计价"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200g0w000000kghco319F_C_640_320.jpg",
              alt:"天津滨海喜来登酒店1晚+2大1小早餐+任选自助午餐/下午茶套餐+游泳健身畅玩+可加购周边景点门票•【亲子/情侣美食之旅】",
              money:"实时计价"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/fd/hotel/g3/M05/32/22/CggYGlawC1eAKfcZAASf9q7ZA8Q308_C_640_320.jpg",
              alt:"天津生态城世贸希尔顿酒店1-3晚+4种套餐可选【海昌海洋公园/方特世界/永丰农庄/赛车手亲子房】•紧邻方特，亲子/情侣轻度假",
              money:"实时计价"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200h0900000044jtr5E21_C_640_320.jpg",
              alt:"天津东丽湖恒大酒店+2大1小温泉门票+健身游泳•【春日踏青暖泡汤，远离喧嚣，温泉轻时光，五一预售】",
              money:"699"
            },
          ],
          index:2
        },
        {
          title:"广州",
          contents:[
            {
              src:"https://dimg03.c-ctrip.com/images/200w0w000000kr9866CFE_C_640_320.jpg",
              alt:"【2人动物园+马戏】长隆酒店(广州长隆野生动物世界店)+大马戏+动物世家2日票•【亲子游】",
              money:"实时计价"
            },
            {
              src:"https://dimg04.c-ctrip.com/images/300a0n000000ei5h880A5_C_640_320.jpg",
              alt:"【3人动物园】长隆香江酒店(广州长隆野生动物世界店)1晚+动物世家2日票•【亲子游】",
              money:"实时计价"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/100p0q000000fzgpxCD21_C_640_320.jpg",
              alt:"【3天2晚三人动物园+马戏】广州长隆熊猫酒店2晚+大马戏+野生动物世家2日票+送儿童自助正餐1份",
              money:"实时计价"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200815000000xbe4hA276_C_640_320.jpg",
              alt:"广州碧水湾温泉度假村+双人/2大1小无限次温泉+流溪河无边泡池+水疗+鱼疗+桑拿，可选晚餐套票•【亲子游】",
              money:"822"
            },
            {
              src:"https://dimg04.c-ctrip.com/images/300311000000r0amv7DC0_C_640_320.png",
              alt:"长隆酒店(广州长隆野生动物世界店)+长隆野生动物世界+【动物世家2日票(2天内无限次入园)&亲子家庭乐园游】【周年庆】",
              money:"1445"
            },
            {
              src:"https://dimg04.c-ctrip.com/images/300p1a0000018kpvn9782_C_640_320.png",
              alt:"广州长隆熊猫酒店+长隆野生动物世界•【自选午餐/晚餐+2张无限次野生动物世界门票+送儿童自助正餐1份",
              money:"1828"
            },

          ],
          index:3
        },
        {
          title:"成都",
          contents:[
            {
              src:"https://dimg03.c-ctrip.com/images/hotel/117000/116453/f624e45c72a644faac4ecdeeddf354ac_C_640_320.jpg",
              alt:"【6折限量】都江堰青源国际大酒店1-3晚+双早+双人青城道温泉+赠安睡粥/牛奶•【青城山脚五星温泉度假酒店&趣亲子】",
              money:"655"
            },
            {
              src:"https://dimg04.c-ctrip.com/images/300w170000011nllgCBF8_C_640_320.jpg",
              alt:"【特色蜂巢树屋】大邑南岸乡苑酒店1-3晚+锦绣安仁花卉公园门票+儿童乐园•【亲子安仁·紫色物语】",
              money:"547"
            },
            {
              src:"https://dimg04.c-ctrip.com/images/300k0x000000lkbz9B0A0_C_640_320.jpg",
              alt:"峨眉山巢壳假日酒店+御泉湾温泉/红珠山森林温泉/灵秀温泉+双早+双人御泉湾/ 灵秀/红珠山温泉门票，可选·人气温泉任选",
              money:"290"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/100r060000001pljt7E22_C_640_320.jpg",
              alt:"峨眉山温泉饭店(灵秀温泉)1-3晚+双早+双人灵秀温泉畅泡，可选峨眉山门票【报国寺大型生态园林温泉】",
              money:"288"
            },  
          ],
          index:4
        },
        {
          title:"杭州",
          contents:[
            {
              src:"https://dimg04.c-ctrip.com/images/300s0d0000006scvxC032_C_640_320.jpg",
              alt:"立减30！宋城千古情主题酒店(杭州西湖店)1-2晚+双人/亲子等套餐（早餐+千古情贵宾席+宋城景区票+可无限次入园•【一生必看演出】",
              money:"实时计价"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/hotel/27000/26257/8037ae566da44c7d8e09a159a4e8dadf_C_640_320.jpg",
              alt:"错峰美食特惠！杭州第一世界大酒店1晚+双早+双人泰香阁自助晚餐+双人云曼温泉门票+下单立减•【一站式，与景点无缝接】",
              money:"实时计价"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200q050000000dqof4645_C_640_320.jpg",
              alt:"比单定优惠200其！杭州莎玛和达服务式公寓1-3晚+四早+嗒咪亲子乐园/西湖/超山景区门票可选购•【超大双卧套房，踏青亲子游】",
              money:"实时计价"
            },
            {
              src:"https://images4.c-ctrip.com/target/20081c000001cgzpqC452_C_640_320.jpg",
              alt:"全岛型度假酒店】住千岛湖温馨岛蝶来湖景度假酒店，享精美自助早餐•四面环湖，拥有儿童乐园、泳池、湖边沙滩•【踏青早鸟价】",
              money:"369"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/100s0k000000bdugc1BD8_C_640_320.jpg",
              alt:"周末不涨价！杭州宝盛水博园大酒店1晚+2大1小自助早+果蔬采摘套餐+动物喂养+水利博物馆参观•【免费亲子布置、延迟退等礼遇】",
              money:"600"
            },

          ],
          index:5
        },
        {
          title:"珠海",
          contents:[
            {
              src:"https://dimg03.c-ctrip.com/images/20050y000000mgqt8E438_C_640_320.jpg",
              alt:"【2人海洋王国】珠海长隆企鹅酒店1晚+海洋王国2日无限次票•【酒店步行1分钟至海洋王国】",
              money:"2098"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/20070v000000k5xbn5E99_C_640_320.jpg",
              alt:"【2人海洋王国】长隆马戏酒店(珠海海洋王国店)1晚+海洋王国2日票•【酒店步行3分钟到海洋王国】",
              money:"实时计价"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200p0i00000099i0nF28B_C_640_320.jpg",
              alt:"【3天2晚三人双园】长隆横琴湾酒店(珠海海洋王国店)2晚+海洋王国2日票+《龙秀》大马戏•【无限次畅玩：横琴湾室内外水世界】",
              money:"实时计价"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/20050y000000mgqt8E438_C_640_320.jpg",
              alt:"【3人海洋王国】珠海长隆企鹅酒店1晚+海洋王国2日无限次票•【酒店步行1分钟至海洋王国】",
              money:"2498"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/fd/tg/g2/M00/1A/06/CghzgFVr2XiAB1jCAAZLr23lyNs928_C_640_320.jpg",
              alt:"暖春特惠！珠海海泉湾维景国际大酒店1晚+双人无限次温泉+神秘岛乐园•【地中海风5钻度假】",
              money:"实时计价"
            },
            {
              src:"https://dimg04.c-ctrip.com/images/300a13000000tq3kr919A_C_640_320.jpg",
              alt:"长隆横琴湾酒店(珠海海洋王国店)+珠海长隆海洋王国/珠海长隆剧院·龙秀·海洋王国/马戏/自助餐可选双/3/2大1小多套票可选 网红推荐",
              money:"1062"
            },

          ],
          index:6 
        },

      ],
      this.plays = [
        {
          name:"丽江"
        },
        {
          name:"三亚"
        },
        {
          name:"舟山"
        },
        {
          name:"大理市"
        },
        {
          name:"张家界"
        },
        {
          name:"阳朔"
        },
        {
          name:"凤凰"
        },
        {
          name:"黄山"
        },
        {
          name:"香格里拉"
        },
        
      ],
      this.arts = [
        {
          name:"拉萨"
        },
        {
          name:"九寨沟"
        },
        {
          name:"景洪"
        },
        {
          name:"泸沽湖"
        },
        {
          name:"香格里拉"
        },
        {
          name:"北京"
        },
        {
          name:"西安"
        },
        {
          name:"成都"
        },
        {
          name:"敦煌"
        },
      ],
      this.homestaies = [
        {
          title:"丽江",
          contents:[
            {
              src:"https://dimg11.c-ctrip.com/images/hotel/446000/445152/f74cb07b62334178b548ee18f3f5958c_R_300_120.jpg",
              alt:"丽江半溪草堂",
              name:"太研古镇",
              money:"319"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/200r0t000000ifxisBDFE_R_300_120.jpg",
              alt:"丽江古城蓝莎心苑精品客栈",
              name:"太研古镇",
              money:"136"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/200l0f0000007hyzn6844_R_300_120.jpg",
              alt:"丽江若水居客栈(原纳西庭院精品客栈)",
              name:"太研古镇",
              money:"87"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/200b1b000001a6hjeB7BC_R_300_120.jpg",
              alt:"丽江狼穴精品客栈",
              name:"太研古镇",
              money:"169"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/200h0f0000007gvzu05E9_R_300_120.jpg",
              alt:"丽江碧园客栈",
              name:"太研古镇",
              money:"66"
            },
            
          ],
          index:0
        },
        {
          title:"厦门",
          contents:[
            {
              src:"https://dimg11.c-ctrip.com/images/hotel/79000/78863/9eca79074ae24d7f97cc86d51ff39bae_R_300_120.jpg",
              alt:"厦门鼓浪屿林氏府公馆酒店",
              name:"鼓浪屿",
              money:"996"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/200r0k000000b91yxFADD_R_300_120.jpg",
              alt:"伊人海旅馆(厦门鼓浪屿馨缘阁店)",
              name:"鼓浪屿",
              money:"128"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/200q0t000000ipme6B262_R_300_120.jpg",
              alt:"厦门鼓浪屿他城壹悦庭院海景别墅",
              name:"鼓浪屿",
              money:"1360"
            },

          ],
          index:1
        },
        {
          title:"三亚",
          contents:[
            // {
            //   src:"",
            //   alt:"",
            //   name:"",
            //   money:""
            // },

          ],
          index:2
        },
        {
          title:"嘉善",
          contents:[
            {
              src:"https://dimg11.c-ctrip.com/images/2008080000003eyp69D74_R_300_120.jpg",
              alt:"西塘念主题酒店",
              name:"西塘景区内",
              money:"131"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/200f1a000001987dhAC62_R_300_120.jpg",
              alt:"西塘乐幽客栈",
              name:"西塘景区内",
              money:"188"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/200g16000001027628E77_R_300_120.jpg",
              alt:"西塘克拉之恋客栈",
              name:"西塘景区内",
              money:"426"
            },
          ],
          index:3
        },
        {
          title:"大理市",
          contents:[
             {
              src:"https://dimg11.c-ctrip.com/images/20090u000000j6hpmBEFF_R_300_120.jpg",
              alt:"大理北斗星客栈",
              name:"大理古城",
              money:"128"
            },
             {
              src:"https://dimg11.c-ctrip.com/images/200g0m000000dj91278A9_R_300_120.jpg",
              alt:"大理花神隐舍",
              name:"大理古城",
              money:"259"
            },
             {
              src:"https://dimg11.c-ctrip.com/images/200v0u000000jf0c92A7F_R_300_120.jpg",
              alt:"大理日食客栈",
              name:"大理古城",
              money:"248"
            },
             {
              src:"https://dimg11.c-ctrip.com/images/200k0k000000cl0htBC0F_R_300_120.jpg",
              alt:"大理喜庐公馆海景别墅",
              name:"洱海海东风景区",
              money:"468"
            },
          ],
          index:4
        },
        {
          title:"杭州",
          contents:[
            {
              src:"https://dimg11.c-ctrip.com/images/200a10000000posq612DA_R_300_120.jpg",
              alt:"杭州贵居客栈",
              name:"西湖风景区/灵隐度假村",
              money:"184"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/200a10000000posq612DA_R_300_120.jpg",
              alt:"杭州天地生态农庄",
              name:"富阳区",
              money:"480"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/200e160000010il1tE2EB_R_300_120.jpg",
              alt:"杭州也卢民宿",
              name:"宋城/转塘/之江休闲度假村",
              money:"438"
            },
              
          ],
          index:5
        },
        {
          title:"舟山",
          contents:[
            {
              src:"https://dimg11.c-ctrip.com/images/200s0i000000989j7A507_R_300_120.jpg",
              alt:"朱家尖梦想国际青年旅舍",
              name:"朱家尖/蜈蚣峙码头",
              money:"45"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/200q14000000vrs347069_R_300_120.jpg",
              alt:"普陀山鑫梦缘客栈",
              name:"普陀山/普济寺/南海观音",
              money:"209"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/20020i0000009q6sx1E8D_R_300_120.jpg",
              alt:"朱家尖喜林苑客栈",
              name:"朱家尖/蜈蚣峙码头",
              money:"126"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/200v0g0000007n7tr2A3A_R_300_120.jpg",
              alt:"舟山老渔民客栈",
              name:"朱家尖/蜈蚣峙码头",
              money:"159"
            },
            {
              src:"https://dimg11.c-ctrip.com/images/200h0h000000909itE642_R_300_120.jpg",
              alt:"朱家尖顺兴隆渔家客栈",
              name:"朱家尖/蜈蚣峙码头",
              money:"509"
            },
          ],
          index:6
        },
      ]
      this.hotGroups = [
        {
          name:"四/五星酒店"
        },
        {
          name:"北京菜"
        },
        {
          name:"本地/周边游"
        },
        {
          name:"情侣酒店"
        },
        {
          name:"经济型酒店"
        },
        {
          name:"住店游玩"
        },
        {
          name:"如家"
        },
        {
          name:"公园乐园"
        },
      ],
      this.groupSelecteds = [
        {
          name:"北京乡志精品民宿"
        },
        {
          name:"北京稻香湖景酒店"
        },
        {
          name:"美味不可辜负"
        },
        {
          name:"下午茶9.9元起"
        },
      ],
      this.groups = [
        {
          title:"北京",
          contents:[
            {
              src:"https://images4.c-ctrip.com/target/fd/tuangou/g4/M04/5D/DD/CggYHFaYXiOAThX3AAIn6WS4uic806_300_200.jpg",
              alt:"【朝阳区】北京名人国际大酒店",
              name:"已售1278",
              money:"999"
            },
            {
              src:"https://images4.c-ctrip.com/target/2A0t050000000q5taE0C4_300_200.jpg",
              alt:"【海淀区】北京邮电会议中心",
              name:"已售882",
              money:"528"
            },
            {
              src:"https://images4.c-ctrip.com/target/fd/tuangou/g1/M07/0A/23/CghzflV_rwmAft7kAAQSQXX5IK8539_300_200.jpg",
              alt:"【东城区】北京丽亭酒店",
              name:"已售624",
              money:"858"
            },
            {
              src:"https://images4.c-ctrip.com/target/fd/tuangou/g1/M07/0A/23/CghzflV_rwmAft7kAAQSQXX5IK8539_300_200.jpg",
              alt:"【丰台区】速8酒店(北京南沙窝桥302医院店)",
              name:"已售598",
              money:"268"
            },
            {
              src:"https://images4.c-ctrip.com/target/200n050000000gcml2B50_300_200.jpg",
              alt:"【东城区】北京金台夕照酒店",
              name:"已售360",
              money:"1000"
            },
            {
              src:"https://images4.c-ctrip.com/target/2A0w070000002pdaw3F27_300_200.jpg",
              alt:"【密云区】古北水镇大酒店",
              name:"已售317",
              money:"1368"
            },
            
            
          ],
          index:0
        },
        {
          title:"广州",
          contents:[
            {
              src:"https://images4.c-ctrip.com/target/fd/tuangou/g3/M00/87/22/CggYGVa6NQqAe34hAAojjb4-2OY305_300_200.jpg",
              alt:"【天河区】柏高酒店(广州天河北天平架地铁站店",
              name:"已售807",
              money:"388"
            },
            {
              src:"https://images4.c-ctrip.com/target/2A0716000000zqaad873B_300_200.jpg",
              alt:"【天河区】私享家公寓汇峰国际公寓分店",
              name:"已售604",
              money:"593"
            },
            {
              src:"https://images4.c-ctrip.com/target/2A0m0o000000fo2g4E8DA_300_200.jpg",
              alt:"【白云区】广州邦国酒店",
              name:"已售576",
              money:"328"
            },
            {
              src:"https://images4.c-ctrip.com/target/2A0416000000ywuzz0788_300_200.jpg",
              alt:"【白云区】广州机场航空公寓(新白云机场店)",
              name:"已售572",
              money:"128"
            }
          ],
          index:1
        },
        {
          title:"深圳",
          contents:[
            {
              src:"https://images4.c-ctrip.com/target/2A0d0q000000g2n5yED1F_300_200.jpg",
              alt:"【福田区】深圳香樟商务酒店",
              name:"已售1758",
              money:"388"
            },
            {
              src:"https://images4.c-ctrip.com/target/2A0p0m000000deojzF0D5_300_200.jpg",
              alt:"【龙华区】维纳斯酒店(深圳北站店)",
              name:"已售643",
              money:"298"
            },
            {
              src:"https://images4.c-ctrip.com/target/tuangou/761/431/989/733a86c783f44213ad53a6837fc9e064_300_200.jpg",
              alt:"【罗湖区】深圳禧程酒店",
              name:"已售625",
              money:"308"
            },
            {
              src:"https://images4.c-ctrip.com/target/2A0h080000002v8xrA305_300_200.jpg",
              alt:"【宝安区】登喜路酒店(宝安店)",
              name:"已售564",
              money:"279"
            },
            {
              src:"https://images4.c-ctrip.com/target/fd/tuangou/g1/M05/5E/4D/CghzfFUjTNmACUUdAAMCWAEynxQ265_300_200.jpg",
              alt:"【福田区】深港酒店公寓(嘉州富苑店)",
              name:"已售438",
              money:"328"
            },
            {
              src:"https://images4.c-ctrip.com/target/2A0c1a0000018ve2yEA45_300_200.jpg",
              alt:"【南山区】名典商旅酒店(西丽店)",
              name:"已售413",
              money:"322"
            },
          ],
          index:2
        },
        {
          title:"上海",
          contents:[

          ],
          index:3
        },
        {
          title:"成都",
          contents:[

          ],
          index:4
        },
        {
          title:"武汉",
          contents:[

          ],
          index:5
        },
        {
          title:"三亚",
          contents:[

          ],
          index:6
        },

      ]

      
     
    },
    imageTab(imageIndex){
      this.num = imageIndex;
    },
    overseaTitle :function(imageIndex){
      return "overseaTitle"+imageIndex
    },
   
    
  
  },
  mounted() {
    this.loadAll();
  }
};
</script>

<style scoped>
.img_style {
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
  height: 380px;
  /* position: relative; */
  /* background-size: 100%; */
}
.block{
  padding: 0 40px;
}
.content {
  width: 100%;
  /* height: 500px; */
}
/* .pic_logo {
  display: inline-block;
  height: 69px;
  width: 163px;
  margin: 10px 30px;
  line-height: 100px;
  /* max-width: 100%; */
/* } */ 
.block{
    height: 500px;
    background-color:pink;
}
.content_aside{
    width: 220px !important;
    height: 408px;
    border: 1px solid gray;
    text-align: left;
    padding: 15px 25px;
}
.sale_dt{
  color: black;
  font-size: 13px;
  padding-bottom: 5px;
}
.find{
  margin-top: 20px;
}
.find_dd{
  height: 20px;   
  overflow: hidden;
  text-overflow: ellipsis;
  display: block; 
  margin-bottom: 10px ;
  white-space: nowrap;

}
.find_a{
    text-decoration: none !important;
    color: gray;
    font-size: 13px;
}
.find_a:hover{
  color: rgb(18, 120, 204);
}
.el-main{
  padding-top: 0px;
}
.main_ul{
  width: 920px;
  height: 30px;
  padding-left: 0;
    
}
.main_li{
    list-style: none;
    float: left;
    line-height: 30px;
}
.main_button{
    width: 80px;
    height: 20px;
    line-height: 10px;
    padding: 0px;
    margin-right: 20px;
    border: 0;
    border-radius: 0;
    margin-top: 10px;
    color: black;
    
}
.main_button:hover{
    background-color:rgb(18, 120, 204);
    color: white;
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
}
.overseas_pic{
    width: 690px;
    height: 360px;
    float: left;
    background-color:red;
}
.pic_box{
  position: relative;
  width: 230px;
  height: 180px;
  float: left;
}
.pic_item{
    width: 230px;
    height: 180px;
    padding:0 10px 10px 0;
    float: left;
}
.circle{
  position: absolute;
  /* margin: 50px auto;高度50px,居中 */
  width: 112px;/*盒子长*/
  height: 112px;/*盒子宽*/           
  border: 1px solid #999999;/*颜色为灰色的1px宽度的实线边框（显示盒子）*/
  background-color: #333333;/*盒子的背景颜色*/
  opacity: 0.8;/*透明度0为完全透明，1是不透明，*/
  border-radius: 100%;/*设置圆形(4个角的弧度)*/
  top:33px;
  left: 55px;

}
.circle_alt{
  font-size: 18px;
  color: white;
  font-weight: bold;
  margin-bottom: 0;
  margin-top: 15px;
  /* width: 100px; */
  /* overflow: hidden;
  margin-left: auto;
  text-overflow: ellipsis;
  white-space: nowrap; */
}
.cicle_hr{
  color: white;
  font-weight: bold;
  margin: 3px 0;
}
.circle_num{
  font-size: 13px;
  color: white;
  margin-bottom: 0;
}
.circle_money{
  font-size: 25px;
  color: orange;
}
.icon_money{
  margin-bottom: 20px;
}
.main_right{
  position: relative;
  width: 233px;
  height: 360px;
  background-color: white;   
  float: left;
}
.main_right_image{
  width: 250px;
  height: 360px;
  max-width: 100%;
  max-height: 100%;
}
.rectangle{
  position: absolute;
  bottom: 0;
  width: 233px;
  height: 30px;
  border: 1px solid #999999;/*颜色为灰色的1px宽度的实线边框（显示盒子）*/
  background-color: #333333;/*盒子的背景颜色*/
  opacity: 0.5;/*透明度0为完全透明，1是不透明，*/
}
.rectangle_text{
  color: white;
  font-size: 13px;
  line-height: 30px;
}

.oversea{
  width: 1200px;
  height: 400px;
  background-color:white;
}
.oversea_li{
  list-style: none;
}
.oversea_left{
  width: 690px;
  float: left;
  position: absolute;
  top: 60px;
  left: 18px;
}
.oversea_right{
  width: 460px;
  float: left;
  position: absolute;
  right: 15px;
  top: 60px;
}
.oversea_pic{
  width: 220px;
  height: auto;
  float: left;
  margin: 5px 5px;
}
.oversea_title{
  position: absolute;
  color: white;
  width: 112px;/*盒子长*/
  opacity: 1;/*透明度0为完全透明，1是不透明，*/
  height: 50px;/*盒子宽*/ 
  text-align: left; 
  left: 20px;
  top: 15px;
}
.oversea_p{
  width: 250px;
  margin-bottom: 0; 
}
.oversea_box{
  position: relative;
  width: 230px;
  height: 170px;
  float: left;
  padding:0 10px 10px 0;
}
.oversea_circle{
  width: 80px;
  height: 20px;
  border: 1px solid #999999;/*颜色为灰色的1px宽度的实线边框（显示盒子）*/
  background-color: #333333;
  border-radius: 25%;/*设置圆形(4个角的弧度)*/
  opacity: 0.8;/*透明度0为完全透明，1是不透明，*/
  position: absolute;
  left: 20px;
  top:136px
}
.oversea_circle_p{
  color: white;
  font-size: 13px;
}
.oversea_right_box{
  position: relative;
  float: left;
}
.overseaTitle1,.overseaTitle2{
  position: absolute;
  left: 5px;
  top: 135px;
  text-align: center;
  width: 220px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #999999;/*颜色为灰色的1px宽度的实线边框（显示盒子）*/
  background-color: #333333;/*盒子的背景颜色*/
  opacity: 0.8;/*透明度0为完全透明，1是不透明，*/
}

.domestic_pic{
  width: 960px;
  height: 400px;
  padding-left: 10px;
  background-color: red;
}
.domestic_pic_item{
  width: 220px;
  height: 88px;
}
.domestic_box{
  width: 220px !important; 
  height: 160px;
  background-color:white;
  margin: 0 10px 10px 0;
}
.domestic_p{
  position: relative;
  font-size: 12px;
  text-align: left;
  padding: 0 0 0 5px;
  margin-top: 5px;
  margin-bottom: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block; 
  white-space: nowrap;
}
.domestic_span{
  display: block;
  float: right;
}
.domestic_pic_span{
 position: absolute;
 top: 9px;
 color: gray;
}
.black_money{
  width: 15px !important;
  height: 15px !important;
  margin-top: 8px;
  display: block;
  float: right;
}

.scene{
  margin-top:167px;
}
.scene_dd{
  display: block;
  float: left;
} 
.scene_pic_item{
  width: 220px;
  height: 100px;
}
.scene_P{
  margin-top: 0px !important ;
}


.homestay{
  margin-top: 100px;
}

.group_select{
  margin-top: 134px;
}


</style>




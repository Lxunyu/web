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

      <div  class="block">
        <el-tabs v-model="activeName1" >
            <!-- 热门开始 -->
            <el-tab-pane label="热门" name="first1">
                <el-container>
                    <el-main>
                      <div >
                        <ul class="main_ul hot_ul">
                            <li class="main_li"  v-for="(hotImage,hotImageIndex) in hotImages" :key="hotImageIndex">
                                <el-button round size="mini" :class="{active:(hotImageIndex==num1)}" @click="hotImageTab(hotImageIndex)" class="main_button" >{{hotImage.title}}</el-button>
                            </li>
                            <a class="main_a" href="javascript:void(0);">更多海外酒店></a>
                        </ul>
                          <div class="hot_pic">
                            <div  v-for="(hotImage,hotImageIndex) in hotImages" :key="hotImageIndex">
                              <div class="hot_pic_box" :title='pic.alt' v-for="(pic,picIndex) in hotImage.contents" :key="picIndex" v-show="hotImage.index==num1" @mouseover="mouserover(picIndex)" @mouseleave="mouseleave(picIndex)">
                                <a href="javascript:void(0);">
                                  <div :class="{'blur':isblur&&picIndex==current}">
                                    <el-image  class="hot_pic_item" :src="pic.src" :alt="hotImage.alt"></el-image>
                                    <div class="hot_pic_icon">
                                      <p class="hot_pic_p">月销{{pic.number}}笔</p>
                                    </div>
                                    <div class="circle">
                                      <p class="circle_alt">{{pic.alt}}</p>
                                      <hr class="cicle_hr">
                                      <p class="circle_num"><svg-icon class="hot_icon_money" name="money"></svg-icon><span class="circle_money">{{pic.money}}</span>/人起</p>
                                    </div>
                                    <div class="blur"></div>
                                  </div>
                                    <div class="background" v-show="bg&&picIndex==current">
                                      <p class="background_title">{{pic.alt}}</p>
                                      <p class="background_content"><svg-icon class="bg_icon" name="scene"></svg-icon>{{pic.scene}}</p>
                                      <p class="background_content"><svg-icon class="bg_icon" name="food"></svg-icon>{{pic.food}}</p>
                                      <p class="background_content background_product">{{pic.product}}</p>
                                    </div>
                                </a>
                              </div>
                            </div>
                           </div>
                          <a href="#">
                            <div class="main_right">
                              <el-image class="main_right_image" src="https://dimg04.c-ctrip.com/images/zg0i1d000001e7tc3205C.jpg"></el-image>
                            </div>
                           </a>  
                        
                      </div>
                       
                    </el-main>
                </el-container>
            </el-tab-pane>
            <!-- 热门结束 -->
            <!-- 周边游开始 -->
            <el-tab-pane label="周边游" name="secend1" @click="spanIcon">
              <el-container>
                 <el-aside class="content_aside">
                  <div>
                    <pre><dt class="sale_dt">游山玩水</dt>
                    <dd class="scene_dd"  v-for="(play,playIndex) in plays" :key="playIndex"><a href="#" class="find_a">{{play.name}}</a><span :class="{'aside_icon':isAside_icon}">|</span></dd>
                  </pre>
                  </div>
                  <div class="homestay">
                    <dt  class="sale_dt">民俗艺术</dt>
                    <dd class="scene_dd" v-for="(art,artIndex) in arts" :key="artIndex"><a class="find_a" href="#">{{art.name}}</a><span class="aside_icon">|</span></dd> 
                  </div>
                </el-aside>
                <el-main>
                  <ul class="main_ul">
                    <li class="main_li" v-for="(periphery,peripheryIndex) in peripherys" :key="peripheryIndex">
                        <el-button  round size="mini" class="main_button" :class="{active:(peripheryIndex==num)}" @click="imageTab(peripheryIndex)">{{periphery.title}}</el-button>
                    </li>
                    <a class="main_a" href="javascript:void(0);">更多客栈></a>
                  </ul>
                  <div class="periphery_pic">
                    <div v-for="(periphery,peripheryIndex) in peripherys" :key="peripheryIndex">
                      <div class="hot_pic_box domestic_box" :title="pic.alt" v-for="(pic,picIndex) in periphery.contents" :key="picIndex" v-show="periphery.index==num">
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
              </el-container>
            </el-tab-pane>
            <!-- 周边游结束 -->
            <!-- 门票开始 -->
            <!-- <el-tab-pane label="门票" name="third1">
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
                        <el-button round="false" size="mini" class="main_button" :class="{active:(buttonIndex==num)}" @click="imageTab(buttonIndex)">{{button.title}}</el-button>
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
            </el-tab-pane> -->
            <!-- 门票结束 -->
            <!-- 出境游开始 -->
            <!-- <el-tab-pane label="出境游" name="fourth1">
              <el-container>
                 <el-aside class="content_aside">
                  <div>
                    <dt class="sale_dt">热门主题</dt>
                    <dd class="scene_dd" v-for="(hotTheme,hotThemeIndex) in hotThemes" :key="hotThemeIndex"><a href="#" class="find_a">{{hotTheme.name}}</a><span class="aside_icon">|</span></dd>
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
                        <el-button round="false" size="mini" class="main_button" :class="{active:(buttonIndex==num)}" @click="imageTab(sceneIndex)">{{scene.title}}</el-button>
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
            </el-tab-pane> -->
            <!-- 出境游结束 -->
            <!-- 境内游开始 -->
            <!-- <el-tab-pane label="境内游" name="fifth1">
              <el-container>
                 <el-aside class="content_aside">
                  <div>
                    <dt class="sale_dt">游山玩水</dt>
                    <dd class="scene_dd" v-for="(play,playIndex) in plays" :key="playIndex"><a href="#" class="find_a">{{play.name}}</a><span class="aside_icon">|</span></dd>
                  </div>
                  <div class="homestay">
                    <dt  class="sale_dt">民俗艺术</dt>
                    <dd class="scene_dd" v-for="(art,artIndex) in arts" :key="artIndex"><a class="find_a" href="#">{{art.name}}</a><span class="aside_icon">|</span></dd> 
                  </div>
                </el-aside>
                <el-main>
                  <ul class="main_ul">
                    <li class="main_li"  v-for="(homestay,homestayIndex) in homestaies" :key="homestayIndex">
                        <el-button  round="false" size="mini" class="main_button" :class="{active:(homestayIndex==num)}" @click="imageTab(homestayIndex)">{{homestay.title}}</el-button>
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
            </el-tab-pane> -->
            <!-- 境内游结束 -->
            <!-- 邮轮开始 -->
            <!-- <el-tab-pane label="邮轮" name="six1">
              <el-container>
                 <el-aside class="content_aside">
                  <div>
                    <dt class="sale_dt">热门团购</dt>
                    <dd class="scene_dd" v-for="(hotGroup,hotGroupIndex) in hotGroups" :key="hotGroupIndex"><a href="#" class="find_a">{{hotGroup.name}}</a><span class="aside_icon">|</span></dd>
                  </div>
                  <div class="group_select">
                    <dt  class="sale_dt">团购精选</dt>
                    <dd class="sale_dd" v-for="(groupSelected,groupSelectedIndex) in groupSelecteds" :key="groupSelectedIndex"><a class="find_a" href="#">{{groupSelected.name}}</a></dd> 
                  </div>
                </el-aside>
                <el-main>
                  <ul class="main_ul">
                    <li class="main_li" v-for="(group,groupIndex) in groups" :key="groupIndex">
                        <el-button round="false" size="mini" class="main_button" :class="{active:(groupIndex==num)}" @click="imageTab(groupIndex)">{{group.title}}</el-button>
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
            </el-tab-pane> -->
            <!-- 邮轮结束 -->

        </el-tabs>
      </div>

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
                                <el-button round size="mini" :class="{active:(imageIndex==num)}" @click="imageTab(imageIndex)" class="main_button" >{{image.title}}</el-button>
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
                        <el-button round size="mini" class="main_button" :class="{active:(buttonIndex==num)}" @click="imageTab(buttonIndex)">{{button.title}}</el-button>
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
                    <dd class="scene_dd" v-for="(hotTheme,hotThemeIndex) in hotThemes" :key="hotThemeIndex"><a href="#" class="find_a">{{hotTheme.name}}</a><span class="aside_icon">|</span></dd>
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
                        <el-button round size="mini" class="main_button" :class="{active:(buttonIndex==num)}" @click="imageTab(sceneIndex)">{{scene.title}}</el-button>
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
                    <dd class="scene_dd" v-for="(play,playIndex) in plays" :key="playIndex"><a href="#" class="find_a">{{play.name}}</a><span class="aside_icon">|</span></dd>
                  </div>
                  <div class="homestay">
                    <dt  class="sale_dt">民俗艺术</dt>
                    <dd class="scene_dd" v-for="(art,artIndex) in arts" :key="artIndex"><a class="find_a" href="#">{{art.name}}</a><span class="aside_icon">|</span></dd> 
                  </div>
                </el-aside>
                <el-main>
                  <ul class="main_ul">
                    <li class="main_li"  v-for="(homestay,homestayIndex) in homestaies" :key="homestayIndex">
                        <el-button  round size="mini" class="main_button" :class="{active:(homestayIndex==num)}" @click="imageTab(homestayIndex)">{{homestay.title}}</el-button>
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
            <!-- 客栈民宿结束 -->
            <!-- 团购开始 -->
            <el-tab-pane label="团购" name="six">
              <el-container>
                 <el-aside class="content_aside">
                  <div>
                    <dt class="sale_dt">热门团购</dt>
                    <dd class="scene_dd" v-for="(hotGroup,hotGroupIndex) in hotGroups" :key="hotGroupIndex"><a href="#" class="find_a">{{hotGroup.name}}</a><span class="aside_icon">|</span></dd>
                  </div>
                  <div class="group_select">
                    <dt  class="sale_dt">团购精选</dt>
                    <dd class="sale_dd" v-for="(groupSelected,groupSelectedIndex) in groupSelecteds" :key="groupSelectedIndex"><a class="find_a" href="#">{{groupSelected.name}}</a></dd> 
                  </div>
                </el-aside>
                <el-main>
                  <ul class="main_ul">
                    <li class="main_li" v-for="(group,groupIndex) in groups" :key="groupIndex">
                        <el-button round size="mini" class="main_button" :class="{active:(groupIndex==num)}" @click="imageTab(groupIndex)">{{group.title}}</el-button>
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
      activeName1:"first1",
      hotImages:[],
      num1:0, 
      bg:false,
      current:0,
      isblur:false,
      round:false,
      peripherys:[],
      isAside_icon:true,
      // text:"",

      pics: [],
      activeName: 'first',
      active:"",
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
      this.hotImages = [
         {
          title:"精选",
          contents:[
            {
              src:"https://dimg07.c-ctrip.com/images/100e0h0000008rp39A12F_C_221_166.jpg",
              alt:"上海",
              money:"1086",
              number:"1700",
              scene:"景点:顾村公园、世纪公园、上海迪士尼度假区、滴水湖、上海辰山植物园、上海野生动物园、上海海昌海洋公园、外滩、佘山国家森林公园、东方明珠",
              food:"美食:锅贴、蟹宴、酱鸭、腌笃鲜、上海熏鱼、草头圈子、八宝辣酱、炸猪排、咸浆、清蒸白丝鱼、鲜肉月饼、清水大闸蟹、红烧扎肉、葱油饼、油墩子、本帮红烧肉、油爆河虾、熏拉丝、葱油拌面、糖醋小排、香糯糖藕、小馄饨、椒盐排条、螺丝菜、排骨年糕、上海小笼包、白斩鸡、酱爆猪肝、菜肉馄饨、蟹壳黄、上海汤面、大闸蟹、四喜烤麸、毛蟹炒年糕、白切羊肉、上海生煎包、炒鳝糊、酒酿圆子、青团、盐水虾",
              product:"立即查看3000条产品>"
          },
            {
              src:"https://dimg08.c-ctrip.com/images/100k10000000p4vo315BD_C_221_166.jpg",
              alt:"成都",
              money:"500",
              number:"1200",
              scene:"景点:成都大熊猫繁育研究基地、漫花庄园、成都欢乐谷、石象湖、天府花溪谷、花舞人间、都江堰景区、成都天台山、青城后山、春熙路",
              food:"美食:豆花、汤圆、怪味面、钵钵鸡、冒菜、鸡丝凉面、藤椒鱼、口水鸡、川北凉粉、蛋烘糕、麻婆豆腐、回锅肉、水煮牛肉、火锅、抄手、干锅、青城泡菜、麻辣兔丁、都江堰夜啤酒、毛血旺、钟水饺、兔头、锅盔、锅巴肉片、鱼香肉丝、甜水面、冷锅鱼、宫保鸡丁、担担面、烧白、肥肠粉、夫妻肺片、蒜泥白肉、三合泥、青城老腊肉、三大炮、叶儿耙、串串香、樟茶鸭、蹄花汤",
              product:"立即查看3000条产品>"
            },
            {
              src:"https://dimg06.c-ctrip.com/images/100c180000014rkpq4C68_C_221_166.jpg",
              alt:"广州",
              money:"1000",
              number:"2700",
              scene:"景点:长隆旅游度假区、长隆野生动物世界、石门国家森林公园、从化温泉、增城金叶子温泉、长隆欢乐世界、百万葵园、从化碧泉空中温泉、从化碧水湾温泉、广州塔",
              food:"美食:白切鸡、猪肚煲鸡、濑粉、煲仔饭、粤式肠粉、粤式打边炉、粤式早茶、糯米鸡、糖水、叉烧包、牛三星、白云猪手、萝卜牛杂、艇仔粥、凤爪、云吞面、双皮奶、状元及第粥、烧味、冬瓜盅、干炒牛河、啫啫煲、广州靓汤、叉烧",
              product:"立即查看2413条产品>"
            },
            {
              src:"https://dimg01.c-ctrip.com/images/fd/tg/g3/M01/06/7D/CggYG1aONeKAPC1IAB6njDjLgiA931_C_221_166.jpg",
              alt:"东京",
              money:"2056",
              number:"1",
              scene:"景点:秋叶原、东京迪士尼乐园、银座、涩谷、原宿、东京晴空塔、新宿、三鹰之森吉卜力美术馆、隅田川花火大会、东京迪士尼海洋",
              food:"美食:日式甜点、寿司、天妇罗、生鱼片、鳗鱼饭、拉面、烤串",
              product:"立即查看2189条产品>"
            },
            {
              src:"https://dimg01.c-ctrip.com/images/100810000000perhu90FB_C_221_166.jpg",
              alt:"普吉岛",
              money:"1404",
              number:"5",
              scene:"景点:皇帝岛、珊瑚岛、芭东海滩、西蒙人妖秀、芭东夜市、苏林群岛、普吉射击场、邦古拉街、卡伦海滩、拉崴海滩",
              food:"美食:泰式椰汁鸡汤、椒盐濑尿虾、泰式菠萝炒饭、泰式炒河粉、绿咖喱鸡、冬阴功汤、咖喱蟹、泰式汤米粉、青木瓜沙拉、泰式空心菜",
              product:"立即查看1086条产品>"
            },
            {
              src:"https://dimg05.c-ctrip.com/images/10050a0000004xyzo1CB3_C_221_166.jpg",
              alt:"俄罗斯",
              money:"3999",
              number:"0",
              scene:"景点:贝加尔湖火车环线、红场、克里姆林宫、莫斯科大学、莫斯科市、玻璃海滩、海参崴俄罗斯岛跨海大桥、叶卡捷琳堡滴血大教堂、旋转木马滑雪场、阿洪山",
              food:"美食:莫斯科卡瓦斯、索契鱼子酱、索契红菜汤、莫斯科烤鱼、冷酸鱼、索契黑面包、莫斯科列巴、格瓦斯、莫斯科鱼子酱、基辅式黄油鸡卷、索契鲱鱼",
              product:"立即查看421条产品>"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/fd/tg/g4/M02/ED/32/CggYHlXaie2AVx7gABz7Ffe6gtM354_C_221_166.jpg",
              alt:"美国",
              money:"7699",
              number:"1",
              scene:"景点:夏威夷岛、华特迪士尼世界、好莱坞环球影城、加州迪士尼乐园、斯台普斯中心、大学城、奥兰多环球影城、中央公园、环球影城冒险岛、彩虹瀑布",
              food:"美食:Poke、蛤蜊奶油浓汤、牛排、早午餐、生蚝、奶油蛤蜊浓汤、无国界料理、热烤饼、汉堡、华夫饼、捞捞菜、纽约芝士蛋糕、三明治、冰淇淋、芝士蛋糕、美式咖啡、美式披萨、布法罗辣鸡翅、波士顿鳕鱼、加利福尼亚汉堡、查莫洛餐、椰子蟹、爱尔兰咖啡、Plate Lunch、海鲜烧烤、邓杰内斯蟹、夏威夷细面、鸡尾酒虾、墨西哥玉米饼、甜甜圈、波士顿龙虾、披萨、热狗、旧金山老面包、咖啡、加州卷饼、日本料理、菲力牛排、Haupia、贝果（百吉饼）、珍宝蟹、巴西野莓水果杯、冻奥查塔、Shave Ice、pancake、波士顿奶油卷、新英格兰蛤肉浓汤、龙虾、墨西哥卷饼、海鲜奶油饭",
              product:"立即查看3000条产品>"
            },
            {
              src:"https://dimg05.c-ctrip.com/images/100u0n000000e0fpmBF3A_C_221_166.jpg",
              alt:"迪拜",
              money:"3099",
              number:"2",
              scene:"景点:帆船酒店、哈利法塔（迪拜塔）、迪拜河、迪拜高空跳伞体验、迪拜深海钓鱼、迪拜失落的空间水族馆、迪拜棕榈岛亚特兰蒂斯酒店、迪拜世界贸易中心、迪拜乐园之乐高乐园、迪拜游艇观光",
              food:"美食:阿拉伯沙律、小拼盘、阿拉伯披萨、阿拉伯大饼、阿拉伯甜点、阿拉伯烧烤",
              product:"立即查看1302条产品>"
            },
          ],  
          index:0
         },
         {
           title:"境内",
           contents:[
            {
              src:"https://dimg07.c-ctrip.com/images/100e0h0000008rp39A12F_C_221_166.jpg",
              alt:"上海",
              money:"1086",
              number:"1700",
              scene:"景点:顾村公园、世纪公园、上海迪士尼度假区、滴水湖、上海辰山植物园、上海野生动物园、上海海昌海洋公园、外滩、佘山国家森林公园、东方明珠",
              food:"美食:锅贴、蟹宴、酱鸭、腌笃鲜、上海熏鱼、草头圈子、八宝辣酱、炸猪排、咸浆、清蒸白丝鱼、鲜肉月饼、清水大闸蟹、红烧扎肉、葱油饼、油墩子、本帮红烧肉、油爆河虾、熏拉丝、葱油拌面、糖醋小排、香糯糖藕、小馄饨、椒盐排条、螺丝菜、排骨年糕、上海小笼包、白斩鸡、酱爆猪肝、菜肉馄饨、蟹壳黄、上海汤面、大闸蟹、四喜烤麸、毛蟹炒年糕、白切羊肉、上海生煎包、炒鳝糊、酒酿圆子、青团、盐水虾",
              product:"立即查看3000条产品>"
            },
            {
              src:"https://dimg08.c-ctrip.com/images/100k10000000p4vo315BD_C_221_166.jpg",
              alt:"成都",
              money:"500",
              number:"1600",
              scene:"景点:成都大熊猫繁育研究基地、漫花庄园、成都欢乐谷、石象湖、天府花溪谷、花舞人间、都江堰景区、成都天台山、青城后山、春熙路",
              food:"美食:豆花、汤圆、怪味面、钵钵鸡、冒菜、鸡丝凉面、藤椒鱼、口水鸡、川北凉粉、蛋烘糕、麻婆豆腐、回锅肉、水煮牛肉、火锅、抄手、干锅、青城泡菜、麻辣兔丁、都江堰夜啤酒、毛血旺、钟水饺、兔头、锅盔、锅巴肉片、鱼香肉丝、甜水面、冷锅鱼、宫保鸡丁、担担面、烧白、肥肠粉、夫妻肺片、蒜泥白肉、三合泥、青城老腊肉、三大炮、叶儿耙、串串香、樟茶鸭、蹄花汤",
              product:"立即查看3000条产品>"
            },
            {
              src:"https://dimg06.c-ctrip.com/images/100c180000014rkpq4C68_C_221_166.jpg",
              alt:"广州",
              money:"107",
              number:"3400",
              scene:"景点:长隆旅游度假区、长隆野生动物世界、石门国家森林公园、从化温泉、增城金叶子温泉、长隆欢乐世界、百万葵园、从化碧泉空中温泉、从化碧水湾温泉、广州塔",
              food:"美食:白切鸡、猪肚煲鸡、濑粉、煲仔饭、粤式肠粉、粤式打边炉、粤式早茶、糯米鸡、糖水、叉烧包、牛三星、白云猪手、萝卜牛杂、艇仔粥、凤爪、云吞面、双皮奶、状元及第粥、烧味、冬瓜盅、干炒牛河、啫啫煲、广州靓汤、叉烧",
              product:"立即查看2413条产品>"
            },
            {
              src:"https://dimg07.c-ctrip.com/images/100h180000013qm0m8FCA_C_221_166.jpg",
              alt:"杭州",
              money:"1084",
              number:"1900",
              scene:"景点:西湖、湘湖、西溪国家湿地公园、灵隐寺、宋城千古情演出、杭州野生动物世界、杭州动物园、千岛湖景区、杭州开元森泊度假乐园、浙西大峡谷",
              food:"美食:笋干老鸭煲、西湖莼菜汤、五花肉炒鲜笋、农家豆腐煲、猫耳朵、石斑鱼、农家土鸡煲、油焖春笋、西湖醋鱼、杭三鲜、山笋、杭州熏鱼、鱼头汤、杭州小笼包、糖醋里脊、宋嫂鱼羹、龙井虾仁、昌西豆腐干、千岛湖鱼圆、叫化童子鸡、东坡肉、葱包桧、银鱼羹、乾隆鱼头、片儿川面、吴山烤鸡、干炸响铃、千岛湖鱼头、河虾、野笋干炖鱼、杭州酱鸭、虾爆鳝面、定胜糕、清蒸石蛙、腌黄瓜、青顶茶香熏野兔、千岛玉鳖",
              product:"立即查看3000条产品>"
            },
            {
              src:"https://dimg07.c-ctrip.com/images/100711000000r9tfbEF7C_C_221_166.jpg",
              alt:"三亚",
              money:"197",
              number:"900",
              scene:"景点:三亚亚特兰蒂斯水世界、亚龙湾、三亚亚特兰蒂斯度假区、蜈支洲岛、三亚湾、南山寺、海棠湾、亚龙湾热带天堂森林公园、天涯海角、大东海",
              food:"美食:冬瓜海螺汤、和乐蟹、清补凉、椰子饭、抱罗粉、海鲜、文昌鸡、革命菜、四角豆、水果炒冰、竹筒饭、加积鸭、东山羊、椰子鸡、地瓜叶",
              product:"立即查看2262条产品>"
            },
            {
              src:"https://dimg01.c-ctrip.com/images/100l0g000000884py6BDE_C_221_166.jpg",
              alt:"黄山",
              money:"636",
              number:"1500",
              scene:"景点:太平湖、黄山温泉、宏村景区、屯溪老街、塔川、徽州古城、西海大峡谷、呈坎、齐云山、新安江山水画廊",
              food:"美食:黄山烧饼、屯溪醉蟹、一品锅、黄山双石、两香问政山笋、臭鳜鱼",
              product:"立即查看831条产品>"
            },
            {
              src:"https://dimg05.c-ctrip.com/images/100f180000013p2c086E4_C_221_166.jpg",
              alt:"重庆",
              money:"2205",
              number:"1200",
              scene:"景点:金佛山、仙女山国家森林公园、酉阳桃花源、武隆天坑地缝国家地质公园、丰都鬼城、云阳龙缸国家地质公园、梦幻奥陶纪景区、四面山、乐和乐都主题乐园、大足石刻",
              food:"美食:辣子鸡、毛血旺、豆花、豌豆炸酱面、烤鱼、辣子肥肠、尖椒鸡、重庆酸辣粉、小面、鸡杂、口水鸡、重庆火锅、山城小汤圆、蒜泥白肉、回锅肉、棒棒鸡、水煮鱼、芋儿鸡、磁器口麻花、抄手、串串香、泉水鸡",
              product:"立即查看2819条产品>"
            },
            {
              src:"https://dimg02.c-ctrip.com/images/100a0g0000007t2nt097B_C_221_166.jpg",
              alt:"苏州",
              money:"1086",
              number:"1000",
              scene:"景点:西山、同里古镇、金鸡湖、华谊兄弟电影世界、苏州太湖国家湿地公园、拙政园、天平山、沙家浜风景区、苏州上方山国家森林公园、大阳山国家森林公园",
              food:"美食:万三家宴、臭豆腐、甫里鸭、枫镇大面、白汤卤鸭面、响油鳝糊、阿婆菜、蜜汁火方、糖粥、焖肉面、青团子、蟹粉豆腐（阳澄湖）、枣泥拉糕、莼菜银鱼羹、王四桂花酒、酱爆螺蛳、清蒸白鱼、阳澄湖白水鱼、樱桃肉、幢锅油鸡、海棠糕、松树蕈油面、蟹壳黄、桂花栗子羹、甫里蹄、出骨刀鱼球、红汤面、赤豆圆子、苏式蜜饯、万三蹄、南瓜糕、河豚鱼、鲃肺汤、藏书羊肉、清蒸白丝鱼、鸭血糯、蟹粉豆腐、阳澄湖大闸蟹、爆鱼面、三味汤圆、虾糟、桂花鸡头米、苏式鲜肉月饼、小馄饨、鸡爪、太湖三白、奥灶面、松鼠桂鱼、鲃鱼、生煎、清炒虾仁、酒酿饼、银鱼炒蛋、蚬江三珍、莼菜汤、碧螺虾仁、常熟叫花鸡、盘香饼、青团",
              product:"立即查看3000条产品>"
            },
           ],
           index:1
         },
         {
           title:"日本",
           contents:[
             {
               src:"https://dimg01.c-ctrip.com/images/fd/tg/g3/M01/06/7D/CggYG1aONeKAPC1IAB6njDjLgiA931_C_221_166.jpg",
               alt:"东京",
               money:"2064",
               number:"1",
               scene:"景点:秋叶原、东京迪士尼乐园、银座、涩谷、原宿、新宿歌舞伎町、东京晴空塔、东京塔、东京迪士尼海洋、新宿",
               food:"美食:日式甜点、寿司、天妇罗、生鱼片、鳗鱼饭、拉面、烤串",
               product:"立即查看2164条产品>"
             },
             {
               src:"https://dimg06.c-ctrip.com/images/100k0p000000g44t4BECD_C_221_166.jpg",
               alt:"大阪",
               money:"3219",
               number:"0",
               scene:"景点:日本环球影城、哈利波特魔法世界、心斋桥、新世界、大阪城、大阪海游馆、大阪温泉大世界、梅田、圣玛利亚号帆船巡游、奈良富士和服（奈良公园店）",
               food:"美食:炸串、大阪烧、寿司、和牛、日式拉面、鳗鱼饭、油炸豆腐乌冬面、 蟹料理、河豚料理、章鱼烧",
               product:"立即查看2148条产品>"
             },
             {
               src:"https://dimg05.c-ctrip.com/images/100t11000000r5onuA36D_C_221_166.jpg",
               alt:"北海道",
               money:"4353",
               number:"0",
               scene:"景点:札幌国际滑雪场、登别温泉镇、水之教堂、二见公园、美瑛、二世古冰雪乐园-粉雪天堂、知床五湖、比罗夫滑雪场、四姐妹居酒屋、和之里 丰平峡温泉",
               food:"美食:味噌拉面、油炸半鸡、盐味拉面、北海道甜点、成吉思汗烤肉、汤咖喱、海鲜盖饭、北海道寿司、 蟹料理、石狩锅、烩炒面",
               product:"立即查看856条产品>"
             },
             {
               src:"https://dimg01.c-ctrip.com/images/100b08000000360497DB3_C_221_166.jpg",
               alt:"冲绳",
               money:"828",
               number:"0",
               scene:"景点:冲绳儿童王国、东南植物乐园、チャペル希望、冲绳市政厅观景台、Chanpuru生鲜市场",
               food:"美食:冲绳荞麦面、石垣牛肉、海葡萄、苦瓜、海鲜、冲绳红烧肉",
               product:"立即查看384条产品>"
             },
             {
               src:"https://dimg08.c-ctrip.com/images/100c0z000000nt6ja25B8_C_221_166.jpg",
               alt:"名古屋",
               money:"2195",
               number:"0",
               scene:"景点:日本乐高乐园、东山动植物园、名古屋港水族馆、鹤舞公园、热田神宫、丰田博物馆、绿洲21、建中寺、名古屋巨蛋、名古屋电视塔",
               food:"美食:碁子面、味噌炸猪排、味噌乌冬面、鳗鱼饭、干炸鸡翅膀、名古屋宽面",
               product:"立即查看554条产品>"
             },
             {
               src:"https://dimg02.c-ctrip.com/images/100h060000001ylh77134_C_221_166.jpg",
               alt:"京都",
               money:"3537",
               number:"0",
               scene:"景点:岚山、清水寺、伏见稻荷大社、金阁寺、花见和服体验店、安井金比罗宫、梦京都和服体验、冈本织物店和服体验、银阁寺、三千院",
               food:"美食: 日式点心、川床料理、荞麦面、 怀石料理、豆腐料理",
               product:"立即查看2004条产品>"
             },
             {
               src:"https://dimg05.c-ctrip.com/images/fd/tg/g1/M01/C7/DF/CghzflWwtjCAIc_oAEaea8YcAfE733_C_221_166.jpg",
               alt:"奈良",
               money:"4076",
               number:"0",
               scene:"景点:奈良町、春日大社、奈良公园、东大寺、吉水神社、兴福寺、药师寺、新药师寺、朱雀门、入江泰吉纪念奈良市写真美术馆",
               food:"美食:柿叶寿司、三轮素面、奈良釜饭、葛粉料理、茶粥、 怀石料理",
               product:"立即查看1655条产品>"
             },
             {
               src:"https://dimg07.c-ctrip.com/images/10040x000000ld3wx40AB_C_221_166.jpg",
               alt:"福冈",
               money:"1217",
               number:"0",
               scene:"景点:相岛、福冈面包超人儿童博物馆、福冈塔、博多车站、大濠公园、朝日啤酒厂、博多港塔、水镜天满宫、福冈市市民防灾中心、西日本大濠花火大会",
               food:"美食:寿司、牛杂火锅、日式拉面、鸡肉水炊锅、博多饺子",
               product:"立即查看235条产品>"
             }
           ],
           index:2
         },
         {
           title:"东南亚",
           contents:[
             {
               src:"https://dimg01.c-ctrip.com/images/100810000000perhu90FB_C_221_166.jpg",
               alt:"普吉岛",
               money:"1406",
               number:"1",
               scene:"景点:珊瑚岛、芭东海滩、皇帝岛、西蒙人妖秀、蜜月岛、芭东夜市、卡伦海滩、拉崴海滩、苏林群岛、普吉射击场",
               food:"美食:泰式椰汁鸡汤、椒盐濑尿虾、泰式菠萝炒饭、泰式炒河粉、绿咖喱鸡、冬阴功汤、咖喱蟹、泰式汤米粉、青木瓜沙拉、泰式空心菜",
               product:"立即查看1055条产品>"
             },
             {
               src:"https://dimg08.c-ctrip.com/images/fd/tg/g1/M06/CA/CE/CghzflWw392Aeqq0ABjXMP41wIk420_C_221_166.jpg",
               alt:"泰国",
               money:"1620",
               number:"4",
               scene:"景点:草莓园、斯米兰群岛、大峡谷、芭提雅海滩、红岛、金三角、翡翠湾、珊瑚岛、大佛寺、甲米天堂岛",
               food:"美食:泰式炒面、泰式椰汁鸡汤、椒盐濑尿虾、泰北烤鱼、咖喱蟹、绿咖喱椰汁鸡、马散麻咖喱鸡、泰南咖喱鱼、烤椰塔、泰式咖喱炒蟹、柠檬蒸鲈鱼、咖喱鸡面、泰式炒饭、青木瓜色拉、泰式炒河粉、椰汁鸡汤、海鲜烧烤、菠萝炒饭、青木瓜沙拉、咖喱螃蟹、泰式菠萝炒饭、水果飞饼、椰子冰淇淋、泰式炒稞条、炸椰子丸和枣椰丸、绿咖喱鸡、泰式咖喱蟹、泰式汤米粉、泰式酸辣汤、海鲜、芒果糯米饭、咖啡、泰式青木瓜沙拉、炸猪皮、甲米烤鸡腿、冬阴功汤、青木瓜沙律、龙虾、泰式空心菜",
               product:"立即查看3000条产品>"
             },
             {
               src:"https://dimg03.c-ctrip.com/images/fd/tg/g1/M02/79/29/CghzfVWwp1SAD5gHACTpIEDO0sk435_C_221_166.jpg",
               alt:"巴厘岛",
               money:"3499",
               number:"0",
               scene:"景点:恶魔的眼泪、金巴兰海滩、天空之门、巴厘岛大秋千、海龟岛、南湾、巴厘岛宝格丽度假村、乌布村庙、佩妮达岛、阿雅娜水疗温泉中心",
               food:"美食:脏鸭餐、烤猪饭、什锦饭、海鲜、印尼炒饭、沙爹、芭蕉叶熏鸭",
               product:"立即查看1607条产品>"
             },
             {
               src:"https://dimg02.c-ctrip.com/images/10010s000000hwbcj4F64_C_221_166.jpg",
               alt:"曼谷",
               money:"1620",
               number:"4",
               scene:"景点:大皇宫、唐人街、四面佛、火车夜市、曼谷大学、曼谷塔、曼谷暹罗海洋世界、鬼屋宅邸、泰拳现场-传奇生活、拉差达火车夜市",
               food:"美食:柠檬蒸鲈鱼、椰子冰淇淋、泰式炒河粉、冬阴功汤、绿咖喱鸡、咖喱蟹、芒果糯米饭、青木瓜沙拉",
               product:"立即查看1536条产品>"
             },
             {
               src:"https://dimg02.c-ctrip.com/images/fd/tg/g4/M05/B2/24/CggYHFZ4wWiAKCnuADUUoCnU8w4935_C_221_166.jpg",
               alt:"新加坡",
               money:"2599",
               number:"0",
               scene:"景点:新加坡环球影城、滨海湾金沙酒店无边泳池、火焰山、圣淘沙名胜世界、新加坡滨海湾花园、水上探险乐园、圣淘沙天际线斜坡滑车、夜间野生动物园、芽笼士乃、新加坡动物园",
               food:"美食:叻沙、海南鸡饭、咖喱鱼头、炒粿条、辣椒螃蟹、肉骨茶、沙爹、咖椰吐司",
               product:"立即查看1472条产品>"
             },
             {
               src:"https://dimg03.c-ctrip.com/images/100s0y000000mc3qf0838_C_221_166.jpg",
               alt:"芽庄",
               money:"404",
               number:"0",
               scene:"景点:珍珠岛、芽庄珍珠岛游乐园、猴岛、芽庄海滩、芽庄四岛游、黑岛潜水体验、耶尔辛博物馆、叠山岛、I-Resort热矿泥浴、芽庄木偶戏剧院",
               food:"美食:滴漏咖啡、越式春卷、烤龙虾、越南河粉、海鲜",
               product:"立即查看572条产品>"
             },
             {
               src:"https://dimg05.c-ctrip.com/images/fd/tg/g2/M04/AD/8B/CghzgFWaRo2ALZqhAAkbJZ7URq8920_C_221_166.jpg",
               alt:"越南",
               money:"1900",
               number:"0",
               scene:"景点:珍珠岛、芽庄珍珠岛游乐园、涂山风景区、猴岛、芽庄海滩、芽庄四岛游、西贡夜市、天后宫、情人谷、海防市",
               food:"美食:滴漏咖啡、古法烤鱼、越式春卷、甘蔗虾、越式螃蟹、水果奶昔、烤龙虾、越南河粉、海鲜",
               product:"立即查看1010条产品>"
             },
             {
               src:"https://dimg05.c-ctrip.com/images/100j0n000000e3g497155_C_221_166.jpg",
               alt:"苏梅岛",
               money:"3268",
               number:"0",
               scene:"景点:涛岛、苏梅岛悦榕庄水疗中心、南园岛、苏梅沙发里乐园、拉迈夜市、拉迈观景点、安通国家海洋公园、湄南海滩、苏梅岛六善水疗、查汶海滩",
               food:"美食:泰式炒面、泰式炒稞条、冬阴功汤、炸椰子丸和枣椰丸、泰式咖喱蟹、椰汁鸡汤、海鲜烧烤、马散麻咖喱鸡、烤椰塔、泰式青木瓜沙拉",
               product:"立即查看445条产品>"
             },
           ],
           index:3
         },
         {
           title:"欧洲",
           contents:[
            { 
              src:"https://dimg05.c-ctrip.com/images/10050a0000004xyzo1CB3_C_221_166.jpg",
              alt:"俄罗斯",
              money:"3999",
              number:"0",
              scene:"景点:贝加尔湖火车环线、红场、莫斯科大学、玻璃海滩、莫斯科市、海参崴俄罗斯岛跨海大桥、叶卡捷琳堡滴血大教堂、旋转木马滑雪场、阿洪山、海参崴火车站",
              food:"美食:莫斯科卡瓦斯、索契鱼子酱、索契红菜汤、莫斯科烤鱼、冷酸鱼、索契黑面包、莫斯科列巴、格瓦斯、莫斯科鱼子酱、基辅式黄油鸡卷、索契鲱鱼",
              product:"立即查看416条产品>"
            },
            { 
              src:"https://dimg04.c-ctrip.com/images/fd/tg/g3/M08/43/A0/CggYG1avBWWAD9NgACmoNjb0dU4446_C_221_166.jpg",
              alt:"英国",
              money:"10499",
              number:"1",
              scene:"景点:哈利波特摄影棚、大英博物馆、汽车博物馆、贝克街、福尔摩斯博物馆、白金汉宫、诺丁山、海克利尔城堡、曼城足球俱乐部、剑桥大学",
              food:"美食:鳗鱼冻、烤牛排、Trifle蛋糕、英式下午茶、思康饼、炸鱼薯条、haggis、Fuller's、英式早餐、牛肉腰子派",
              product:"立即查看1086条产品>"
            },
            { 
              src:"https://dimg03.c-ctrip.com/images/fd/tg/g1/M0A/C9/86/CghzflWwy-2AE01WAIOrwbjIeAM363_C_221_166.jpg",
              alt:"意大利",
              money:"7699",
              number:"0",
              scene:"景点:阿尔卑斯山、大运河、庞贝古城、罗马斗兽场、多洛米蒂山脈、安康圣母教堂、比萨斜塔、贝拉岛、西班牙广场、白露里治奥古城",
              food:"美食:牛肚包、玛格丽塔披萨、什锦海鲜沙拉、海鲜烩饭、甜点、卡布奇诺、意式三明治、面包色拉、披萨、墨鱼汁意大利面、白松露、T骨牛排、冰淇淋、提拉米苏、意式咖啡、红酒炖牛尾、意大利面、意式烩饭、意式早餐、葡萄酒",
              product:"立即查看1369条产品>"
            },
            { 
              src:"https://dimg03.c-ctrip.com/images/100f050000000kxs16470_C_221_166.jpg",
              alt:"瑞士",
              money:"7699",
              number:"0",
              scene:"景点:玫瑰园、采尔马特滑雪场、皮拉图斯山、铁力士山、冰川快车、伯尔尼兹阿尔卑斯山脉、奥古斯丁巷、米伦瀑布、米伦小镇、施陶河瀑布",
              food:"美食:风干牛肉、伯尔尼拼盘、楚格樱桃白兰地蛋糕、烤土豆丝饼、烤香肠、啤梨面包、Maluns、河鲈鱼片、苏黎世小牛肉、瑞士奶酪火锅、奶油蘑菇小牛肉酥皮盒、烤奶酪、冰川葡萄酒、瑞士巧克力、奶酪加土豆、瑞士葡萄酒",
              product:"立即查看1215条产品>"
            },
            { 
              src:"https://dimg03.c-ctrip.com/images/fd/tg/g5/M04/6A/DB/CggYsFbvn9KAWj8UAB0kjlDVhe8670_C_221_166.jpg",
              alt:"法国",
              money:"7699",
              number:"0",
              scene:"景点:科尔马、埃菲尔铁塔、巴黎迪士尼乐园、卢浮宫博物馆、巴黎圣母院、巴黎丽都、凡尔赛宫、勃朗峰、新桥、凯旋门",
              food:"美食:镶牛肚、法式奶酪、法式甜点、马卡龙、海鲜、咖啡、鹅肝、里昂风味沙拉、法式蜗牛、法式鹅肝、尼斯索卡、里昂乳酪、牡蛎、Pan Bagnat、里昂干红肠、玫瑰腊肠、Quenelles、红酒炖牛肉、尼斯沙拉、葡萄酒、猪肉灌肠",
              product:"立即查看1369条产品>"
            },
            { 
              src:"https://dimg03.c-ctrip.com/images/fd/tg/g1/M01/7D/14/CghzfFWwzhWARE8eAD3ntqtD8Aw472_C_221_166.jpg",
              alt:"西班牙",
              money:"8499",
              number:"0",
              scene:"景点:诺坎普球场、伯纳乌球场、西班牙村、阿尔罕布拉宫、红墙、圣地亚哥·伯纳乌体育场、玛丽亚·路易莎公园、蓝精灵小镇、波盖利亚市场、菲斯特拉",
              food:"美食:烤乳猪、热巧克力油条、Tapas、先锋美食、香肠煮豆子、西班牙海鲜饭、马德里烩菜、墨鱼饭",
              product:"立即查看609条产品>"
            },
            { 
              src:"https://dimg05.c-ctrip.com/images/fd/tg/g6/M02/00/73/CggYs1cfF7qAU_kuAArgoZBEnXw227_C_221_166.jpg",
              alt:"希腊",
              money:"10599",
              number:"0",
              scene:"景点:圣托里尼岛、沉船湾、伊亚小镇、雅典卫城、帕特农神庙、米科诺斯岛、迈锡尼、德尔菲遗址、奥林匹亚宙斯神殿、圣托里尼海上日落环线",
              food:"美食:卷饼、穆萨嘎、烤羊肉、乡村沙拉、穆萨卡、皮塔饼、茴香酒、海鲜、油炸小鱿鱼、莓兹、葡萄酒、希腊烤羊肉、海鲜蔬菜沙拉",
              product:"立即查看409条产品>"
            },
            { 
              src:"https://dimg07.c-ctrip.com/images/100110000000owmud4DD1_C_221_166.jpg",
              alt:"莫斯科",
              money:"7399",
              number:"0",
              scene:"景点:红场、莫斯科大学、莫斯科市、库宾卡坦克博物馆、国家历史博物馆、克里姆林宫、圣瓦西里升天大教堂、麻雀山、中央武装力量博物馆、卫国战争中央博物馆",
              food:"美食:莫斯科卡瓦斯、莫斯科烤鱼、冷酸鱼、莫斯科列巴、莫斯科鱼子酱、基辅式黄油鸡卷",
              product:"立即查看301条产品>"
            },
             
           ],
           index:4
         },
         {
           title:"美洲",
           contents:[
             { 
              src:"https://dimg01.c-ctrip.com/images/100a10000000pfidn47CE_C_221_166.jpg",
              alt:"纽约",
              money:"9462",
              number:"2",
              scene:"景点:中央公园、时代广场、自由女神像、帝国大厦、华尔街、自由女神上岛游船、世贸一号观景台、麦迪逊广场花园、熨斗大厦、9/11纪念馆和博物馆",
              food:"美食:牛排、美式咖啡、早午餐、贝果（百吉饼）、无国界料理、汉堡、pancake、纽约芝士蛋糕、热狗、披萨",
              product:"立即查看853条产品>"
            },
            { 
              src:"https://dimg03.c-ctrip.com/images/fd/tg/g4/M02/ED/32/CggYHlXaie2AVx7gABz7Ffe6gtM354_C_221_166.jpg",
              alt:"美国",
              money:"7699",
              number:"1",
              scene:"景点:夏威夷岛、大学城、华特迪士尼世界、好莱坞环球影城、中央公园、彩虹瀑布、哈佛大学、斯台普斯中心、珍珠港、翠湖",
              food:"美食:Poke、蛤蜊奶油浓汤、牛排、早午餐、生蚝、奶油蛤蜊浓汤、无国界料理、热烤饼、汉堡、华夫饼、捞捞菜、纽约芝士蛋糕、三明治、冰淇淋、芝士蛋糕、美式咖啡、美式披萨、布法罗辣鸡翅、波士顿鳕鱼、加利福尼亚汉堡、查莫洛餐、椰子蟹、爱尔兰咖啡、Plate Lunch、海鲜烧烤、邓杰内斯蟹、夏威夷细面、鸡尾酒虾、墨西哥玉米饼、甜甜圈、波士顿龙虾、披萨、热狗、旧金山老面包、咖啡、加州卷饼、日本料理、菲力牛排、Haupia、贝果（百吉饼）、珍宝蟹、巴西野莓水果杯、冻奥查塔、Shave Ice、pancake、波士顿奶油卷、新英格兰蛤肉浓汤、龙虾、墨西哥卷饼、海鲜奶油饭",
              product:"立即查看3000条产品>"
            },
            { 
              src:"https://dimg02.c-ctrip.com/images/1003180000014qpts1ADF_C_221_166.jpg",
              alt:"夏威夷",
              money:"3144",
              number:"0",
              scene:"景点:夏威夷岛、彩虹瀑布、珍珠港、科基州立公园、密苏里号战舰纪念馆、亚特兰蒂斯号潜水艇、波洛卢山谷观景点和小径、恐龙湾、怀阿纳帕纳帕州立公园、夏威夷火山国家公园",
              food:"美食:Poke、Haupia、热烤饼、Shave Ice、捞捞菜、Plate Lunch、夏威夷细面",
              product:"立即查看734条产品>"
            },
            { 
              src:"https://dimg08.c-ctrip.com/images/fd/tg/g6/M06/6F/CA/CggYs1bvknuAIlBOABiZDwdWFVk644_C_221_166.jpg",
              alt:"加拿大",
              money:"9462",
              number:"1",
              scene:"景点:魁北克、黄刀市、尼亚加拉大瀑布、黄刀镇老城区、极光村、班夫镇、邓肯镇、丘吉尔港、爱德华王子岛国家公园、白求恩纪念馆国家历史遗址",
              food:"美食:牛排、生蚝、枫糖煎三文鱼、阿拉斯加帝王蟹、加拿大大西洋龙虾、熏肉三明治、三文鱼、象拔蚌刺身、冰淇淋、烤鲑鱼",
              product:"立即查看1008条产品>"
            },
            { 
              src:"https://dimg03.c-ctrip.com/images/100q0p000000fh5w1FE3C_C_221_166.jpg",
              alt:"洛杉矶",
              money:"11764",
              number:"0",
              scene:"景点:好莱坞环球影城、斯台普斯中心、洛杉矶艺术博物馆、加州1号公路、格里菲斯天文台、爱荷华战舰博物馆、圣莫尼卡海滩、洛杉矶古城、好莱坞星光大道、诺氏百乐坊乐园",
              food:"美食:牛排、汉堡、三明治、龙虾、冰淇淋、墨西哥卷饼",
              product:"立即查看1011条产品>"
            },
            { 
              src:"https://dimg07.c-ctrip.com/images/100o1c000001cmmorBFEC_C_221_166.jpg",
              alt:"多伦多",
              money:"975",
              number:"1",
              scene:"景点:多伦多大学、加拿大国家电视塔、瑞普利水族馆、多伦多音乐花园、爱伦温室花园、加拿大奇幻乐园、新市政厅、同性恋村、印度教寺庙、联合车站",
              food:"美食:牛排、生蚝、枫糖煎三文鱼、熏肉三明治、象拔蚌刺身、烤鲑鱼",
              product:"立即查看318条产品>"
            },
            { 
              src:"https://dimg08.c-ctrip.com/images/100r0h0000008ui066E62_C_221_166.jpg",
              alt:"秘鲁",
              money:"4433",
              number:"0",
              scene:"景点:热水镇、主庙、印加古道、纳斯卡线条、库斯科城、圣谷、贝伦水上棚屋区、坦波庙、玛努国家公园、铁房子",
              food:"美食:Tamales、Juane、Rocoto relleno、Cus Asado、Ceviche、Tacacho con Cecina",
              product:"立即查看105条产品>"
            },
            { 
              src:"https://dimg06.c-ctrip.com/images/fd/tg/g3/M04/BB/BB/CggYGVaMcXuAHn8cACGBzc2mJR0522_C_221_166.jpg",
              alt:"西雅图",
              money:"993",
              number:"0",
              scene:"景点:翠湖、口香糖墙、华盛顿大学、派克市场、太平洋科学中心、林地公园动物园、玻璃博物馆、弗里蒙特、凯瑞公园、西雅图艺术博物馆",
              food:"美食:生蚝、珍宝蟹、奶油蛤蜊浓汤、咖啡",
              product:"立即查看164条产品>"
            }, 
           ],
           index:5 
         },
         {
           title:"澳中东非",
           contents:[
             { 
              src:"https://dimg05.c-ctrip.com/images/100u0n000000e0fpmBF3A_C_221_166.jpg",
              alt:"迪拜",
              money:"3099",
              number:"1",
              scene:"景点:帆船酒店、哈利法塔（迪拜塔）、迪拜河、迪拜深海钓鱼、迪拜高空跳伞体验、迪拜失落的空间水族馆、迪拜棕榈岛亚特兰蒂斯酒店、地球村、迪拜乐园之乐高乐园、疯狂维迪水上乐园",
              food:"美食:阿拉伯沙律、小拼盘、阿拉伯披萨、阿拉伯大饼、阿拉伯甜点、阿拉伯烧烤",
              product:"立即查看1242条产品>"
            },
            { 
              src:"https://dimg02.c-ctrip.com/images/fd/tg/g1/M02/02/A5/CghzfFVIPASANskxABmaqEV-DFA267_C_221_166.jpg",
              alt:"土耳其",
              money:"7099",
              number:"0",
              scene:"景点:爱琴海海岸、钟楼、卡帕多奇亚热气球、地中海沿岸、特洛伊考古遗址、玫瑰谷、费特希耶滑翔伞、大巴扎、蓝色清真寺、爱情谷",
              food:"美食:土耳其茶、土耳其烤肉、土耳其软糖、土耳其烤鱼、土耳其冰淇淋、瓦罐炖肉、Raki酒、土耳其咖啡、诺亚方舟布丁、土耳其果仁点心",
              product:"立即查看349条产品>"
            },
            { 
              src:"https://dimg05.c-ctrip.com/images/fd/tg/g1/M01/C8/1B/CghzflWwuKaAATqVAA4K_l8xcIk441_C_221_166.jpg",
              alt:"澳大利亚",
              money:"9899",
              number:"2",
              scene:"景点:风之谷、十二门徒岩、赫特泻湖、大堡礁潜水、悉尼港、邦迪海滩、普芬比利蒸汽火车、澳洲游艇俱乐部、白天堂海滩、蓝山跳伞",
              food:"美食:袋鼠肉、正宗意大利菜、澳洲牛排、鳄鱼肉、牡蛎、皇帝蟹、澳洲龙虾（澳龙）、澳洲泥蟹、咖啡",
              product:"立即查看1706条产品>"
            },
            { 
              src:"https://dimg01.c-ctrip.com/images/100n0z000000nldvr384C_C_221_166.jpg",
              alt:"毛里求斯",
              money:"5052",
              number:"0",
              scene:"景点:海豚湾、蓝湾、鹿岛、圣水湖、红顶教堂、夏玛尔瀑布、大浪湾、唐人街、帕里斯民俗村、双体船畅游海豚湾",
              food:"美食:咖喱鸡肉大虾、百万富翁沙拉",
              product:"立即查看178条产品>"
            },
            { 
              src:"https://dimg04.c-ctrip.com/images/fd/tg/g2/M02/8B/33/Cghzf1Ww3rCAKMvTABUl9T2-0U8651_C_221_166.jpg",
              alt:"新西兰",
              money:"12800",
              number:"0",
              scene:"景点:皇后镇高空跳伞、皇后镇高空跳台秋千、霍比特村、怀希基岛、月球环形山、格林诺奇、瓦卡蒂普湖、镜湖、彩虹山、南阿尔卑斯山",
              food:"美食:Fergburger汉堡、鱼薯条、新西兰龙虾Crayfish、黑边鲍鱼Pāua、新西兰葡萄酒、布拉夫牡蛎、魔鬼披萨、鹿肉、奶油水果蛋白饼pavlova、绿贝Greenshell Mussel",
              product:"立即查看676条产品>"
            },
            { 
              src:"https://dimg01.c-ctrip.com/images/fd/tg/g2/M09/8D/E4/Cghzf1WxBtqAYJ9UABKmlgb_TmY531_C_221_166.jpg",
              alt:"埃及",
              money:"7299",
              number:"1",
              scene:"景点:胡夫金字塔、狮身人面像、阶梯金字塔、红色金字塔、吉萨金字塔、埃及博物馆、阿斯旺大坝、菲莱神庙、哈利利市场、塞加拉金字塔群",
              food:"美食:沙拉三明治、法拉费、库莎丽、咖啡和红茶、烤肉、水烟、烤乳鸽、面包布丁、鲜榨果汁、大饼",
              product:"立即查看259条产品>"
            },
            { 
              src:"https://dimg06.c-ctrip.com/images/100m0y000000lstuaC129_C_221_166.jpg",
              alt:"布里斯班",
              money:"9899",
              number:"2",
              scene:"景点:摩顿岛、布里斯班河、昆士兰大学、布里斯班摩天轮、布里斯班南岸游客中心、城市之猫渡船、布里斯班海关大楼、维多利亚军营博物馆、南岸公园集市、科学中心",
              food:"美食:澳洲牛排、牡蛎、澳洲龙虾（澳龙）、澳洲泥蟹",
              product:"立即查看313条产品>"
            },
            { 
              src:"https://dimg06.c-ctrip.com/images/tg/715/819/016/499d89017ce44f52947675713a6cc54c_C_221_166.jpg",
              alt:"阿联酋",
              money:"7588",
              number:"1",
              scene:"景点:帆船酒店、哈利法塔（迪拜塔）、迪拜河、迪拜深海钓鱼、阿布扎比卢浮宫、迪拜高空跳伞体验、法拉利主题公园、地球村、迪拜失落的空间水族馆、迪拜棕榈岛亚特兰蒂斯酒店",
              food:"美食:阿拉伯沙律、小拼盘、阿拉伯披萨、阿拉伯大饼、阿拉伯甜点、阿拉伯烧烤",
              product:"立即查看1261条产品>"
            },
           ],
           index:6
         },
      ],
      this.peripherys = [
        {
          title:"精选",
          contents:[
            {
              src:"https://dimg03.c-ctrip.com/images/100s0r000000h753vAE4D_C_228_132.jpg ",
              alt:"Q加·南澳黄金海岸希维尔假日公寓1-2晚，浪漫海景房型，面朝大海，心旷神怡！•【离青澳湾步行距离近】",
              money:"158"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/20030x000000lebrj4314_C_228_132.jpg",
              alt:"厦门灵玲大酒店1-3晚+部分房型含马戏城/动物园套餐 房型礼包为准•【可选灵玲马戏城】",
              money:"451"
            },
            {
              src:"https://images4.c-ctrip.com/target/20030t000000iimlnA49B_C_228_132.jpg",
              alt:"南澳柠檬墅LemonyVillage1晚【背山面海 山林环抱】",
              money:"326"
            },
            {
              src:"https://images4.c-ctrip.com/target/2004190000015iczpE442_C_228_132.jpg",
              alt:"云水谣1949老四合院1号民宿1晚+可选云水谣古镇•【每间客房都是自己设计的，每一间都有不一样原色和元素】 ",
              money:"105"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/100j0s000000hf4bc2AC4_C_228_132.jpg",
              alt:"惠州双月湾檀悦豪生温泉度假酒店·打卡网红无边际泳池+300米私属沙滩+瑜伽健身房【五一热卖，打卡“水滴酒店”！】",
              money:"449"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200d0s000000hq1ktD4D6_C_228_132.jpg",
              alt:"潮州书香客栈1晚，周边景点云集，客栈毗邻开元寺、牌坊街、广济桥！•【以书香气息为主题的艺术装修风格为特色】 ",
              money:"156"
            },
            {
              src:"https://images4.c-ctrip.com/target/200e0700000021h041F77_C_228_132.jpg",
              alt:"普宁盘龙湾温泉度假村1晚+可选盘龙湾温泉",
              money:"386"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/1007060000001egngD8A8_C_228_132.jpg",
              alt:"广州长隆4日自由行(4钻)·【高铁往返】|3晚广州长隆主题酒店|·亲子优选·动漫般亲子欢畅·童话次元大冒险·陪他/她看世界",
              money:"1631"
            },
          ],
            index:0
        },
        {
          title:"汕头",
          contents:[
            {
              src:"https://dimg03.c-ctrip.com/images/100s0r000000h753vAE4D_C_228_132.jpg",
              alt:"Q加·南澳黄金海岸希维尔假日公寓1-2晚，浪漫海景房型，面朝大海，心旷神怡！•【离青澳湾步行距离近】",
              money:"128"
            },
            {
              src:"https://images4.c-ctrip.com/target/20030t000000iimlnA49B_C_228_132.jpg",
              alt:"南澳柠檬墅LemonyVillage1晚【背山面海 山林环抱】",
              money:"326"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/100t0k000000cbsef42FC_C_228_132.jpg",
              alt:"南澳碧海真是美客栈1-2晚•【环境安全，优美，干净，面对大海】 ",
              money:"115"
            },
            {
              src:"https://images4.c-ctrip.com/target/200j11000000re8yp28F2_C_228_132.jpg",
              alt:"汕头小米智能公寓1晚+可选方特欢乐世界蓝水星",
              money:"334"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/100r0q000000g2ute9B05_C_228_132.jpg",
              alt:"南澳琴舍轻奢海边度假酒店1-2晚，琴诗山水乐，顿与世情疏！",
              money:"277"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/20050r000000gz5w0B2E2_C_228_132.jpg",
              alt:"南澳格兰云天大酒店1-2晚，邻海而建，高端精品度假酒店！•【毗邻南澳市政公园“海上文化丝绸广场】",
              money:"283"
            },
            {
              src:"https://images4.c-ctrip.com/target/200b0c0000006ojnl1E05_C_228_132.jpg",
              alt:"汕头长之江主题酒店1晚+可选方特欢乐世界蓝水星",
              money:"179"
            },
            {
              src:"https://images4.c-ctrip.com/target/2001160000010el4p1A73_C_228_132.jpg",
              alt:"南澳香湖湾希维尔度假公寓1晚+可选青澳湾",
              money:"116"
            },
          ],
          index:1
        },
        {
          title:"厦门",
          contents:[
            {
              src:"https://dimg03.c-ctrip.com/images/20030x000000lebrj4314_C_228_132.jpg",
              alt:"厦门灵玲大酒店1-3晚+部分房型含马戏城/动物园套餐 房型礼包为准•【可选灵玲马戏城】",
              money:"451"
            },
            {
              src:"https://images4.c-ctrip.com/target/200j15000000y8qo34517_C_228_132.jpg",
              alt:"厦门云也酒店1晚+可选观音山梦幻海岸",
              money:"463"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200c0r000000h0eit197E_C_228_132.jpg",
              alt:"亲子度假一站式！厦门灵玲大酒店1-2晚",
              money:"1298"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200710000000pmi0t6E46_C_228_132.jpg",
              alt:"厦门鼓浪屿柏文熊酒店1晚+可选厦门海底世界/鼓浪屿联票•【领略不一样美景】",
              money:"222"
            },
            {
              src:"https://images4.c-ctrip.com/target/200815000000xgdqyC7CB_C_228_132.jpg",
              alt:"厦门梧境山海间行馆1晚+可选厦门园林植物园",
              money:"395"
            },
            {
              src:"https://images4.c-ctrip.com/target/200q070000002ku5kCDD1_C_228_132.jpg",
              alt:"厦门君怡酒店1-3晚·可选鼓浪屿五大景点联票",
              money:"182"
            },
            {
              src:"https://dimg04.c-ctrip.com/images/300814000000wjye1D2A7_C_228_132.jpg",
              alt:"厦门豪威莱斯汀溪房车公园+豪威莱斯房车露营公园·萌虫学园+三角梅基地参观 家庭亲子周边自驾好去处",
              money:"299"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200n0z000000nhgn87ACC_C_228_132.jpg",
              alt:"厦门北海湾惠龙万达嘉华酒店1晚+可选厦门园林博览苑/红点博物馆•【坐落于集美学村内，毗邻嘉庚公】",
              money:"470"
            },
          ],
          index:2
        },
        {
          title:"南澳",
          contents:[
            {
              src:"https://dimg03.c-ctrip.com/images/100s0r000000h753vAE4D_C_228_132.jpg",
              alt:"Q加·南澳黄金海岸希维尔假日公寓1-2晚，浪漫海景房型，面朝大海，心旷神怡！•【离青澳湾步行距离近】",
              money:"128"
            },
            {
              src:"https://images4.c-ctrip.com/target/20030t000000iimlnA49B_C_228_132.jpg",
              alt:"南澳柠檬墅LemonyVillage1晚【背山面海 山林环抱】",
              money:"326"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/100r0q000000g2ute9B05_C_228_132.jpg",
              alt:"南澳琴舍轻奢海边度假酒店1-2晚，琴诗山水乐，顿与世情疏！",
              money:"277"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/20050r000000gz5w0B2E2_C_228_132.jpg",
              alt:"南澳格兰云天大酒店1-2晚，邻海而建，高端精品度假酒店！•【毗邻南澳市政公园“海上文化丝绸广场】",
              money:"283"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/100t0k000000cbsef42FC_C_228_132.jpg",
              alt:"南澳碧海真是美客栈1-2晚•【环境安全，优美，干净，面对大海】",
              money:"115"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/100i0q000000g995mE107_C_228_132.jpg",
              alt:"南澳米娅皇室酒店1-2晚•【距离海边100米，环境优美，设施齐全】",
              money:"127"
            },
            {
              src:"https://images4.c-ctrip.com/target/200l0q000000glhbmF532_C_228_132.jpg",
              alt:"南澳县万绿苑沙滩海景公寓1晚+可选南澳岛",
              money:"278"
            },
            {
              src:"https://images4.c-ctrip.com/target/2001160000010el4p1A73_C_228_132.jpg",
              alt:"南澳香湖湾希维尔度假公寓1晚+可选青澳湾",
              money:"116"
            },
          ],
          index:3
        },
        {
          title:"漳州",
          contents:[
            {
              src:"https://images4.c-ctrip.com/target/2004190000015iczpE442_C_228_132.jpg",
              alt:"云水谣1949老四合院1号民宿1晚+可选云水谣古镇•【每间客房都是自己设计的，每一间都有不一样原色和元素】",
              money:"105"
            },
            {
              src:"https://images4.c-ctrip.com/target/200g19000001814dcD1A8_C_228_132.jpg",
              alt:"漳浦火山岛度假村1晚+可选火山岛旅游休闲度假区•【重拾返璞归真的那份悸动】",
              money:"551"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/20080r000000h2hnj2438_C_228_132.jpg",
              alt:"云霄云顶温泉大酒店1晚+双人温泉+双早（早餐、温泉和晚餐身高1.2米以下免费）•【土楼风格酒店 品质温泉体验】",
              money:"538"
            },
            {
              src:"https://images4.c-ctrip.com/target/200g14000000worcy73D0_C_228_132.jpg",
              alt:"花筑·云水谣云水婵舍民宿1晚+可选云水谣古镇",
              money:"375"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/2009070000002dt70963D_C_228_132.jpg",
              alt:"漳州佰翔圆山酒店+可自选圆山花泉门票或含温泉房型，酒店近漳州动车高铁站·【市区花园式 圆山花泉】",
              money:"440"
            },
            {
              src:"https://dimg04.c-ctrip.com/images/300k12000000rmtdk21E6_C_228_132.jpg",
              alt:"龙海龙佳睿途酒店+龙佳生态温泉山庄·每间客房均带超大阳台与【室内】独立温泉泡池！多项自由行产品选择体验~",
              money:"528"
            },
            {
              src:"https://images4.c-ctrip.com/target/200w160000010nssl7FE9_C_228_132.jpg",
              alt:"漳浦翡翠湾海景度假酒店1晚+可选翡翠湾旅游度假中心",
              money:"443"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200r0800000038cdo92C3_C_228_132.jpg",
              alt:"云霄云顶温泉大酒店+双人温泉SPA+双早，可选一价全包/动车站接送套餐+双人温泉SPA+双早•【下单减50！温泉专享】",
              money:"539"
            },
          ],
          index:4
        },
        {
          title:"惠州",
          contents:[
            {
              src:"https://dimg03.c-ctrip.com/images/100j0s000000hf4bc2AC4_C_228_132.jpg",
              alt:"惠州双月湾檀悦豪生温泉度假酒店·打卡网红无边际泳池+300米私属沙滩+瑜伽健身房【五一热卖，打卡“水滴酒店”！】",
              money:"449"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200u0z000000mx9s5994F_C_228_132.jpg",
              alt:"惠州双月湾檀悦都喜天丽度假酒店·无边际泳池嬉戏+私享沙滩漫步+健身房——天境之城，打卡网红酒店【五一热卖】",
              money:"458"
            },
            {
              src:"https://dimg04.c-ctrip.com/images/3004170000010zpsh287D_C_228_132.jpg",
              alt:"惠东双月湾享海温泉度假酒店·含早+双人自助晚餐+网红秋千+私家沙滩+双人卡丁车+双人观光小火车+双人蹦床+双人淘气堡【开业特惠】",
              money:"679"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200v0u000000jakh36B90_C_228_132.jpg",
              alt:"顺逸东方白盆湖温泉（惠州惠东白盆珠店）1-2晚+双人免费22个温泉池无限次浸泡+自助早餐•【白盆珠库区内】",
              money:"198"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/100p0a0000004zg4l8C1A_C_228_132.jpg",
              alt:"『网红泳池』惠东屿海云天假日酒店1-2晚+环球美食节&海鲜自助晚餐+自助早餐+无限次UFO室外泳池，步行至沙滩仅需5-7分钟！",
              money:"481"
            },
            {
              src:"https://images4.c-ctrip.com/target/200711000000rwbpsF459_C_228_132.jpg",
              alt:"下单立减30元！惠州候鸟水榕庄度假酒店1-3晚，坐拥2700亩高尔夫球场、6大自然湖泊！【私家泳池别墅】",
              money:"746"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/280e0y000000m1aoaAD4B_C_228_132.jpg",
              alt:"惠东富力希尔顿逸林度假酒店1-3晚，饱览整个海湾和惠州海湾大桥，度假优选！",
              money:"447"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/20020w000000kp2se4930_C_228_132.jpg",
              alt:"【全独立泡池】龙门南昆山温德姆温泉酒店+早餐+无限次露台温泉，可选双人晚餐套票『立减20/单』",
              money:"577"
            },
          ],
          index:5
        },
        {
          title:"潮州",
          contents:[
            {
              src:"https://dimg03.c-ctrip.com/images/200d0s000000hq1ktD4D6_C_228_132.jpg",
              alt:"潮州书香客栈1晚，周边景点云集，客栈毗邻开元寺、牌坊街、广济桥！•【以书香气息为主题的艺术装修风格为特色】",
              money:"156"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200a0y000000m6r481664_C_228_132.jpg",
              alt:"潮州紫莲森林度假村，住房免紫莲森林度假村门票•【凤凰龙脉，紫莲福地】",
              money:"288"
            },
            {
              src:"https://images4.c-ctrip.com/target/200h0l000000d7q841CB1_C_228_132.jpg",
              alt:"都是梦想家酒店(潮州广济桥牌坊街汽车总站店)1晚+可选淡浮院/青岚国家地质公园门票",
              money:"141"
            },
            {
              src:"https://images4.c-ctrip.com/target/200811000000qvd5h1DE0_C_228_132.jpg",
              alt:"潮州沐阳客栈1晚+可选潮州古城",
              money:"228"
            },
            {
              src:"https://images4.c-ctrip.com/target/hotel/347000/346516/88a8b98525fd4eb4b3340d92d28212df_C_228_132.jpg",
              alt:"饶平绿岛山庄绿泉酒店1晚+可选潮州绿岛旅游山庄",
              money:"184"
            },
            {
              src:"https://images4.c-ctrip.com/target/fd/hotel/g6/M02/BD/B1/CggYslcXJDeAdaHXAAEatnJ9lI4661_C_228_132.jpg",
              alt:"维也纳酒店(潮州广场店)1晚+可选潮州古城",
              money:"228"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200m0p000000fux8r1013_C_228_132.jpg",
              alt:"潮州凤水驿客栈1晚，延续了宋代官驿的简约精实之风格，房型规整！•【牌坊街、广济桥近在咫尺】",
              money:"236"
            },
            {
              src:"https://images4.c-ctrip.com/target/200g15000000xrnlsB361_C_228_132.jpg",
              alt:"潮州潮韵书香客栈1晚+可选潮州古城",
              money:"238"
            },
          ],
          index:6
        },
        {
          title:"梅州",
          contents:[
            {
              src:"https://dimg03.c-ctrip.com/images/200q0q000000gosg95499_C_228_132.jpg",
              alt:"【携程自营】梅州客天下国际大酒店1-2晚+双人客家小镇门票【品客家风情，享南国情调】•【情侣|亲子游】",
              money:"319"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/fd/hotel/g4/M08/92/80/CggYHlXqBViAZ9fWAA_XAZDmmpQ650_C_228_132.jpg",
              alt:"丰顺金德宝凯悦国际温泉酒店1-2晚，可选双人温泉，可选早餐房型•【梅州温泉度假】",
              money:"238"
            },
            {
              src:"https://images4.c-ctrip.com/target/200513000000tymlq992E_C_228_132.jpg",
              alt:"熙和湾凤栖湖酒店(原兴宁凤栖湖酒店)1晚+可选熙和湾客乡文化旅游产业园",
              money:"358"
            },
            {
              src:"https://images4.c-ctrip.com/target/200b0t000000iqekiCAD6_C_228_132.jpg",
              alt:"维纳斯皇家酒店(梅州皇家名典店) 1-2晚，给您带来美食、娱乐、住宿的多重享受！【地标酒店！】",
              money:"188"
            },
            {
              src:"https://images4.c-ctrip.com/target/20011b000001bo4mk9B08_C_228_132.jpg",
              alt:"梅州丰顺千江温泉酒店1-2晚，可加购温泉门票",
              money:"205"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200j0q000000gn96j28D1_C_228_132.jpg",
              alt:"科谷度假公寓(梅州客天下店)两房/三房套房1晚，可加购梅州客天下景区门票！•【步行可达景区，家庭出游】",
              money:"246"
            },
            {
              src:"https://images4.c-ctrip.com/target/fd/hotel/g3/M02/EA/88/CggYGVX-MB-AZFOEAAMiRHD5Hdo739_C_228_132.jpg",
              alt:"梅州丰顺广东鹿湖温泉假日酒店1晚【粤东客家文化主题氡温泉】",
              money:"597"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200g0e00000076gfyBA6F_C_228_132.jpg",
              alt:"梅州又见民宿1晚，网红文艺民宿，可以泡茶聊天，还有很多书可以看【网红民宿精选】",
              money:"121"
            },
          ],
          index:7
        }

      ],

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
            {
              src:"https://images4.c-ctrip.com/target/2A011e000001ftsqa4EC1_300_200.jpg",
              alt:"[浦东新区]上海卓美亚喜玛拉雅酒店",
              name:"已售 6696",
              money:"999"
            },
            {
              src:"https://images4.c-ctrip.com/target/fd/tuangou/g4/M02/57/E9/CggYHlZ66XSAYKZlAAGnrNYUsZU571_300_200.jpg",
              alt:"[闵行区]麦豪德精品酒店（上海虹桥枢纽店）",
              name:"已售 629",
              money:"358"
            },
            {
              src:"https://images4.c-ctrip.com/target/2A0f15000000xx6fr5DAE_300_200.jpg",
              alt:"[多店通用]碧桂园酒店亲子节40店通用",
              name:"已售 368",
              money:"499"
            },
            {
              src:"https://images4.c-ctrip.com/target/2A02040000000c7575006_300_200.jpg",
              alt:"[静安区]吉泰精品连锁酒店(上海火车站梅园路店)",
              name:"已售 315",
              money:"268"
            },
            {
              src:"https://images4.c-ctrip.com/target/2A091e000001fsaat0282_300_200.jpg",
              alt:"[静安区]上海静安昆仑大酒店",
              name:"已售 250",
              money:"999"
            },
            {
              src:"https://images4.c-ctrip.com/target/2A0o10000000pdhoj63CC_300_200.jpg",
              alt:"[静安区]上海衡山马勒别墅饭店",
              name:"已售 220",
              money:"1598"
            },
          ],
          index:3
        },
        {
          title:"成都",
          contents:[
            {
              src:"https://images4.c-ctrip.com/target/t1/tuangou/767/144/417/37e89e5613524228aca927c6f63df831_300_200.jpg",
              alt:"[青羊区]成都浣花锦城酒店",
              name:"已售 1916",
              money:"278"
            },
            {
              src:"https://images4.c-ctrip.com/target/tuangou/758/963/216/80e18b7b54a84feba11b729a28425b25_300_200.jpg",
              alt:"[青羊区]成都老兵国际公寓",
              name:"已售 1342",
              money:"193"
            },
            {
              src:"https://images4.c-ctrip.com/target/tuangou/076/625/928/db6fe1430daf467391923a6bc607d09e_300_200.jpg",
              alt:"[温江区]莱美假日酒店（成都温江店）",
              name:"已售 1183",
              money:"128"
            },
            {
              src:"https://images4.c-ctrip.com/target/fd/tuangou/g1/M0B/78/E7/CghzfVUniPKAUjTVAAJYtQp07_Q673_300_200.jpg",
              alt:"[新都区]成都银巢酒店",
              name:"已售 905",
              money:"248"
            },
            {
              src:"https://images4.c-ctrip.com/target/200i0j000000awufuF3C6_300_200.jpg",
              alt:"[青羊区]成都城市名人酒店",
              name:"已售 1011",
              money:"599"
            },
            {
              src:"https://images4.c-ctrip.com/target/tuangou/520/523/637/cb16404628f64c9eb0020eb9a4b295a7_300_200.jpg",
              alt:"[锦江区]德士顿酒店(琉璃场分店)",
              name:"已售 761",
              money:"96"
            },
          ],
          index:4
        },
        {
          title:"武汉",
          contents:[
            {
              src:"https://images4.c-ctrip.com/target/2A01170000011ucdq4266_300_200.jpg",
              alt:"[武昌区]武汉保利大酒店",
              name:"已售 754",
              money:"275"
            },
            {
              src:"https://images4.c-ctrip.com/target/2A0f13000000tjq2128E7_300_200.jpg",
              alt:"[武昌区]武汉华侨城玛雅嘉途酒店（原华侨城玛雅海滩酒店）",
              name:"已售 365",
              money:"828"
            },
            {
              src:"https://images4.c-ctrip.com/target/2A0q11000000qy0qv2DCB_300_200.jpg",
              alt:"[洪山区]武汉光谷希尔顿酒店",
              name:"已售 361",
              money:"1048"
            },
            {
              src:"https://images4.c-ctrip.com/target/fd/tuangou/g3/M0A/1A/43/CggYGlX2nN-AWU1PAACe2ig9v8w761_300_200.jpg",
              alt:"[汉阳区]武汉明德酒店",
              name:"已售 289",
              money:"418"
            },
          ],
          index:5
        },
        {
          title:"三亚",
          contents:[
            {
              src:"https://images4.c-ctrip.com/target/2A0r0800000033ja8549A_300_200.jpg",
              alt:"三亚亚龙湾红树林度假酒店",
              name:"已售 1013",
              money:"588"
            },
            {
              src:"https://images4.c-ctrip.com/target/2A021e000001fvxrvD4D5_300_200.jpg",
              alt:"[海滨]三亚太阳湾柏悦酒店",
              name:"已售 1239",
              money:"2399"
            },
            {
              src:"https://images4.c-ctrip.com/target/2A071e000001faow1EFEC_300_200.jpg",
              alt:"三亚亚龙湾万豪度假酒店",
              name:"已售 739",
              money:"838"
            },
            {
              src:"https://images4.c-ctrip.com/target/2A0f1e000001ftm8pE169_300_200.jpg",
              alt:"[海棠区]三亚保利瑰丽酒店",
              name:"已售 1054",
              money:"2399"
            },
            {
              src:"https://images4.c-ctrip.com/target/2A0p1e000001fhvhu80C0_300_200.jpg",
              alt:"[吉阳区]三亚华宇亚龙湾迎宾馆",
              name:"已售 762",
              money:"999"
            },
          ],
          index:6
        },

      ]

      
     
    },
    imageTab(imageIndex){
      this.num = imageIndex;
    },
    hotImageTab(hotImageIndex){
      this.num1 = hotImageIndex;
    },
    overseaTitle :function(imageIndex){
      return "overseaTitle"+imageIndex
    },
    mouserover(picIndex){
      this.bg = true;
      this.current = picIndex; 
      this.isblur = true;

    },
    mouseleave(picIndex){
      this.bg = false;
      this.current = picIndex;
      this.isblur = false;
    },
    spanIcon :function(text){
        // let a = this.name.text.replace(/\n/g,'" "');
        let a= /[/n]/;
        if(text == a){
          text = text.replace(a,"</ br>")
          this.isAside_icon = false;
        console.log(this.isAside_icon);


        }
        console.log(this.isAside_icon);
        
       


      }

    
   
    
  
  },
  mounted() {
    this.loadAll();
    this.spanIcon();
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
.hot_ul{
  width: 1130px !important;
}
.hot_pic{
  width: 900px;
  height: 360px;
  float: left;
  background-color:red;
}
.hot_pic_box{
  position: relative;
  width: 225px;
  height: 180px;
  float: left;
}
.hot_pic_item{
  width: 225px;
  height: 180px;
  padding:0 10px 10px 0;
  float: left;
}
.hot_pic_icon{
  width: 80px;
  height: 20px;
  position: absolute;
  background-color: hsl(14, 95%, 60%);
  opacity: 0.9;/*透明度0为完全透明，1是不透明，*/
}
.hot_pic_p{
  height: 20px;
  margin-bottom: 0;
  color: white;
  font-size: 13px;
  line-height: 20px;
}
.hot_icon_money{
  width: 12px !important;
  height: 12px !important;
  margin-bottom: 16px;
}
.background{
  width: 220px;
  height: 180px;
  opacity: 0.9  ;
  border: 1px solid #999999;/*颜色为灰色的1px宽度的实线边框（显示盒子）*/
  background: rgba(0,0,0,0.40);
  position: absolute;
   
}
.background_title{
  color: white;
  font-size: 23px;
  font-weight: bold;
  margin-top: 20px;
}
.background_content{
  color: white;
  font-size: 12px;
  width: 200px;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block; 
  white-space: nowrap;
  margin: 0 10px;
}
.blur{
  -webkit-filter: blur(15px);
  -moz-filter: blur(15px);
  -o-filter: blur(15px);
  -ms-filter: blur(15px);
  filter: blur(15px);
  background-size: cover;
}
.background_product{
  margin-top: 20px;
}
.bg_icon{
  margin: 0 5px 0 0;
}
.periphery_pic{
  width: 920px;
  height: 360px;
  background-color:red;
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
    /* width: 50px;
    height: 15px; */
    padding: 0px;
    margin-right: 20px;
    border: 0;
    font-size: 12px;
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
  width: 80px;
  height: 0.3px;
  background-color:white;
  text-align: center;
  margin: 3px 0 0 14px;
}
.circle_num{
  font-size: 13px;
  color: white;
  margin-bottom: 0;

}
.circle_money{
  font-size: 25px;
  color:  hsl(14, 95%, 60%);
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
  margin-top:195px;
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
.aside_icon{
  display: inline-block;
  width: 20px;
  text-align: center;
}

</style>




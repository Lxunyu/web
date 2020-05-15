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
      <!-- 游玩开始 -->
      <div class="block">
        <el-tabs v-model="activeName1" @tab-click="handleClick">
            <!-- 热门开始 -->
            <el-tab-pane label="热门" name="first1">
                <el-container>
                    <el-main>
                      <div >
                        <ul class="main_ul hot_ul">
                            <li class="main_li"  v-for="(hotImage,hotImageIndex) in hotImages" :key="hotImageIndex">
                                <el-button round size="mini" :class="{active:(hotImageIndex==num1)}" @click="hotImageTab(hotImageIndex)" class="main_button" >{{hotImage.title}}</el-button>
                            </li>
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
                                    <!-- <div class="blur"></div> -->
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
            <el-tab-pane label="周边游" name="second1">
              <el-container>
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
              </el-container>
            </el-tab-pane>
            <!-- 周边游结束 -->
            <!-- 门票开始 -->
            <el-tab-pane label="门票" name="third1">
              <el-container>
                <el-aside class="content_aside">
                  <div id="ticket-width">
                    <dt class="sale_dt">热门主题游</dt>
                    <dd class="scene_dd" ref="ticketHot" v-for="(ticketThemePlay,ticketThemePlayIndex) in ticketThemePlays" :key="ticketThemePlayIndex"><a href="#" class="find_a">{{ticketThemePlay.name}}</a></dd>
                  </div>
                  <div class="find ticket_find">
                    <dt  class="sale_dt">热门目的地</dt>
                    <dd class="scene_dd" ref="ticketDestination" v-for="(ticketDestination,ticketDestinationIndex) in ticketDestinations" :key="ticketDestinationIndex"><a class="find_a" href="#">{{ticketDestination.name}}</a></dd> 
                  </div>
                </el-aside>
                <el-main>
                  <ul class="main_ul">
                    <li class="main_li"  v-for="(ticketTitle,ticketTitleIndex) in ticketTitles.slice(0,8)" :key="ticketTitleIndex">
                        <button size="mini" class="city_button" :class="isColor===ticketTitleIndex ? 'btnColor':''" @click="ticketImageTab(ticketTitle.py,ticketTitleIndex)">{{ticketTitle.name}}</button>
                    </li>
                    <el-select v-model="ticketSelect" @change="ticketCityChange" round size="mini" class="main_button select_city">
                      <el-option
                        v-for="(ticketSelectTitle,ticketSelectTitleIndex) in ticketTitles.slice(8)" :key="ticketSelectTitleIndex"
                        :value="ticketSelectTitle.name">
                      </el-option>
                    </el-select>
                    <a class="main_a" href="javascript:void(0);">更多门票></a>
                  </ul>
                  <div class="overseas_pic">
                    <div v-for="(pic,ticketPicIndex) in ticketPic" :key="ticketPicIndex">
                      <div class="pic_box domestic_box" :title="pic.alt">
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
                  <a href="#" title="暑期大放送">
                    <div class="main_right">
                      <el-image class="ticket_right_image" src="https://pages.c-ctrip.com/dm/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190117154417.jpg"></el-image>
                      <div class="rectangle">
                        <p class="rectangle_text">暑期大放送</p>
                      </div>
                    </div>
                  </a>  
                </el-main>
              </el-container>
            </el-tab-pane>
            <!-- 门票结束 -->
            <!-- 出境游开始 -->
            <el-tab-pane label="出境游" name="fourth1">
              <el-container>
                 <el-aside class="content_aside"  >
                  <div id="aside-width"  >
                    <dt class="sale_dt">热门主题游</dt>
                    <dd class="scene_dd" ref="exitHot" v-for="(themePlay,themePlayIndex) in themePlays" :key="themePlayIndex"><a href="#" class="find_a">{{themePlay.name}}</a></dd>
                  </div>
                  <div class="homestay">
                    <dt  class="sale_dt">热门目的地</dt>
                    <dd class="scene_dd" ref="exitDestination" v-for="(exitDestination,exitDestinationIndex) in exitCityTitles.slice(1)" :key="exitDestinationIndex"><a class="find_a" href="#">{{exitDestination.name}}</a></dd> 
                  </div>
                </el-aside>
                <el-main>
                  <ul class="main_ul">
                    <li class="main_li" v-for="(exitCityTitle,exitCityTitleIndex) in exitCityTitles.slice(0,8)" :key="exitCityTitleIndex">
                        <button class="city_button" :class="isColor==exitCityTitleIndex?'btnColor':'' " @click="exitImageTab(exitCityTitle.py,exitCityTitleIndex)">{{exitCityTitle.name}}</button>
                    </li>
                    <el-select v-model="exitSelect" round size="mini" class="main_button select_city" @change="exitCityChage">
                      <el-option 
                        v-for="(exitSelectTitle,exitSelectTitleIndex) in exitCityTitles.slice(8)" 
                        :key="exitSelectTitleIndex"
                        :value="exitSelectTitle.name">
                      </el-option>
                    </el-select>
                    <span class="main_a"><a href="javascript:void(0);" v-for="(exitSign,exitSignIndex) in exitSigns" :key="exitSignIndex">{{exitSign}}</a></span>
                  </ul> 
                  <div class="periphery_pic">
                    <div v-for="(pic,exitSelectIndex) in exitCityPic" :key="exitSelectIndex" >
                      <div class="hot_pic_box domestic_box"  :title="pic.name" >
                          <a href="javascript:void(0);"><el-image  class="domestic_pic_item" :src="pic.src"></el-image></a>
                          <p class="domestic_p">{{pic.name}}</p>
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
            <!-- 出境游结束 -->
            <!-- 境内游开始 -->
            <el-tab-pane label="境内游" name="fifth1">
              <el-container>
                 <el-aside class="content_aside">
                  <div id="ter-width">
                    <dt class="sale_dt">游山玩水</dt>
                    <dd class="scene_dd" ref="terHot" v-for="(play,playIndex) in plays" :key="playIndex"><a href="#" class="find_a">{{play.name}}</a></dd>
                  </div>
                  <div class="homestay">
                    <dt  class="sale_dt">民俗艺术</dt>
                    <dd class="scene_dd" ref="terDestination" v-for="(art,artIndex) in arts" :key="artIndex"><a class="find_a" href="#">{{art.name}}</a></dd> 
                  </div>
                </el-aside>
                <el-main>
                  <ul class="main_ul">
                    <li class="main_li"  v-for="(terCityTitle,terCityTitleyIndex) in terCityTitles.slice(0,8)" :key="terCityTitleyIndex">
                        <button class="city_button" :class="terCityTitleyIndex==isColor? 'btnColor' : ''"  @click="terImageTab(terCityTitle.py,terCityTitleyIndex)">{{terCityTitle.name}}</button>
                    </li>
                     <el-select v-model="terSelect" round size="mini" class="main_button select_city" @change="terCityChage">
                      <el-option 
                        v-for="(terSelectTitle,terSelectTitleIndex) in terCityTitles.slice(8)" 
                        :key="terSelectTitleIndex"
                        :value="terSelectTitle.name">
                      </el-option>
                    </el-select> 
                    <span class="main_a"><a href="javascript:void(0);" v-for="(terSign,terSignIndex) in perSigns" :key="terSignIndex"> {{terSign}}</a></span>
                  </ul>
                  <div class="periphery_pic">
                    <div v-for="(pic,territoryIndex) in terCityPic" :key="territoryIndex">
                      <div class="pic_box domestic_box" :title="pic.alt">
                          <a href="#"><el-image  class="domestic_pic_item" :src="pic.src"></el-image></a>
                          <p class="domestic_p">{{pic.alt}}</p>
                          <p class="domestic_p">
                            <span class="domestic_pic_span">{{pic.name}}</span>
                            <span class="domestic_span"><span  class="circle_money">{{pic.money}}</span>起</span>
                            <svg-icon class="black_money" name="blackMoney"></svg-icon>
                         </p>
                      </div>
                    </div>
                  </div>
                </el-main>
              </el-container>
            </el-tab-pane>
            <!-- 境内游结束 -->
            <!-- 邮轮开始 -->
            <el-tab-pane label="邮轮" name="six1">
              <el-container>
                 <el-aside class="content_aside">
                  <div id="liner-width">
                    <dt class="sale_dt">热门搜索</dt>
                    <dd class="scene_dd" ref="linerFind" v-for="(linerFind,linerFindIndex) in linerFinds" :key="linerFindIndex"><a href="#" class="find_a">{{linerFind.name}}</a></dd>
                  </div>
                  <div class="group_select liner_hot">
                    <dt  class="sale_dt">热门邮轮</dt>
                    <dd class="scene_dd" ref="linerHot" v-for="(linerHot,linerHotIndex) in linerHots" :key="linerHotIndex"><a class="find_a" href="#">{{linerHot.name}}</a></dd> 
                  </div>
                </el-aside>
                <el-main>
                  <ul class="main_ul">
                    <li class="main_li" v-for="(linerCityTitle,linerCityTitleIndex) in linerCityTitles.slice(0,8)" :key="linerCityTitleIndex">
                        <button class="city_button" :class="linerCityTitleIndex==isColor?'btnColor':''" @click="linerImageTab(linerCityTitle.py,linerCityTitleIndex)">{{linerCityTitle.name}}</button>
                    </li>
                    <el-select v-model="linerSelect" size="mini" class="main_button select_city" @change="linerChange">
                      <el-option 
                        v-for="(linerSelectTitle,linerSelectTitleIndex) in linerCityTitles.slice(8)" 
                        :key="linerSelectTitleIndex"
                        :value="linerSelectTitle.name">
                      </el-option>
                    </el-select> 
                    <a class="main_a" href="javascript:void(0);">{{this.linerSigns}}</a>
                  </ul>
                  <div class="overseas_pic">
                    <div v-for="(pic,linerPicIndex) in linerCityPic" :key="linerPicIndex">
                      <div class="pic_box domestic_box" :title="pic.alt">
                          <a href="#"><el-image  class="domestic_pic_item" :src="pic.src"></el-image></a>
                          <p class="domestic_p">{{pic.name}}</p>
                          <p class="domestic_p">
                            <span class="domestic_span"><span  class="circle_money">实时计价</span></span>
                            <svg-icon class="black_money" name="blackMoney"></svg-icon>
                          </p>
                      </div>
                    </div>
                  </div>
                  <a href="#" title="">
                    <div class="main_right">
                      <!-- <el-image class="main_right_image" src=""></el-image> -->
                      <!-- <div class="rectangle"> -->
                        <!-- <p class="rectangle_text"></p> -->
                      <!-- </div> -->
                    </div>
                  </a>  
                </el-main>
              </el-container>
            </el-tab-pane>
            <!-- 邮轮结束 -->
            <!-- 当地玩乐开始 -->
            <el-tab-pane label="当地游乐" name="seventh1">
              <el-container>
                 <el-aside class="content_aside">
                  <div id="local-width">
                    <dt class="sale_dt">国外热门目的地</dt>
                    <dd class="scene_dd" ref="abroadDestination" v-for="(abroadDestination,abroadDestinationIndex) in abroadDestinations" :key="abroadDestinationIndex"><a href="#" class="find_a">{{abroadDestination.name}}</a></dd>
                  </div>
                  <div class="homestay">
                    <dt  class="sale_dt">国内热门目的地</dt>
                    <dd class="scene_dd" ref="domesticDestination" v-for="(domesticDestination,domesticDestinationtIndex) in domesticDestinations" :key="domesticDestinationtIndex"><a class="find_a" href="#">{{domesticDestination.name}}</a></dd> 
                  </div>
                </el-aside>
                <el-main>
                  <ul class="main_ul">
                    <li class="main_li" v-for="(localCityTitle,localCityTitleIndex) in localCityTitles.slice(0,8)" :key="localCityTitleIndex">
                        <button class="city_button" :class="localCityTitleIndex==isColor?'btnColor':''" @click="localImageTab(localCityTitle.py,localCityTitleIndex)">{{localCityTitle.name}}</button>
                    </li>
                    <el-select v-model="linerSelect" size="mini" class="main_button select_city" @change="localChange">
                      <el-option 
                        v-for="(localSelectTitle,localSelectTitleIndex) in localCityTitles.slice(8)" 
                        :key="localSelectTitleIndex"
                        :value="localSelectTitle.name">
                      </el-option>
                    </el-select> 
                    <span class="main_a"><a  href="javascript:void(0);" v-for="(localSign,localSignIndex) in localSigns" :key="localSignIndex">{{localSign}}</a></span>
                  </ul>
                  <div class="overseas_pic">
                    <div v-for="(pic,localPicIndex) in localCityPic" :key="localPicIndex">
                      <div class="pic_box domestic_box" :title="pic.alt">
                          <a href="#" class="aaa"><el-image  class="domestic_pic_item" :src="pic.src"></el-image></a>
                          <p class="domestic_p">{{pic.alt}}</p>
                          <p class="domestic_p">
                            <span class="domestic_span"><span  class="circle_money">{{pic.money}}</span></span>
                            <svg-icon class="black_money" name="blackMoney"></svg-icon>
                          </p>
                      </div>
                    </div>
                  </div>
                  <a href="#" title="">
                    <div class="main_right">
                      <el-image class="main_right_image" src="https://pages.c-ctrip.com/dm/20190328_pc/220x330[1].jpg"></el-image>
                      <!-- <div class="rectangle"> -->
                        <!-- <p class="rectangle_text"></p> -->
                      <!-- </div> -->
                    </div>
                  </a>  
                </el-main>
              </el-container>
            </el-tab-pane>
            <!-- 当地玩乐结束 -->
            <!-- 主题游开始 -->
            <el-tab-pane label="主题游" name="eighth1">
              <el-container>
                 <el-aside class="content_aside">
                  <div id="theme-width">
                    <dt class="sale_dt">户外</dt>
                    <dd class="scene_dd" ref="themeOutdoors"  v-for="(outdoors,outdoorsIndex) in outdoors" :key="outdoorsIndex"><a href="#" class="find_a">{{outdoors.name}}</a></dd>
                  </div>
                  <div class="theme_natural">
                    <dt  class="sale_dt">自然</dt>
                    <dd class="scene_dd"  ref="themeNatural" v-for="(natural,naturalIndex) in naturals" :key="naturalIndex"><a class="find_a" href="#">{{natural.name}}</a></dd> 
                  </div>
                  <div class="theme_humanity">
                    <dt  class="sale_dt">人文</dt>
                    <dd class="scene_dd" ref="themeHumanity" v-for="(humanity ,humanityIndex) in humanities" :key="humanityIndex"><a class="find_a" href="#">{{humanity.name}}</a></dd> 
                  </div>
                  <div class="theme_festival">
                    <dt  class="sale_dt">节庆</dt>
                    <dd class="scene_dd" ref="themeFestival" v-for="(festival,festivalIndex) in festivals" :key="festivalIndex"><a class="find_a" href="#">{{festival.name}}</a></dd> 
                  </div>
                </el-aside>
                <el-main>
                  <ul class="main_ul">
                    <li class="main_li"  v-for="(themeCityTitle,themeCityTitleyIndex) in themeCityTitles" :key="themeCityTitleyIndex">
                        <button class="city_button" :class="themeCityTitleyIndex==isColor? 'btnColor' : ''"  @click="themeImageTab(themeCityTitle.py,themeCityTitleyIndex)">{{themeCityTitle.name}}</button>
                    </li>
                    <span class="main_a"><a href="javascript:void(0);">更多主题游 </a></span>
                  </ul>
                  <div class="periphery_pic">
                    <div v-for="(pic,themeCityPicIndex) in themeCityPic" :key="themeCityPicIndex">
                      <div class="pic_box domestic_box" :title="pic.alt">
                          <a href="#"><el-image  class="domestic_pic_item" :src="pic.src"></el-image></a>
                          <p class="domestic_p">{{pic.alt}}</p>
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
            <!-- 主题游结束 -->
            <el-tab-pane class="tab_right">
            <span slot="label">
            
              <el-popover
                placement="right-start"
                trigger="click" 
               >
                
                <el-select ref="select" slot="reference" v-model="citySelect" placeholder="上海" class="city_select" @click="aaa" @visible-change="visibleChange">
                  <el-option v-show="elOption"></el-option>
                 </el-select>
                 <ChooseCity class="choose_width"  ref="data"></ChooseCity>
              </el-popover>

             
            </span>
          </el-tab-pane>

        </el-tabs>
      </div>
      <!-- 游玩结束 -->
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
                        <div class="overseas_pic">
                          <div  v-for="(image,imageIndex) in images" :key="imageIndex">
                            <div class="pic_box" :title='pic.alt' v-for="(pic,picIndex) in image.contents" :key="picIndex" v-show="image.index==num">
                              <a href="javascript:void(0)"><el-image  class="pic_item" :src="pic.src" :alt="image.alt" ></el-image></a>
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
                      </div>
                       
                    </el-main>
                </el-container>
            </el-tab-pane>
            <!-- 海外酒店结束 -->
            <!-- 海外民俗+短租开始 -->
            <el-tab-pane label="海外民俗+短租" name="second">
              <ul class="oversea_ul"> 
                <a class="main_a" href="javascript:void(0);">更多海外民宿></a>
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
                    <dd class="scene_dd" v-for="(hotTheme,hotThemeIndex) in hotThemes" :key="hotThemeIndex"><a href="#" class="find_a">{{hotTheme.name}}</a></dd>
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
                    <dd class="scene_dd" v-for="(play,playIndex) in plays" :key="playIndex"><a href="#" class="find_a">{{play.name}}</a></dd>
                  </div>
                  <div class="homestay">
                    <dt  class="sale_dt">民俗艺术</dt>
                    <dd class="scene_dd" v-for="(art,artIndex) in arts" :key="artIndex"><a class="find_a" href="#">{{art.name}}</a></dd> 
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
                    <dd class="scene_dd" v-for="(hotGroup,hotGroupIndex) in hotGroups" :key="hotGroupIndex"><a href="#" class="find_a">{{hotGroup.name}}</a></dd>
                  </div>
                  <div class="group_select">
                    <dt  class="sale_dt">团购精选</dt>
                    <dd class="sale_dd" v-for="(groupSelected,groupSelectedIndex) in groupSelecteds" :key="groupSelectedIndex"><a class="find_a" href="#">{{groupSelected.name}}</a></dd> 
                  </div>
                </el-aside>
                <el-main>
                  <ul class="main_ul">
                    <li class="main_li" v-for="(group,groupIndex) in group" :key="groupIndex">
                        <el-button round size="mini" class="main_button" :class="{active:(groupIndex==num)}" @click="imageTab(groupIndex)">{{group.title}}</el-button>
                    </li>
                    <a class="main_a" href="javascript:void(0);">更多团购产品></a>
                  </ul>
                  <div class="overseas_pic">
                    <div v-for="(group,groupIndex) in group" :key="groupIndex">
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
      <!-- 酒店结束 -->
     
    

    </div>
</template>

<script>
import AirTickets from "./AirTickets.vue";
import ChooseCity from "./ChooseCity.vue";

export default {
  name: "Center",
  components: {
    AirTickets,
    ChooseCity
  },
  data() { 
    return {
      activeName1:"first1",
      hotImages:[],
      num1:0, 
      num2:0,
      bg:false,
      current:0,
      isblur:false,
      round:false,
      peripherys:{},
      selectValue:"更多",
      perCityTitles:[],
      peripheryPic:[],
      isColor:0,
      themePlays:[],
      ticketSelect:"更多",
      ticketTitles:[],
      ticketPics:{},
      ticketPic:[],
      ticketThemePlays:[],
      ticketDestinations:[],
      exitSelect:"更多",
      exitCityTitles:[],
      exitCityPics:{},
      exitCityPic:[],
      perSigns:[],
      exitSigns:[],
      terCityTitles:[],
      terCityPics:{},
      terCityPic:[],
      terSelect:"更多",
      terSigns:[],
      linerCityTitles:[],
      linerCityPics:{},
      linerCityPic:[],
      linerSelect:"更多",
      linerFinds:[],
      linerHots:[],
      linerSigns:[],
      abroadDestinations:[],
      domesticDestinations:[],
      localCityTitles:[],
      localSigns:[],
      localCityPic:[],
      localCityPics:{},
      outdoors:[],
      naturals:[],
      humanities:[],
      festivals:[],
      themeCityTitles:[],
      themeCityPic:[],
      themeCityPics:{},
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
      group:[],
      hotCity:{},
      maincities:[],
      citySelect:"",
      visible:Boolean,
      elOption:false
    };
  },
 
  methods: {
    load(){
      this.hotCity = {
        tabName: "热门城市",
        cities: [
          "北京",
          "成都",
          "广州",
          "杭州",
          "南京",
          "青岛",
          "上海",
          "深圳",
          "沈阳",
          "天津",
          "武汉",
          "厦门",
        ]
      },
      this.maincities = [
        {
          tabName:"ABCDE",
          groups:[
            {
              start:"B",
              cities:[
                "北京",
                "包头",
              ]
            },
            {
              start:"C",
              cities:[
                "重庆",
                "成都",
                "长春",
                "长沙",
                "常州",
              ]
            },
            {
              start:"D",
              cities:[
                "大连",
                "东莞",
              ]
            },
          ]
        },
        {
          tabName:"FGHJ",
          groups:[
            {
              start:"F",
              cities:[
                "佛山",
                "福州",
              ]
            },
            {
              start:"G",
              cities:[
                "广州",
                "贵阳",
                "长春",
              ]
            },
            {
              start:"H",
              cities:[
                "哈尔滨",
                "杭州",
                "海口",
                "呼和浩特",
                "合肥",
              ]
            },
            {
              start:"J",
              cities:[
                "济南",
                "江门",
              ]
            },
          ]
        },
        {
          tabName:"KLMNP",
          groups:[
            {
              start:"K",
              cities:[
                "昆明",
                "喀什市",
              ]
            },
            {
              start:"L",
              cities:[
                "拉萨",
                "兰州",
              ]
            },
            {
              start:"M",
              cities:[
                "绵阳",
              ]
            },
            {
              start:"N",
              cities:[
                "南京",
                "南通",
                "宁波",
                "南昌",
                "南宁",
              ]
            },
          ]
        },
        {
          tabName:"QRSTW",
          groups:[
            {
              start:"Q",
              cities:[
                "青岛",
                "泉州",
              ]
            },
            {
              start:"S",
              cities:[
                "上海",
                "苏州",
                "深圳",
                "三亚",
                "石家庄",
                "汕头",
              ]
            },
            {
              start:"T",
              cities:[
                "天津",
                "太原",
                "台州",
              ]
            },
            {
              start:"W",
              cities:[
                "无锡",
                "乌鲁木齐",
                "武汉",
                "威海",
                "温州",
              ]
            },
          ]
        },
        {
          tabName:"XYZ",
          groups:[
            {
              start:"X",
              cities:[
                "西安",
                "厦门",
                "西宁",
                "西昌",
                "徐州",
              ]
            },
            {
              start:"Y",
              cities:[
                "银川",
                "运城",
                "延吉",
                "榆林",
                "烟台",
                "义乌",
              ]
            },
            {
              start:"Z",
              cities:[
                "珠海",
                "中山",
                "郑州",
              ]
            },
          ]
        },
      ]
    },
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
                food:"美食:泰式炒面、泰式椰汁鸡汤、椒盐濑尿虾、泰北烤鱼、咖喱蟹、绿咖喱椰汁鸡、马散麻咖喱��、泰南咖喱鱼、烤椰塔、泰式咖喱炒蟹、柠檬蒸鲈鱼、咖喱鸡面、泰式炒饭、青木瓜色拉、泰式炒河粉、椰汁鸡汤、海鲜烧烤、菠萝炒饭、青木瓜沙拉、咖喱螃蟹、泰式菠萝炒饭、水果飞饼、椰子冰淇淋、泰式炒稞条、炸椰子丸和枣椰丸、绿咖喱鸡、泰式咖喱蟹、泰式汤米粉、泰式酸辣汤、海鲜、芒果糯米饭、咖啡、泰式青木瓜沙拉、炸猪皮、甲米烤鸡腿、冬阴功汤、青木瓜沙律、龙虾、泰式空心菜",
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
     this.perCityTitles = [
        {
          name:"精选",
          py:"jingXuan",
          index:0
        },
          {
          name:"汕头",
          py:"shanTou",
          index:1
        },
          {
          name:"厦门",
          py:"xiaMen",
          index:2
        },
          {
          name:"漳州",
          py:"zhangZhou",
          index:3
        },
          {
          name:"惠州",
          py:"huiZhou",
          index:4
        },
          {
          name:"潮州",
          py:"chaoZhou",
          index:5
        },
          {
          name:"梅州",
          py:"meiZhou",
          index:6
        },
        {
          name:"广州",
          py:"guangZhou",
          index:7
        },
        {
          name:"揭阳",
          py:"jieYang",
          index:8
        },
        {
          name:"深圳",
          py:"shenZhen",
          index:9
        }

      ],
     
     this.peripherys = {
        "jingXuan":[     
            {
              src:"https://dimg03.c-ctrip.com/images/100s0r000000h753vAE4D_C_228_132.jpg ",
              alt:"Q加·南澳黄金海岸希维尔假日公寓1-2晚，浪漫海景房型，面朝大海，心旷神怡！•【离青澳湾步行距离近】",
              money:"158"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/20030x000000lebrj4314_C_228_132.jpg",
              alt:"厦门灵玲大酒店1-3晚+部分房型含马戏城/动物园套餐 房型礼包为准•【可选灵玲马戏城】",
              money:"451",
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
        "shanTou":[
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
        "xiaMen":[
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
        "nanAO":[
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
        "zhangZhou":[
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
        "huiZhou":[
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
        "chaoZhou":[
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
        "meiZhou":[
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
        "guangZhou":[
            {
              src:"https://dimg03.c-ctrip.com/images/fd/tg/g5/M03/B1/AD/CggYr1bFXRaAGyKBACSzLEIGjQU464_C_228_132.jpg",
              alt:"广州2日自由行·【高铁往返】粤享美食·打卡网红餐厅·吃喝逛街嗨不停",
              money:"538"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200s0w000000ks3jt1DC9_C_228_132.jpg",
              alt:"长隆酒店(广州长隆野生动物世界店)1-3晚+享免费穿梭往返园区及地铁口，可加购野生动物世界/欢乐世界/大马戏门票",
              money:"862"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200s0g00000088mf5799A_C_228_132.jpg",
              alt:"广州卓思道温泉度假酒店+双人早餐+午餐+晚餐，部分房型含私家泡池•【从化温泉】",
              money:"1009"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200d170000011h7f4B1ED_C_228_132.jpg",
              alt:"广州融创堇山酒店+融创雪世界/陆乐园/体育世界等多套票可选·【融创度假区内五钻酒店 融创自营品牌】",
              money:"实时计价"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200c0w000000kraj3BCBE_C_228_132.jpg",
              alt:"广州南沙花园酒店+2大1小(12岁以下)早餐+200元桃园馆中餐厅消费额度+赠送特色甜品2份+畅游滨海公园•【亲子游】",
              money:"799"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200t16000001053p15852_C_228_132.jpg",
              alt:"州温斯顿高.级公寓1-3晚，公寓紧邻景区",
              money:"260"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200q11000000rbjce77A0_C_228_132.jpg",
              alt:"广州三英温泉度假酒店+双人早餐+房间独立温泉池无限次畅泡，可选含晚餐套票•【增城温泉】",
              money:"711"
            },
            {
              src:"https://images4.c-ctrip.com/target/200j0n000000e1l148219_C_228_132.jpg",
              alt:"奥美家国际公寓(广州汉溪长隆地铁站店)1-3晚，可加购长隆野生动物世界/大马戏/欢乐世界门票•【长隆商圈 5公里内】",
              money:"118"
            },
          ],
        "jieYang":[
            {
              src:"https://dimg04.c-ctrip.com/images/30061900000160si45848_C_228_132.png",
              alt:"普宁盘龙湾温泉度假村+盘龙湾温泉+双人早餐+民族杂技表演+露天恒温泳池+无限次养生温泉/私家温泉池·【特惠】",
              money:"338"
            },
            {
              src:"https://images4.c-ctrip.com/target/200e0700000021h041F77_C_228_132.jpg",
              alt:"普宁盘龙湾温泉度假村1晚+可选盘龙湾温泉",
              money:"302"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/fd/tg/g2/M0B/E5/05/Cghzf1WdCKOAf040ACXk4zkKudo873_C_228_132.jpg",
              alt:"揭西京明温泉度假村1-2晚，特色温泉、生态美景、度假村，欢乐之旅！",
              money:"316"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200t0h000000906638449_C_228_132.jpg",
              alt:"揭阳大洋国际生态旅游度假区，可选大洋国际生态旅游度假区",
              money:"232"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/100p0b0000005sg6mB8E2_C_228_132.jpg",
              alt:"揭阳大北山度假村1-2晚，位于国家森林公园内，毗邻十八湾瀑布、茶园风光，位置得天独厚，尽收湖光山色！【森林 瀑布 茶园】",
              money:"286"
            },
            {
              src:"https://dimg04.c-ctrip.com/images/300t1b0000019vwdo9E03_C_228_132.jpg",
              alt:"普宁盘龙湾温泉度假村+盘龙湾温泉+球馆体验券·毗邻粤东拜佛胜地——盘龙阁寺，依山傍水、空气清新、风景秀丽",
              money:"338"
            },
            {
              src:"https://images4.c-ctrip.com/target/hotel/433000/432073/860d4db7738541c9b52c342299f4a658_C_228_132.jpg",
              alt:"揭西大北山度假村1晚+可选黄满寨瀑布",
              money:"286"
            },
            {
              src:"https://images4.c-ctrip.com/target/200p0l000000d6aesF968_C_228_132.jpg",
              alt:"维也纳国际酒店(揭阳楼店)(原中天文化酒店)1晚+可选宝山湖",
              money:"199"
            },
          ],
        "shenZhen":[
            {
              src:"https://dimg03.c-ctrip.com/images/hotel/80000/79883/d28a24ab6615495f884e3e9f1cc3a603_C_228_132.jpg",
              alt:"深圳东部华侨城黑森林酒店+可选双人2日无限次大峡谷/茶溪谷套票/单房，部分送缆车/小火车，黑森林主题•【亲子度假】",
              money:"333"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/fd/hotel/g1/M04/6D/3A/CghzfFWCKxiAWhQcAALIMPd-wrY852_C_228_132.jpg",
              alt:"深圳海上田园酒店1晚•【住店就可免门票 景区步行距离250米（约4分钟）】",
              money:"443"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200f090000003t2zs72B5_C_228_132.jpg",
              alt:"城市客栈（深圳世界之窗店）1-2晚+可选世界之窗门票+徒步可达世界之窗•【高性价比】",
              money:"294"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200b0k000000bl3401196_C_228_132.jpg",
              alt:"深圳东部华侨城茵特拉根酒店+2日无限次大峡谷/茶溪谷套票/净房可选，部分送缆车/小火车·立减20元/单，亲子情侣度假",
              money:"719"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/fd/tg/g3/M09/4A/C6/CggYGVaUpY2AZk-yACGJ8DHMMOs490_C_228_132.jpg",
              alt:"惠州+深圳3日自由行·{高铁}·小西湖美景+探游鹏城·一键预定·小长假悠选",
              money:"662"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/10090t000000ihmjbC31C_C_228_132.jpg",
              alt:"抖音网红！深圳凯贝丽君临海域服务公寓+45层无边际海景泳池+望海健身房，近大小梅沙、东部华侨城•【海滨沙滩】",
              money:"376"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200f0m000000dgdw8439F_C_228_132.jpg",
              alt:"深圳华侨城洲际大酒店1-2晚,可加购世界之窗阿尔卑斯冰雪世界门票•【畅玩酒店人工沙滩、儿童乐园、室内外游泳池】",
              money:"867"
            },
            {
              src:"https://dimg03.c-ctrip.com/images/200t0q000000g97gn2FA1_C_228_132.jpg",
              alt:"【单谷+温泉】深圳东部华侨城瀑布酒店1晚（含早）+双人2日无限次大峡谷+双人茵特拉根单次温泉+网红小火车+缆车•【亲子温泉】",
              money:"808"
            },

          ]
        
      
      
      },
     this.themePlays = [
      {
        name:"海岛"
      },
      {
        name:"古镇"
      },
      {
        name:"蜜月"
      },
      {
        name:"亲子"
      },
      {
        name:"爸妈游"
      },
      {
        name:"美食"
      },

     ],
     this.ticketTitles = [
      {
        name:"广东",
        py:"guangDong",
        index:0
      },
      {
        name:"广西",
        py:"guangXi",
        index:1
      },
      {
        name:"湖南",
        py:"huNan",
        index:2
      },
      {
        name:"湖北",
        py:"huBei",
        index:3
      },
      {
        name:"海南",
        py:"haiNan",
        index:4
      },
      {
        name:"江西",
        py:"jiangXi",
        index:5
      },
      {
        name:"福建",
        py:"fuJian",
        index:6
      },
      {
        name:"港澳台",
        py:"gangAoTai",
        index:7
      },
      {
        name:"日韩",
        py:"riHan",
        index:8
      },
     ],
     this.ticketPics = {
      "guangDong":[
        {
          src:"https://dimg04.c-ctrip.com/images/350j1f000001fxewq122A_C_220_110.jpg",
          alt:"深圳欢乐谷",
          money:"115"
        },
        {
          src:"https://dimg02.c-ctrip.com/images/fd/tg/g4/M01/1A/C7/CggYHlXJyO6AWI2oAAJJQTk6VNA030_C_220_110.jpg",
          alt:"深圳野生动物园",
          money:"180"
        },
        {
          src:"https://dimg05.c-ctrip.com/images/100n0d0000006yg4mEF3D_C_220_110.jpg",
          alt:"锦绣中华民俗村",
          money:"88"
        },
        {
          src:"https://dimg02.c-ctrip.com/images/100e0e0000006z9mhEE4D_C_220_110.jpg",
          alt:"东部华侨城",
          money:"68"
        },
        {
          src:"https://youimg1.c-ctrip.com/target/fd/tg/g5/M09/54/A5/CggYsFcVlWyAWQPIAACQvqq8ZC0432_C_220_110.jpg",
          alt:"正佳极地海洋世界",
          money:"110"
        },
      ],
      "guangXi":[
        {
          src:"https://dimg04.c-ctrip.com/images/350l180000014eyiy54CB_C_220_110.jpg",
          alt:"《印象刘三姐》山水实景演出",
          money:"99"
        },
        {
          src:"https://youimg1.c-ctrip.com/target/10060x000000lenxuCE71_C_220_110.jpg",
          alt:"漓江",
          money:"108"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350p180000013x80v4D56_C_220_110.jpg",
          alt:"两江四湖",
          money:"29"
        },
        {
          src:"https://youimg1.c-ctrip.com/target/fd/tg/g2/M02/DE/21/Cghzf1THSCmAB2kOAAvmHQPXVyQ419_C_220_110.jpg",
          alt:"象山景区",
          money:"51"
        },
        {
          src:"https://youimg1.c-ctrip.com/target/fd/tg/g2/M0A/4D/48/CghzgFSzKnCANXHYAAQxl99Il8k201_C_220_110.jpg",
          alt:"七星景区",
          money:"50"
        },
        {
          src:"https://youimg1.c-ctrip.com/target/tg/017/415/265/e671ebc1a4d145a28d5cc9546e4e03df_C_220_110.jpg",
          alt:"天籁·蝴蝶泉",
          money:"22.5"
        },
      ],
      "huNan":[
        {
          src:"https://youimg1.c-ctrip.com/target/fd/tg/g3/M0B/79/0A/CggYGVaCMmeABWKvABclN5juAxw435_C_220_110.jpg",
          alt:"天门山国家森林公园",
          money:"126"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/35051e000001ezir2DF15_C_220_110.jpg",
          alt:"新华联铜官窑古镇",
          money:"30"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350j12000000sxjcgBC01_C_220_110.jpg",
          alt:"凤凰古城",
          money:"25"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350a14000000wasn2DBCC_C_220_110.jpg",
          alt:"长沙世界之窗",
          money:"191"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350m1f000001glfhiEDF9_C_220_110.jpg",
          alt:"张家界千古情景区",
          money:"265"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350e13000000v6mws479C_C_220_110.jpg",
          alt:"长沙生态动物园",
          money:"20"
        },
      ],
      "huBei":[
        {
          src:"https://youimg1.c-ctrip.com/target/100c0p000000fpu0gC1CC_C_220_110.jpg",
          alt:"武汉两江游览（夜游长江）",
          money:"110"
        },
        {
          src:"https://youimg1.c-ctrip.com/target/100l0e00000076sqe5EC4_C_220_110.jpg",
          alt:"知音号",
          money:"100"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350v160000010zsx7A3C3_C_220_110.jpg",
          alt:"朝天吼漂流",
          money:"99"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350311000000r01mxC5A2_C_220_110.jpg",
          alt:"中国唐城",
          money:"40"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350l180000015h82qE4E1_C_220_110.jpg",
          alt:"恩施地心谷景区石门河",
          money:"190"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350n190000015w3lq7850_C_220_110.jpg",
          alt:"恩施大峡谷",
          money:"70"
        },
      ],
      "haiNan":[
        {
          src:"https://dimg04.c-ctrip.com/images/3501180000013ycqo191F_C_220_110.jpg",
          alt:"亚龙湾热带天堂森林公园",
          money:"145"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350l15000000yck99BA47_C_220_110.jpg",
          alt:"呀诺达雨林文化旅游区",
          money:"66"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350r1a0000019lyzv4858_C_220_110.jpg",
          alt:"三亚亚特兰蒂斯C秀",
          money:"138"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350m0x000000ljyki2B70_C_220_110.jpg",
          alt:"蜈支洲岛",
          money:"133"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350l15000000xyqth6933_C_220_110.jpg",
          alt:"天涯海角",
          money:"60"
        },
        {
          src:"https://youimg1.c-ctrip.com/target/fd/tg/g1/M03/7D/32/CghzfFWwz9eAFdICABJIucYkXDg976_C_220_110.jpg",
          alt:"亚龙湾",
          money:"120"
        },
      ],
      "jiangXi":[
        {
          src:"https://dimg04.c-ctrip.com/images/35031c000001d52ui15D0_C_220_110.jpg",
          alt:"南昌融创乐园",
          money:"实时计价"
        },
        {
          src:"https://dimg06.c-ctrip.com/images/350t0v000000jsqicC53D_C_220_110.jpg",
          alt:"古窑民俗博览区",
          money:"85"
        },
        {
          src:"https://youimg1.c-ctrip.com/target/10030d0000006w9830D9F_C_220_110.jpg",
          alt:"婺源风景区",
          money:"105"
        },
        {
          src:"https://dimg06.c-ctrip.com/images/350j0p000000fmflk273B_C_220_110.jpg",
          alt:"灵山风景名胜区",
          money:"75"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350m13000000tqrpi136C_C_220_110.jpg",
          alt:"婺源篁岭",
          money:"140"
        },
        {
          src:"https://dimg06.c-ctrip.com/images/350i0v000000k1a0s032D_C_220_110.jpg",
          alt:"龙虎山风景区",
          money:"45"
        },
      ],
      "fuJian":[
        {
          src:"https://youimg1.c-ctrip.com/target/1006050000000sr6w87FC_C_220_110.jpg",
          alt:"武夷山",
          money:"85"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/35021b000001bd01rFD81_C_220_110.jpg",
          alt:"巨鹏飞梦幻海岸",
          money:"65"
        },
        {
          src:"https://youimg1.c-ctrip.com/target/100b0h00000090t4q990F_C_220_110.jpg",
          alt:"鹭江夜游",
          money:"69"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/35011e000001g24c8A60E_C_220_110.jpg",
          alt:"《闽南神韵》演出",
          money:"129"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350h0y000000m2fka5F8D_C_220_110.jpg",
          alt:"灵玲马戏城",
          money:"70"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350616000000z133d583D_C_220_110.jpg",
          alt:"厦门科技馆",
          money:"30"
        },
      ],
      "gangAoTai":[
        {
          src:"https://dimg04.c-ctrip.com/images/350a1800000143hlrDB98_C_220_110.jpg",
          alt:"香港天际100观景台",
          money:"118"
        },
        {
          src:"https://youimg1.c-ctrip.com/target/100l0e000000725v1870C_C_220_110.jpg",
          alt:"挪亚方舟",
          money:"67"
        },
        {
          src:"https://youimg1.c-ctrip.com/target/100u0r000000gpm964EBB_C_220_110.jpg",
          alt:"台北101大楼",
          money:"118"
        },
        {
          src:"https://youimg1.c-ctrip.com/target/100d080000003c0mw3230_C_220_110.jpg",
          alt:"太平山顶",
          money:"39"
        },
      ],
      "riHan":[
        {
          src:"https://dimg04.c-ctrip.com/images/3509180000014kq2a77C1_C_220_110.jpg",
          alt:"爱宝乐园",
          money:"220"
        },
        {
          src:"https://youimg1.c-ctrip.com/target/fd/tg/g2/M03/4A/EF/Cghzf1WjfKKAErYmABFj1QV6_XM155_C_220_110.jpg",
          alt:"济州泰迪熊博物馆",
          money:"40.5"
        },
        {
          src:"https://youimg1.c-ctrip.com/target/100q0d0000006rhpf1BA5_C_220_110.jpg",
          alt:"藤子·F·不二雄博物馆",
          money:"104"
        },
        {
          src:"https://youimg1.c-ctrip.com/target/100l0p000000fit9z18ED_C_220_110.jpg",
          alt:"冲绳美丽海水族馆",
          money:"119"
        },
        {
          src:"https://youimg1.c-ctrip.com/target/fd/tg/g5/M06/6B/53/CggYsFcV1s6AZKAXACiXEXn1JII084_C_220_110.jpg",
          alt:"三鹰之森吉卜力美术馆",
          money:"97"
        },
        {
          src:"https://youimg1.c-ctrip.com/target/10070a00000055m6kA921_C_220_110.jpg",
          alt:"日本环球影城",
          money:"509"
        },
      ],
     },
     this.ticketThemePlays = [
      {
        name:"门票9元起"
      },
      {
        name:"当季热卖"
      },
      {
        name:"全球乐园"
      },
      {
        name:"长隆龙秀"
      },
     ],
     this.ticketDestinations = [
      {
        name:"欢乐谷"
      },
      {
        name:"长隆海洋王国"
      },
      {
        name:"珠江夜游"
      },
      {
        name:"珠海长隆剧院"
      },
      {
        name:"小梅沙海洋公园"
      },
      {
        name:"长鹿旅游休博园"
      },
      {
        name:"东部华侨城"
      },
      {
        name:"百万葵园"
      },
      {
        name:"古龙峡"
      },
      {
        name:"长隆欢乐世界"
      },
      {
        name:"广州塔"
      },
     ],
     this.exitCityTitles = [
      {
        name:"精选",
        py:"jingXuan",
        index:0
      },
      {
        name:"泰国",
        py:"taiGuo",
        index:1
      },
      {
        name:"日本",
        py:"riBen",
        index:2
      },
      {
        name:"东京",
        py:"dongJing",
        index:3
      },
      {
        name:"美国",
        py:"meiGuo",
        index:4
      },
      {
        name:"马尔代夫",
        py:"maErDaiFu",
        index:5
      },
      {
        name:"塞尔维亚",
        py:"saiErWeiYa",
        index:6
      },
      {
        name:"巴厘岛",
        py:"baLiDao",
        index:7
      },
      {
        name:"普吉岛",
        py:"puJiDao",
        index:8
      },
      {
        name:"俄罗斯",
        py:"eLuoSi",
        index:9
      },
     ],
     this.terCityTitles = [
      {
        name:"精选",
        py:"jingXuan",
        index:0
      },
      {
        name:"深圳",
        py:"shenZhen",
        index:1
      },
      {
        name:"惠州",
        py:"huiZhou",
        index:2
      },
      {
        name:"桂林",
        py:"guiLin",
        index:3
      },
      {
        name:"厦门",
        py:"xiaMen",
        index:4
      },
      {
        name:"珠海",
        py:"zhuHai",
        index:5
      },
      {
        name:"三亚",
        py:"sanYa",
        index:6
      },
      {
        name:"清远",
        py:"qingYuan",
        index:7
      },
      {
        name:"丽江",
        py:"liJiang",
        index:8
      },
      {
        name:"云南",
        py:"yunNan",
        index:9
      },
     ],
     this.terCityPics = {
      "jingXuan":[
        {
          src:"https://dimg03.c-ctrip.com/images/fd/tg/g3/M09/4A/C6/CggYGVaUpY2AZk-yACGJ8DHMMOs490_C_228_132.jpg",
          alt:"惠州+深圳3日自由行·{高铁}·小西湖美景+探游鹏城·一键预定·小长假悠选",
          money:"662"
        },
        {
          src:"https://dimg03.c-ctrip.com/images/fd/tg/g4/M00/C2/0E/CggYHVX7s8yAKDAxABIUI29-T6Q219_C_228_132.jpg",
          alt:"深圳+惠州3日自由行·{高铁}·探游鹏城+小西湖美景·一键预定·小长假悠选（深进惠出）",
          money:"786"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300q15000000ypkf6A31F_C_228_132.jpg",
          alt:"广西北海+涠洲岛+桂林+漓江+阳朔+龙脊梯田8日7晚私家团(5钻) 【携程自营-新颖玩法】一单一团【住2晚涠洲岛海景民宿】四星船游漓江+龙脊梯田双缆车+遇龙河竹筏 【二选一：印象刘三姐or千古情】多人出行至高立减8888",
          money:"实时计价"
        },
        {
          src:"https://dimg03.c-ctrip.com/images/fd/tg/g4/M09/1B/82/CggYHlYkvBmAYzxAABkOZQ_bSBQ343_C_228_132.jpg",
          alt:"厦门+鼓浪屿+福建土楼4日3晚跟团游(5钻) 【爸妈放心游】全程含餐 多重保障 观赏双土楼 永定土楼王+云水谣古镇深度游 赠 『暖心保温杯+尽孝按摩捶』 让爸妈爱上旅行",
          money:"1857"
        },
        {
          src:"https://dimg03.c-ctrip.com/images/fd/tg/g1/M07/7B/1B/CghzfFWwtDKAcL7CACXHUBEwW5s310_C_228_132.jpg",
          alt:"珠海+澳门4日自由行(5钻)·1晚长隆酒店+2晚澳门五钻酒店|可选长隆海洋王国门票 【亲子游热卖】",
          money:"985"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300j10000000ocs9zCC0E_C_228_132.jpg",
          alt:"海南三亚+海口5日4晚跟团游(4钻)【度假预售】买一送一+五星海景房+蜈支洲一整天+篝火派对+特色美食+一起浪迹天涯海角~",
          money:"2440"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30011c000001dfwe3E974_C_228_132.jpg",
          alt:"云南丽江+大理6日5晚跟团游(4钻) 『国际五星·一价全含·父母带娃儿童免单』赠20寸行李箱+现金红包『自家发团 0差评』VIP私人游船+雪山大索登顶4680+敞篷JEEP游洱海『网红天空之境+蓝月谷+5A石林』赠【丽水金沙表演】",
          money:"2155"
        },
        {
          src:"https://dimg03.c-ctrip.com/images/fd/hotel/g3/M08/AB/98/CggYGlZeg9CAEgIYAARRRT08clk983_C_228_132.jpg",
          alt:"清远聚龙湾温泉2日1晚自由行 【踏春自驾游】佛冈聚龙湾天然度假村，住宿1晚+双人自助早餐+双人无限次温泉+双人汽车特技表演门票+大风车游乐园150元一套游乐金币（此产品为单订房，一间房可入住2成人）",
          money:"268"
        },
      ],
      "shenZhen":[
        {
            src:"https://dimg03.c-ctrip.com/images/hotel/80000/79883/d28a24ab6615495f884e3e9f1cc3a603_C_228_132.jpg",
            alt:"深圳东部华侨城黑森林酒店+可选双人2日无限次大峡谷/茶溪谷套票/单房，部分送缆车/小火车，黑森林主题•【亲子度假】",
            money:"333"
          },
          {
            src:"https://dimg03.c-ctrip.com/images/fd/hotel/g1/M04/6D/3A/CghzfFWCKxiAWhQcAALIMPd-wrY852_C_228_132.jpg",
            alt:"深圳海上田园酒店1晚•【住店就可免门票 景区步行距离250米（约4分钟）】",
            money:"443"
          },
          {
            src:"https://dimg03.c-ctrip.com/images/200f090000003t2zs72B5_C_228_132.jpg",
            alt:"城市客栈（深圳世界之窗店）1-2晚+可选世界之窗门票+徒步可达世界之窗•【高性价比】",
            money:"294"
          },
          {
            src:"https://dimg03.c-ctrip.com/images/200b0k000000bl3401196_C_228_132.jpg",
            alt:"深圳东部华侨城茵特拉根酒店+2日无限次大峡谷/茶溪谷套票/净房可选，部分送缆车/小火车·立减20元/单，亲子情侣度假",
            money:"719"
          },
          {
            src:"https://dimg03.c-ctrip.com/images/fd/tg/g3/M09/4A/C6/CggYGVaUpY2AZk-yACGJ8DHMMOs490_C_228_132.jpg",
            alt:"惠州+深圳3日自由行·{高铁}·小西湖美景+探游鹏城·一键预定·小长假悠选",
            money:"662"
          },
          {
            src:"https://dimg03.c-ctrip.com/images/10090t000000ihmjbC31C_C_228_132.jpg",
            alt:"抖音网红！深圳凯贝丽君临海域服务公寓+45层无边际海景泳池+望海健身房，近大小梅沙、东部华侨城•【海滨沙滩】",
            money:"376"
          },
          {
            src:"https://dimg03.c-ctrip.com/images/200f0m000000dgdw8439F_C_228_132.jpg",
            alt:"深圳华侨城洲际大酒店1-2晚,可加购世界之窗阿尔卑斯冰雪世界门票•【畅玩酒店人工沙滩、儿童乐园、室内外游泳池】",
            money:"867"
          },
          {
            src:"https://dimg03.c-ctrip.com/images/200t0q000000g97gn2FA1_C_228_132.jpg",
            alt:"【单谷+温泉】深圳东部华侨城瀑布酒店1晚（含早）+双人2日无限次大峡谷+双人茵特拉根单次温泉+网��小火车+缆车•【亲子温泉】",
            money:"808"
          },
      ],
      "huiZhou":[
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
      "guiLin":[
        {
          src:"https://dimg04.c-ctrip.com/images/300q15000000ypkf6A31F_C_228_132.jpg",
          alt:"广西北海+涠洲岛+桂林+漓江+阳朔+龙脊梯田8日7晚私家团(5钻) 【携程自营-新颖玩法】一单一团【住2晚涠洲岛海景民宿】四星船游漓江+龙脊梯田双缆车+遇龙河竹筏 【二选一：印象刘三姐or千古情】多人出行至高立减8888",
          money:"实时计价"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300o0m000000dn9wi16F3_C_228_132.jpg",
          alt:"海南三亚+广西北海+涠洲岛10日9晚跟团游【山海传奇·暖春预售】【赠刺激骏达车技+桂林千古情】升级一晚特色4钻住宿丨【分界洲岛+呀诺达热带雨林+天涯海角】浪漫亲海丨【北海银滩+网红涠洲岛】一次旅行丨多重体验！",
          money:"4010"
        },
        {
          src:"https://dimg03.c-ctrip.com/images/fd/hotel/g1/M03/8A/C2/CghzfVVSD1eACKGbAAFlW3TGSuo507_C_228_132.jpg",
          alt:"广西北海+银滩+涠洲岛+桂林+阳朔+漓江7日6晚私家团(5钻) 【自营保障·1单1团·5钻私享·海岛之旅】 五星香格里拉 住1晚网红涠洲岛 漓江四星船+赠印象刘三姐 告别都市的熙攘与喧闹 体验无拘束的自在小假期",
          money:"实时计价"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300m1a0000018tjp611AA_C_228_132.jpg",
          alt:"贵州贵阳+广西桂林8日7晚跟团游 【黔桂连线·奇幻山水】【荔波小七孔+黄果树瀑布】人在画中游丨【千户苗寨+青岩古镇】品苗家长桌宴丨【兴坪漓江+十里画廊】赠遇龙河漂流丨【象鼻山+日月双塔】赏梦幻漓江/山水间表演！",
          money:"3655"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300u0z000000mldywB601_C_228_132.jpg",
          alt:"海南三亚+桂林+北海+阳朔10日9晚跟团游【跨过山海·爸妈放心游】【赠送刺激骏达车技+桂林千古情+升级一晚特色4钻住宿】【分界洲岛+呀诺达雨林+天涯海角+北海银滩+兴坪漓江+世外桃源+阳朔西街】丨一次旅行 多重体验",
          money:"3146"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30070n000000eu9ay4085_C_228_132.jpg",
          alt:"广西南宁+桂林+漓江+阳朔+龙脊梯田+越南河内+下龙湾9日8晚跟团游(4钻) 【桂林+下龙湾】经典山水之旅【升级5星酒店+刘三姐+送温泉】【0自费】新春抢红包 单单赠上千元礼包",
          money:"5010"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300v0z000000mwgp6AA59_C_228_132.jpg",
          alt:"海南三亚+广西桂林+北海10日9晚跟团游 【山海传奇·暖春钜惠】【网红蜈支洲岛+天堂森林公园+天涯海角】赠夜游三亚湾丨【漓江竹筏+阳朔西街+象鼻山+北海银滩】赠遇龙河竹筏漂流丨品特色美食丨一次旅行丨多重体验！",
          money:"3146"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30060f00000079cdw8A08_C_228_132.jpg",
          alt:"广西桂林+阳朔+兴坪+漓江+北海+银滩+涠洲岛7日6晚跟团游【鼠年大促.限量VIP激情桂北涠】+【赠桂林千古情演出+兴坪渔村+北海银滩+银子岩】+【漓江竹筏康美之恋.世外桃源+西街】+【24小时无缝接送机.金秋出行无忧】",
          money:"3030"
        },
      ],
      "xiaMen":[
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
      "zhuHai":[
        {
          src:"https://dimg03.c-ctrip.com/images/fd/tg/g1/M07/7B/1B/CghzfFWwtDKAcL7CACXHUBEwW5s310_C_228_132.jpg",
          alt:"珠海+澳门4日自由行(5钻)·1晚长隆酒店+2晚澳门五钻酒店|可选长隆海洋王国门票 【亲子游热卖】",
          money:"985"
        },
        {
          src:"https://dimg03.c-ctrip.com/images/fd/tg/g1/M06/CA/E5/CghzflWw4UWAe4FwAAfs2cRuFNw210_C_228_132.jpg",
          alt:"珠海+澳门3日自由行·【立减100元/单|含澳门一日游】1晚珠海口岸酒店+1晚澳门酒店|码头集合游澳门·可选长隆乐园门票",
          money:"927"
        },
        {
          src:"https://dimg03.c-ctrip.com/images/fd/tg/g2/M02/DA/1B/CghzgFUvhXWAReC9ADE7ZEfhi78922_C_228_132.jpg",
          alt:"深圳+香港+澳门+珠海3-8日自由行·可选入住深圳或珠海 接受L签 【不含往返机票】",
          money:"588"
        },
        {
          src:"https://dimg03.c-ctrip.com/images/20070m000000drpjb186D_C_228_132.jpg",
          alt:"澳门+珠海3日自由行(4钻)·【动车游】澳门1晚+长隆企鹅/马戏/横琴湾酒店1晚，可选海洋王国套票房型",
          money:"1365"
        },
        {
          src:"https://dimg03.c-ctrip.com/images/20070m000000drpjb186D_C_228_132.jpg",
          alt:"珠海+澳门3日自由行(4钻)·【动车游】长隆企鹅/马戏/横琴湾酒店1晚+澳门1晚，可选海洋王国套票房型",
          money:"1090"
        },
        {
          src:"https://dimg03.c-ctrip.com/images/20070m000000drpjb186D_C_228_132.jpg",
          alt:"澳门+珠海4日自由行(4钻)·【动车游】澳门1晚+长隆企鹅/马戏/横琴湾酒店2晚，可选海洋王国套票房型",
          money:"1814"
        },
        {
          src:"https://dimg03.c-ctrip.com/images/20070m000000drpjb186D_C_228_132.jpg",
          alt:"珠海+澳门4日自由行(4钻)·【动车游】长隆企鹅/马戏/横琴湾酒店2晚+澳门1晚，可选海洋王国套票房型",
          money:"1291"
        },
        {
          src:"https://dimg03.c-ctrip.com/images/fd/tg/g2/M05/89/7B/Cghzf1WwxLaATloOACr-6wzbrvw414_C_228_132.jpg",
          alt:"香港+珠海3日自由行·#可加购昂坪缆车·360度欣赏大屿山风景#港珠澳大桥穿梭直达巴士【尝鲜世纪工程】！【入住珠海长隆系列酒店，亲子游潮玩法】",
          money:"712"
        },
      ],
      "sanYa":[
        {
          src:"https://dimg04.c-ctrip.com/images/300j10000000ocs9zCC0E_C_228_132.jpg",
          alt:"海南三亚+海口5日4晚跟团游(4钻) 【度假预售】买一送一+五星海景房+蜈支洲一整天+篝火派对+特色美食+一起浪迹天涯海角~",
          money:"2440"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300j10000000ocs9zCC0E_C_228_132.jpg",
          alt:"海南三亚+海口5日4晚跟团游(4钻) 【度假预售】买一送一+五星海景房+蜈支洲一整天+篝火派对+特色美食+一起浪迹天涯海角~",
          money:"2440"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300w1b000001aa1uwE877_C_228_132.jpg",
          alt:"三亚+天涯海角5日4晚跟团游(4钻)全程无自费·双飞三亚【全程连住4钻海景房，不挪窝】『超人气蜈支洲岛+南山海上观音+亚龙湾全海景玻璃栈桥』赠送双表演【三亚千古情表演+拉斯维加斯表演秀】（24小时间接受电话咨询）",
          money:"4980"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/3001170000011p4n21BE2_C_228_132.jpg",
          alt:"潜水·海南 三亚6日5晚·【OW潜水考证+专业持证教练指导】24小时跑车自驾+三亚五星海景房",
          money:"9800"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300f0t000000ikkwtAD39_C_228_132.jpg",
          alt:"海南海口+三亚6日5晚跟团游(4钻)【错峰特推.克拉海岛.打卡明星同款】【海时光.蜈支洲+南山+天涯海角+大东海】【山时光.亚龙湾天堂森林公园+梦时光.住五星海景】【味时光.赠海鲜霸王餐+特色素斋】+【24小时接送机】",
          money:"3890"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300d180000015898y3260_C_228_132.jpg",
          alt:"全球户外·海南 三亚5日4晚·【私家游艇出海+2人即可成团】海上小飞机体验+24小时超跑自驾+海上拖拽伞+海上摩托艇+海上大飞鱼+专业教练指导潜水+五星海景房",
          money:"9800"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300o0m000000dn9wi16F3_C_228_132.jpg",
          alt:"海南三亚6日5晚跟团游【春季亲子家庭游.畅玩亚特兰蒂斯水世界+升级1晚海棠湾·福海棠套房】+【中国马尔代夫.蜈支洲+祈福圣地.南山寺+天堂森林公园.天然氧吧+执子之手.天涯海角+亚龙湾】+【24小时贴心接送.舌尖海南】",
          money:"4140"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300i0q000000g89ps9997_C_228_132.jpg",
          alt:"海南三亚+海口6日5晚跟团游(4钻)度假爆惠【蜈支洲岛畅玩一整天】五星海景房激情派对特色美食一起浪迹天涯海角",
          money:"2640"
        },
      ],
      "qingYuan":[
        {
          src:"https://dimg03.c-ctrip.com/images/fd/hotel/g3/M08/AB/98/CggYGlZeg9CAEgIYAARRRT08clk983_C_228_132.jpg",
          alt:"清远聚龙湾温泉2日1晚自由行【踏春自驾游】佛冈聚龙湾天然度假村，住宿1晚+双人自助早餐+双人无限次温泉+双人汽车特技表演门票+大风车游乐园150元一套游乐金币（此产品为单订房，一间房可入住2成人）",
          money:"268"
        },
        {
          src:"https://dimg03.c-ctrip.com/images/100j0b0000005vj6479AD_C_228_132.jpg",
          alt:"佛冈2日1晚自由行(5钻)·佛冈熹乐谷温泉度假酒店1晚+双人自助早餐+双人自助晚餐+无限次温泉+影剧院电影+七彩花田【不含交通】",
          money:"实时计价"
        },
        {
          src:"https://dimg03.c-ctrip.com/images/20020w000000kf7c9A661_C_228_132.jpg",
          alt:"清远+佛冈2日1晚自由行·碧桂园假日温泉酒店+含双早+双人无限次温泉",
          money:"200"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300q1800000156mja1EA0_C_228_132.jpg",
          alt:"清远+英德2日1晚跟团游 入住浈阳坊主题客栈+积庆里红茶谷+浈阳峡景区+赠送养生赞醴泉+【品生态蘑菇走地鸡火锅宴/茶园宴+九大簋】+天天发团+广州/佛山均可上车+可接包团",
          money:"286"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300a1c000001cl7a508D9_C_228_132.jpg",
          alt:"清远黄腾峡天门悬廊2日跟团游 ",
          money:"168"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300v14000000xb2jg3A59_C_228_132.jpg",
          alt:"清远+英德2日1晚跟团游 宝墩湖温泉+浈阳坊小镇+茶趣园+英西峰林走廊+船游洞天仙境.玻璃栈道+纯玩.0自费+可定制公司包团",
          money:"395"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30011c000001cwo3e123E_C_228_132.jpg",
          alt:"清远古龙峡玻璃大峡谷2日跟团游 古龙峡9项世界纪录，挑战玻璃观光霸主云天玻霸！ 游览【西班牙小镇】一条欧陆风情街，体验屋顶摩天轮—大家元摩天轮！ 春节假期飞来寺祈福（此线路为1日游）",
          money:"168"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300v14000000xd81q534F_C_228_132.jpg",
          alt:"清远+连州地下河2日1晚跟团游 古龙峡玻璃大峡谷+古龙九瀑+连州地下银河+摄影沙龙圣地.万山朝王+可定制公司包团",
          money:"365"
        },
      ],
      "liJiang":[
        {
          src:"https://dimg04.c-ctrip.com/images/30011c000001dfwe3E974_C_228_132.jpg",
          alt:"云南丽江+大理6日5晚跟团游(4钻) 『国际五星·一价全含·父母带娃儿童免单』赠20寸行李箱+现金红包『自家发团 0差评』VIP私人游船+雪山大索登顶4680+敞篷JEEP游洱海『网红天空之境+蓝月谷+5A石林』赠【丽水金沙表演】",
          money:"2155"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300r1900000180026F009_C_228_132.jpg",
          alt:"云南昆明+大理+丽江6日5晚跟团游(4钻) 赠400元现金红包+温泉酒店+玉龙雪山登顶+360敞篷吉普游洱海+石林峰丛+逛3大古城+《丽水金沙》民族表演+20寸行李箱+自家发团+千人好评+错峰出游+免费接送机",
          money:"2701"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300512000000rp1h895D9_C_228_132.png",
          alt:"云南昆明+大理+丽江6日5晚跟团游(4钻) 动车返昆·儿童免单『国际5星花之城+海景酒店+古城客栈+温泉酒店』玻璃栈道+VIP私人游船+玉龙雪山大索道+双廊网红打卡地+敞篷Jeep洱海旅拍+徒步蓝月谷 赠《雪山神话歌舞表演》",
          money:"2459"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30091b000001a7wbeB064_C_228_132.jpg",
          alt:"昆明+大理+丽江+西双版纳7日6晚跟团游【纯玩0购物·高端4飞双动】网红热门&经典深度|玉龙雪山登顶【赠防寒服+氧气瓶】+热门打卡点【拉市海骑马旅拍&天空之境&VIP私人游船&网红鸟窝·旅拍天梯】+探秘雨林【野象谷亲密亚洲象+原始森林公园】金沙江高空玻璃栈道&铁索桥+高原牧场东巴秘境+纳西篝火晚会 赠《纳西古乐》表演",
          money:"实时计价"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300d19000001803gkD8F1_C_228_132.jpg",
          alt:"云南昆明+大理+丽江6日5晚跟团游(4钻) 赠400元现金红包+温泉酒店+玉龙雪山登顶+360敞篷吉普游洱海+石林峰丛+逛3大古城+《丽水金沙》民族表演+自家发团+千人好评+错峰出游+免费接送机",
          money:"2650"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300h0o000000f961jBE1C_C_228_132.png",
          alt:"云南丽江+玉龙雪山+大理+昆明6日5晚跟团游(4钻) 高端纯玩团·双飞一动『年龄无限制 1人起订』赏季节性红嘴鸥+打卡网红花街 雪山大索登顶4680 敞篷JEEP车环海 房车营地+天空之境+红酒派对+篝火晚会+蓝月谷蜜月闺蜜游",
          money:"4113"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300t1e000001foyht983F_C_228_132.png",
          alt:"云南昆明+大理+洱海+丽江+玉龙雪山6日5晚跟团游(4钻) 【好货提前囤】买一送一&冰川大索※游船越野※漫步古镇※民族美味※大型歌舞表演※赠送西双版纳4日游~",
          money:"2160"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300l0r000000hbtu6D180_C_228_132.png",
          alt:"云南丽江+大理+香格里拉+西双版纳10日9晚跟团游(4钻) 四程环飞『暖冬春节预售 云南全景游』VIP私人游艇+冰川大索+ 赠【土司宴歌舞伴餐+丽水金沙歌舞表演+敞篷吉普环洱海】徒步虎跳峡+探秘野象谷 高端亲子蜜月游首推",
          money:"4458"
        },
      ],
      "yunNan":[
        {
          src:"https://dimg04.c-ctrip.com/images/30011c000001dfwe3E974_C_228_132.jpg",
          alt:"云南丽江+大理6日5晚跟团游(4钻) 『国际五星·一价全含·父母带娃儿童免单』赠20寸行李箱+现金红包『自家发团 0差评』VIP私人游船+雪山大索登顶4680+敞篷JEEP游洱海『网红天空之境+蓝月谷+5A石林』赠【丽水金沙表演】",
          money:"2155"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300r1900000180026F009_C_228_132.jpg",
          alt:"云南昆明+大理+丽江6日5晚跟团游(4钻) 赠400元现金红包+温泉酒店+玉龙雪山登顶+360敞篷吉普游洱海+石林峰丛+逛3大古城+《丽水金沙》民族表演+20寸行李箱+自家发团+千人好评+错峰出游+免费接送机",
          money:"2701"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300512000000rp1h895D9_C_228_132.png",
          alt:"云南昆明+大理+丽江6日5晚跟团游(4钻) 动车返昆·儿童免单『国际5星花之城+海景酒店+古城客栈+温泉酒店』玻璃栈道+VIP私人游船+玉龙雪山大索道+双廊网红打卡地+敞篷Jeep洱海旅拍+徒步蓝月谷 赠《雪山神话歌舞表演》",
          money:"2459"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30091b000001a7wbeB064_C_228_132.jpg",
          alt:"昆明+大理+丽江+西双版纳7日6晚跟团游【纯玩0购物·高端4飞双动】网红热门&经典深度|玉龙雪山登顶【赠防寒服+氧气瓶】+热门打卡点【拉市海骑马旅拍&天空之境&VIP私人游船&网红鸟窝·旅拍天梯】+探秘雨林【野象谷亲密亚洲象+原始森林公园】金沙江高空玻璃栈道&铁索桥+高原牧场东巴秘境+纳西篝火晚会 赠《纳西古乐》表演",
          money:"实时计价"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300d19000001803gkD8F1_C_228_132.jpg",
          alt:"云南昆明+大理+丽江6日5晚跟团游(4钻) 赠400元现金红包+温泉酒店+玉龙雪山登顶+360敞篷吉普游洱海+石林峰丛+逛3大古城+《丽水金沙》民族表演+自家发团+千人好评+错峰出游+免费接送机",
          money:"2650"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300h0o000000f961jBE1C_C_228_132.png",
          alt:"云南丽江+玉龙雪山+大理+昆明6日5晚跟团游(4钻) 高端纯玩团·双飞一动『年龄无限制 1人起订』赏季节性红嘴鸥+打卡网红花街 雪山大索登顶4680 敞篷JEEP车环海 房车营地+天空之境+红酒派对+篝火晚会+蓝月谷蜜月闺蜜游",
          money:"4113"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300e1c000001d5q27FC34_C_228_132.jpg",
          alt:"云南西双版纳+昆明6日5晚跟团游(4钻) 飞『亲子专线 一价全含 销量3000+』赠年夜饭 国际五星希尔顿+温泉SPA【九乡溶洞+亲密亚洲象+5A勐仑植物园+总佛寺+告庄篝火晚会】五大特色餐 赠《魔幻傣秀》 暖冬高端亲子蜜月游",
          money:"7155"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300t1e000001foyht983F_C_228_132.png",
          alt:"云南昆明+大理+洱海+丽江+玉龙雪山6日5晚跟团游(4钻) 【好货提前囤】买一送一&冰川大索※游船越野※漫步古镇※民族美味※大型歌舞表演※赠送西双版纳4日游~",
          money:"2160"
        },
      ],
     }
     this.linerCityTitles = [
      {
        name:"日本",
        py:"riBen",
        index:0
      },
      {
        name:"东南亚",
        py:"dongNanYa",
        index:1
      },
      {
        name:"港澳台",
        py:"gangAoTai",
        index:2
      },
      {
        name:"阿拉斯加",
        py:"aLaSiJia",
        index:3
      },
      {
        name:"河轮",
        py:"heLun",
        index:4
      },
      {
        name:"加勒比海",
        py:"jiaLeBiHai",
        index:5
      },
      {
        name:"爱琴海",
        py:"aiQingHai",
        index:6
      },
      {
        name:"夏威夷",
        py:"xiaWeiYi",
        index:7
      },
      {
        name:"北欧",
        py:"beiOu",
        index:8
      },
      {
        name:"地中海",
        py:"diZhongHai",
        index:9
      },
      ],
     this.linerCityPics = {
      "riBen":[
        {
          src:"https://dimg04.c-ctrip.com/images/310c0g00000088lvjEE1F_R_500_280_Q50.jpg",
          name:"皇家加勒比国际游轮·海洋光谱号8天7晚神户+大阪+横滨",
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310e0g00000088667524D_R_500_280_Q50.jpg",
          name:"歌诗达邮轮·威尼斯号5天4晚那霸（冲绳）",
        },
        {
          src:"https://dimg04.c-ctrip.com/images/31050g00000088l6l0A1B_R_500_280_Q50.jpg",
          name:"歌诗达邮轮·威尼斯号5天4晚福冈",
        },
        {
          src:"https://dimg04.c-ctrip.com/images/31050g00000088l7zF654_R_500_280_Q50.jpg",
          name:"歌诗达邮轮·威尼斯号6天5晚福冈+佐世保",
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310k0g0000008879e5C69_R_500_280_Q50.jpg",
          name:"星旅远洋·鼓浪屿号5天4晚冲绳（厦门）",
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310c0g00000088lvjEE1F_R_500_280_Q50.jpg",
          name:" 皇家加勒比国际游轮·海洋光谱号6天5晚福冈+长崎",
        },
      ],
      "dongNanYa":[
        {
          src:"https://dimg04.c-ctrip.com/images/310k0g0000007y3gy234A_R_500_280_Q50.jpg",
          name:"公主邮轮·蓝宝石公主号25天24晚上海上船,环球旅行"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310r0a0000004kfjn90E8_R_500_280_Q50.jpg",
          name:"公主邮轮·蓝宝石公主号33天32晚上海上船,环球旅行"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310d0a0000004kfgs778D_R_500_280_Q50.jpg",
          name:"公主邮轮·蓝宝石公主号25天24晚上海上船,环球旅行"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310l0g0000007yewp9E9B_R_500_280_Q50.jpg",
          name:"公主邮轮·蓝宝石公主号16天15晚香港+芽庄+胡志明市+新加坡+巴厘岛"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/fd/cruise/g3/M09/20/DB/CggYG1YxhEeAfi4XAAPYRYo41WQ815_R_220_110_Q50.jpg",
          name:"公主邮轮·至尊公主号17天16晚日本+待定+中国（台湾）+中国（香港）+越南+泰国+新加坡下船"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310l160000010nd0x518D_R_220_110_Q50.jpg",
          name:"银海邮轮·银海心灵号18天17晚东南亚航线+港澳台航线"
        },
      ],
      "gangAoTai":[
        {
          src:"https://dimg04.c-ctrip.com/images/310k0g0000007y3gy234A_R_500_280_Q50.jpg",
          name:"公主邮轮·蓝宝石公主号17天16晚上海上船,环球旅行"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310r0a0000004kfjn90E8_R_500_280_Q50.jpg",
          name:"公主邮轮·蓝宝石公主号17天16晚上海上船,环球旅行"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310d0a0000004kfgs778D_R_500_280_Q50.jpg",
          name:"公主邮轮·蓝宝石公主号9天8晚+鹿儿岛+花莲+高雄"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310l0g0000007yewp9E9B_R_500_280_Q50.jpg",
          name:"公主邮轮·蓝宝石公主号33天32晚上海上船,环球旅行"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310i1d000001edtzvB28E_R_220_110_Q50.jpg",
          name:"星梦邮轮·探索梦号5天4晚那霸"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/31010g0000007y45eFFAF_R_500_280_Q50.jpg",
          name:"公主邮轮·蓝宝石公主号16天15晚香港+芽庄+胡志明市+新加坡+巴厘岛"
        },
      ],
      "aLaSiJia":[
        {
          src:"https://dimg04.c-ctrip.com/images/310k0g0000007y3gy234A_R_500_280_Q50.jpg",
          name:"公主邮轮·蓝宝石公主号15天14晚+境港市+金泽+秋田+室兰"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310r0a0000004kfjn90E8_R_500_280_Q50.jpg",
          name:"公主邮轮·蓝宝石公主号22天21晚待定+日本+美国"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310j1b000001b2i576F83_R_500_280_Q50.jpg",
          name:"大洋邮轮·Insignia43天42晚null"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310w1b000001b8qx8AA89_R_500_280_Q50.jpg",
          name:"大洋邮轮·Insignia43天42晚香港上船,环球旅行"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310v1a0000019hknp0DB2_R_500_280_Q50.jpg",
          name:"维京游轮·Viking Orion37天36晚东京+西沃德"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310u1a0000019n0atEF9C_R_500_280_Q50.jpg",
          name:"维京游轮·Viking Orion37天36晚东京+西沃德"
        },
      ],
      "heLun":[ 
        {
          src:"https://dimg04.c-ctrip.com/images/310o0m000000dx03rAA27_R_500_280_Q50.png",
          name:"斯特兰德游轮·斯特兰德号3天2晚因瓦"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/31031f000001g7pox181F_R_500_280_Q50.jpg",
          name:"斯特兰德游轮·斯特兰德号4天3晚因瓦"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310916000000yvtsz33C8_R_220_110_Q50.jpg",
          name:"Aqua Expedition River Cruises·Aqua Blu5天4晚胡志明-金边洞里萨湖"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/31061f000001g6lw40891_R_500_280_Q50.jpg",
          name:"斯特兰德游轮·斯特兰德号5天4晚因瓦"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/31060x000000levob6DEB_R_220_110_Q50.jpg",
          name:"星途游轮(河轮)·艺术号6天5晚布拉迪斯拉发+维也纳+迪恩施泰因+梅尔克+林茨"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310r0u000000is2zqA54B_R_220_110_Q50.jpg",
          name:"HFC国际河流巡航有限公司·多瑙号6天5晚布拉迪斯拉发+维也纳+迪恩施泰因+梅尔克+林茨"
        },
      ],
      "jiaLeBiHai":[
        {
          src:"https://dimg04.c-ctrip.com/images/310v1b000001acjqt1A70_R_220_110_Q50.jpg",
          name:"和平之船 peace boat·天蓝星号101天100晚环球之旅第二期（厦门-横滨）"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310j1b000001b2i576F83_R_500_280_Q50.jpg",
          name:"大洋邮轮·Insignia43天42晚香港上船,环球旅行"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310w1b000001b8qx8AA89_R_500_280_Q50.jpg",
          name:"大洋邮轮·Insignia63天62晚香港上船,环球旅行"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/31090k000000bm2e6266F_R_500_280_Q50.jpg",
          name:"和平之船 peace boat·海洋梦号102天101晚【105期】环球航线（香港-横滨）"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/31010k000000bor4mA701_R_500_280_Q50.jpg",
          name:"和平之船 peace boat·海洋梦号102天101晚【105期】环球航线（香港-横滨）"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/31021b000001b5hmsFD4B_R_500_280_Q50.jpg",
          name:"大洋邮轮·Insignia25天24晚横滨上船,环球旅行"
        },
      ],
      "aiQingHai":[
        {
          src:"https://dimg04.c-ctrip.com/images/310v1b000001acjqt1A70_R_500_280_Q50.jpg",
          name:"和平之船 peace boat·天蓝星号101天100晚环球之旅第二期（厦门-横滨）"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/31090k000000bm2e6266F_R_500_280_Q50.jpg",
          name:"和平之船 peace boat·天蓝星号101天100晚环球之旅第二期（厦门-横滨）"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/31010k000000bor4mA701_R_500_280_Q50.jpg",
          name:"和平之船 peace boat·海洋梦号102天101晚【105期】环球航线（香港-横滨）"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310v1b000001acjqt1A70_R_500_280_Q50.jpg",
          name:"和平之船 peace boat·天蓝星号102天101晚【第4期】环球之旅（香港-东京）"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/31061b000001bmohtAFA0_R_220_110_Q50.jpg",
          name:"克鲁斯Cruise & Maritime·马可波罗 Marco Polo46天45晚香港上船,环球旅行"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310d1f000001g99g46920_R_220_110_Q50.png",
          name:"公主邮轮·太平洋公主号54天53晚横滨上船,环球旅行"
        },
      ],
      "beiOu":[
        {
          src:"https://dimg04.c-ctrip.com/images/310v1b000001acjqt1A70_R_500_280_Q50.jpg",
          name:"和平之船 peace boat·天蓝星号101天100晚环球之旅第二期（厦门-横滨）"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/31090k000000bm2e6266F_R_500_280_Q50.jpg",
          name:"和平之船 peace boat·海洋梦号102天101晚【105期】环球航线（香港-横滨）"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/31010k000000bor4mA701_R_500_280_Q50.jpg",
          name:"和平之船 peace boat·海洋梦号102天101晚【105期】环球航线（香港-横滨）"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310v1b000001acjqt1A70_R_500_280_Q50.jpg",
          name:"和平之船 peace boat·天蓝星号102天101晚【第4期】环球之旅（香港-东京）"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/fd/cruise/g3/M02/6F/9D/CggYG1Ym_yCAGQqbAAZb-6ROGHs765_R_220_110_Q50.jpg",
          name:"公主邮轮·至尊公主号39天38晚新加坡上船,环球旅行"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/31040u000000j39g08064_R_220_110_Q50.jpg",
          name:"银海邮轮·银海探险号27天26晚楚科奇自治区+泰梅尔斯基多尔加诺-涅涅茨基区+阿尔汉格尔斯克州+摩尔曼斯克"
        },
      ],
      "xiaWeiYi":[
        {
          src:"https://dimg04.c-ctrip.com/images/310v1b000001acjqt1A70_R_500_280_Q50.jpg",
          name:"和平之船 peace boat·天蓝星号101天100晚环球之旅第二期（厦门-横滨）"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310v1b000001acjqt1A70_R_500_280_Q50.jpg",
          name:"和平之船 peace boat·天蓝星号102天101晚【第4期】环球之旅（香港-东京）"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310f0g00000086q7jA364_R_500_280_Q50.jpg",
          name:"公主邮轮·太阳公主号56天55晚横滨上船,环球旅行"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/fd/cruise/g3/M09/1A/EE/CggYGlYDv6SAdEUsAAV-8m90JYM410_R_500_280_Q50.jpg",
          name:"公主邮轮·太阳公主号78天77晚横滨上船,环球旅行"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310v1b000001acjqt1A70_R_500_280_Q50.jpg",
          name:"和平之船 peace boat·天蓝星号101天100晚【第3期】环球之旅（横滨-厦门）"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310k170000011eynz3BE3_R_220_110_Q50.png",
          name:"荷美邮轮·马仕丹号44天43晚新加坡上船,远洋航线"
        },
      ],
      "diZhongHai":[
        {
          src:"https://dimg04.c-ctrip.com/images/310v1b000001acjqt1A70_R_500_280_Q50.jpg",
          name:"和平之船 peace boat·天蓝星号101天100晚环球之旅第二期（厦门-横滨）"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/31090k000000bm2e6266F_R_500_280_Q50.jpg",
          name:"和平之船 peace boat·海洋梦号102天101晚【105期】环球航线（香港-横滨）"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/31010k000000bor4mA701_R_500_280_Q50.jpg",
          name:"和平之船 peace boat·海洋梦号102天101晚【105期】环球航线（香港-横滨）"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310v1b000001acjqt1A70_R_500_280_Q50.jpg",
          name:"和平之船 peace boat·天蓝星号102天101晚【第4期】环球之旅（香港-东京）"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/31061b000001bmohtAFA0_R_220_110_Q50.jpg",
          name:"克鲁斯Cruise & Maritime·马可波罗 Marco Polo46天45晚香港上船,环球旅行"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/310r170000011w21w4ECD_R_220_110_Q50.png",
          name:"P&O·Aurora33天32晚香港上船,环球旅行"
        },
      ],
     },
     this.linerFinds = [
      {
        name:"欧洲河轮"
      },
      {
        name:"上海"
      },
      {
        name:"香港"
      },
      {
        name:"皇家加勒比国际游轮"
      },
     ],
     this.linerHots = [
      {
        name:"皇家加勒比"
      },
      {
        name:"MSC地中海邮轮"
      },
      {
        name:"歌诗达邮轮"
      },
      {
        name:"星梦邮轮"
      },
      {
        name:"星旅猿洋"
      },
      {
        name:"维京邮轮"
      },
      {
        name:"丽星邮轮"
      },
      {
        name:"迪士尼邮轮"
      },
      {
        name:"诺唯真邮轮"
      },
      {
        name:"名人邮轮"
      },
      {
        name:"公主邮轮"
      },
      {
        name:"夸克邮轮"
      },
      {
        name:"冠达邮轮"
      },
      {
        name:"银海邮轮"
      },
     ],
     this.abroadDestinations = [
      {
        name:"精选"
      },
      {
        name:"港澳台"
      },
      {
        name:"日本"
      },
      {
        name:"泰国"
      },
      {
        name:"新马"
      },
      {
        name:"东南亚"
      },
      {
        name:"澳新"
      },
      {
        name:"美洲"
      },
      {
        name:"欧洲"
      },
      {
        name:"中东非"
      },
     ],
     this.domesticDestinations = [
      {
        name:"精选"
      },
      {
        name:"西安"
      },
      {
        name:"成都"
      },
      {
        name:"上海"
      },
      {
        name:"重庆"
      },
      {
        name:"北京"
      },
      {
        name:"哈尔滨"
      },
      {
        name:"广州"
      },
      {
        name:"厦门"
      },
      {
        name:"三亚"
      },
     ],
     this.localCityTitles = [
      {
        py:"jingXuan",
        name:"精选",
        index:0
      },
      {
        py:"gangAoTai",
        name:"港澳台",
        index:1
      },
      {
        py:"riBen",
        name:"日本",
        index:2
      },
      {
        py:"taiGuo",
        name:"泰国",
        index:3
      },
      {
        py:"xinMa",
        name:"新马",
        index:4
      },
      {
        py:"xiAn",
        name:"西安",
        index:5
      },
      {
        py:"chengDu",
        name:"成都",
        index:6
      },
      {
        py:"shangHai",
        name:"上海",
        index:7
      },
      {
        py:"dongNanYa",
        name:"东南亚",
        index:8
      },
      {
        py:"aoXin",
        name:"澳新",
        index:9
      },

     ],
     this.localCityPics = {
      "jingXuan":[
        {
          src:"https://dimg04.c-ctrip.com/images/350q0d0000006qy6hABCE_C_280_158.jpg",
          alt:"香港八达通交通卡【香港机场取票 不限出行日期】",
          money:"51.6"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350t1c000001cn5ws0553_C_280_158.jpg",
          alt:"意大利米兰蒂拉诺(伯尔尼纳快车)+瑞士圣莫里茨一日游【雪国列车丨阿尔卑斯山慢车】",
          money:"1046"
        },
        {
          src:"https://dimg06.c-ctrip.com/images/35060v000000jwe0b3DB6_C_280_158.jpg",
          alt:"越南岘港巴拿山+佛手金桥+往返缆车一日游【特惠+中文导游 可选城堡自助午餐】",
          money:"338"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350j1c000001du11r6E16_C_280_158.jpg",
          alt:"<携程专线>+沙巴哥打京那巴鲁红树林一日游【可选专车/口罩免费提供/12人小巴出行】",
          money:"159"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350f180000013n8c8271E_C_280_158.jpg",
          alt:"日本东京西瓜卡Suica/关西ICOCA/北海道kitaca/九州SUGOCA交通购物充值卡【日本柜台取票】",
          money:"157"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350u12000000shpvv8ABB_C_280_158.jpg",
          alt:"普吉岛皇帝岛+珊瑚岛一日游【可选大帆船+2次浮潜+旅拍+海钓】",
          money:"239"
        },
      ],
      "gangAoTai":[
        {
          src:"https://dimg04.c-ctrip.com/images/fd/activity/g6/M07/FC/DA/CggYtFcfSliADQ6VAAM0OCMHyLU514_C_280_158.jpg",
          alt:"香港机场快线/全日通车票【香港机场取票 即取即用】",
          money:"45.9"
        },
        {
          src:"https://dimg01.c-ctrip.com/images/fd/tg/g1/M02/7E/71/CghzfVWw7c6AHkkMABhfzV_69nI858_C_280_158.jpg",
          alt:"垦丁赏海景+鹅銮鼻灯塔+船帆石+猫鼻头公园+白沙湾一日游【1人成行 | 2人立减10元】",
          money:"146"
        },
        {
          src:"https://dimg01.c-ctrip.com/images/100n0d0000006ujte2F85_C_280_158.jpg",
          alt:"台中经典船游日月潭+向山步道骑铁马+日月潭缆车一日游【酒店接送,赠缆车,赠游船,赠午餐,骑单车】",
          money:"425"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350t11000000rhjky09F3_C_280_158.jpg",
          alt:"台湾野柳地质公园+十分+九份+侯硐猫村一日游【年終大促送陰陽海龜吼漁港黃金瀑布精致小团】",
          money:"39"
        },
        {
          src:"https://dimg06.c-ctrip.com/images/350k0i0000009p4u428B7_C_280_158.jpg",
          alt:"香港兰桂坊+叮叮车+太平山顶+杜莎夫人蜡像馆一日游【港式下午茶，人文观光之旅】",
          money:"476"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350314000000wjp5w1271_C_280_158.jpg",
          alt:"澳门大三巴牌坊+澳门威尼斯人度假村一日游【经典观光】",
          money:"566"
        },
      ],
      "riBen":[
        {
          src:"https://dimg04.c-ctrip.com/images/350p1600000109qx2C354_C_280_158.jpg",
          alt:"【携程专线】+冲绳县万座毛+古宇利岛+冲绳美丽海水族馆一日游【多地发车赠水族馆票中文导游】",
          money:"299"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350h080000003huyyAFAF_C_280_158.jpg",
          alt:"日本东京西瓜卡Suica /北海道kitaca/九州SUGOCA交通购物充值卡【柜台取票】",
          money:"147"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350j1900000173bzo359A_C_280_158.jpg",
          alt:"日本富士山全景+新仓山浅间公园+忍野八海一日游【13人河口湖游船小团/奥特莱斯】",
          money:"268"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350d170000011d10dB716_C_280_158.jpg",
          alt:"可选13人小团+日本京都清水寺+八坂神社一日游【伏见稻荷大社/金阁寺/岚山】",
          money:"249"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350l12000000t8txlE5A0_C_280_158.jpg",
          alt:"//携程专线//+清水寺+三年坂二年坂+伏见稻荷大社+奈良公园一日游【大阪指定11区接送】",
          money:"376"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350s0a0000004o35gA895_C_280_158.jpg",
          alt:"官方直售/成田/羽田机场⇌东京区利木津巴士车票（单程/往返）【机场巴士直达市区】",
          money:"83"
        },
      ],
      "taiGuo":[
        {
          src:"https://dimg04.c-ctrip.com/images/350p1b000001b57dq2253_C_280_158.jpg",
          alt:"泰国芭堤雅格兰岛+泰国芭堤雅萨岛一日游【可选帆船/深潜/曼谷出发/中文导游】",
          money:"60"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350f0z000000ngh2zD630_C_280_158.jpg",
          alt:"普吉岛耐迪大象保护营+大象洗澡+制作大象餐+喂大象+泥浆SPA+亲子互动半日游【豪华奈迪：赠旅拍美照/名族特色衣服一件】",
          money:"185"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350210000000o90a6A177_C_280_158.jpg",
          alt:"泰国曼谷射击场实弹射击体验场地打靶【各种口径枪型+专业教练】",
          money:"219"
        },
        {
          src:"https://dimg06.c-ctrip.com/images/35030n000000e503j06BA_C_280_158.jpg",
          alt:"普吉岛丛林飞跃三大营地16站/20站/28站/35站【急单可订+可选骑大象/ATV】",
          money:"339"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350615000000xcrco904F_C_280_158.jpg",
          alt:"芭堤雅格兰岛+出海浮潜海钓+中文纯玩一日游【曼谷包车往返·游艇·快艇·深潜·人妖秀】",
          money:"159"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350u0x000000ldjk5ADB9_C_280_158.jpg",
          alt:"曼谷丹嫩沙多水上市场+美功铁道市场+唐人街+码头夜市晚出发一日游【克里普索人妖秀/泰拳秀】",
          money:"199"
        },
      ],
      "xinMa":[
        {
          src:"https://dimg04.c-ctrip.com/images/fd/activity/g3/M01/90/7A/CggYGlbBksuAKKwDAAMYbjKAWw0905_C_280_158.jpg",
          alt:"新加坡圣淘沙斜坡滑车+空中吊椅体验",
          money:"96.6"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350d16000000zx4220BD3_C_280_158.jpg",
          alt:"马来西亚沙巴仙本那跳岛+潜水一日游【领券立减 可选敦沙卡兰/马达京/马布岛】",
          money:"256"
        },
        {
          src:"https://dimg06.c-ctrip.com/images/350c0o000000f8pcd3956_C_280_158.jpg",
          alt:"【轻奢小团】+沙巴环滩岛浮潜纯玩一日游【中文潜导，免费水底相机拍照【一元接机】】",
          money:"529"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350d1c000001chhkdB45F_C_280_158.jpg",
          alt:"兰卡威湿米岛+孕妇岛一日游【海钓+BBQ午餐+红树林喂老鹰-中文】",
          money:"196"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350516000000z37c12FD3_C_280_158.jpg",
          alt:"吉隆坡马六甲南洋风情一日游【中英双语导游一路随行 马六甲天空塔观景】",
          money:"108"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350516000000z37c12FD3_C_280_158.jpg",
          alt:"沙巴哥打京那巴鲁美人鱼岛潜水一日游【海鲜餐+红树林+市区用车+1元接机】",
          money:"299"
        },
      ],
      "xiAn":[
        {
          src:"https://dimg04.c-ctrip.com/images/350l15000000xi81694E0_C_280_158.jpg",
          alt:"陕西壶口瀑布一日游【可升星空舱/织梦舱☀赠窑洞+中华始祖堂】",
          money:"146"
        },
        {
          src:"https://dimg05.c-ctrip.com/images/fd/tg/g2/M00/8B/8F/CghzgFWw32eACaDvACFzRkLXnBQ844_C_280_158.jpg",
          alt:"秦始皇兵马俑博物馆（兵马俑）+15人纯玩讲解",
          money:"299"
        },
        {
          src:"https://dimg05.c-ctrip.com/images/fd/tg/g1/M06/7B/4B/CghzfVWwvXiAN7MwAAaMrMxfiWU205_C_280_158.jpg",
          alt:"陕西秦始皇兵马俑博物馆+兵马俑《秦俑情》演出VIP套票",
          money:"188"
        },
        {
          src:"https://dimg06.c-ctrip.com/images/10020r000000hk4c6D1C7_C_280_158.jpg",
          alt:"青曲社相声大会门票 陕派相声 西安旅游门票（钟楼店）",
          money:"108"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350811000000r8a4j2C4C_C_280_158.jpg",
          alt:"陕西歌舞大剧院《仿唐歌舞》演出+饺子宴+小吃宴VIP套票",
          money:"188"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/35091e000001f28141342_C_280_158.jpg",
          alt:"陕西特产擀面皮+呱呱+醋粉10袋自选",
          money:"59.9"
        },
      ],
      "chengDu":[
        {
          src:"https://dimg04.c-ctrip.com/images/350n18000001449tcC191_C_280_158.jpg",
          alt:"四川乐山大佛+峨眉山一日游【分餐/20%空座/小团头等舱/双线专车接】",
          money:"529"
        },
        {
          src:"https://dimg06.c-ctrip.com/images/35011c000001cw4q26484_C_280_158.jpg",
          alt:"成都蜀风雅韵川剧变脸演出门票（可选VIP票）",
          money:"100"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350b0z000000nlsa03888_C_280_158.jpg",
          alt:"四川成都大邑大坪起飞980米高空滑翔伞/可协助安排拼车【赠送全程专业视频摄像+周边景区超多推荐】",
          money:"130"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/3506180000014eyhuE572_C_280_158.jpg",
          alt:"四川成都九寨沟峨眉山都江堰导游深度讲解私人定制行程中英文讲解陪玩",
          money:"400"
        },
        {
          src:"https://dimg01.c-ctrip.com/images/fd/tg/g2/M03/8C/72/CghzgFWw7WaAYZw5ACeiQG86F48617_C_280_158.jpg",
          alt:"成都大熊猫繁育研究基地+乐山大佛私人定制导游（可选中英文+当地陪玩+专业讲解）",
          money:"566"
        },
        {
          src:"https://dimg01.c-ctrip.com/images/fd/tg/g2/M03/8E/89/Cghzf1WxEEuAGI08ABLX2cN_iPc143_C_280_158.jpg",
          alt:"峨眉山私人定制导游（可选中英文+当地陪玩+专业讲解）",
          money:"539"
        },
      ],
      "shangHai":[
        {
          src:"https://dimg04.c-ctrip.com/images/350e13000000ucd98556C_C_280_158.jpg",
          alt:"上海东方明珠+浦江游览+城隍庙旅游区+外滩一日游【可选小团畅游魔都 早班晚班随心选】",
          money:"169"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350d13000000tqdqrE203_C_280_158.jpg",
          alt:"苏州周庄一日游【夜景周庄 纯玩 夜游/日游 随订随走】",
          money:"106"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350d13000000tqdqrE203_C_280_158.jpg",
          alt:"上海东方明珠+浦江游船+城隍庙旅游区+外滩一日游【登东方明珠乘黄浦江游船逛城隍庙老街】",
          money:"169  "
        },
        {
          src:"https://dimg06.c-ctrip.com/images/350d0m000000djkqqB318_C_280_158.jpg",
          alt:"上海博物馆+东方明珠+浦江游览+外滩一日游【限时特惠！可选赠外滩观光隧道行程】",
          money:"169"
        },
        {
          src:"https://dimg01.c-ctrip.com/images/100t0h0000008os71C0B8_C_280_158.jpg",
          alt:"上海顾村公园 手机智能导游讲解服务",
          money:"2"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350f1d000001ekt2j7651_C_280_158.jpg",
          alt:"TaxiWay飞行中心(新天地店）",
          money:"770"
        },
      ],
      "dongNanYa":[
        {
          src:"https://dimg04.c-ctrip.com/images/350m14000000w8k30CE0A_C_280_158.jpg",
          alt:"<携程专线>+巴厘岛蓝梦岛+佩妮达岛双岛浮潜游艇/快艇一日游【特惠海底漫步 免费网红玻璃船】",
          money:"358"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350516000000z37c12FD3_C_280_158.jpg",
          alt:"吉隆坡马六甲南洋风情一日游【中英双语导游一路随行 马六甲天空塔观景】",
          money:"108"
        },
        {
          src:"https://dimg06.c-ctrip.com/images/35080v000000k1n2h51E4_C_280_158.jpg",
          alt:"巴厘岛蓝梦岛+佩妮达岛潜水度假村一日游【可选轻奢午餐+恶魔眼泪+网红泳池】",
          money:"179"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350d16000000zx4220BD3_C_280_158.jpg",
          alt:"马来西亚沙巴仙本那跳岛+潜水一日游【领券立减 可选敦沙卡兰/马达京/马布岛】",
          money:"256"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350j1c000001du11r6E16_C_280_158.jpg",
          alt:"<携程专线>+沙巴亚庇丹绒沙滩日落+夜游萤火虫一日游【可选专车 | 丹绒海滩| 口罩免费提供】",
          money:"116"
        },
        {
          src:"https://dimg06.c-ctrip.com/images/35020i0000009a19yAD29_C_280_158.jpg",
          alt:"阿勇河漂流一日游【T河3小时漂流搭配SPA/秋千/ATV】",
          money:"185"
        },
      ],
      "aoXin":[
        {
          src:"https://dimg04.c-ctrip.com/images/350s090000004bj6n52D2_C_280_158.jpg",
          alt:"墨尔本大洋路+十二门徒岩+阿波罗湾+洛克阿德大峡谷一日游【可选直升机/短信上车】",
          money:"176"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350s1a00000194hm58D80_C_280_158.jpg",
          alt:"悉尼蓝山国家公园一日游【限时赠考拉玩偶/陪同讲解坐缆车/奔驰可选】",
          money:"469"
        },
        {
          src:"https://dimg06.c-ctrip.com/images/fd/tg/g1/M04/7B/B8/CghzfVWwwzOAasTaAC94KeGBrMg133_C_280_158.jpg",
          alt:"墨尔本普芬比利蒸汽火车+企鹅岛一日游【童话般体验·萌宠近距离】",
          money:"346"
        },
        {
          src:"https://dimg06.c-ctrip.com/images/350t0q000000ghtmpD7D3_C_280_158.jpg",
          alt:"悉尼蓝山国家公园缆车一日游【14-18人中文团+免费接送】",
          money:"548"
        },
        {
          src:"https://dimg06.c-ctrip.com/images/350f0q000000ghib11D27_C_280_158.jpg",
          alt:"澳大利亚黄金海岸莱明顿国家公园半日游【领券减10+精致小团+酒店接送+自然峡谷】",
          money:"268"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/350610000000p1dzn85F9_C_280_158.jpg",
          alt:"凯恩斯大堡礁鱼鹰号一日游【预订从速+双礁+性价比之选】",
          money:"729"
        },
      ],
     },
     this.outdoors = [
      {
        name:"全球户外"
      },
      {
        name:"滑雪"
      },
      {
        name:"徒步登山"
      },
      {
        name:"潜水"
      },
      {
        name:"越野自驾"
      },
      {
        name:"游艇帆船"
      },
      {
        name:"高空项目"
      },
      {
        name:"高尔夫"
      },
      {
        name:"骑行"
      },
      {
        name:"房车"
      },
      {
        name:"露营"
      },
      {
        name:"全球海钓"
      },
     ],
     this.naturals = [
      {
        name:"自然探索"
      },
      {
        name:"极地探索"
      },
      {
        name:"全球摄影"
      },
      {
        name:"动物观察"
      },
      {
        name:"自然野奢"
      },
     ],
     this.humanities = [
      {
        name:"深度人文"
      },
      {
        name:"全球旅拍"
      },
      {
        name:"蜜月婚拍"
      },
      {
        name:"禅修养生"
      },
      {
        name:"宗教文化"
      },
     ],
     this.festivals = [
      {
        name:"全球婚礼"
      },
      {
        name:"体育赛事"
      },
      {
        name:"马拉松"
      },
     ],
     this.themeCityTitles = [
      {
        name:"精选",
        py:"jingXuan",
        index:0
      }
     ],
     this.themeCityPics = {
      "jingXuan":[
        {
          src:"https://dimg04.c-ctrip.com/images/300g1c000001c85tvD4FA_C_228_132.jpg",
          alt:"越野自驾·丰田普拉多7座+机票 川藏经典路线10天 4人一车-随叫随停 成都集合+{海螺沟/色达/丹巴}+新都桥+理塘+稻城+亚丁+巴塘+芒康+左贡+八宿+然乌湖+米堆冰川+鲁朗+{南伊沟/巴松错/羊湖}+拉萨 10天+10晚酒店含早",
          money:"7900"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30091600000101idi1233_C_228_132.jpg",
          alt:"全球旅拍·稻城亚丁+丹巴7日6晚·【2-6人小团】【旅拍+无人机航拍】【人物·汉服·星空·公路旅拍】【听老阿妈讲丹巴藏寨百年历史+City Walk】【跟随当地人拜访“仓央嘉措”爱人故居】浪漫下午茶+高原温泉浴+当季热卖",
          money:"3880"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300f0w000000k5elf3BEC_C_228_132.jpg",
          alt:"潜水·【世界潜水圣地布纳肯+西拉登深潜，一对一教练指导，高空滑翔伞，高端海边酒店】北纬1的翡翠般“玻璃海” 美娜多6天精选私制小团+海豚湾逐海豚+白沙岛戏水+免签证海岛+多地出发【蜜月.亲子+纯玩】",
          money:"7399"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300e0y000000lvmu33E38_C_228_132.jpg",
          alt:"深度人文·迪拜6日·阿拉伯历史文化课+10大奇妙博物馆 | & 住【6678星】和范思哲，海上帆船，海洋亚特兰蒂斯，酋长皇宫来一场约会，享300高空无边泳池，65000只海洋生物的共舞+动物互动绿色星球！",
          money:"25999"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300c1d000001estpb3DD5_C_228_132.jpg",
          alt:"极地探索·冰岛10天·4人小团，专属车导，住蓝湖酒店+旷野山原美居，私享温泉遇见绚烂极光，冰洞探险+冰川徒步+火山岩洞探险+黑沙滩+冰河湖+黄金大圆环，邂逅呆萌矮脚马，赴一场极光盛宴！",
          money:"31700"
        },
      ]
     },
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
     this.group = [
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

     ],
     this.exitCityPics = {
      "jingXuan":[
        {
          src:"https://dimg04.c-ctrip.com/images/30031800000140wez2B00_C_228_132.jpg",
          name:"曼芭【高端团】+清迈【9人精致小团】【 无购物无自费 】全程五钻酒店+4飞丨打卡海岛+经典蓝白黑寺庙丨国际人妖秀 火车夜市丨赠清迈传统泰式按摩+骑大象 轻松玩转曼芭清",
          money:"6054"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300j190000015xva636B0_C_228_132.jpg",
          name:"【明星口碑】乘船往返深圳不入香港+1晚看得见富士山的温泉+2000日元餐标+矶丸水产+伊势龙虾松叶蟹+和服拍照+【可选环球影城或大阪奈良一日游】+30KG行李",
          money:"6299"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30081900000163km7A1C5_C_228_132.jpg",
          name:"【自营】深圳直飞+看见富士山的温泉酒店+自选:环球影城or神户or自由活动+限26人 A线:三古都+不住机场+升级1晚5钻酒店+大阪连住+赠WIFI B线:升级3晚5钻",
          money:"6699"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300v12000000t1h5bF5EF_C_228_132.jpg",
          name:"【海鸥携程旗下】前4客立减200+黄石/锡安/布莱斯峡谷/大提顿4大国家公园+羚羊彩穴+马蹄湾+尼亚加拉瀑布+海鲜餐+游船+奥莱+网红Vessel旋转大楼【全国联运+拼房·拒签保障】",
          money:"15299"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300e1a0000018qjiu8224_C_228_132.jpg",
          name:"【鼠你惠玩 早定优惠】【高颜值 INS网红打卡地 超长拖尾沙滩】2沙2水+三餐（可优惠升级一价全包）+岛屿面积大私密性高+蜜月优选+超高性价比+全国出发可联运",
          money:"10520"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30071b000001bt0qi3084_C_228_132.jpg",
          name:"大促立减！欧洲免签出行+北京/上海/广州出发+全4星级酒店+【ABCDEG无自费】+【BCEH线一价全含】+BC线赠上网卡+卡莱梅格丹城堡+科托尔古城+莫斯塔尔+萨拉热窝+特色餐",
          money:"11700"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300g1b000001aope1A964_C_228_132.jpg",
          name:"含导服『国际四星』出行不将就『挚爱网红』秋千鸟巢『蓝梦出海』赠印尼精油SPA·充足自由活动·广州出发//C线升级2晚海边国际五星",
          money:"3999"
        },
        {
          src:"https://dimg03.c-ctrip.com/images/100608000000386zqF325_C_228_132.jpg",
          name:"普吉岛5日4晚自由行·【香港直飞】单程仅需2.5小时 香港往返 热辣海岛 精致行程 说走就走！周末带着家人一起来普吉岛撒欢#便捷出游# 丰富酒店全覆盖",
          money:"2482"
        },
      ],
      "taiGuo":[
        {
          src:"https://dimg04.c-ctrip.com/images/30031800000140wez2B00_C_228_132.jpg",
          name:"曼芭【高端团】+清迈【9人精致小团】【 无购物无自费 】全程五钻酒店+4飞丨打卡海岛+经典蓝白黑寺庙丨国际人妖秀 火车夜市丨赠清迈传统泰式按摩+骑大象 轻松玩转曼芭清",
          money:"6054"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/3004180000014h2qmED67_C_228_132.jpg",
          name:"精致纯玩小团无自费【两人下单立减500元/人】A线五钻泳池酒店·人妖秀+网红夜市+海鲜烧烤+国际自助餐 B线五钻酒店升级一晚180度海景房·夜秀+摩天轮夜市+海鲜BBQ",
          money:"6800"
        },
        {
          src:"https://dimg03.c-ctrip.com/images/100608000000386zqF325_C_228_132.jpg",
          name:"普吉岛5日4晚自由行·【香港直飞】单程仅需2.5小时 香港往返 热辣海岛 精致行程 说走就走！周末带着家人一起来普吉岛撒欢#便捷出游# 丰富酒店全覆盖",
          money:"2482"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300h180000015682lE7E6_C_228_132.jpg",
          name:"【错峰出游，下单享优惠】【A线7晚国际5星酒店+泰国段纯玩无购物】【B线固定600元自费套餐】【C线深圳起止】【F线南京起止】不强制购物+双子塔+大皇宫+鱼尾狮+更多产品请咨询客服",
          money:"3480"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300r1c000001dabyhE0A7_C_228_132.jpg",
          name:"【无购物·无自费 高端纯玩】全程国际五钻+1晚喜来登or万豪等丨赠：骑大象+放水灯+超人气人妖秀丨高素质导游带队 玩转热门网红景点：大皇宫·水上市场·拉差火车夜市·快艇出海沙美岛",
          money:"2399"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300q1a0000018mz9920E6_C_228_132.jpg",
          name:"正点航班【A线1晚国际五星丨沙美岛/夜游公主号/网红郑王庙/拉差达夜市丨按摩+湄南河畔泰餐】【B线仅进2店+高标住宿：曼谷河畔五星+芭提雅私家沙滩海景酒店丨摩天轮夜市+水上市场+海鲜餐",
          money:"2699"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300n15000000ygicuED73_C_228_132.jpg",
          name:"【专享VIP团*无自费】国际品牌酒店+高标泰餐+升级国际五星万豪或喜来登【娱】国际人妖秀·唐人街·泼水party·泰服体验·出海沙美岛【享】光海鲜咖喱餐+御厨火锅",
          money:"2739"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30041900000163bcr638B_C_228_132.jpg",
          name:"【赠新马签+全程无自费】+【泰段纯玩+5晚黄金地段国五+赠666元玩乐大礼包：骑大象+实弹射击+人妖秀+快艇沙美岛】『马段：2晚私人沙滩或私人湖景妃俪雅国五』吃喝玩乐一网打尽",
          money:"3899"
        },
      ],
      "riBen":[
        {
          src:"https://dimg04.c-ctrip.com/images/300j190000015xva636B0_C_228_132.jpg",
          name:"【明星口碑】乘船往返深圳不入香港+1晚看得见富士山的温泉+2000日元餐标+矶丸水产+伊势龙虾松叶蟹+和服拍照+【可选环球影城或大阪奈良一日游】+30KG行李",
          money:"6299"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30081900000163km7A1C5_C_228_132.jpg",
          name:"【自营】深圳直飞+看见富士山的温泉酒店+自选:环球影城or神户or自由活动+限26人 A线:三古都+不住机场+升级1晚5钻酒店+大阪连住+赠WIFI B线:升级3晚5钻",
          money:"6699"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30031c000001cww7dFD1D_C_228_132.png",
          name:"山东航空，济南直飞大阪【奈良喂小鹿 京都清水寺 东京浅草寺求御守+GRINPA 雪乐园 秋叶原 台场高达 】【银座、大阪心斋桥、御殿场奥特莱斯、道顿崛，购物狂欢】",
          money:"6180"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300t1c000001cdkxg99CE_C_228_132.jpg",
          name:"山东航空，济南直飞大阪【奈良喂小鹿 京都清水寺 东京浅草寺求御守+GRINPA 雪乐园 秋叶原 台场高达 】【银座、大阪心斋桥、御殿场奥特莱斯、道顿崛，购物狂欢】",
          money:"6180"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300i1c000001cccovB380_C_228_132.jpg",
          name:"『童话白川乡+名古屋+古都海景温泉』「富士山冰雪游乐园+上山之町古街+祇园艺妓街」『抹茶冰淇淋体验+京都豆腐汤+温泉会席料理』~双点进出，不走回头路，仅2站购物",
          money:"5699"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30071b000001b1i2sF09F_C_228_132.png",
          name:"白川乡+本州+忍野八海+御殿场奥特莱斯+心斋桥+大阪环球影城+皇居广场+浅草雷门观音寺祈福~~直飞不经停不转机",
          money:"6899"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30011a0000019mtff2359_C_228_132.jpg",
          name:"『全程五星指定酒店』『东京一整天自由活动』『大阪城公园+心斋桥道顿崛商业街+河口湖·红叶渚』『两点进出不走回头路+直飞不经停不转机』可全国联运",
          money:"7499"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300b1a0000018aube0AC5_C_228_132.png",
          name:"【双点进出不走回头路】全程当地四星酒店+升级日式特色双温泉海景+奈良公园与可爱的小鹿来一场亲密的喂食接触【京都汤豆腐、日式烤肉BBQ、日式陶板烧，日式温泉会席料理】",
          money:"5699"
        },
      ],
      "dongJing":[
        {
          src:"https://dimg04.c-ctrip.com/images/300j190000015xva636B0_C_228_132.jpg",
          name:"【明星口碑】乘船往返深圳不入香港+1晚看得见富士山的温泉+2000日元餐标+矶丸水产+伊势龙虾松叶蟹+和服拍照+【可选环球影城或大阪奈良一日游】+30KG行李",
          money:"6299"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30081900000163km7A1C5_C_228_132.jpg",
          name:"【自营】深圳直飞+看见富士山的温泉酒店+自选:环球影城or神户or自由活动+限26人 A线:三古都+不住机场+升级1晚5钻酒店+大阪连住+赠WIFI B线:升级3晚5钻",
          money:"6699"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30031c000001cww7dFD1D_C_228_132.png",
          name:"山东航空，济南直飞大阪【奈良喂小鹿 京都清水寺 东京浅草寺求御守+GRINPA 雪乐园 秋叶原 台场高达 】【银座、大阪心斋桥、御殿场奥特莱斯、道顿崛，购物狂欢】",
          money:"6180"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300t1c000001cdkxg99CE_C_228_132.jpg",
          name:"山东航空，济南直飞大阪【奈良喂小鹿 京都清水寺 东京浅草寺求御守+GRINPA 雪乐园 秋叶原 台场高达 】【银座、大阪心斋桥、御殿场奥特莱斯、道顿崛，购物狂欢】",
          money:"6180"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300i1c000001cccovB380_C_228_132.jpg",
          name:"『童话白川乡+名古屋+古都海景温泉』「富士山冰雪游乐园+上山之町古街+祇园艺妓街」『抹茶冰淇淋体验+京都豆腐汤+温泉会席料理』~双点进出，不走回头路，仅2站购物",
          money:"5699"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30071b000001b1i2sF09F_C_228_132.png",
          name:"白川乡+本州+忍野八海+御殿场奥特莱斯+心斋桥+大阪环球影城+皇居广场+浅草雷门观音寺祈福~~直飞不经停不转机",
          money:"6899"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30011a0000019mtff2359_C_228_132.jpg",
          name:"『全程五星指定酒店』『东京一整天自由活动』『大阪城公园+心斋桥道顿崛商业街+河口湖·红叶渚』『两点进出不走回头路+直飞不经停不转机』可全国联运",
          money:"7499"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300b1a0000018aube0AC5_C_228_132.png",
          name:"【双点进出不走回头路】全程当地四星酒店+升级日式特色双温泉海景+奈良公园与可爱的小鹿来一场亲密的喂食接触【京都汤豆腐、日式烤肉BBQ、日式陶板烧，日式温泉会席料理】",
          money:"5699"
        },
      ],
      "meiGuo":[
        {
          src:"https://dimg04.c-ctrip.com/images/300v12000000t1h5bF5EF_C_228_132.jpg",
          name:"【海鸥携程旗下】前4客立减200+黄石/锡安/布莱斯峡谷/大提顿4大国家公园+羚羊彩穴+马蹄湾+尼亚加拉瀑布+海鲜餐+游船+奥莱+网红Vessel旋转大楼【全国联运+拼房·拒签保障】",
          money:"15299"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300v0e00000073o4m78C0_C_228_132.jpg",
          name:"【海鸥优选】春季预售+多地联运省1000+旧金山市区游+优胜美地公园+奥莱畅购+曼哈顿游船+拉斯宿大道酒店+拉斯自由畅玩一整天+上海直飞+全国联运+签证·拼房双保障",
          money:"15999"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300a0z000000mtqti308B_C_228_132.jpg",
          name:"【海鸥携程旗下】6大公园+羚羊谷+马蹄湾+女神像·瀑布双游船+奥莱+A线大峡谷东南双峡·黄石深度2次入园+圣地亚哥·墨西哥一日游+洛杉矶市区游",
          money:"21299"
        },
        {
          src:"https://dimg03.c-ctrip.com/images/fd/tg/g3/M08/78/2A/CggYG1Z7v0KAZdA5ADiLvQWEhs0878_C_228_132.jpg",
          name:"【报名送美签】初游必选 【上海直飞+多城联运惠仅需6799起】酒店连宿不换住/可升级【往返接送+珍珠港+小环岛+恐龙湾】【威基基海岛风情】3天自由活动【赠送：露天购物中心折扣券+叮当车票】",
          money:"7699"
        },
        {
          src:"https://dimg03.c-ctrip.com/images/fd/tg/g3/M08/78/2A/CggYG1Z7v0KAZdA5ADiLvQWEhs0878_C_228_132.jpg",
          name:"【送美签】往返接送+珍珠港+小环岛+恐龙湾 【上海直飞+联运立减】【A/B线欧胡岛+大岛·火山公园/A线茂易岛·捕鲸镇/C线欧胡岛连宿不换住】可升级+4天自由活动【送:购物中心折扣券+叮当车票】",
          money:"8259"
        },
        {
          src:"https://dimg03.c-ctrip.com/images/100a0b0000005jp9v7ADA_C_228_132.jpg",
          name:"【拒签仅收签证费】尼亚加拉大瀑布+圣约瑟夫大教堂+蒙特利尔【住全新黄石小木屋】黄石+大提顿+大峡谷+本土全程含餐（除飞机餐）【东航直飞+指定城市联运立减】",
          money:"28786"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300e0s000000hoc2cB994_C_228_132.jpg",
          name:"【5.26即将成团】【三大国家公园·黄石+大峡谷+布莱斯】【旧金山深度】羚羊峡谷/尼亚加拉大瀑布/费城独立大厅/自由女神像游船/圣塔莫尼卡海滩/奥特莱斯/沃尔玛",
          money:"21099"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300411000000r3gao911E_C_228_132.jpg",
          name:"春节班期两人下单立减-2020】A线特价美东超高性价比一次玩遍/B线波士顿龙虾餐【纽约3晚连住全程希尔顿+万豪集团系列】4大常春藤名校·S-Led讲解/大瀑布/帝国大厦登顶/大都会博物馆讲解",
          money:"15518"
        },
      ],
      "maErDaiFu":[
        {
          src:"https://dimg04.c-ctrip.com/images/300e1a0000018qjiu8224_C_228_132.jpg",
          name:"【鼠你惠玩 早定优惠】【高颜值 INS网红打卡地 超长拖尾沙滩】2沙2水+三餐（可优惠升级一价全包）+岛屿面积大私密性高+蜜月优选+超高性价比+全国出发可联运",
          money:"10520"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300m1b000001adrb17A88_C_228_132.jpg",
          name:"『薄利多销·只想成交』『咨询立减500』更有机会直接免单+专业解决选岛困难+免费申请蜜月、周年庆套餐+房型可选&超大别墅&私人泳池+一价包含＆赠送一次出海项目+赠送30分钟spa",
          money:"16880"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300r1c000001c66fiBE72_C_228_132.jpg",
          name:"『春节钜惠』『赠送2次出海』咨询有礼（ 一价全包+A级浮潜+A级沙滩+出海活动全免费+儿童俱乐部免费+蜜月大礼包+早中晚三餐及酒水全含+酒吧免费+中文服务）",
          money:"16400"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30070q000000h20xw3086_C_228_132.jpg",
          name:"属你惠玩＆网红奢豪岛】每天主题活动『酒会＆派对』私密好超大别墅（房型可选）首晚马累+4晚岛上+私人管家+中文服务+唯美沙滩『驻岛婚纱摄影』",
          money:"14750"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300g1b000001bfdh9A775_C_228_132.jpg",
          name:"『新春特惠热卖』『咨询立减500』专车专中文司导+沙漠冲沙＆骑骆驼＆看日落＆音乐喷泉+可升级体验高空跳伞＆热气球+可升级亚特兰蒂斯＆帆船酒店＆皇宫酒店 +马代岛屿可升级",
          money:"13820"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30060y000000mgg59C4F3_C_228_132.jpg",
          name:"【让兰卡爱上马代】加勒古堡+国家公园游猎+狮子岩古王朝探秘+出海观鲸看海豚+兰卡金牌导游+茶园海边小火车+携程四钻酒店+马代岛屿2沙2水可升级泳池别墅+可升一价全含+可升水飞上岛",
          money:"11856"
        },
        {
          src:"https://dimg03.c-ctrip.com/images/220819000001633yj6644_C_228_132.jpg",
          name:"『迪拜全程5钻升级1亚特+马尔代夫伊露薇利.2沙2水』迪拜-失落空间水族馆+冒险水世界乐园+沙漠冲沙+哈利法塔124层+法拉利主题公园-全国出发",
          money:"19880"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300g0q000000g911u72AD_C_228_132.jpg",
          name:"纯白简约风-4晚泳池水屋+早晚餐+浮潜优质+超大泳池别墅+私人管家-全国出发",
          money:"18135"
        },
      ],
      "saiErWeiYa":[
        {
          src:"https://dimg04.c-ctrip.com/images/30071b000001bt0qi3084_C_228_132.jpg",
          name:"塞尔维亚+黑山+波黑10日跟团游 ",
          money:"11700"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30091900000179na276B7_C_228_132.jpg",
          name:"全球旅拍·塞尔维亚波黑黑山12日10晚·纯玩旅拍（6人舒适小团+专业摄影师随团跟拍+精选4-5星酒店）|历史山城莫斯塔尔+世外秘境杜米托尔+风情古都贝尔格莱德，欧洲免签小众之地，深度享受自由慢旅行",
          money:"25900"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300b190000016st6o52BD_C_228_132.png",
          name:"塞尔维亚+黑山+波黑13日跟团游",
          money:"16300"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300s190000017zc5a325E_C_228_132.jpg",
          name:"克罗地亚+斯洛文尼亚+波黑+黑山+塞尔维亚+匈牙利+奥地利14日跟团游】",
          money:"18200"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300o12000000slj77D12A_C_228_132.png",
          name:"匈牙利+克罗地亚+罗马尼亚+斯洛文尼亚+波黑+黑山+阿尔巴尼亚+塞尔维亚+北马其顿共和国+保加利亚20日跟团游",
          money:"23980"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300b180000015bm0oBFAA_C_228_132.jpg",
          name:"塞尔维亚+波黑+克罗地亚+奥地利+捷克+匈牙利+斯洛伐克13日半自助游",
          money:"15000"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/3009180000015i2el4408_C_228_132.jpg",
          name:"塞尔维亚+黑山+波黑10日半自助游",
          money:"14400"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300w180000013vaugCAF8_C_228_132.jpg",
          name:"匈牙利+克罗地亚+波黑+塞尔维亚+斯洛文尼亚+黑山+阿尔巴尼亚15日跟团游 ",
          money:"18980"
        },
      ],
      "baLiDao":[
        {
          src:"https://dimg04.c-ctrip.com/images/300g1b000001aope1A964_C_228_132.jpg",
          name:"印度尼西亚巴厘岛5日4晚跟团游(4钻)",
          money:"3999"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30021b000001am1f62A99_C_228_132.png",
          name:"印度尼西亚巴厘岛7日5晚半自助游",
          money:"5890"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30050y000000mgljc96C9_C_228_132.jpg",
          name:"印度尼西亚巴厘岛5日4晚半自助游(5钻)",
          money:"4752"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30051900000189f6fD7BB_C_228_132.jpg",
          name:"印度尼西亚巴厘岛5日4晚跟团游",
          money:"5599"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30051900000183g4lB55E_C_228_132.jpg",
          name:"印度尼西亚巴厘岛5日半自助游 ",
          money:"4650"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300b12000000si4nt9897_C_228_132.png",
          name:"印度尼西亚巴厘岛7日半自助游(5钻)",
          money:"6490"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300b12000000si4nt9897_C_228_132.png",
          name:"印度尼西亚巴厘岛5日半自助游",
          money:"5490"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300d1900000185fpk4E25_C_228_132.jpg",
          name:"印度尼西亚巴厘岛5日半自助游",
          money:"4890"
        },
      ],
      "puJiDao":[
        {
          src:"https://dimg03.c-ctrip.com/images/100608000000386zqF325_C_228_132.jpg",
          name:"普吉岛5日4晚自由行·【香港直飞】单程仅需2.5小时 香港往返 热辣海岛 精致行程 说走就走！周末带着家人一起来普吉岛撒欢#便捷出游# 丰富酒店全覆盖",
          money:"2482"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300u190000017xuej2C56_C_228_132.jpg",
          name:"泰国普吉岛6日5晚跟团游(4钻)【口碑】A线『全程5钻·步入式泳池连住·3天出海+赠送大堡礁浮潜＆珍珠岛』B线『VIP2-8人精致小包团·纯玩无购·泳池酒店连住·可升级斯米兰』｜纯休闲度假＆美食美景刺激嗨爆整个假期｜",
          money:"2400"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300v0z000000mt5sx3BAE_C_228_132.jpg",
          name:"泰国曼谷+芭堤雅+普吉岛8日7晚跟团游(4钻)小资奢游 高品4飞【免费升级】五钻泳池别墅【超 值赠送】泰式按摩+人妖秀表演【超多项目】+快艇出海+激情漂流+皮划艇探险等【美食之旅】泰式料理+韩膳BBQ+国际自助 ",
          money:"3438"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300j1a0000019rl962633_C_228_132.jpg",
          name:"泰国普吉岛6日5晚跟团游(4钻)下单立减900/人丨A线【全程5钻·经典皮皮岛环游·步入泳池房·龙虾面·赠价值666大堡礁浮潜+珍珠岛娱乐项目】B线【VIP2-8人精致小包团·纯玩无购物·巴东黄金地段泳池酒店连住·可升级斯米兰】",
          money:"2441"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300q10000000ohalwABBF_C_228_132.jpg",
          name:"泰国曼谷+芭堤雅+普吉岛8日7晚跟团游(4钻)100％好评优质力荐4飞【免费升级】国五泳池别墅【超 值赠送】泰式按摩+人妖秀表演【超多项目】+快艇出海+激情漂流+皮划艇探险等【美食之旅】泰式料理+韩膳BBQ+国际自助 ",
          money:"2698"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300j14000000wpov59648_C_228_132.jpg",
          name:"泰国普吉岛6日4晚跟团游(4钻)下单立减900/成人丨+0元续住1晚 全程网评热门五星+升级1晚长岛蓝湾别墅【小资时尚】斯米兰鸡蛋岛双出海 赠浮潜【泰好玩】泼水+spa+射击+大象乐园丨泰国旅行专家为您海底捞式一条龙服务 ",
          money:"2949"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300m170000011nsmf0B58_C_228_132.jpg",
          name:"全球户外·泰国普吉岛6天5晚·【全程无购物店】【浮潜+深潜双体验】【攀牙湾5公里漂流】【驾驶ATV丛林越野车】【感受实弹射击体验】",
          money:"29000"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300m160000010zi8a50AC_C_228_132.jpg",
          name:"泰国普吉岛+甲米6日5晚跟团游【2人减2000元】网红·热卖产品·全国出发·高满意度·人气推荐·下单送电话卡！『精选蜜月·闺蜜款·亲子·爸妈款』『可升级CD线纯玩·无购物』『游抖音爆红景点』+24h在线管家服务！",
          money:"5720"
        },
      ],
      "eLuoSi":[
        {
          src:"https://dimg04.c-ctrip.com/images/300p1a0000018vboi69C5_C_228_132.jpg",
          name:"圣彼得堡8日7晚跟团游【春节热卖】ACDG线【全国联运】+冬宫+金环谢镇+黄金三岛+扎利亚季耶公园+格鲁吉亚烤肉+俄式桑拿浴+苏联展览中心+EFHI线喀琅小城+冬宫+卡洛+察里双庄园+【4钻酒店】 ",
          money:"7999"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30061b000001bpi6kE99D_C_228_132.jpg",
          name:"俄罗斯莫斯科+圣彼得堡8日跟团游免签！【纯玩+无购物+无自费+0小费】+全4星酒店+各地出发+AB『双点进出+东航』+【ABD线双城高铁】+ABDEF四宫入内【冬宫+夏宫+克林姆林宫+叶卡捷琳娜花园及琥珀宫】+谢镇",
          money:"11900"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30011a000001994ci1331_C_228_132.jpg",
          name:"俄罗斯9日7晚跟团游【春节热卖一价全包】+BDG线南航东航海航【全国联运】+与熊共餐+升级1晚5钻+内陆动车或高铁+CEFI线金环谢镇+四大宫殿+喀琅小城+卡洛+察里双庄园+新圣女公墓+AEH线【纯玩无购物】+【4钻酒店】",
          money:"10199"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300g190000017zapy92F8_C_228_132.jpg",
          name:"俄罗斯贝加尔湖5日跟团游或4日【春节热卖】海航直飞0时差【2.5小时直达】+塔利茨博物馆+【1-2天自由活动】+圣女修道院+喀山圣母教堂+130风情街+卡尔马克思大街+3钻酒店+【独立卫浴】+免签+【1对1管家】",
          money:"3999"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/30061900000178wv8C9A5_C_228_132.jpg",
          name:"全球摄影·俄罗斯摩尔曼斯克7天·【北冰洋极光小木屋&新华社签约摄影师同行，追极光大片】—狗拉雪橇+冰湖垂钓+雪地摩托+极夜追光，行摄世界尽头 ",
          money:"18801"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300d0z000000mu4rcBBD8_C_228_132.jpg",
          name:"全球旅拍·俄罗斯贝加尔湖8天6晚·【纯玩旅拍】（6-8人舒适小团+每人每日写真出片+小众景点破冰船+俄式特色小镇）|【网罗贝加尔湖美景：冰乳洞+翡翠冰+冰裂纹+小冰泡+雾凇+森林雪景】",
          money:"16300"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300g0o000000f485yD76F_C_228_132.jpg",
          name:"芬兰+丹麦+挪威+俄罗斯12日跟团游(4钻)4钻酒店丨莫斯科进，往返直飞丨13顿正餐+3顿特色餐丨塔林游览+峡湾游船+双峡湾丨冬宫+夏宫花园+克里姆林宫+斯德哥尔摩市政厅+瓦萨战船博物馆+峡湾游船+岩石教堂+WIFI",
          money:"17017"
        },
        {
          src:"https://dimg04.c-ctrip.com/images/300q1b0000019xpte5F95_C_228_132.jpg",
          name:"俄罗斯莫斯科+圣彼得堡8日跟团游 纯玩0购物0自费0小费+双城高铁，拒绝夜火车+全4星酒店+【涅瓦河游船】+【拉多加湖】+4大宫入内【冬宫+克里姆林宫+叶卡捷琳娜花园及宫殿+夏宫花园及宫殿】+察里庄园+新圣女公墓",
          money:"12200"
        },
      ],
     };
    

      
     
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
    perImageTab(py,index){
      this.peripheryPic = this.peripherys[py];
      this.isColor = index;
      if(index == 0){
        this.perSigns = " ";
      }
      else{
        this.perSigns = '更多'+this.perCityTitles[index].name + '游>';
      }
    },
    cityChange(val){
      let array = this.perCityTitles.slice(8);
      let obj = {};
      obj = array.find((item)=>{
         return item.name === val;
      });
       this.perCityTitles.splice(obj.index,1);
       this.perCityTitles.splice(7,0,obj);
       this.perCityTitles.forEach((el,i)=>{
         el.index = i;
       })
       this.peripheryPic = this.peripherys[obj.py];
       this.isColor = obj.index;
       this.perSigns = '更多'+this.perCityTitles[obj.index].name + '游>';
       document.getElementById("test").innerHTML
       this.selectValue = "更多";
    },
    ticketImageTab(py,index){
      this.ticketPic = this.ticketPics[py];
      this.isColor = index;
    },
    ticketCityChange(val){
      let array = this.ticketTitles.slice(8);
      let obj = {};
      obj = array.find((item)=>{
         return item.name === val;
      });
       this.ticketTitles.splice(obj.index,1);
       this.ticketTitles.splice(7,0,obj);
       this.ticketTitles.forEach((el,i)=>{
         el.index = i;
       })
       this.ticketPic = this.ticketPics[obj.py];
       this.isColor = obj.index;
       this.ticketSelect = "更多";
    },
    exitImageTab(py,index){
      this.exitCityPic = this.exitCityPics[py];
      this.isColor = index;
      if(index == 0){
        this.exitSigns = " ";
      }
      else{
        this.exitSigns = '更多'+this.exitCityTitles[index].name + '游>';
      }
    },
    exitCityChage(val){
      let array = this.exitCityTitles.slice(8);
      let obj = {};
      obj = array.find((item)=>{
         return item.name === val;
      });
      console.log(obj)
       this.exitCityTitles.splice(obj.index,1);
       this.exitCityTitles.splice(7,0,obj);
       this.exitCityTitles.forEach((el,i)=>{
         el.index = i;
       })
       this.exitCityPic = this.exitCityPics[obj.py];
       this.isColor = obj.index;
       if(obj.index == 0){
         this.exitSigns = " ";
       }
       else{
         this.exitSigns = '更多'+this.exitCityTitles[obj.index].name + '游>';
       }
       this.exitSelect = "更多";
    },
   
    handleClick(tab){
      var n = tab.name
      switch(n){
        case 'second1':
          this.$nextTick(() =>{this.autoBorder(this.$refs.perHot,"per-width")});
          this.$nextTick(() =>{this.autoBorder(this.$refs.perDestination,"per-width")});
          break;
        case 'third1':
          this.$nextTick(() =>{this.autoBorder(this.$refs.ticketHot,'ticket-width')});
          this.$nextTick(() =>{this.autoBorder(this.$refs.ticketDestination,'ticket-width')});
          break;
        case 'fourth1':
          this.$nextTick(() =>{this.autoBorder(this.$refs.exitHot,'aside-width')});
          this.$nextTick(() =>{this.autoBorder(this.$refs.exitDestination,'aside-width')});
          break;
        case 'fifth1':
          this.$nextTick(() =>{this.autoBorder(this.$refs.terHot,'ter-width')});
          this.$nextTick(() =>{this.autoBorder(this.$refs.terDestination,'ter-width')});
          break;
        case 'six1':
          this.$nextTick(() =>{this.autoBorder(this.$refs.linerFind,'liner-width')});
          this.$nextTick(() =>{this.autoBorder(this.$refs.linerHot,'liner-width')});
          break;
        case 'seventh1':
          this.$nextTick(() =>{this.autoBorder(this.$refs.abroadDestination,'local-width')});
          this.$nextTick(() =>{this.autoBorder(this.$refs.domesticDestination,'local-width')});
          break;
        case 'eighth1':
          this.$nextTick(() =>{this.autoBorder(this.$refs.themeOutdoors,'theme-width')});
          this.$nextTick(() =>{this.autoBorder(this.$refs.themeNatural,'theme-width')});
          this.$nextTick(() =>{this.autoBorder(this.$refs.themeHumanity,'theme-width')});
          this.$nextTick(() =>{this.autoBorder(this.$refs.themeFestival,'theme-width')});
       }
     },
    
    autoBorder (arr,id) {
      let max  = document.getElementById(id).clientWidth;
      var len = 0;
        if(!arr){
          return
        }
        arr.forEach((i,index)=>{
        len += i.clientWidth;
        if(len > (max+1) ||len == max){
          arr[index-1].childNodes[0].style.borderRight = 'none';
          len = i.clientWidth;
        }
       }) 
      arr[arr.length-1].childNodes[0].style.borderRight = 'none';
    },
    
    // getFirst(obj){ 
    //   for(var key in obj){
    //     return obj[key];
    //   }
    // },
    terImageTab(py,index){
      this.terCityPic = this.terCityPics[py];
      this.isColor = index;
      if(index == 0){
        this.terSigns = " ";
      }
      else{
        this.terSigns = '更多'+this.terCityTitles[index].name + '游>';
      }
    },
    terCityChage(val){
      let arr = this.terCityTitles.slice(8);
      let obj = {}
      obj = arr.find((item)=>{
        return item.name === val;
      })
      this.terCityTitles.splice(obj.index,1);
      this.terCityTitles.splice(7,0,obj);
      this.terCityTitles.forEach((i,item)=>{
        i.index = item;
      })
      this.isColor = obj.index;
      this.terCityPic = this.terCityPics[obj.py];
      this.terSigns = '更多'+this.terCityTitles[obj.index].name + '游>';
    },
    linerImageTab(py,index){
      this.linerCityPic = this.linerCityPics[py];
      this.isColor = index;
      this.linerSigns = '更多'+this.linerCityTitles[index].name + '产品>';

    },
    linerChange(val){
      let arr = this.linerCityTitles.slice(8);
      let obj = {}
      obj = arr.find((item)=>{
        return item.name === val;
      })
      this.linerCityTitles.splice(obj.index,1);
      this.linerCityTitles.splice(7,0,obj);
      this.linerCityTitles.forEach((i,item)=>{
        i.index = item;
      })
      this.isColor = obj.index;
      this.linerCityPic = this.linerCityPics[obj.py];
      this.linerSigns = '更多'+this.linerCityTitles[obj.index].name + '产品>';
    },
    localImageTab(py,index){
      this.localCityPic = this.localCityPics[py];
      this.isColor = index;
      if(index == 0){
        this.localSigns = " ";
      }
      else{
        this.localSigns = '全部'+this.localCityTitles[index].name + '玩乐>';
      }

    },
    localChange(val){
      let arr = this.localCityTitles.slice(8);
      let obj = {}
      obj = arr.find((item)=>{
        return item.name === val;
      })
      this.localCityTitles.splice(obj.index,1);
      this.localCityTitles.splice(7,0,obj);
      this.localCityTitles.forEach((i,item)=>{
        i.index = item;
      })
      this.isColor = obj.index;
      this.localCityPic = this.localCityPics[obj.py];
      this.localSigns = '全部'+this.localCityTitles[obj.index].name + '玩乐>';

    },
    themeImageTab(py,index){
      this.themeCityPic = this.themeCityPics[py];
      this.isColor = index;
      if(index == 0){
        this.exitSigns = " ";
      }
      else{
        this.exitSigns = '更多'+this.exitCityTitles[index].name + '游>';
      }
    },
  
    
  aaa(){
    this.$refs.select.blur();
     this.$refs.data.hotTab = this.hotCity;
     this.$refs.data.mainTabs = this.maincities;
     this.$refs.data.InternationalTabs.length = 0;
  },
  visibleChange(event){
    event = false;
    console.log(event)
  }
   
   
    
  
  },
  mounted() {
    this.loadAll();
    this.load();
    this.peripheryPic = this.peripherys[this.perCityTitles[0].py];
    this.ticketPic = this.ticketPics[this.ticketTitles[0].py];
    this.exitCityPic = this.exitCityPics[this.exitCityTitles[0].py];
    this.terCityPic = this.terCityPics[this.terCityTitles[0].py];
    this.linerCityPic = this.linerCityPics[this.linerCityTitles[0].py];
    this.linerSigns = '更多'+this.linerCityTitles[0].name + '产品>';
    this.localCityPic = this.localCityPics[this.localCityTitles[0].py];
    this.themeCityPic = this.themeCityPics[this.themeCityTitles[0].py];

    setTimeout(()=>{ this.aaa()},1000);



    setTimeout(() => this.autoBorder(), 3000);
    // this.$nextTick(()=>{this.autoBorder()});
    // setTimeout(() => this.handleClick(), 3000)
    // this.handleClick()
    this.$nextTick(()=>{this.handleClick()});
    // this.$nextTick(()=>{this.perDestination()});


    
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
  height: 500px;
  display: flex;
  
}
.content {
  width: 100%;
  /* height: 500px; */
}
.hot_ul{
  width: 1130px !important;
}
.hot_pic{
  width: 900px;
  height: 360px;
  float: left;
}
.hot_pic_box{
  position: relative;
  width: 225px;
  height: 180px;
  float: left;
  overflow: hidden;
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
.city_button:hover{
  background-color:rgb(18, 120, 204);
  color: white;
}
.btnColor{
  background-color: rgb(18, 120, 204);
  color: white;
}
.select_city{
  width: 50px;
  height: 25px;
  margin-top: 8px;
  position: absolute;
  left: 560px;
}
.ticket_right_image{
  width: 233px;
  height: 360px;
}
.ticket_find{
  margin-top: 74px !important;
}
.liner_hot{
  margin-top: 65px !important;
}

.theme_natural{
  margin-top: 128px;
}
.theme_humanity{
  margin-top: 64px;
}
.theme_festival{
  margin-top: 64px;
}





.content_aside{
  width: 220px !important;
  height: 408px;
  border: 1px solid gray;
  text-align: left;
  padding: 15px 0 15px 20px;
}
.sale_dt{
  color: black;
  font-size: 13px;
  /* padding-bottom: 5px; */
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
  font-size: 12px;
  border-right: 1px solid gray;
  padding-right: 8px;
  margin-right: 8px;
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
  position: relative;   
}
.oversea_ul{
  width: 1160px;
  height: 30px;
  padding-left: 0;
  position: relative;  
}
.main_li{
  list-style: none;
  float: left;
  line-height: 30px;
}
.main_button{
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
  text-decoration: none;
}
.overseas_pic{
  width: 690px;
  height: 360px;
  float: left;
}
.pic_box{
  position: relative;
  width: 220px;
  height: 180px;
  float: left;
  overflow: hidden;
  margin:0 10px 10px 0;
}
.pic_box:hover {
  border-bottom: 1px solid gray;
}
.pic_box:hover .pic_item{
  transform: scale(1.1);

}
.pic_item{
  width: 230px !important ;
  height: 180px;
  float: left;
  transition: all 0.5s;
}
/* .pic_item:hover{
  transform: scale(1.1);
} */
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
  /* margin: 5px 5px; */
  transition: all 0.5s linear;
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
  width: 220px;
  height: 160px;
  float: left;
  margin:0 10px 10px 0;
  overflow: hidden;
}
.oversea_box:hover{
  border-bottom: 1px solid gray;
}
.oversea_box:hover .oversea_pic{
  transform: scale(1.1);
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
  width: 220px;
  height: auto;
  float: left;
  margin:0 10px 10px 0;
  overflow: hidden;
  left: -15px;
}
.oversea_right_box:hover{
  border-bottom: 1px solid gray;
}
.oversea_right_box:hover .oversea_pic{
  transform: scale(1.1);
}
.overseaTitle1,.overseaTitle2{
  position: absolute;
  left: 0px;
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
}
.domestic_pic_item{
  width: 220px;
  height: 88px;
  transition: all 0.5s linear;
  display: block;

}

/* .domestic_pic_item:hover{
  transform: scale(1.1);  
} */
.domestic_box{
  width: 220px !important; 
  height: 160px;
  background-color:white;
  margin: 0 10px 10px 0;
}
.domestic_box:hover{
  border-bottom: 1px solid gray;
}
.domestic_box :hover .domestic_pic_item{
  transform: scale(1.1);  
}
.domestic_box :hover .scene_pic_item{
  transform: scale(1.1);
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
  /* width: auto; */
  display: block;
  float: left;
  margin-bottom: 5px;
} 
.scene_pic_item{
  width: 220px;
  height: 100px;
  transition: all 0.5s linear;
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

.city_select{
  left: 650px;
  top: 5px;
  height: 20px;
  line-height: 20px;
}
/* .aa{
  position: relative;
}
.bb{
  position: absolute;
  right: -400px;
} */
.choose_width{
  width: 430px;
}
.popover{
  overflow-x: scroll
}
</style>




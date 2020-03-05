<template>
  <div class="hello">
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
                        <el-input class="input-style"  v-model="inputCity" placeholder="请选择城市"></el-input>
                      </div>
                      <ChooseCity  @changeCity="updateCity"   ref="myChooseCity"></ChooseCity>
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
              <div class="input_one" id="city2">
                <div class="city">
                  <span>出发城市</span>
                  <el-popover class="input_one_style" trigger="focus" placement="bottom">
                    <div slot="reference">
                      <el-input class="input-style"  v-model="inputCity1" placeholder="请选择城市"></el-input>
                    </div>
                    <ChooseCity @changeCity="updateCity1" ref="myChooseCity"></ChooseCity>
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
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>

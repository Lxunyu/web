<template>
    <el-container>
        <el-aside  class="content_aside">
          <slot name="TravalNav"></slot>
        </el-aside>
        <el-main>
          <div class="main_ul"> 
            <slot name="ButtonBar"></slot>
          </div> 
          <slot name="PicBar"></slot>
         
        </el-main>
    </el-container>
</template>

<script>
export default {
    name:'TravalBar',
    components:{
    }
}
</script>

<style scoped>
.content_aside{
  width: 220px !important;
  height: 408px;
  border: 1px solid gray;
  text-align: left;
  padding: 15px 0 15px 20px;
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


.el-main{
  padding-top: 0px;
}
.periphery_pic{
  width: 920px;
  height: 360px;
  margin-top: 10px;
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

.icon_money{
  margin-bottom: 20px;
}
/* .main_right::after{
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
  zoom: 1;
} */
.el-tabs__content{
  overflow: hidden;
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

</style>
<template>
    <div>
      <div class="hot_pic_box domestic_box" :title="picDetails.alt">
          <a href="javascript:void(0);">
            <div class="domestic_pic_item">
              <el-image class="hot-image" :src="picDetails.src"></el-image>
            </div>
          </a>
          <p class="domestic_p">
            {{picDetails.alt}}
          </p>
          <p class="domestic_p">
          <span class="domestic_span">
            <span  class="circle_money">
              {{picDetails.money}}
            </span>
            起
          </span>
          <svg-icon class="black_money" name="blackMoney"></svg-icon>
          </p>
      </div>
      </div>
</template>

<script>
export default {
  name:"PicItem",
  props:{
    picDetails:{
      type:Object
    }
  },
  mounted(){
    // console.log(this.$props.picDetails,"picDetails")
  }
}
</script>
<style scoped>
.hot_pic_box{
  position: relative;
  width: 225px;
  height: 180px;
  float: left;
  overflow: hidden;
}
.domestic_pic_item{
  width: 220px !important; 
  height: 88px !important;
  transition: all 0.5s linear;
  display: block;
  overflow: hidden;
}
.domestic_box{
  width: 220px !important; 
  /* height: 160px; */
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
.hot-image{
  height:100% !important;
  width: 100% !important;
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
.circle_money{
  font-size: 25px;
  color:  hsl(14, 95%, 60%);
}
.black_money{
  width: 15px !important;
  height: 15px !important;
  margin-top: 8px;
  display: block;
  float: right;
}
</style>
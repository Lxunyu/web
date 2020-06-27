<template>
    <div>
        <ul class="main_ul">
            <li class="main_li" v-for="cityName in buttonNames.slice(0,8)" :key="cityName.index">
              <button class="city_button" @click="perImageTab(cityName.py,cityName.index)" :class="isColor==cityName.index?'btnColor':'' ">
                  <slot :cityName="cityName"></slot>
              </button>
            </li>
            <el-select v-model="selectValue" round size="mini" class="main_button select_city" @change="cityChange">
                <el-option 
                    v-for="(selectTitle,selectTitleIndex) in buttonNames.slice(8)" :key="selectTitleIndex"
                    :value="selectTitle.name">
                </el-option>
                </el-select> 
            <span class="main_a">
                <a href="javascript:void(0);" v-for="(perSign,perSigntIndex) in Signs" :key="perSigntIndex">{{perSign}}</a>
            </span>
        </ul>
    </div>
</template>

<script>
import eventBus from './../../assets/eventBus.js';
export default {
    name:'TravalButton',
    props:{
      buttonNames:{
        type:Array
      },
      picNames:{
        type:Object,
      },
    },
    components:{
    },
    data(){
      return {
        isColor:0,
        peripheryPic:[],
        selectValue:"",
        Signs:"",
      }
    },
    methods:{
      perImageTab(py,index){
        this.peripheryPic = this.$props.picNames[py];
        this.isColor = index;
        eventBus.$emit("pics",this.peripheryPic);
        if(index == 0){
          this.Signs = " ";
        }
        else{
          this.Signs = '更多'+this.$props.buttonNames[index].name + '游>';
        }
     

      },
      cityChange(val){
        let array = this.$props.buttonNames.slice(8);
        let obj = {};
        obj = array.find((item)=>{
          return item.name === val;
        });
        this.$props.buttonNames.splice(obj.index,1);
        this.$props.buttonNames.splice(7,0,obj);
        this.$props.buttonNames.forEach((el,i)=>{
          el.index = i;
        })
        this.peripheryPic = this.$props.picNames[obj.py];
        eventBus.$emit("pics",this.peripheryPic);
        
        this.isColor = obj.index;
        this.Signs = '更多'+this.$props.buttonNames[obj.index].name + '游>';
        this.selectValue = "更多";
    },
      getFirst(){
        this.peripheryPic = this.$props.picNames[this.$props.buttonNames[0].py];
        console.log(this.peripheryPic,"perpic")
        // eventBus.$emit("pics",this.peripheryPic);
      }
      
    },
    mounted(){
      this.$nextTick(()=>{this.getFirst()})
      // this.peripheryPic = this.$props.picNames[this.$props.buttonNames[0].py];
      // eventBus.$emit("pics",this.peripheryPic)
      // this.$nextTick(()=>{this.peripheryPic})
    // this.ticketPic = this.ticketPics[this.ticketTitles[0].py];
    // console.log(this.$props.picNames[this.$props.buttonNames[0].py],"py")



      
    }
    
}
</script>


<style scoped>
.main_ul{
  width: 920px;
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
</style>
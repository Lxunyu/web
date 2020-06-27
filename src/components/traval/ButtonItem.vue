<template>
    <button  @click="perImageTab(cityName.py,cityName.index)" :class="isColor==cityName.index?'btnColor':'' ">{{cityName.name}}</button>
</template>

<script>
export default {
    name:"ButtonItem",
    props:{
        cityName:{
            type:Object
        }
    },
    data(){
        return{

        }
    },
    methods:{
         perImageTab(py,index){
        this.peripheryPic = this.$props.picNames[py];
        this.isColor = index;
        eventBus.$emit("pics",this.peripheryPic);
        if(index == 0){
          this.Signs = " ";
          console.log(this.Signs,"persigns")

        }
        else{
          this.Signs = '更多'+this.$props.buttonNames[index].name + '游>';
        }
     

      },
    }
}
</script>
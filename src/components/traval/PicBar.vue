<template>
     <div class="periphery_pic">
        <PicItem v-for="(pic,peripheryIndex) in picData" :key="peripheryIndex" :picDetails="pic"></PicItem>
    </div>
</template>

<script>
import PicItem from './PicItem';
import eventBus from './../../assets/eventBus.js';

export default {
    name:"PicBar",
    props:{
        
    },
    components:{
        PicItem
    },
    data(){
        return{
            picData:[],
        }
    },
    created(){
        // this.getPics()
    },
    methods:{
        getPics(){
            eventBus.$on("pics",(picData)=>{
                this.picData = picData;

            })

        },
        
        
    },
    mounted(){
        this.getPics();
        // this.picData = this.$nextTick(()=>{this.getPics(this.picData)})
        console.log(this.picData,"this.picdata")

    }
}
</script>

<style scoped>
.periphery_pic{
  width: 920px;
  height: 360px;
  margin-top: 20px;
}
</style>
<template>
 <div>
     <top></top>
     <center></center>
     <Ticket></Ticket>
 </div>
  
  

  
</template>

<script>
import top from '../components/top';
import center from '../components/Center';
import Ticket from '../components/Ticket';
export default {
  name: 'all',
  props: {
    msg: String
  },
  components:{
      top,
      center,
      Ticket
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>

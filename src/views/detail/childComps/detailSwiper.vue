<template>
    <swiper class="outer-swiper">
      <swiper-item v-for="item in topImages">
           <img :src="item" alt="">
      </swiper-item>
    </swiper>
  
</template>

<script>
import{Swiper,SwiperItem} from "components/common/swiper"

export default {
  name:"detailSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>


<style scoped>
.outer-swiper{
  height: 300px;
}
</style>
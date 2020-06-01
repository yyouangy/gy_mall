<template>
    <div >
        <nav-bar>
          <div slot="left" class="back">
              <img src="~assets/img/common/back.svg"  @click="backHomeClick" alt="">
          </div>
          <div slot="center" class="title">
              <div v-for="(items,index) in titles" 
                   class="title-item"
                   :class="{active:currentIndex===index}"
                   @click="titleClick(index)">{{items}}</div>
              </div>
        </nav-bar>
    </div>
</template>


<script>
import NavBar from "components/common/navbar/NavBar"

export default {
  name:"detailNavBar",
  components:{
    NavBar
  },
  data(){
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    titleClick(index){
      this.currentIndex=index
      this.$emit('titleClick',index)
    },
    backHomeClick(){
        this.$router.back(-1)
    }
  }
}
</script>



<style scoped>
.title{
  display: flex;
  font-size: 14px;
}

.title-item{
  flex:1;
}
.active{
  color:var(--color-high-text);
}
.back{
  margin-top: 6px;
}
</style>
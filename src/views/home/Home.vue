<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="content" ref="scroll">
        <home-swiper :banners="banners"/>
        <recommend-view :recommends="recommends"/>
        <feature-view/>
        <tab-control :titles="['流行','新款','精选']" 
                  class="tab-control"
                  @tabClick="tabClick" />
        <goods-list :goods="showGoods"/>
    </scroll>

    <back-top @click.native="backClick" class="back-top"/>
  </div>
</template>


<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from  './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'


import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import {getHomeGoods,getHomeMultidata} from 'network/home.js'

export default {
  name:"Home",
  components:{
  HomeSwiper,
  RecommendView,
  FeatureView,
  NavBar,
  TabControl,
  GoodsList,
  Scroll,
  BackTop
},
  data(){
  return{
    banners:[],
    recommends:[],
    goods:{
      pop:{page:0,list:[]},
      new:{page:0,list:[]},
      sell:{page:0,list:[]}
    },
    currentType:'pop'
  }
},
created(){
        this.getHomeMultidata()

        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
},
methods:{
  /**
   * 事件监听相关的方法
   */
  tabClick(index){
        switch(index){
            case 0:
            this.currentType='pop'
            break
            case 1:
            this.currentType='new'
            break
            case 2:
            this.currentType='sell'
        }
  },
  backClick(){
        this.$refs.scroll.scroll.scrollTo(0,0,500)
  },

  /**
   * 网络请求相关的方法
   */
  getHomeMultidata(){
    getHomeMultidata().then(res=>{
    this.banners=res.data.banner.list;
    this.recommends=res.data.recommend.list;
    // console.log(res);
       })
  },

  getHomeGoods(type){
    const page=this.goods[type].page+1;
    getHomeGoods(type,page).then(res=>{
      // console.log(res);
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page+=1

    })
  }
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list;
}
  }
}
</script>
<style scoped>
#home{
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
  position:fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control{
  position: sticky;
  top: 44px;
  z-index: 9;
}
.content{
  overflow: hidden;
  position:absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
  

}
</style>
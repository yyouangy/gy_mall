<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <tab-control :titles="['流行','新款','精选']" 
                  class="tab-control"
                  @tabClick="tabClick"
                  ref="tabControl1" 
                  v-show="isTabFixed"/>
    <scroll class="content" 
            ref="scroll" 
            :probeType="3" 
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore"> 
        <home-swiper :banners="banners" @SwiperImageLoad="SwiperImageLoad"/>
        <recommend-view :recommends="recommends"/>
        <feature-view/>
        <tab-control :titles="['流行','新款','精选']" 
                  @tabClick="tabClick"
                  ref="tabControl2" />
        <goods-list :goods="showGoods"/>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowbackbtn"/>
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
import {debounce} from 'common/utils.js'

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
    currentType:'pop',
    isShowbackbtn:false,
    tabOffsetTop:0,
    isTabFixed:false,
    saveY:0
  }
},
created(){
      //1.请求多个数据
        this.getHomeMultidata()
      //2.请求商品数据
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
},
mounted(){
      //1.监听item中图片加载完成
      const refresh=debounce(this.$refs.scroll.refresh,200)

      this.$bus.$on('itemImgLoad',()=>{
        refresh()
      })

      //2.获取tabControl的offsetTop
      // setTimeout(()=>{
      //   console.log(this.$refs.tabControl.$el.offsetTop);
        
      // },300)
      
},
destroyed(){
console.log('home destroyed');

},
activated(){
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.saveY,0)
},
deactivated(){
this.saveY=this.$refs.scroll.getScrollY()
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
        this.$refs.tabControl1.currentIndex=index;
        this.$refs.tabControl2.currentIndex=index;
  },
  backClick(){
        this.$refs.scroll.scrollTo(0,0)
  },
  contentScroll(position){
    //1.决定backtop是否显示
    this.isShowbackbtn=(-position.y)>1000

    //2.决定tabcontrol是否吸顶
    this.isTabFixed=(-position.y)>this.tabOffsetTop
    
  },
  loadMore(pullUpLoad){
    this.getHomeGoods(this.currentType);
    
  },
  SwiperImageLoad(){
    this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop
   
  },

  /**
   * 网络请求相关的方法
   */
  getHomeMultidata(){
    getHomeMultidata().then(res=>{
    this.banners=res.data.banner.list;
    this.recommends=res.data.recommend.list;
       })
  },

  getHomeGoods(type){
    const page=this.goods[type].page+1;
    getHomeGoods(type,page).then(res=>{
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page+=1

        //完成上拉加载更多
      this.$refs.scroll.finishPullUp();
      
      
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
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}

.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}

.tab-control{
  position: relative;
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
/* .content{
  height：calc(100%-93px);
  overflow: hidden;
  margin-top: 44px;
} */
</style>
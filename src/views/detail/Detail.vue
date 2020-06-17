<template>
  <div id="detail">
     <detail-nav-bar @titleClick="titleClick" ref="nav"/>
        <scroll class="content" 
                ref="scroll"
                :probe-type="3" 
                @scroll="contentScroll"
                >
           <detail-swiper :top-images="topImages"/>
           <detail-base-info :goods="goods"/>
           <detail-shop-info :shop="shop"/>
           <detail-goods-info :detail-info="detailInfo" @detailImageLoad="detailImageLoad"/>
           <detail-params-info ref="params" :paramInfo="detailparamsinfo"/>
           <detail-comment-info ref="comment" :commentInfo="detailcommentinfo"/>
           <goods-list ref="recommend":goods="recommends"/>
        </scroll>
        <back-top v-show="isShowBackTop" @click.native="backtClick()"/>
        <detail-bottom-bar @add-cart="addToCart"/>
  </div>
</template>


<script>
import detailNavBar from "./childComps/detailNavBar"
import detailSwiper from "./childComps/detailSwiper"
import DetailBaseInfo from "./childComps/DetailBaseInfo"
import DetailShopInfo from "./childComps/DetailShopInfo"
import DetailGoodsInfo from "./childComps/DetailGoodsInfo"
import DetailParamsInfo from "./childComps/DetailParamsInfo"
import DetailCommentInfo from "./childComps/DetailCommentInfo"
import DetailBottomBar from "./childComps/DetailBottomBar"

import Scroll from "components/common/scroll/Scroll"
import GoodsList from "components/content/goods/GoodsList"

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "network/detail.js"
import {debounce} from "common/utils.js"
import {itemListenerMixin} from "common/mixin.js"

import {backTopMixin} from "common/mixin.js"

import {mapActions} from 'vuex'

export default {
  name:"Detail",
  data(){
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      detailparamsinfo:{},
      detailcommentinfo:{},
      recommends:[],
      themeTopYs:[],
      getThemeTopY:null,
      currentIndex:0
    }
  },
  components:{
    detailNavBar,
    detailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList
  },
  mixins:[itemListenerMixin,backTopMixin],
  created(){
    //1.保存传入的iid
    this.iid=this.$route.params.iid

    //2.根据iid请求详情数据
       getDetail(this.iid).then(res=>{
     //1.获取顶部的轮播图数据
        const data=res.result;
     //2.获取顶部的图片数据
        this.topImages=res.result.itemInfo.topImages
      
     //3.获取商品信息
        this.goods=new Goods(data.itemInfo, data.columns, data.shopInfo.services)

     //4.获取店铺信息
        this.shop=new Shop(data.shopInfo)

     //5.获取商品详细信息
        this.detailInfo=data.detailInfo

     //6.获取商品参数信息
        this.detailparamsinfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)

      //7.获取商品评论信息
      if(data.rate.cRate!==0){
      this.detailcommentinfo=data.rate.list[0]
      }

      // //1.第一次获取，值不对
      // //值不对的原因：this.$refs.params.$el压根没有渲染
      //    this.themeTopYs=[];
      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      //       console.log(this.themeTopYs);

      // this.$nextTick(()=>{
      //   //2.第二次获取：值仍然不对
      //   //值不对的原因：图片没有计算在内
      //   //根据最新的数据，对应的DOM是已经被渲染出来
      //   //但是图片依然是没有加载完（目前获取到的OffsetTop是不包含其中的图片的）
      //   //offsetTop值不对的时候，都是因为图片未加载完成的问题
      //   this.themeTopYs=[];
      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      //       console.log(this.themeTopYs);
      // })
     }) 

     //3.请求推荐数据
     getRecommend().then(res=>{
       this.recommends=res.data.list
     })

     //4.给getThemeTopY赋值
     this.getThemeTopY=debounce(()=>{
        this.themeTopYs=[];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE)
     },100)
  },

      methods:{
     ...mapActions({
        addCart: 'addToCart'
      }),
     detailImageLoad(){
            this.refresh()
            this.getThemeTopY()
     },
     titleClick(index){
       this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
     },
     contentScroll(position){
       //1.获取y值
       const positionY=-position.y

       //2.positionY和主题中的值进行对比
      //  [0, 9289, 10058, 10253]
      //positionY在0到9289之间，index=0
      //positionY在=9289到10058之间，index=1
      //positionY在10058到10253之间，index=2
      //positionY超过或=10253，index=3
      let length=this.themeTopYs.length
      for (let i=0;i<length-1;i++) {

          if(this.currentIndex!==i&&(positionY>=this.themeTopYs[i]&&positionY<this.themeTopYs[i+1])){
            this.currentIndex=i;
            this.$refs.nav.currentIndex=this.currentIndex
          }
        // if(this.currentIndex!==i&&((i<length-1&&positionY>=this.themeTopYs[i]&&positionY<
        // this.themeTopYs[i+1])||(i===length-1&&positionY>=this.themeTopYs[i]))){
        //   this.currentIndex=i;
        //   this.$refs.nav.currentIndex=this.currentIndex
      }
      //3. back-top按钮
        this.isShowBackTop = positionY > 800 ? true : false
     },
      addToCart() {
        // 1. 获取商品基本信息
        const product = {}
        product.iid = this.iid
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.lowNowPrice
        product.checked = true
        // console.log(this.goods);
        
        console.log(product);
        
        // 2. 把数据传入Vuex
        // this.$store.dispatch('addToCart', product).then(res => {
        //   console.log(res);
        // })
        // 通过mapActions调用actions方法
        this.addCart(product).then(res => {
          this.$toast.show(res)
        })
      }
      

  },
  mounted(){   
    
    
  },
  updated() {
    
  },
  destroyed() {
      this.$bus.$off('itemImgLoad',this.itemImgListener)
      
  },
}


</script>
<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
/* .detail-scroll{
  overflow: hidden;
  position:absolute;
  top: 44px;
  bottom: 0;
  right: 0;
  left: 0;
} */
 .content {
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
  /*.detail-nav {
    position: relative;

    background: #fff;
  }
  .back{
    padding-top: 10px;
    line-height: 34px;
  } */
</style>
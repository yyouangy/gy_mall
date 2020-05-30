<template>
  <div id="detail">
     <detail-nav-bar/>
        <scroll class="detail-scroll" ref="scroll">
           <detail-swiper :top-images="topImages"/>
           <detail-base-info :goods="goods"/>
           <detail-shop-info :shop="shop"/>
           <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
           <detail-params-info :paramInfo="detailparamsinfo"/>
           <detail-comment-info :commentInfo="detailcommentinfo"/>
           <goods-list :goods="recommends"/>
        </scroll>
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

import Scroll from "components/common/scroll/Scroll"
import GoodsList from "components/content/goods/GoodsList"

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "network/detail.js"
import {debounce} from 'common/utils.js'

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
      recommends:[]
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
    Scroll,
    GoodsList
  },
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
     }) 

     //3.请求推荐数据
     getRecommend().then(res=>{
       this.recommends=res.data.list
     })
  },

      methods:{
        imageLoad(){
            this.$refs.scroll.refresh()
     }
  },
  mounted(){
      const refresh=debounce(this.$refs.scroll.refresh,200)
      this.$bus.$on('itemImgLoad',()=>{  
        refresh()
    })
  }
}


</script>
<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-scroll{
  overflow: hidden;
  position:absolute;
  top: 44px;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
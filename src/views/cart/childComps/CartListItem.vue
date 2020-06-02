<template>
  <div class="list-item">
    <div class="item-selector">
      <check-button :is-checked="product.checked" @checkBtnClick="itemClick"/>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="info-title">{{product.title}}</div>
      <div class="info-desc">{{product.desc}}</div>
      <div class="info-bottom">
        <div class="bottom-price left">{{product.price}}</div>
        <div class="bottom-count right">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from "./CheckButton"
  export default {
    name: "CartListItem",
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
      CheckButton
    },
    methods: {
      itemClick() {
        this.product.checked = !this.product.checked
      }
    },
  }
</script>

<style scoped>
  .list-item {
    display: flex;

    width: 100%;
    padding: 5px;
    border-bottom: 1px solid #ccc;
    align-items: center;
  }

  .item-selector {
    width: 20px;
    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/
  }

  .item-img {
    padding: 5px;
  }

  .item-img img {
    width: 80px;
    height: 100px;
    border-radius: 5px;
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    overflow: hidden;
  }
  .info-title, .info-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-info .info-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    margin-top: 10px;
  }

  .bottom-price {
    color: orangered;
  }


</style>
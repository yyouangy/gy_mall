<template>
  <div class="bottom-bar">
    <check-button :is-checked="allSelect" @checkBtnClick="checkBtnClick"/>
    <div class="all-select">全选</div>
    <div class="total-price">合计: {{totalPrice}}</div>
    <div class="buy-product">去结算({{selectNum}})</div>
  </div>
</template>

<script>
  import CheckButton from "./CheckButton"
  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      totalPrice() {
        return this.$store.getters.cartList.filter( item => {
          return item.checked == true
        }).reduce((total,item) => {
          return total+item.price * item.count
        }, 0).toFixed(2)  
      },
      
      allSelect() {
        let filterLength = this.$store.getters.cartList.filter(item => {
          return item.checked == true
        }).length
        return this.$store.getters.cartList.length == filterLength
      },
      selectNum() {
        return this.$store.getters.cartList.filter(item => item.checked).length
      }
    },
    methods: {
      checkBtnClick() {
        this.$store.getters.cartList.map(item => item.checked = true)
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    position: fixed;
    bottom: 49px;
    box-sizing: border-box;

    display: flex;
    align-items: center;

    height: 24px;
    width: 100%;
    background-color: #eee;
    padding-left: 35px;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
  }
  .all-select {
    padding-left: 5px;
  }
  .total-price {
    flex: 1;
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .buy-product {

    width: 100px;
    height: 24px;

    text-align: center;
    line-height: 24px;
    color: #fff;

    background-color: orangered;
  }

</style>
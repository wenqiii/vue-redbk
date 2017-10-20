<template>
  <div class="cart_page">
      <div class="cart-header">
          <span class="left">
              <img src="../assets/l-arrow.png" @click="hideCart">
          </span>
          <span class="text">我的购物车</span>
      </div>
      <div class="cart_no_item" :class="hasPro?'isHidden':''">
          <img src="../assets/noitem.png" alt="">
          <div class="ad">- 队长猜你喜欢 -</div>
      </div>
      <div class="cart-content" :class="hasPro?'':'isHidden'" ref="cartWrapper">
          <ul>
            <li v-for="(p,index) in products">
                <div class="cart-item">
                    <div class="header">
                        <button class="btn" :class="isChoosed?'isActive':''" @click="isChoosed=!isChoosed"></button>
                        <h2>{{p.bName}}</h2> 
                    </div>
                    <div class="content">
                        <div class="left">
                            <button class="btn" :class="isChoosed?'isActive':''" @click="isChoosed=!isChoosed"></button>
                        </div>
                        <div class="img">
                            <img :src="p.img" alt="">
                        </div>
                        <div class="detail">
                            <div class="title">{{p.title}}</div>
                            <div class="ope">
                                <div class="c-price">￥{{p.price}}</div>
                                <div class="c-action">
                                    <div class="reduce" @click="reduce(p)">－</div>
                                    <div class="number">{{p.quantity}}</div>
                                    <div class="add" @click="add(p)">＋</div>
                                </div>
                                <div class="c-delete">
                                    <img src="../assets/delete.png" @click="deleteCartItem(p)" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                        <span>运费：</span>
                        <span>免运费</span>
                    </div>
                </div>
            </li>
          </ul>
          <div class="ad">- 队长猜你喜欢 -</div>
      </div>
      <div class="cart-footer">
          <span class="selected">
              <!-- <span class="s-btn"> -->
              <button class="btn" :class="allChoosed?'isActive':''" @click="allChoosed=!allChoosed"></button>
              <!-- </span> -->
              <div class="text">全选</div>
          </span>
          <span class="t-price">总计(含税):<span>￥{{totalPrice}}</span></span>
          <span class="b-account">
              <button @click="account">结算</button>
          </span>
      </div>
      
      <!-- <button :disabled="!products.length" @click="checkout">checkout</button> -->
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { MessageBox } from 'mint-ui'
import BScroll from 'better-scroll'
export default {
    data () {
        return {
            totalPrice: 0,
            isChoosed: false,
            allChoosed: false
        }
    },
  computed: {
      ...mapGetters({
          products: 'cartProducts'
      }),
      hasPro () {
          return this.products.length > 0? true : false 
      },
      quantityNum () {
        let added = this.products
        let array = []
        for (let item of added) {
            array.push(item.quantity)
        }
        return array
        }
  },
  methods: {
      hideCart () {
          this.$router.push('/main3')
      },
      selectedBrand (index) {
          this.choosedItem = index
      },
      add (p) {
          let { id,quantity } = p
          quantity++
          let newProduct = {
              id: id,
              quantity: quantity
          }
          this.$store.dispatch('updateCart',newProduct)
      },
      reduce (p) {
          let { id,quantity } = p
          if (quantity>1) {
              quantity--
              let newProduct = {
                  id: id,
                  quantity: quantity
              }
              this.$store.dispatch('updateCart',newProduct)
          }
      },
      deleteCartItem (p) {
          let { id, quantity } = p
          MessageBox.confirm('确认要删除所选商品?').then(action => {
              quantity = 0
              let newProduct = {
                  id: id,
                  quantity: quantity
              }
              this.$store.dispatch('updateCart',newProduct)
        }).catch(err => {
            let newProduct = {
                  id: id,
                  quantity: quantity
              }
              this.$store.dispatch('updateCart',newProduct)
        })
      },
      getTotalPrice () {
          for(let item of this.products) {
            this.totalPrice += item.price * item.quantity
            // console.log(this.totalPrice)
        }
      },
      account () {
          if (this.totalPrice!=0) {
            MessageBox.alert('恭喜你结算成功,请等待收货！')
            this.$store.state.cart.added = []
        }
      },
      _initScroll() {
          this.cartScroll = new BScroll(this.$refs.cartWrapper, {
              click: true,
              scrollY: true
          })
      }
  },
  created () {
		if (this.$store.state.isNav) {
        	this.$store.dispatch('isNav')
          }
        this.$nextTick(() => {
            this._initScroll()
        })
	},
	watch: {
		'$route' () {
			if (this.$store.state.isNav) {
        		this.$store.dispatch('isNav')
      		}
        },
        quantityNum () {
            this.totalPrice = 0
            this.getTotalPrice()
            },
        allChoosed() {
            if (this.allChoosed) {
                this.isChoosed = true
                this.totalPrice = 0
                this.getTotalPrice()
            } else {
                this.isChoosed = false
                this.totalPrice = 0
            }
            // console.log(this.products.length)
        }
	}

}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
*
    margin 0
    padding 0
.cart_page
    width 100%
    .cart-header
        width 100%
        height 1.39rem
        display flex
        line-height 1.39rem
        top 0
        left 0
        position fixed
        font-size 0.48rem
        background #fff
        &.isHidden
            display none
        .left
            margin-left 0.63rem
            img
                width 0.55rem
                height 0.55rem
                margin-top 0.47rem
        .text
            flex 1
            text-align center
            margin-left -0.63rem
    .cart_no_item
        top 60px
        position absolute
        img 
            width 100%
        .ad
            width 100%
            color #999999
            margin-top 20px
            text-align center
            font-size 0.42rem
            position absolute
    .isHidden
        display none
    .cart-content
        width 100%
        top 1.39rem
        bottom 1.35rem
        overflow hidden
        position absolute
        background #f5f8fa
        .ad
            width 100%
            color #999999
            margin-top 20px
            font-size 0.42rem
            text-align center
        ul > li
            list-style none
            margin-top 0.3rem
        .cart-item
            padding 0.31rem
            background #fff
            .header
                width 100%
                display flex
                line-height 0.76rem
                padding-bottom 0.39rem
                flex-direction row 
                border-bottom 1px solid #e6e6e6
                .btn
                    width 0.56rem
                    height 0.56rem
                    border none
                    border-radius 50%
                    margin 0.1rem
                    background #fff
                    outline none
                    border 1px solid #cccccc
                .isActive
                    border none
                    background-size cover
                    background-image url(../assets/tick.png)
                h2
                    font-size 0.43rem
                    margin-left 0.28rem
            .content
                width 100%
                display flex
                font-size 0.37rem
                flex-direction row
                .left
                    line-height 3.22rem
                    .btn
                        width 0.56rem
                        height 0.56rem
                        border none
                        border-radius 50%
                        background #fff
                        outline none
                        border 1px solid #cccccc
                    .isActive
                        border none
                        background-size cover
                        background-image url(../assets/tick.png)
                .img
                    margin 0.33rem
                    img
                        width 2.13rem
                        height 2.13rem
                .detail
                    padding 0.33rem
                    .title
                        color #000
                        font-size 0.37rem
                        margin-bottom 0.5rem
                    .ope
                        // height 0.43rem
                        // line-height 0.43rem
                        display flex
                        flex-direction row 
                        .c-price
                            flex 2
                            color #ff2741
                            font-size 0.43rem
                        .c-action
                            flex 2
                            width 2.44rem
                            height 0.59rem
                            line-height 0.59rem
                            color #cccccc
                            border-radius 4px
                            font-size 0.53rem
                            display flex
                            flex-direction row 
                            justify-content space-between
                            border 1px solid #cccccc
                            .number
                                color #333333
                        .c-delete
                            flex 1
                            text-align center
                            margin-top 0.09rem
                            img
                                width 0.42rem
                                height 0.5rem
            .footer
                width 100%
                display flex
                font-size 0.41rem
                flex-direction row 
                border-top 1px solid #e6e6e6
                justify-content space-between
                span 
                    margin 0.41rem
    .cart-footer
        width 100%
        height 1.35rem
        line-height 1.35rem
        bottom 0
        left 0
        display flex
        position fixed
        font-size 0.41rem
        flex-direction row
        .selected
            flex 2
            display flex
            flex-direction row
            margin-left 0.37rem
            .btn
                width 0.61rem
                height 0.61rem
                margin-top 0.4rem
                border none
                border-radius 50%
                background #fff
                outline none
                margin-right 0.22rem
                border 1px solid #cccccc
            .isActive
                border none
                background-size cover
                background-image url(../assets/tick.png)
        .t-price
            flex 3
            span
                color #ff2741
        .b-account
            flex 2
            button
                width 100%
                height 100%
                border none 
                color white
                font-size 0.46rem
                background #ff2741
</style>


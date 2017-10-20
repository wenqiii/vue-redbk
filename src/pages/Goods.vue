<template>
    <div class="goods_page">
        <div class="g_header">
            <div class="g_nav">
                <span class="left">
                    <img src="../assets/l-arrow.png" @click="hideGoods" alt="">
                </span>
                <span class="text">{{title}}</span>
                <span class="right">
                    <img src="../assets/transmit.png" alt="">
                </span>
            </div>    
        </div>
        <div class="g_content" ref="goodsWrapper">
            <div>
                <div class="g_pic">
                    <swiper :options="swiperOption" class="swiper-box">
                        <swiper-slide class="swiper-item" v-for="(img,index) in Goods.imgs" :key="index">
                            <img v-lazy="img" alt="">
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
                <div class="title">
                    <div class="t_header">
                        <h3>{{Goods.title}}</h3>
                        <span>
                            来自  <a>{{Goods.brandName}}</a>
                        </span>
                    </div>
                    <div class="t_price">
                        <span class="big">￥{{Goods.newPrice}}</span>
                        <span class="small">专柜价：￥{{Goods.oldPrice}}</span>
                    </div>
                </div>
                <div class="promise">
                    <mt-cell title="该商品小红书承诺一贵就赔" is-link>
                        <img slot="icon" src="../assets/g1.png" alt="" width="75px" height="25px">
                    </mt-cell>
                    <mt-cell title="该商品小红书承诺七天保价" is-link>
                        <img slot="icon" src="../assets/g2.png" alt="" width="75px" height="25px">
                    </mt-cell>
                    <mt-cell :title="choosedTitle" is-link @click.native="popupVisible=true"></mt-cell>
                </div>
                <div class="desc">
                    {{Goods.desc}}
                </div>
            </div>
            <div class="g_footer">
                <div class="gf_container">
                    <div class="icon">
                        <span class="icon_item">
                            <div class="img">
                                <img src="../assets/s1.png" alt="">
                            </div>
                            <div class="text">店铺</div>
                        </span>
                        <span class="icon_item-cart" @click="showCart">
                            <div class="buyNum" v-show="hasGoods">{{quantity}}</div>
                            <div class="img">
                                <img src="../assets/s2.png" alt="">
                            </div>
                            <div class="text">购物车</div>
                        </span>
                        <span class="icon_item">
                            <div class="img">
                                <img src="../assets/s3.png" alt="">
                            </div>
                            <div class="text">心愿单</div>
                        </span>
                    </div>
                    <div class="shop">
                        <button @click.stop.prevent="addTo(Goods)">加入购物车</button>
                    </div>
                    <div class="apply">
                        <button @click.stop.prevent="addTo(Goods)">立即购买</button>
                    </div>
                </div>
            </div>
            <mt-popup v-model="popupVisible" position="bottom" class="mint-popup">
                <div class="chGoods_page">
                    <div class="cg_title">
                        <div class="t-img">
                            <img :src="Goods.img" alt="">
                        </div>
                        <div class="t-text">
                            <h4>{{title}}</h4>
                            <span>￥{{Goods.newPrice}}</span>
                        </div>
                        <div class="t-icon">
                            <img src="../assets/close.png" @click="popupVisible=false">
                        </div>  
                    </div>
                    <div class="cg_content">
                        <div class="opt-item" v-show="color">
                            <div class="text">颜色：</div>
                            <div class="options">
                                <ul>
                                    <li v-for="item in Goods.color" @click="selectedColor(item)">
                                        <button :class="choosedColor==item?'isActive':''">{{item}}</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="opt-item" v-show="size">
                            <div class="text">尺寸：</div>
                            <div class="options">
                                <ul>
                                    <li v-for="item in Goods.size" @click="selectedSize(item)">
                                        <button :class="choosedSize==item?'isActive':''">{{item}}</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="opt-item" v-show="weight">
                            <div class="text">重量：</div>
                            <div class="options">
                                <ul>
                                    <li v-for="item in Goods.weight" @click="selectedWeight(item)">
                                        <button :class="choosedWeight==item?'isActive':''">{{item}}</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="g-quantity">
                            <span class="text">数量：</span>
                            <span class="action">
                                <span class="reduce" :class="quantity>1?'isActive':''" @click="reduce">－</span>
                                <span class="number">{{quantity}}</span>
                                <span class="add" @click="add">＋</span>
                            </span>
                        </div>
                    </div>
                    <div class="cg_footer">
                        <button @click.stop.prevent="addtocart(Goods)">加入购物车</button>
                    </div>
                </div>
            </mt-popup>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapGetters, mapActions } from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
    data() {
        return {
            choosedColor: '',
            choosedSize: '',
            choosedWeight: '',
            quantity: 1,
            hasGoods: false,
            popupVisible: false,
            swiperOption: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction'
            }
        }
	},
	computed: {
		...mapGetters([
            'Goods',
            'title'
        ]),
        choosedItems() {
            return this.choosedColor + ' ' + this.choosedSize + ' ' + this.choosedWeight
        },
        choosedTitle () {
            return '已选：' + this.choosedItems
        },
        color () {      //判断是否显示颜色选项
            if( ""||this.$store.state.goods.choosedgoods.color[0] == undefined)
                return false
            else
                return true
        },
        size () {       //判断是否显示尺寸选项
            if( ""||this.$store.state.goods.choosedgoods.size[0] == undefined)
                return false
            else
                return true
        },
        weight () {     //判断是否显示重量选项
            if( ""||this.$store.state.goods.choosedgoods.weight[0] == undefined)
                return false
            else
                return true
        },
        
    },
    methods: {
        hideGoods() {       //回到main3
            this.$router.push('/main3')
        },
        addTo () {
            this.popupVisible = true
        },
        addtocart(Goods) {
            this.popupVisible = false
            this.hasGoods = true
            const quantity = this.quantity
            // const title = this.choosedItems
            this.$store.dispatch('addToCart',{ Goods,quantity })
        },
        showCart () {       //切换到购物车页面
            this.$router.push('/cart')
        },
        selectedColor (item) {
            this.choosedColor = item
            // console.log(this.choosedColor)
        },
        selectedSize (item) {
            this.choosedSize = item
        },
        selectedWeight (item) {
            this.choosedWeight = item
        },
        add () {       
            this.quantity ++   
        },
        reduce () {
            if(this.quantity > 1) {
                this.quantity --
            } else
                this.quantity = 1            
        },
        _initScroll () {
            this.goodsScroll = new BScroll(this.$refs.goodsWrapper, {
                click: true,
                scrollY: true
            });
            console.log(this.goodsScroll)
        }
    },
	components: {
		swiper,
    	swiperSlide
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
        }
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.goods_page
    width 100%
    height 100%
    background #f5f8fa
    .mint-popup-bottom
        width 100%
        height 60%
        .chGoods_page
            width 100%
            height 100%
            .cg_title
                height 2.54rem
                top 0
                left 0
                right 0
                display flex
                position fixed
                flex-direction row
                border-bottom 1px solid #e6e6e6
                .t-img
                    width 3.09rem
                    height 3.09rem
                    margin-top -1.04rem
                    margin-left 0.41rem
                    background #fff
                    border-radius 6px
                    img
                        width 2.35rem
                        height 2.35rem
                        margin 0.37rem
                .t-text
                    padding 0.43rem
                    h4
                        color #333333
                        font-size 0.43rem
                        margin-top 0.09rem
                        margin-bottom 0.56rem
                    span
                        color #ff2741
                        font-size 0.43rem
                .t-icon
                    top 0.29rem
                    right 0.27rem
                    position absolute
                    img
                        width 0.31rem
                        height 0.31rem
            .cg_content
                width 100%
                height 80%
                top 2.54rem
                position absolute
                .displayNone
                    display none
                .opt-item 
                    display flex
                    margin 0.44rem
                    font-size 0.39rem
                    flex-direction row
                    .text
                        margin-top 0.13rem
                        margin-right 0.58rem
                    .options
                        ul
                            width 7.34rem
                            list-style none
                            overflow hidden
                            li
                                width 30%
                                height 0.76rem
                                float left
                                margin-top 0.31rem
                                margin-right 0.26rem
                        button
                            width 100%
                            height 100%
                            border none 
                            padding 0.13rem
                            padding-left auto
                            padding-right auto
                            background #fff
                            outline none
                            border-radius 8px
                            border 1px solid #000
                            &.isActive
                                color #ff2741
                                border none 
                                border 1px solid #ff2741
                .g-quantity
                    margin 0.44rem
                    display flex
                    font-size 0.39rem
                    flex-direction row
                    justify-content space-between
                    .action
                        width 4.85rem
                        font-size 0.5rem
                        display flex
                        border 1px solid #f5f5f5
                        flex-direction row
                        justify-content space-between
                        .isActive
                            color #ff2741
                        .add
                            color #ff2741
            .cg_footer
                width 100%
                height 1.28rem
                left 0
                right 0
                bottom 0
                font-size 0.46rem
                position fixed
                button
                    width 100%
                    height 100%
                    color #fff
                    border none 
                    background #ff2741
    .g_header  
        width 100%
        height 1.37rem
        top 0
        left 0
        position fixed
        z-index 100
        background-color #fff
        .g_nav
            width 100%
            height 1.37rem
            display flex 
            font-size 0.46rem
            flex-direction row
            .left
                margin-left 0.63rem
                img
                    width 0.54rem
                    height 0.54rem
                    margin-top 0.41rem
            .text
                flex 1
                text-align center
                line-height 1.37rem
            .right
                margin-right 20px
                img
                    width 0.54rem
                    height 0.54rem  
                    margin-top 0.41rem             
    .g_content
        width 100%
        top 1.37rem
        bottom 1.37rem
        overflow hidden
        position absolute
        background #ffffff
        .g_pic
            width 100%
            .swiper-item img 
                width 100%
                height 8.0rem
            .swiper-item img[lazy=loading]
                width 100%
                height 8.0rem
            .swiper-pagination-fraction 
                width 20%
                left 80%
        .title
            .t_header
                margin 0.43rem
                margin-bottom 0
                padding-bottom 0.43rem
                border-bottom 1px solid #e6e6e6
                h3
                    color #333333
                    font-size 0.46rem
                    margin-bottom 0.43rem
                span
                    color #cfcfcf
                    font-size 0.37rem
                    a
                        color #5b92e1
                        margin-left 0.28rem
            .t_price
                margin-top 0.35rem
                margin-left 0.43rem
                padding-bottom 0.43rem
                border-bottom 1px solid #e6e6e6
                .big
                    color #ff2741
                    font-size 0.43rem
                    margin-right 0.4rem
                .small
                    color #999999
                    font-size 0.37rem
        .promise
            padding-left 0.41rem
            padding-right 0.41rem
            margin-bottom 0.23rem
        .desc
            padding-left 0.41rem
            padding-right 0.41rem
            color #333333
            font-size 0.39rem
            line-height 0.66rem
    .g_footer
        width 100%
        height 1.37rem
        left 0
        right 0
        bottom 0
        position fixed
        background #fff
        .gf_container
            display flex
            font-size 0.33rem
            flex-direction row
            .icon
                flex 3
                color #9b9b9b
                display flex
                font-size 0.33rem
                flex-direction row
                .icon_item
                    flex 1
                    text-align center
                    padding-top 0.22rem
                    padding-bottom 0.11rem
                    // border 1px solid #000
                .icon_item-cart
                    flex 1
                    text-align center
                    padding-top 0.22rem
                    padding-bottom 0.11rem
                    position relative
                    .buyNum
                        top 0.1rem
                        right 0.1rem
                        width 0.41rem
                        height 0.41rem
                        color white
                        border-radius 50%
                        position absolute
                        background-color #ff2741
                img 
                    width 0.59rem
                    height 0.59rem
            .shop
                flex 2
                font-size 14px
                button
                    width 100%
                    height 100%
                    border none
                    color #fff
                    font-size 0.43rem
                    background #ff7e8d
            .apply
                flex 2
                font-size 14px
                button
                    width 100%
                    height 100%
                    border none
                    color #fff
                    font-size 0.43rem
                    background #ff2741
    
</style>
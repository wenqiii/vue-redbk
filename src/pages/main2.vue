<template>
    <div class="main2_nav">
        <div class="m2_header">
            <swiper :options="swiperOption" class="swiper-box">
                <swiper-slide class="swiper-item" v-for="(item,index) in navs" >
                    <div class="opt-item" @click="selectPage(index)" :class="chooseItem==index?'isActive':''">
                        {{item}}
                    </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="m2_content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
import { Indicator } from 'mint-ui'
export default {
    data () {
        return {
            navs: ['推荐','视频','时尚','美妆','美食','运动','影音','旅行','居家','母婴'],
            chooseItem: '',
            swiperOption: {
                pagination: '.swiper-pagination',
                slidesPerView: 5,
                paginationHide: true,
                spaceBetween: 17,
                freeMode : true
            }
        }
    },
    methods: {
         selectPage (index) {
             Indicator.open()
             this.chooseItem = index
             index = index + 1
             this.$router.push('/main2/page' + index)
             setTimeout(() => Indicator.close(), 1000)
         }
    },
    components: {
        swiper,
        swiperSlide
    },
    created() {
        this.$router.push('/main2/page1')
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.main2_nav
    width 100%
    .m2_header
        width 100%
        height 0.98rem
        padding-top 0.24rem
        background #f5f8fa
        a
            color grey
            text-decoration none
        a:visited
            color grey
        .swiper-box
            padding-left 0.24rem
            padding-right 0.24rem
            .swiper-wrapper
                .swiper-slide
                    .opt-item
                        height 0.69rem
                        line-height 0.69rem
                        text-align center
                        border-radius 25px
                        font-size 0.46rem
                        color #999999
                        background #fff
                        // border 1px solid grey
                    .isActive
                        color #333333
                        // border 1px solid black
            .swiper-pagination
                display none
        
</style>


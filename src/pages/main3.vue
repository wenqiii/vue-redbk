<template>
  <div class="bought_page">
    <div class="bought" ref="boWrapper">
      <div>
      <div class="b_header">
        <swiper :options="swiperOption" class="swiper-box">
          <swiper-slide class="swiper-item">
            <img src="../assets/b1.jpg" alt="">
          </swiper-slide>
          <swiper-slide class="swiper-item">
            <img src="../assets/b2.jpg" alt="">
          </swiper-slide>
          <swiper-slide class="swiper-item">
            <img src="../assets/b3.jpg" alt="">
          </swiper-slide>
          <swiper-slide class="swiper-item">
            <img src="../assets/b4.jpg" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="b_option">
        <img src="../assets/c1.png" alt="">
      </div>
      <div class="b_activity">
        <div class="act_header">
          <span class="a-left">
            <h3>限时购</h3>
          </span>
          <span class="a-right">
            全网低价 一贵就赔
            <div class="a-icon">
              <div class="r-arrow"></div>
            </div>
          </span>
        </div>
        <div class="act_con">
          <div class="act-item">
            <img src="../assets/1.png" alt="">
            <div class="price">
              <div class="new-price">81元</div>
              <div class="old-price">104元</div>
            </div>
          </div>
          <div class="act-item">
            <img src="../assets/2.png" alt="">
            <div class="price">
              <div class="new-price">118元</div>
              <div class="old-price">175元</div>
            </div>
          </div>
          <div class="act-item">
            <img src="../assets/3.png" alt="">
            <div class="price">
              <div class="new-price">99元</div>
              <div class="old-price">128元</div>
            </div>
          </div>
        </div>
      </div>
      <div class="b_actmore">
        <div class="a-hot">
          <span class="a-desc">
            <h3>热卖榜</h3>
            每天更新 热卖排行
          </span>
          <span class="a-img">
            <img src="../assets/4.png" alt="">
          </span>
        </div>
        <div class="a-ticket">
          <span class="a-desc">
            <h3>领券中心</h3>
            为您搜索全站福利
          </span>
          <span class="a-img">
            <img src="../assets/5.png" alt="">
          </span>
        </div>
      </div>
      <goodslist></goodslist>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
import goodslist from '../components/goodsList'
export default {
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    goodslist
  },
  methods: {
    _initScroll () {
      this.boughtScroll = new BScroll(this.$refs.boWrapper, {
        click: true,
        probeType: 3
      })
    }
  },
  created () {
    this.$nextTick( () => {
      this._initScroll()
    }) 
  }
}
</script>
<style>
.bought {
  width: 100%;
  top: 2.8rem;
  bottom: 0;
  position: absolute;
  overflow: hidden;
  font-size: 12px;
  background: #f5f8fa;
}

.b_header {
  width: 100%;
}

.swiper-item img {
  width: 100%;
  height: 4.80rem;
}

.swiper-pagination-fraction {
  width: 15%;
  left: 85%;
}

.b_option {
  cursor: pointer;
}

.b_option img {
  width: 100%;
  height: 4.69rem;
}

.b_activity {
  width: 94%;
  margin-top: 0.30rem;
  margin-left: auto;
  margin-right: auto;
  /* border: 1px solid #000; */
  border-radius: 8px;
  background: #fff;
}

.act_header {
  width: 100%;
  height: 0.67rem;
  line-height: 0.67rem;
  display: flex;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: pink;
  flex-direction: row;
  justify-content: space-between;
}

.a-left {
  color: #40423f;
  font-size: 0.43rem;
  margin-left: 0.41rem;
}

.a-right {
  display: flex;
  color: #9f9898;
  font-size: 0.35rem;
  margin-right: 0.41rem;
  flex-direction: row;
  justify-content: space-between;
}

.a-icon {
  width: 0.33rem;
  height: 0.33rem;
  margin-top: 0.17rem;
  margin-left: 0.11rem;
  border-radius: 50%;
  background-color: #fff;
}

.r-arrow {
  width: 0.12rem;
  height: 0.12rem;
  margin-top: 0.08rem;
  margin-left: 0.06rem;
  border-top: 2px solid #000;
  border-right: 2px solid #000;
  transform: rotate(45deg);
}

.act_con {
  width: 96%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-around;
}

.act-item {
  margin-top: 0.09rem;
  margin-bottom: 0.33rem;
  display: flex;
  flex-direction: row;
}

.act-item img {
  height: 1.61rem;
}

.price {
  height: 30px;
  margin-top: 0.6rem;
  margin-left: 0.31rem;
}

.new-price {
  color: #fc5661;
  font-size: 0.37rem;
}

.old-price {
  color: #959595;
  font-size: 0.28rem;
}

.b_actmore {
  width: 94%;
  height: 1.97rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.11rem;
  text-align: left;
  font-size: 0.37rem;
  display: flex;
  flex-direction: row;
  background: #fff;
  justify-content: space-between;
}

.a-hot {
  flex: 1;
  display: flex;
  color: #9b9b9b;
  font-size: 0.33rem;
  flex-direction: row;
  padding-left: 0.39rem;
  margin-right: 0.09rem;
  border-radius: 8px;
}

.b_actmore h3 {
  padding-top: 0.47rem;
  color: #666666;
  font-size: 0.46rem;
  font-weight:bold;
}

.a-ticket {
  flex: 1;
  display: flex;
  color: #9b9b9b;
  font-size: 0.33rem;
  flex-direction: row;
  padding-left: 0.39rem;
  border-radius: 8px;
}

.a-hot .a-img img {
  width: 1.57rem;
  height: 1.57rem;
  margin-top: 0.15rem;
  margin-right: 0.19rem;
}

.a-ticket .a-img img {
  width: 1.57rem;
  height: 0.85rem;
  margin-top: 0.44rem;
  margin-right: 0.24rem;
}


</style>
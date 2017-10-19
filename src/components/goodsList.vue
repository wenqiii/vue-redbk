<template>
  <div class="g-list">
    <div class="gl-left">
      <ul>
          <li v-for="(item,index) in leftGoodsList" @click="choosedGoods(item)" :key="index">
            <div class="goods_item">
              <a class="img">
                <img v-lazy="item.img" alt="">
              </a>
              <div class="desc">
                <h3>{{item.title}}</h3>
                <p>{{item.desc}}</p>
              </div>
              <div class="detail">
                <span class="d_price">
                  <span class="big">￥{{item.newPrice}}</span>
                  <span class="small">￥{{item.oldPrice}}</span>
                </span>
                <span class="brand">
                  <img src="../assets/br1.png" alt="">
                </span>
              </div>
            </div>
          </li>
        </ul>
    </div>
    <div class="gl-right">
      <ul>
          <li v-for="(item,index) in rightGoodsList" @click="choosedGoods(item)" :key="index">
            <div class="goods_item">
              <a class="img">
                <img v-lazy="item.img" alt="">
              </a>
              <div class="desc">
                <h3>{{item.title}}</h3>
                <p>{{item.desc}}</p>
              </div>
              <div class="detail">
                <span class="d_price">
                  <span class="big">￥{{item.newPrice}}</span>
                  <span class="small">￥{{item.oldPrice}}</span>
                </span>
                <span class="brand">
                  <img src="../assets/br1.png" alt="">
                </span>
              </div>
            </div>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
const response = require('../common/disgoods.json')
export default {
    computed: {
    ...mapGetters([
      'leftGoodsList',
      'rightGoodsList',
    ])
  },
  methods: {
    choosedGoods(item) {
      this.$store.dispatch('getGoods', item)
      this.$router.push('/goods')
    }
  },
  created() {
    // axios.get('/goodsList')
    //   .then(res => {
    //     // console.log(res)
    //     this.$store.dispatch('getGoodsList', res.data)
    //   })
    // response.goodsList 请求
    this.$store.dispatch('getGoodsList', response.goodsList)
  }
}
</script>
<style scoped>
.g-list {
  width: 100%;
  display: flex;
  background: #f5f8fa;
  flex-direction: row;
}
.gl-left {
  flex: 1;
  margin-left: 0.22rem;
}
.gl-right {
  flex: 1;
  margin-right: 0.22rem;
}
.g-list ul li {
  width: 96%;
  font-size: 0.39rem;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
}
.goods_item {
  margin-top: 0.5rem;
  background: #fff;
}
.goods_item .img {
  width: 100%;
  overflow: hidden;
}
.goods_item .img img {
  width: 100%;
}
.goods_item .img img[lazy-loading] {
  width: 50%;
}
.goods_item .desc {
  width: 100%;
  height: 1.44rem;
}
.goods_item .desc h3 {
  margin: 0.26rem;
  margin-bottom: 0;
  overflow: hidden;
  font-weight: bold;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.goods_item .desc p {
  margin: 0.26rem;
  margin-bottom: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.detail {
  width: 96%;
  height: 0.74rem;
  line-height: 0.74rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0.33rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.d_price .big {
  color: #ff2741;
  font-size: 0.35rem;
}

.d_price .small {
  color: #d2d2d2;
  font-size: 0.30rem;
}

.detail .brand img {
  width: 1.26rem;
  height: 0.74rem;
}
</style>


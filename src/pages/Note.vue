<template>
  <transition name="move">
    <div class="note_page" ref="noteWrapper">
      <div class="noteContainer">
        <div class="note_con">
          <div class="note_pic">
            <swiper :options="swiperOption" class="swiper-box">
              <swiper-slide class="swiper-item" v-for="(img,index) in note.imgs" :key="index">
                <img v-lazy="img" alt="">
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
          <div class="note_icon">
            <div class="n_left" @click="hideNote">
              <img src="../assets/left-arrow.png" alt="">
            </div>
            <div class="n_right">
              <img src="../assets/option.png" alt="">
            </div>
          </div>
        </div>
        <div class="note_header">
          <div class="n_user">
            <img :src="note.avator" alt="">
            <div>{{note.uname}}</div>
          </div>
          <div class="btn">
            <button>＋ 关注</button>
          </div>
        </div>
        <div class="n_desc">
          {{note.desc}}
        </div>
        <div class="note_footer">
          <div class="adr">
            发布于{{note.adress}}
          </div>
          <div class="det">
            <span class="d_time">{{note.time}}</span>
            <span class="d_cl">{{note.collect}}次收藏 {{note.like}}次赞</span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
import BScroll from 'better-scroll'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
      }
    }
  },
  computed: {
    ...mapGetters([
      'note'
    ])
  },
  methods: {
    hideNote () {
      this.$router.push('/')
    },
    _initScroll () {
      this.noteScroll = new BScroll(this.$refs.noteWrapper, {
        click: true,
        probeType: true
      })
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
    this.$nextTick( () => {
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
<style scoped>
.note_page {
  width: 100%;
  top: 0;
  bottom: 0;
  background: #fff;
  overflow: hidden;
  position: absolute;
}

.move-enter-active,
.move-leave-active {
  transition: all 0.2s linear;
}

.move-enter,
.move-leave-active {
  transform: translate3d(100%, 0, 0);
}

.note_con {
  width: 100%;
  position: relative;
}

.note_pic {
  width: 100%;
}

.swiper-item img {
  width: 100%;
  height: 12rem;
}

.swiper-item img[lazy=loading] {
  width: 100%;
  height: 12rem;
}

.swiper-pagination-fraction {
  width: 20%;
  left: 80%;
}

.note_icon {
  top: 0.37rem;
  left: 0;
  right: 0;
  width: 10rem;
  height: 0.74rem;
  /* padding: 0.48rem; */
  position: absolute;
  z-index: 50;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.n_left img,
.n_right img {
  width: 0.61rem;
  height: 0.61rem;
  margin: 0.48rem;
}

.note_header {
  width: 100%;
  height: 1.44rem;
  line-height: 1.44rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
}

.n_user {
  display: flex;
  font-size: 0.44rem;
  color: #333333;
  flex-direction: row;
  margin-left: 0.46rem;
}

.n_user img {
  width: 0.91rem;
  height: 0.91rem;
  border-radius: 50%;
  margin-top: 0.26rem;
  margin-right: 10px;
}

.btn {
  margin-right: 0.46rem;
}

.btn button {
  width: 2.0rem;
  height: 0.78rem;
  color: #ff2741;
  border-radius: 6px;
  font-size: 0.37rem;
  border: 1px solid #ff2741;
  background-color: #fff;
}

.n_desc {
  font-size: 0.42rem;
  line-height: 0.56rem;
  padding: 0.37rem;
  color: #333333;
}

.note_footer {
  width: 100%;
  color: #a3a3a3;
  font-size: 0.39rem;
}

.adr {
  margin-left: 0.46rem;
}

.det {
  margin: 0.46rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
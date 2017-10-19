<template>
  <div id="app">
    <search v-show="searchShow"
            @searchhide="searchHide">
    </search>
    <div class="app" :class="{'showShadow':showshadow}" v-show="appshow&&!searchShow">
      <div class="nav">
        <div class="nav_left">
          <img src="./assets/wm.png" @click.prevent="showPanel" >
        </div>
        <panel v-show="showpanel"></panel>
        <!-- <masking @click.prevent="hidePanel" v-show="showpanel"></masking> -->
        <div class="nav_center">
          <ul class="nav_tab">
            <li class="tab-item">
              <router-link to="main1">关注</router-link>
            </li>
            <li class="tab-item">
              <router-link to="main2">发现</router-link>
            </li>
            <li class="tab-item">
              <router-link to="main3">购买</router-link>
            </li>
          </ul>
        </div>
        <div class="nav_right">
          <img src="./assets/camera.png" alt="">
        </div>
      </div>
      <div class="search">
          <div class="search-input">
            <img src="./assets/search.png" />
            <input type="text" placeholder="搜索笔记、商品和用户" @focus="focus()">
          </div>
      </div>
      <v-touch 
        v-on:swipeleft="onSwipeLeft" 
        v-on:swiperight="onSwipeRight" 
        :priority="1">
        <router-view></router-view>
      </v-touch>
    </div>
  </div>
</template>
<script>
import Panel from './components/Panel.vue'
import Search from './components/Search.vue'
import Masking from './components/Masking.vue'
export default {
  data() {
    return {
      // showshadow: false,
      showpanel: false,
      searchShow: false,
      appshow: true
    }
  },
  methods: {
    showPanel () {
      this.showpanel = true
    },
    hidePanel () {
      this.showpanel = false
    },
    focus () {    //搜索框聚焦则显示搜索页面，隐藏主页面
      this.searchShow = true
      this.appshow = false
    },
    searchHide () {   //隐藏搜索页面，显示主页面
      this.appshow = true
      this.searchShow = false
    },
    onSwipeLeft () {
      let index = 1
      let next = ''
      if (this.$route.name != null ) {
        index = +this.$route.name[4]    //强制类型转换
        index < 3 ? next = '/main' + (index + 1):(next = '/main3')
        this.$router.push(next)     //路由定向到next页面
      }
    },
    onSwipeRight () {
      let index = 1
      let back = ''
      if (this.$route.name != null ) {
        index = +this.$route.name[4]
        index > 1 ? back = '/main' + (index - 1):(back = '/main1')
        this.$router.push(back)
      } else {
        this.$router.push('/main1')
      }
    }
  },
  components: {
    Panel,
    Search,
    Masking
  },
  created () {
    this.$router.push('/main2')
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
*
  margin 0
  padding 0
  .showShadow
    position fixed
    top 0
    left 0
    right 0
    z-index 50
    background-color pink
  .app
    width 100%
    font-size 16px
    font-family sans-serif
    a
      text-decoration none
    .nav
      display flex
      flex-direction row
      .nav_left
        flex 1
        padding-top 20px
        text-align center
        img 
          width 25px
          height 25px
      .nav_center
        flex 3
        height 45px
        line-height 45px
        padding-top 8px
        ul li
          list-style none
        .nav_tab
          width 100%
          display flex
          flex-direction row
          .tab-item a
            text-decoration none
          .tab-item
            width 27%
            text-align center
            margin-left auto
            margin-right auto
      .nav_right
        flex 1
        padding-top 20px
        text-align center
        img 
          width 25px
          height 25px
    .search
      width 100%
      height 50px
      line-height 50px
      margin-top 10px
      text-align center
      .search-input
        width 90%
        height 30px
        margin-left auto
        margin-right auto
        display flex
        flex-direction row
        border-radius 30px
        background #d9d9d9
        img 
          width 20px
          height 20px
          margin 5px
          margin-left 10px
        input 
          width 90%
          height 30px
          border none
          font-size 14px
          border-radius 30px
          background #d9d9d9
</style>


.goods_page
	width 100%
	.g_header
		.g_nav
			width 100%
			display flex
			flex-direction row
			.left
				margin-left 20px
			.text
				flex 1
			.right
				margin-right 20px
		.g_pic
			width 100%
			.swiper-item img
				width 100%
				height 400px
			// .swiper-pagination-fraction
			// 	width 20%
			// 	left 80%
	.g_content
		width 100%
	.g_footer
		width 100%
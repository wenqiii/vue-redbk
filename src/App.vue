<template>
  <div id="app">
    <navbar v-show="isNav"></navbar>
    <v-touch 
        v-on:swipeleft="onSwipeLeft" 
        v-on:swiperight="onSwipeRight" 
        :priority="1">
        <router-view></router-view>
      </v-touch>
  </div>
</template>
<script>
import navbar from './components/navBar.vue'
export default {
  computed: {
    isNav () {
      return this.$store.state.isNav
    }
  },
  methods: {
    onSwipeLeft () {
      let index = 1
      let next = ''
      if (this.$route.name != null ) {
        index = +this.$route.path[5]    //强制类型转换
        index < 3 ? next = '/main' + (index + 1):(next = '/main3')
        this.$router.push(next)     //路由定向到next页面
      }
    },
    onSwipeRight () {
      let index = 1
      let back = ''
      if (this.$route.name != null ) {
        index = +this.$route.path[5]
        index > 1 ? back = '/main' + (index - 1):(back = '/main1')
        this.$router.push(back)
      } else {
        this.$router.push('/main1')
      }
    }
  },
  components: {
    navbar
  },
  watch: {
    '$route' () {
      if (!this.$store.state.isNav) {
        this.$store.dispatch('isNav')
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
*
  margin 0
  padding 0
</style>

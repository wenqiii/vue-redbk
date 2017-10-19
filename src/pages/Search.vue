<template>
  <div id="search">
      <div class="search">
            <div class="search-input">
                <img src="../assets/search.png" />
                <form @submit.prevent="search(key)">
                    <input type="text" v-model="key">
                </form>
            </div>
            <div class="search-cancel" @touchend="searchCancel()" @click="searchCancel()">
                取消
            </div>
        </div>
        <div class="hotkey">
            <div v-show="searchHistory">
                <div class="his">历史记录</div>
                <div class="search-history">
                    <div class="search-history-item" v-for="item in searchHistory" @click="search(item)">{{item}}</div>
                </div>
            </div>
            <div class="hot">热门搜索</div>
            <div class="hot-content">
                <ul>
                    <li v-for="item in hotList">
                        {{item}}
                    </li>
                </ul>
            </div>
        </div>
  </div>
</template>
<script>
export default {
    data () {
        return {
            key: '',
            hotList: ["指甲","阿玛尼501","小棕瓶","阿玛尼200","秋冬美甲","睡袋","瘦腿袜","雅诗兰黛130","阿玛尼503","sw","大闸蟹","厚木","月子餐","过漆靴","sensai"],
            searchHistory: []
        }
    },
  methods: {
      searchCancel () {
          this.$router.push('/')
      },
      search (key) {
          this.key = key
          var index = this.searchHistory.indexOf(key)
                if (index !== -1) {
                    this.searchHistory.splice(index,1)
                }
                this.searchHistory.unshift(key)
                this.searchHistory = this.searchHistory.slice(0,10)
                localStorage.searchHistory = JSON.stringify(this.searchHistory)
                console.log(this.searchHistory)
      }
  },
  created: function () {
      if (this.$store.state.isNav) {
        	this.$store.dispatch('isNav')
      	}
      if (localStorage.searchHistory) {
            this.searchHistory = JSON.parse(localStorage.searchHistory)
        }
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
.search {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    background: #fff;
  }
  .search-input {
    width: 100%;
    background: #f5f8fa;
    border-radius: 5px;
    margin: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .search-input img {
    height: 30px;
    width: 30px;
    display: inline-block;
    margin: 0 5px;
  }
  .search-input form,
  .search-input input {
    width: 100%;
    height: 100%;
    border: none;
    background: #f5f8fa;
    font-size: medium;
    flex-grow: 1;
    border-radius: 5px;
    outline: none;
  }
  .search-cancel {
    height: 40px;
    width: 55px;
    margin: 10px auto;
    line-height: 40px;
    overflow: hidden;
    transition: width 0.3s;
    cursor:pointer;
  }
   .hotkey {
    font-size: 0.33rem;
    display: flex;
    flex-direction: column;
  }
  .search-history {
    margin: 0.46rem;
  }
  .search-history-item {
      float: left;
      color: #a0a1a2;
      font-size: 0.46rem;
      margin-right: 0.30rem;
      margin-bottom: 0.30rem;
      padding: 0.37rem;
      padding-left: 0.43rem;
      padding-right: 0.43rem;
      background-color: #f5f8fa;
  }
  .his {
      width: 10rem;
      height: 1.06rem;
      color: #a2a2a2;
      padding-top: 0.33rem;
      padding-left: 0.46rem;
      background-color: #f5f8fa;
  }
  .hot {
      width: 10rem;
      height: 1.06rem;
      color: #999999;
      padding-top: 0.33rem;
      padding-left: 0.46rem;
      margin-bottom: 0.46rem;
      background-color: #f5f8fa;
  }
  .hot-content ul {
      width: 100%;
      list-style: none;
      margin-left: 0.46rem;
  }
  .hot-content ul li {
      float: left;
      color: #a0a1a2;
      font-size: 0.46rem;
      margin-right: 0.30rem;
      margin-bottom: 0.30rem;
      padding: 0.37rem;
      padding-left: 0.43rem;
      padding-right: 0.43rem;
      background-color: #f5f8fa;
  }
</style>
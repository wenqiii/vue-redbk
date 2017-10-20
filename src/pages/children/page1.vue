<template>
    <div class="discovery_page">
        <div class="discovery" ref="disWrapper">
            <div class="dis-list">
                <div class="left-list">
                    <ul>
                        <li v-for="(item,index) in leftDisList" @click="selectedNote(item)" :key="index">
                            <div class="note_item">
                                <a class="img">
                                    <img v-lazy="item.img" alt="">
                                </a>
                                <div class="desc">
                                    <p>{{item.desc}}</p>
                                </div>
                                <div class="note">
                                    <a class="user">
                                        <img v-lazy="item.avator" alt="">
                                        <span>{{item.uname}}</span>
                                    </a>
                                    <a class="like">
                                        <img src="../../assets/like.png" alt="like">
                                        <span>{{item.like}}</span>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="right-list">
                    <ul>
                        <li v-for="(item,index) in rightDisList" @click="selectedNote(item)" :key="index">
                            <div class="note_item">
                                <a class="img">
                                    <img v-lazy="item.img" alt="">
                                </a>
                                <div class="desc">
                                    <p>{{item.desc}}</p>
                                </div>
                                <div class="note">
                                    <a class="user">
                                        <img v-lazy="item.avator" alt="">
                                        <span>{{item.uname}}</span>
                                    </a>
                                    <a class="like">
                                        <img src="../../assets/like.png" alt="like">
                                        <span>{{item.like}}</span>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import BScroll from 'better-scroll'
const response = require('../../common/disgoods.json')
export default {
    data () {
        return {
            selecteddis: {}
        }
    },
     computed: {
        ...mapGetters([
            'leftDisList',
            'rightDisList'
        ])
    },
    methods: {
        selectedNote (item) {
            this.$store.dispatch('getNote',item)
            this.$router.push('/note')
        },
        _initScroll () {
            this.pageScroll = new BScroll(this.$refs.disWrapper, {
                click: true
            })
            // console.log(this.pageScroll)
        }
    },
    created () {
        // axios.get('/discoveryList')
        //         .then(res => {
        //             this.$store.dispatch('getDiscoverys',res.data)
        //             this.$nextTick( () => {
        //                 this._initScroll()
        //             })
        //         })
        this.$store.dispatch('getDiscoverys',response.discoveryList)
        setTimeout(() => {
            this._initScroll()
        },2000)
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.discovery
    width 100%
    height 100%
    top 4.0rem
    bottom 0
    overflow hidden
    position absolute
    background #f5f8fa
    .dis-list
        width 100%
        // min-height 150%
        display flex
        flex-direction row
        background #f5f8fa
        .left-list
            margin-left 5px
            flex 1
        .right-list
            margin-right 5px
            flex 1
        ul > li
            width 96%
            margin-left auto
            margin-right auto
            margin-top 5px
            font-size 0.39rem
            list-style none
            .note_item
                .img
                    width 100%
                    overflow hidden
                    img
                        width 100%
                    img[lazy=loading]
                        width 100%
                .desc
                    width 100%
                    height 0.94rem
                    p
                        margin 0.26rem
                        overflow hidden;
                        text-overflow ellipsis
                        display -webkit-box
                        -webkit-line-clamp 2
                        -webkit-box-orient vertical
                .note
                    height 0.63rem
                    margin 0.22rem
                    line-height 0.63rem
                    display flex
                    color #333333
                    flex-direction row
                    justify-content space-between
                    .user
                        display flex
                        color #333333
                        font-size 0.33rem
                        flex-direction row
                        img
                            width 0.63rem
                            height 0.63rem
                            margin-right 0.13rem
                            border-radius 50%
                        img[lazy=loading]
                            width 0.63rem
                            height 0.63rem
                            margin-right 0.13rem
                            border-radius 50%
                    .like
                        line-height 0.63rem
                        display flex
                        color #999999
                        flex-direction row
                        img
                            margin-top 0.13rem
                            margin-right 0.11rem
                            width 0.37rem
                            height 0.37rem                  
</style>


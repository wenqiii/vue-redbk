<template>
    <div class="panel">
        <div class="header">
            <img src="../assets/wm.png" alt="watermelon">
            <div>用户名 {{user.name}}</div>
        </div>
        <div class="content">
            <div class="con_item">
                <div class="img">
                    <img src="../assets/icon1.png" alt="look">
                </div>
                <div class="text">
                    <span>我的关注</span>
                </div>
            </div>
            <div class="con_item">
                <div class="img">
                    <img src="../assets/icon2.png" alt="">
                </div>
                <div class="text">
                    <span>我的收藏</span>
                </div>
            </div>
            <div class="con_item">
                <div class="img">
                    <img src="../assets/icon3.png" alt="">
                </div>
                <div class="text">
                    <span>消息</span>
                </div>
            </div>
            <div class="con_item">
                <div class="img">
                    <img src="../assets/icon4.png" alt="">
                </div>
                <div class="text">
                    <span>购物车</span>
                </div>
            </div>
            <div class="con_item">
                <div class="img">
                    <img src="../assets/icon5.png" alt="">
                </div>
                <div class="text">
                    <span>订单</span>
                </div>
            </div>
            <div class="con_item">
                <div class="img">
                    <img src="../assets/icon6.png" alt="">
                </div>
                <div class="text">
                    <span>薯券</span>
                </div>
            </div>
            <div class="con_item">
                <div class="img">
                    <img src="../assets/icon7.png" alt="">
                </div>
                <div class="text">
                    <span>心愿单</span>
                </div>
            </div>
            <div class="con_item">
                <div class="img">
                    <img src="../assets/icon8.png" alt="">
                </div>
                <div class="text">
                    <span>黑卡会员</span>
                </div>
            </div>
            <div class="con_item">
                <div class="img">
                    <img src="../assets/icon9.png" alt="">
                </div>
                <div class="text">
                    <span>设置</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: []
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.panel
    width 100%
    height 100%
    background white
    .header
        width 100%
        height 10%
        font-size 20px
        margin-top 60px
        text-align center
        img 
            width 40px
            height 40px
    .content
        width 80%
        padding 30px
        .con_item
            height 25px
            line-height 25px
            font-size 16px
            margin-bottom 30px
            display flex
            flex-direction row
            .img 
                margin-right 15px
                img
                    width 25px
                    height 25px
            .text 
                height 25px
                line-height 25px
</style>


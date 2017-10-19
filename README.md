# vue-redbk

> 小红书，发现全世界的好东西!种草种的好，美得比人早!

## 在线预览

>[点我有惊喜哦]（https://wenqiii.github.io/vue-redbk/dist/index.html#/main3）
>（PC端建议在Chrome下开启调试模式，移动端直接在浏览器中打开就好）

## 项目描述
### 技术栈
Vue2.0全家桶 + axios +　Vuex + Mint-Ui + Mock.js + Stylus
### 主要依赖
* 使用vue-cli2.0搭建项目框架
* 使用vue-router2.7进行页面路由切换
* 使用json server进行http请求获取数据
* mock假数据存储在本地
* 使用stylus编写样式
* vuex进行状态管理
* better-scroll优化滚动效果
* vue-awesome-swiper轮播图
* flexible.js 10rem解决移动端设备兼容
### 主要实现的功能
#### 首页
>tabbar滑动切换和点击切换
>搜索框
>笔记列表的自适应布局
>良好的滚动手感
>侧边栏的进入退出
#### 商品页
>滑动查看商品图片
>商品详情展示
>加入购物车的上拉弹出框，选择商品颜色、尺寸、重量及数量
#### 购物车
>已加入购物车的商品展示
>增加、减少商品数量，删除商品
>结算功能
### 待实现功能
>搜索功能
>评论页面的展示
>笔记页面的完善
## 项目总结（所踩过的坑！！）

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

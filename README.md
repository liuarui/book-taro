# 项目：book-taro

## 更新记录

更新记录#  第一版   接口调试完成

更新记录#   第二版   新增信息提示，优化用户体验

更新记录#   第三版  新增跳转主页按钮，优化细节

## 项目背景简述

项目为学校实训项目，企业提供需求和设计稿，参照小程序原型：乐童记忆图书开发一个图书影像类app

# 项目运行方法

### ！！首次启动项目必看！！

请先全局安装@tarojs/cli对应版本包1.3.32

**安装命令`yarn add global @tarojs.cli@1.3.32`**

然后使用yarn装包工具

在项目根路径运行   `yarn ` 命令

安装项目环境依赖包

### 开发常用命令

```jsx
yarn build:weapp //打包构建为微信小程序，请在微信小程序开发工具导入项目，指定路径为该项目根路径dist文件夹
yarn build:h5 // 打包构建为H5

yarn dev:weapp//开发环境为微信小程序，请在微信小程序开发工具导入项目，指定路径为该项目根路径dist文件夹
yarn dev:h5// 开发环境为H5

```



## 项目描述

| 实训项目    | 主要功能                                                     | 说明                                                         | 开发资料                                                     |
| :---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 图书服务APP | 【用户端】     登录注册     推荐（搜索、banner轮播、推荐列表、详情、视频播放、收藏、分类及拨打电话相关功能）     分类（搜索、图书分类）     我的（个人资料、我的收藏、关于我们）     【后台】     登入登出、轮播图管理、用户管理、园长管理、书籍管理、视频管理、二维码管理、系统设置 | 微信搜索乐童记忆小程序；功能及要实现的需求见开发资料说明，该小程序可作为业务及需求参考；               实训项目基于该需求及业务以混合APP形式实现 | 【产品原型及说明】     https://axhub.im/pro/bd604aa27ec1a722                 【设计及切图】     https://lanhuapp.com/url/VNJRj-vo14e                                                 【 后台示例】     http://ltjy.hooook.com/admin    admin/admin |



### 技术栈简述

前端使用以**React**语法为基础的 Taro 打包框架开发，部分需求采用Taro-UI实现，如轮播图，图片采集器，信息提示等，开发重心偏向微信小程序端

### 项目目录结构描述

```
├── Readme.md                   // 帮助文档
├── app                         // 应用
├── config                      // Taro相关配置（开发不必在意）
│   ├── dev.js                   // 开发环境
│   ├── index.js                // 通用配置
│   ├── prod.js                 // 生产环境
├── dist                        //编译生成文件
├── node_modules
├── package.json
├── src                         //源文件（开发重点关注）
│   └── component               // 公有组件
│   └── images                    // 公有图片
│   └── pages                   // 页面（重点关注）
│       └── index                 // 推荐主页块
│           └── component         // 块私有组件
│           └── bookDetails       // 块其他页面
│           └── index.jsx
│           └── index.scss
│   └── utils                   // 项目公有方法
│       └── request.js          // 公有请求文件
│   └──app.jsx                     // 入口文件
│   └──app.scss                      // 入口文件
│   └──index.html                      // 入口文件
├── .eslintrc                      
├── .gitignore
└── .npmignore
```

## 前端项目描述

#### 命名规范

// tip：由于开发处于边学边摸索，较为匆忙部分未执行规范，后续可修改

classname命名采用小驼峰： xxxxBox， xxxxBody ，xxxxTop 

组件命名： 公有组件直接根据功能命名如SeacrchBox，私有组件`XXXX+功能`命名,如`IndexBookCommend`



#### component公有组件

将功能类似，样式类似的组件抽离出来，如搜索框，提示框等组件，由于项目较小，可不必使用公有组件，减少维护量

#### images

用于存放本地公有图片

#### Page

该app共13个独立页面，页面路由于src/app.jsx入口文件下可查看

```jsx
    pages: [
      // 推荐主页块
      'pages/index/index',
      'pages/index/bookDetails/bookDetails',
      'pages/index/videoDetails/videoDetails',
      // 分类块
      'pages/category/Category',
      'pages/category/searchPage/searchPage',
      // 登陆块
      'pages/login/login', // 身份选择页面
      'pages/login/userLogin', // 登陆功能实现页
      // 个人信息块
      'pages/personalCenter/PersonalCenter',
      'pages/personalCenter/aboutUs/aboutUs',
      'pages/personalCenter/FavoriteCardList/FavoriteCardList',
      'pages/personalCenter/principalApprove/principalApprove',
      'pages/personalCenter/principalApprove/principalApproveOK',
      'pages/personalCenter/personalInfor/personalInfor',
    ],
```

页面主要分为四大块，**index**推荐主页块、**personalCenter**个人信息块、**login**登陆页块和、**category**分类块

##### Page 分层

| 名称               | 描述                                             |
| ------------------ | ------------------------------------------------ |
| **index**          | 推荐主页块，实现图书详情，视频详情等功能         |
| **personalCenter** | 个人信息，实现我的收藏、园长认证、展现信息等功能 |
| **login**          | 登陆，登陆流程实现                               |
| **category**       | 分类，图书分类展示，搜索页实现等功能             |

#### utils

公有方法封装

由于后端接口要求，请求各类接口均需要登陆获取cookie，带cookie才可请求成功。

由于项目较小，这里只抽离了一个`reqHC`请求方法，微信小程序请求发生要带cookie的话，需要手动保存，发生时需要获取手动加入请求头



```jsx
reqHC( 
	url,// 必传，请求接口地址
    params = null, //请求所带参数,默认为NULL
    method = 'POST', // 请求方法，由于POST用的较多，默认为POST
    header = { 'content-type': 'application/json' } //  请求头定制
  ){
    let cookie = Taro.getStorageSync('Cookies')
    return Taro.request({
      method: `${method}`,
      data: params,
      url: `http://101.132.157.78/${url}`, // 服务器地址可在此更改
      mode: 'cors', // cors跨域
      header: { Cookie: cookie, ...header }, // 默认携带cookie
      credentials: 'include' // taro H5端可通过该属性携带cookie
    }).catch(() => {
      console.log('请求发生错误，请检查错误信息') // 默认catch方法
    })
  }
```


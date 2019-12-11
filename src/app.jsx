import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      // 推荐主页块
      'pages/index/index',
      'pages/index/bookDetails/bookDetails',
      'pages/index/videoDetails/videoDetails',
      // 分类块
      'pages/category/Category',
      'pages/category/searchPage/searchPage',
      // 登陆块
      'pages/login/login',
      // 个人信息块
      'pages/personalCenter/PersonalCenter',
      'pages/personalCenter/aboutUs/aboutUs',
      'pages/personalCenter/myFavorite/myFavorite',
      'pages/personalCenter/principalApprove/principalApprove',
      'pages/personalCenter/personalInfor/personalInfor',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
